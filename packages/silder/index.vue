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
<style lang="scss">
@import "../styles/variables.scss";
.y-slider {
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  outline: none;
}
.y-slider:hover {
  opacity: 1;
}
.y-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
}
.y-slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
}
@each $color, $value in $outline_colors {
  .y-slider.#{$color}
  {
    background:$value
  }
}
@each $color, $value in $default_colors {
  .y-slider.#{$color}::-webkit-slider-thumb
  {
    background:$value
  }
  .y-slider.#{$color}::-moz-range-thumb{
    background:$value;
    border-color: $value;
  }
}
.y-slider.is-disabled::-moz-range-thumb,
.y-slider.is-disabled::-webkit-slider-thumb,
.y-slider.is-disabled
{
  cursor: not-allowed;
}
@each $color, $value in $disabled_colors {
  .y-slider.#{$color}.is-disabled::-webkit-slider-thumb
  {
    background:$value
  }
  .y-slider.#{$color}.is-disabled::-moz-range-thumb{
    background:$value;
    border-color: $value;
  }
}
</style>
