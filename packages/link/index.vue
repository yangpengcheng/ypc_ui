<template>
  <a
    :class="[
      'y-link',
      color,
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline'
    ]"
    rel="preload"
    :href="disabled ? null : href"
    @click="handleClick"
  >
    <div class="y-link__inner">
      <span v-if="$slots.default" class="y-link__inner">
        <slot/>
      </span>
      <i :class="['bi', iconClass]" v-if="iconClass" style="margin-left:5px"></i>
    </div>
  </a>
</template>
<script>
export default {
  name: 'YLink',
  props: {
    color: {
      type: String,
      default: 'info'
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: { type: Boolean, default: false },
    href: { type: String, default: '' },
    iconClass: { type: String, default: '' }
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
<style lang="scss">
@import "../styles/variables.scss";
.y-link{
  cursor: pointer;
}
.y-link {
  font-weight: 500;
  font-size: 14px;
}
.y-link {
  display: inline-flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  text-decoration: none;
  outline: 0;
  padding: 0;
}
.y-link.is-underline:hover:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 0;
  bottom: 0;
  border-bottom: 1px solid #409eff;
}
.y-link.is-disabled {
  cursor: not-allowed;
}
@each $color, $value in $default_colors {
  .y-link.#{$color}
  {
    color:$value;
  }
  .y-link.#{$color}.is-underline:hover:after,
  .y-link.#{$color}:after{
    border-color: $value;
  }
}
@each $color, $value in $disabled_colors {
  .y-link.#{$color}.is-disabled
  {
    color:$value;
  }
}
.y-link__inner{
  display: flex;
  display: inline-flex;
  align-items: center;
}
</style>
