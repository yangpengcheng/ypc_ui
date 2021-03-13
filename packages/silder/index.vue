<template>
  <input
    :class="['y-slider', disabled ? 'is-disabled':'', color]"
    type="range"
    :min="min"
    :step="step"
    :max="max"
    :value="modelValue"
    :disabled="disabled"
    @input="handleInput"
  />
</template>

<script>
import { UPDATE_MODEL_EVENT } from '../utils/constant.js'
export default {
  name: 'YSlider',
  emits: [UPDATE_MODEL_EVENT],
  props: {
    color: {
      type: String,
      default: 'primary'
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
    const handleInput = _.debounce((evt) => emit(UPDATE_MODEL_EVENT, evt.target.value), 100)
    return {
      handleInput
    }
  }
}
</script>
<style lang="scss">
@import "../styles/variables.scss";
// base
.y-slider {
  -moz-appearance:none;
  -webkit-appearance:none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  outline: none;
}
.y-slider:hover {
  opacity: 1;
}
.y-slider::-webkit-slider-thumb {
  -moz-appearance:none;
  -webkit-appearance: none;
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
@each $color, $value in $default_colors {
  .y-slider.#{$color}::-webkit-slider-thumb
  {
    background:$value;
    border:none;
  }
  .y-slider.#{$color}::-moz-range-thumb{
    background:$value;
    border-color: $value;
  }
  .y-slider.#{$color}
  {
    background:$value
  }
}
@each $color, $value in $disabled_colors {
  .y-slider.#{$color}.is-disabled::-webkit-slider-thumb
  {
    background:$value;
    border-color: transparent;
    cursor: not-allowed;
  }
  .y-slider.#{$color}.is-disabled::-moz-range-thumb{
    background:$value;
    border-color: $value;
    cursor: not-allowed;
  }
  .y-slider.#{$color}.is-disabled{
    background: $value;
    cursor: not-allowed;
  }
}
</style>
