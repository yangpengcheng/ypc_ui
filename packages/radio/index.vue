<template>
  <div class="radio-container">
    <input
      type="radio"
      :value="value"
      :disabled="disabled"
      :class="['y-radio', size, color, disabled ? 'disabled' : '']"
      @change="handleChange"
      :checked="checked"
    />
    <span :class="['y-radio-label-' + size]">{{ label }}</span>
  </div>
</template>

<script>
import { computed } from 'vue'
import { colorValidator, sizeValidator } from '../utils/validate.js'
import { UPDATE_MODEL_EVENT } from '../utils/constant.js'
export default {
  name: 'YRadio',
  emits: [UPDATE_MODEL_EVENT],
  props: {
    modelValue: {
      type: [Boolean, Number, String]
    },
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
    value: {
      type: [String, Boolean, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'no-label'
    }
  },
  setup (props, { emit }) {
    const handleChange = (event) => {
      emit(UPDATE_MODEL_EVENT, event.target.value)
    }
    const checked = computed(() => props.modelValue === props.value)
    return {
      checked,
      handleChange
    }
  }
}
</script>
