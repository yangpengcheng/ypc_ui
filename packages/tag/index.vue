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
      default: 'default',
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
      return props.size || 'default'
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
<style lang="scss">
@import "../styles/variables.scss";
// base
.y-tag {
  background-color: #ecf5ff;
  border-color: #d9ecff;
  display: inline-block;
  align-items: center;
  height: 32px;
  padding: 0 10px;
  line-height: 30px;
  color: #409eff;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  white-space: nowrap;
}
// is-hit
@each $color, $value in $default_colors {
  .y-tag.#{$color}.is-hit{
    border-color: $value;
  }
  .y-tag--dark.#{$color}.is-hit{
    border-color: $value;
  }
  .y-tag--plain.#{$color}.is-hit{
    border-color: $value;
  }
}
// y-tag__close
@each $color, $value in $default_colors {
  .y-tag.#{$color} .y-tag__close{
    color: $value;
  }
  .y-tag.#{$color} .y-tag__close:hover{
    color: #fff;
    background-color: $value;
  }
}
//.y-tag--dark
@each $color, $value in $default_colors {
  .y-tag--dark.#{$color} .y-tag__close{
    color: #fff;
  }
  .y-tag--dark.#{$color} .y-tag__close:hover{
    color: #fff;
    background-color: $value;
  }
}
// y-tag
@each $color, $value in $default_colors {
  .y-tag.#{$color}{
    color: $value;
  }
}
@each $color, $value in $outline_colors {
  .y-tag.#{$color}{
    background-color: $value;
  }
}
@each $color, $value in $disabled_colors {
  .y-tag.#{$color}{
    border-color: $value;
  }
}
@each $color, $value in $default_colors {
  .y-tag--dark.#{$color}{
    border-color: $value;
    background-color:$value;
    border-color: $value;
    color: #fff;
  }
}
@each $color, $value in $default_colors {
  .y-tag--plain.#{$color}{
    border-color: $value;
    background-color:#fff;
    color: $value;
  }
}
// icon
.y-tag [class*="svg-icon"] {
  border-radius: 50%;
  text-align: center;
  position: relative;
  cursor: pointer;
  font-size: 12px;
  height: 16px;
  width: 16px;
  line-height: 16px;
  vertical-align: middle;
  top: -1px;
  right: -5px;
}
.y-tag [class*="svg-icon"]::before {
  display: block;
}
.y-tag--default {
  height: 24px;
  padding: 0 8px;
  line-height: 22px;
  font-size: 14px;
}
.y-tag--default .y-icon-close {
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
}
.y-tag--small {
  height: 20px;
  padding: 0 5px;
  line-height: 19px;
  font-size: 14px;
}
.y-tag--small .y-icon-close {
  margin-left: -3px;
  -webkit-transform: scale(0.7);
  transform: scale(0.7);
}
</style>
