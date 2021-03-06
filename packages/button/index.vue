<template>
  <button
    :class="[
      'y-button',
      size,
      color,
      `e-${effect}`,
      {
        'is-disabled': buttonDisabled,
        'is-circle': circle
      }
    ]"
    :disabled="buttonDisabled"
    @click="handleClick"
  >
    <div class="y-button__inside">
      <template v-if="!loading && iconClass">
        <i :class="['bi y-button__icon', iconClass]"/>
      </template>
      <template v-if="loading">
        <i :class="['bi bi-arrow-clockwise icon-loading y-button__icon']"/>
      </template>
      <span v-if="$slots.default" :class="['y-button__slot']"
        ><slot/></span>
    </div>
  </button>
</template>
<script>
import { computed } from 'vue'
import { CLICK } from '../utils/constant.js'
import {
  sizeValidator,
  effectValidator,
  debounceValidator,
  throttleValidator
} from '../utils/validate.js'
export default {
  name: 'YButton',
  emits: [CLICK],
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'default',
      validator: sizeValidator
    },
    effect: {
      type: String,
      default: 'dark',
      validator: effectValidator
    },
    iconClass: {
      type: String
    },
    loading: Boolean,
    disabled: Boolean,
    circle: Boolean,
    debounce: {
      type: Object,
      validator: debounceValidator
    },
    throttle: {
      type: Object,
      validator: throttleValidator
    }
  },
  setup (props, { emit }) {
    const _ = require('lodash')
    const buttonDisabled = computed(() => props.disabled || props.loading)
    var handleClick = (evt) => {
      emit(CLICK, evt)
    }
    if (props.debounce) {
      handleClick = _.debounce(
        (evt) => emit(CLICK, evt),
        props.debounce.wait,
        props.debounce.options
      )
    } else if (props.throttle) {
      handleClick = _.throttle(
        (evt) => emit(CLICK, evt),
        props.throttle.wait,
        props.throttle.options
      )
    }
    return {
      buttonDisabled,
      handleClick
    }
  }
}
</script>
<style lang="scss">
@import "../styles/variables.scss";
// Base
.y-button {
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  outline: 0;
  font-weight: 500;
  min-width: 60px;
  border-radius: 4px;
}
.y-button::-moz-focus-inner {
  border: 0;
}
// Internal layout
.y-button__inside,
.y-button__slot{
  display: flex;
  justify-content: center;
  align-items: center;
}
// Disabled cursor
.y-button.is-disabled{
  cursor: not-allowed;
}
// effect
.y-button.e-dark,
.y-button.e-light{
  border-color: transparent;
}
@each $color, $value in $default_colors {
  .y-button.#{$color}.e-dark
  {
    color: #fff;
    background-color: $value;
  }
}
@each $color, $value in $disabled_colors {
  .y-button.#{$color}.e-dark.is-disabled
  {
    background-color: $value;
  }
}
@each $color, $value in $default_colors {
  .y-button.#{$color}.e-outline
  {
    color: $value;
    background-color: #fff;
    border-color: $value;
  }
}
@each $color, $value in $disabled_colors {
  .y-button.#{$color}.e-outline.is-disabled
  {
    color: $value;
    border-color: $value;
  }
}
@each $color, $value in $light_colors {
  .y-button.#{$color}.e-light
  {
    color: $value;
  }
}
@each $color, $value in $light_bg_colors {
  .y-button.#{$color}.e-light
  {
    background-color: $value;
  }
}
@each $color, $value in $disabled_colors {
  .y-button.#{$color}.e-light.is-disabled
  {
    color: $value;
    background-color: $value;
  }
}
// Icon button
.y-button.is-circle {
  min-width: 0;
  border-radius: 50%;
}
@each $size, $value in $font_size {
  .y-button.#{$size}
  {
    font-size: $value;
    padding: ($value/2);
  }
  .y-button.#{$size} .y-button__icon{
    font-size: $value;
    width: $value;
    height: $value;
  }
  .y-button.#{$size} [class*="y-button__icon"] + *{
    margin-left: ($value/2);
  }
}
// Loading
.icon-loading::before {
  -webkit-animation: spin 1s infinite steps(8);
  animation: spin 1s infinite steps(8);
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
</style>
