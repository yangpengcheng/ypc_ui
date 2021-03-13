<template>
  <span
    ref="tag"
    :class="['y-tag',color,size,`e-${effect}`,]"
    @click="handleClick"
  >
    <slot/>
    <span v-show="closable" class="y-tag__close" @click.stop="handleClose">
      <i class="bi bi-x icon"/>
    </span>
  </span>
</template>

<script>
import { ref } from 'vue'
import { sizeValidator, effectValidator } from '../utils/validate.js'
export default {
  name: 'YTag',
  emits: ['close', 'click'],
  props: {
    closable: Boolean,
    color: {
      type: String,
      default: 'primary'
    },
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
      default: 'dark',
      validator: effectValidator
    }
  },
  setup (_, ctx) {
    const tag = ref(null)
    const handleClose = (event) => {
      tag.value.style.display = 'none'
      ctx.emit('close', event)
    }
    const handleClick = (event) => {
      ctx.emit('click', event)
    }
    return {
      tag,
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
  position: relative;
  display: inline-flex;
  align-items: center;
  line-height: 1;
  border-style: solid;
  border-width: 1px;
  white-space: nowrap;
}
@each $color, $value in $default_colors {
  .y-tag.#{$color}.e-dark{
    color: #fff;
    border-color: $value;
    background: $value;
  }
}
@each $color, $value in $outline_colors {
  .y-tag.#{$color}.e-outline
  {
    color: $value;
    background-color: #fff;
    border-color: $value;
  }
}
@each $color, $value in $default_colors {
  .y-tag.#{$color}.e-light
  {
    color: $value;
  }
}
@each $color, $value in $light_bg_colors {
  .y-tag.#{$color}.e-light
  {
    background-color: $value;
    border-color: transparent;
  }
}
.y-tag__close{
  display: inline-block;
}
.y-tag.large {
  height: 26px;
  padding:0 10px;
  font-size: 16px;
}
.y-tag.default {
  height: 22px;
  padding: 0 8px;
  font-size: 14px;
}
.y-tag.small {
  height: 18px;
  padding: 0 6px;
  font-size: 12px;
}
</style>
