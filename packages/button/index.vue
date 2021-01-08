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
        'is-circle': circle,
      },
    ]"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    @click="handleClick"
  >
    <div class="y-button__innner">
      <span v-if="!loading && $slots.icon" :class="['y-button__icon',size]"><slot name="icon"></slot></span>
      <span v-if="loading && $slots.loadingIcon" :class="['y-button__icon',size,loading]"><slot name="loadingIcon"></slot></span>
      <span v-if="$slots.default" :class="['y-button__slot',size]"><slot></slot></span>
    </div>
  </button>
</template>

<script>
import { computed } from 'vue'
import { getSize } from '../utils/util'
import { colorValidator, sizeValidator, debounceValidator, throttleValidator } from '../utils/validate.js'

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
    const buttonSize = computed(() => props.size || getSize() || 'small')
    const buttonDisabled = computed(() => props.disabled || props.loading)

    var handleClick = (evt) => {
      ctx.emit('click', evt)
    }
    if (props.debounce) {
      handleClick = _.debounce((evt) => ctx.emit('click', evt), props.debounce.wait, props.debounce.options)
    } else if (props.throttle) {
      handleClick = _.throttle((evt) => ctx.emit('click', evt), props.throttle.wait, props.throttle.options)
    }
    return {
      buttonSize,
      buttonDisabled,
      handleClick
    }
  }
}
</script>
