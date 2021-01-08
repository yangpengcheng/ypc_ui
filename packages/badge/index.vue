<template>
  <div class="y-badge">
    <slot></slot>
    <transition name="y-zoom-in-center">
      <sup
        v-show="!hidden && (content || content === 0 || isDot)"
        v-text="content"
        class="y-badge__content"
        :class="[
          color,
          {
            'is-fixed': $slots.default,
            'is-dot': isDot
          }
        ]">
      </sup>
    </transition>
  </div>
</template>

<script>
import { computed } from 'vue'
import { colorValidator } from '../utils/validate.js'
export default {
  name: 'YBadge',
  props: {
    value: [String, Number],
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
    color: {
      type: String,
      validator: colorValidator
    }
  },
  setup (props) {
    const content = computed(() => {
      if (props.isDot) return
      const value = props.value
      const max = props.max

      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value
      }

      return value
    })
    return {
      content
    }
  }
}
</script>
