<template>
  <button
    :class="[
      'y-button',
      buttonSize,
      color,
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    @click="handleClick"
  >
    <div class="y-button__innner">
      <template v-if="!loading && iconClass">
        <i :class="['bi y-button__icon', iconClass, buttonSize]"></i>
      </template>
      <template v-if="loading">
        <i :class="['bi bi-dash-circle fa-pulse y-button__icon',buttonSize]"></i>
      </template>
      <span v-if="$slots.default" :class="['y-button__slot', buttonSize]"
        ><slot></slot
      ></span>
    </div>
  </button>
</template>

<script>
import { computed } from 'vue'
import {
  colorValidator,
  sizeValidator,
  debounceValidator,
  throttleValidator
} from '../utils/validate.js'

export default {
  name: 'YButton',
  emits: ['click'],
  props: {
    color: {
      type: String,
      default: 'primary',
      validator: colorValidator
    },
    size: {
      type: String,
      validator: sizeValidator
    },
    iconClass: {
      type: String
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
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
  setup (props, ctx) {
    const _ = require('lodash')
    const buttonSize = computed(() => props.size || 'default')
    const buttonDisabled = computed(() => props.disabled || props.loading)
    var handleClick = (evt) => {
      ctx.emit('click', evt)
    }
    if (props.debounce) {
      handleClick = _.debounce(
        (evt) => ctx.emit('click', evt),
        props.debounce.wait,
        props.debounce.options
      )
    } else if (props.throttle) {
      handleClick = _.throttle(
        (evt) => ctx.emit('click', evt),
        props.throttle.wait,
        props.throttle.options
      )
    }
    return {
      buttonSize,
      buttonDisabled,
      handleClick
    }
  }
}
</script>
<style lang="scss">
@import "../styles/variables.scss";
.y-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #fff;
  text-align: center;
  outline: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  min-width: 60px;
}
.y-button::-moz-focus-inner {
  border: 0;
}
.y-button__innner,
.y-button__slot{
  display: flex;
  justify-content: center;
  align-items: center;
}
@each $size, $value in $font_size {
  .y-button__icon.#{$size}
  {
    width: $value;
    height: $value;
  }
}
.y-button.is-disabled{
  cursor: not-allowed;
}
.y-button [class*="y-button__icon"] + span {
  margin-left: 5px;
}
@each $color, $value in $colors {
  .y-button.#{$color}
  {
    color: #fff;
    background-color: $value;
    border-color: $value;
  }
}
@each $color, $value in $disabled_colors {
  .y-button.#{$color}.is-disabled,
  .y-button.#{$color}.is-disabled:active,
  .y-button.#{$color}.is-disabled:focus,
  .y-button.#{$color}.is-disabled:hover
  {
    color: #fff;
    background-color: $value;
    border-color: $value;
  }
}
@each $color, $value in $colors {
  .y-button.#{$color}.is-plain
  {
    color: $value;
    background-color: #fff;
    border-color: $value;
  }
}
@each $color, $value in $disabled_colors {
  .y-button.#{$color}.is-plain.is-disabled,
  .y-button.#{$color}.is-plain.is-disabled:active,
  .y-button.#{$color}.is-plain.is-disabled:focus,
  .y-button.#{$color}.is-plain.is-disabled:hover
  {
    color: $value;
    background-color: #fff;
    border-color: $value;
  }
}
.y-button.is-loading {
  position: relative;
  cursor: not-allowed;
}
.y-button.is-loading:before {
  content: "";
  position: absolute;
  left: -1px;
  top: -1px;
  right: -1px;
  bottom: -1px;
  border-radius: inherit;
  background-color: rgba(255, 255, 255, 0.35);
}
.y-button.is-round{
  border-radius: 6px;
}
.y-button.is-circle {
  min-width: 0;
  border-radius: 50%;
}
.y-button.large.is-circle{
  padding: 7px;
}
.y-button.default.is-circle{
  padding: 5px;
}
.y-button.small.is-circle{
  padding: 5px;
}
@each $color, $value in $font_size {
  .y-button.#{$color}
  {
    font-size: $value;
  }
}
.y-button.large{
  padding: 7px 16px;
}
.y-button.default{
  padding: 6px 11px;
}
.y-button.small{
  padding: 5px 11px;
}

.fa-pulse::before {
  -webkit-animation: fa-spin 1s infinite steps(8);
  animation: fa-spin 1s infinite steps(8);
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
@keyframes fa-spin {
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
