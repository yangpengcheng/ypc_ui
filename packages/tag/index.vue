<template>
  <span
    ref="tag"
    :class="classes"
    :style="{ backgroundColor: backgroundColor }"
    @click="handleClick"
  >
    <slot></slot>
    <span v-if="closable" class="y-tag__close" @click="handleClose">
      <slot name="icon"/>
    </span>
  </span>
</template>

<script>
import { ref, computed } from 'vue'
import { getSize } from '../utils/util'
import { colorValidator, sizeValidator } from '../utils/validate.js'
export default {
  name: 'YTag',
  emits: ['close', 'click'],
  props: {
    closable: Boolean,
    color: {
      type: String,
      default: 'primary',
      validator: colorValidator
    },
    hit: Boolean,
    disableTransitions: Boolean,
    backgroundColor: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      validator: sizeValidator
    },
    effect: {
      type: String,
      default: 'light',
      validator: (val) => {
        return ['dark', 'light', 'plain'].indexOf(val) !== -1
      }
    }
  },
  setup (props, ctx) {
    const tag = ref(null)
    const tagSize = computed(() => {
      return props.size || getSize() || 'small'
    })
    const classes = computed(() => {
      const { color, hit, effect } = props
      return [
        'y-tag',
        color,
        tagSize.value ? `y-tag--${tagSize.value}` : '',
        effect ? `y-tag--${effect}` : '',
        hit && 'is-hit'
      ]
    })

    // methods
    const handleClose = (event) => {
      event.stopPropagation()
      tag.value.style.display = 'none'
      ctx.emit('close', event)
    }

    const handleClick = (event) => {
      ctx.emit('click', event)
    }

    return {
      tag,
      tagSize,
      classes,
      handleClose,
      handleClick
    }
  }
}
</script>
