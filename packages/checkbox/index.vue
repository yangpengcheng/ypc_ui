<template>
  <div class="checkbox-container">
    <input
      type="checkbox"
      :class="['y-checkbox', color, size, disabled ? 'disabled' : '']"
      :disabled="disabled"
      :value="value"
      v-model="checkVal"
      @change="handleChanged"
      :indeterminate="indeterminate"
    />
    <span :class="['y-checkbox-label-' + size]">{{ label }}</span>
  </div>
</template>

<script>
import { computed } from 'vue'
import { colorValidator, sizeValidator } from '../utils/validate.js'
import { UPDATE_MODEL_EVENT } from '../utils/constant.js'
export default {
  name: 'YCheckbox',
  emits: [UPDATE_MODEL_EVENT],
  props: {
    color: {
      type: String,
      default: 'primary',
      validator: colorValidator
    },
    size: {
      type: String,
      default: 'small',
      validator: sizeValidator
    },
    label: {
      type: String,
      default: 'no-label'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Array, Object]
    },
    modelValue: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  setup (props, { emit }) {
    const indeterminate = computed(() => Array.isArray(props.value) && props.modelValue.length > 0 && props.modelValue.length < props.value.length)
    const checkVal = computed({
      get: () => {
        if (Array.isArray(props.value)) {
          return props.modelValue.length === props.value.length
        } else {
          return props.modelValue.indexOf(props.value) !== -1
        }
      },
      set: (val) => val
    })

    const handleChanged = () => {
      if (Array.isArray(props.value)) {
        if (props.modelValue.length < props.value.length) {
          // 未全部选中=>全部选中
          emit(UPDATE_MODEL_EVENT, props.value)
        } else {
          // 全部选中=>全部未选中
          emit(UPDATE_MODEL_EVENT, [])
        }
      } else {
        if (props.modelValue.includes(props.value)) {
          var temp = props.modelValue
          for (const [i, v] of temp.entries()) {
            if (v === props.value) {
              temp.splice(i, 1)
              break
            }
          }
          emit(UPDATE_MODEL_EVENT, temp)
        } else {
          temp = props.modelValue
          temp.push(props.value)
          emit(UPDATE_MODEL_EVENT, temp)
        }
      }
    }
    return {
      checkVal,
      indeterminate,
      handleChanged
    }
  }
}
</script>
