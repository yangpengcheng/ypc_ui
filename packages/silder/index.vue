<template>
  <input
    :class="['y-slider', color, disabled ? 'is-disabled' : '']"
    type="range"
    :min="min"
    :step="step"
    :max="max"
    :value="modelValue"
    :disabled="disabled"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
import { colorValidator } from '../utils/validate.js'
import { UPDATE_MODEL_EVENT } from '../utils/constant.js'
export default {
  name: 'YSlider',
  emits: [UPDATE_MODEL_EVENT],
  props: {
    color: {
      type: String,
      default: 'primary',
      validator: colorValidator
    },
    min: {
      type: [Number, String],
      default: 0
    },
    step: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      default: 100
    },
    modelValue: {
      type: [Number, String],
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    const _ = require('lodash')
    const handleInput = _.debounce((evt) => emit(UPDATE_MODEL_EVENT, event.target.value), 200)
    return {
      handleInput
    }
  }
}
</script>
