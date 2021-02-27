<template>
  <div v-for="(item, index) in data" :key="index" class="checkbox-container">
    <input
      type="checkbox"
      :class="['y-checkbox', color, size, item.disabled ? 'disabled' : '']"
      :disabled="item.disabled"
      :value="item.value"
      v-model="item.checked"
      @change="handleChanged"
    />
    <span :class="['y-checkbox-label-' + size]" style="margin-right:5px">{{ item.label }}</span>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { UPDATE_MODEL_EVENT } from '../utils/constant.js'
export default {
  name: 'YCheckboxGroup',
  emits: [UPDATE_MODEL_EVENT],
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'small'
    },
    checkData: {
      type: Array
    },
    modelValue: {
      type: Array
    }
  },
  setup (props, { emit }) {
    const _ = require('lodash')
    const data = ref()
    data.value = _.cloneDeep(props.checkData)
    watch(() => props.modelValue, (val) => {
      data.value = data.value.map(
        (item) => {
          return {
            disabled: item.disabled,
            label: item.label,
            value: item.value,
            checked: val.indexOf(item.value) > -1
          }
        }
      )
    },
    {
      deep: true,
      immediate: true
    })
    const handleChanged = (evt) => {
      var temp = props.modelValue
      if (props.modelValue.indexOf(evt.target.value) > -1) {
        for (const [i, v] of temp.entries()) {
          if (v === evt.target.value) {
            temp.splice(i, 1)
            break
          }
        }
        emit(UPDATE_MODEL_EVENT, temp)
      } else {
        temp = props.modelValue
        temp.push(evt.target.value)
        emit(UPDATE_MODEL_EVENT, temp)
      }
    }
    return {
      data,
      handleChanged
    }
  }
}
</script>
