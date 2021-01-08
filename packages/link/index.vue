<template>
  <a
    :class="[
      'y-link',
      color,
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline'
    ]"
    :href="disabled ? null : href"
    @click="handleClick"
  >
    <span v-if="$slots.default" class="y-link--inner">
      <slot></slot>
    </span>
    <slot v-if="$slots.icon" name="icon"></slot>
  </a>
</template>
<script>
import { colorValidator } from '../utils/validate.js'
export default {
  name: 'YLink',
  props: {
    color: {
      type: String,
      default: 'info',
      validator: colorValidator
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: { type: Boolean, default: false },
    href: { type: String, default: '' },
    icon: { type: String, default: '' }
  },
  setup (props, { emit }) {
    const handleClick = (event) => {
      if (!props.disabled) {
        emit('click', event)
      }
    }
    return {
      handleClick
    }
  }
}
</script>
<style scoped>
</style>
