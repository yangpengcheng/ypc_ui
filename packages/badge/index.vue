<template>
  <div class="y-badge">
    <slot />
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
      ]"
    >
    </sup>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'YBadge',
  props: {
    value: [String, Number],
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
    color: {
      type: String,
      default: 'primary'
    }
  },
  setup(props) {
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
<style lang="scss">
@import '../styles/variables.scss';
.y-badge {
  position: relative;
  vertical-align: middle;
  display: inline-block;
}
.y-badge__content {
  background-color: #f56c6c;
  border-radius: 20px;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  line-height: 18px;
  padding: 0px 6px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #f56c6c;
}
.y-badge__content.is-fixed {
  position: absolute;
  top: 0;
  right: 10px;
  -webkit-transform: translateY(-50%) translateX(100%);
  transform: translateY(-50%) translateX(100%);
}
.y-badge__content.is-fixed.is-dot {
  right: 5px;
}
.y-badge__content.is-dot {
  height: 10px;
  width: 10px;
  padding: 0;
  right: 0;
  border-radius: 50%;
}
@each $color, $value in $default_colors {
  .y-badge__content.#{$color} {
    background-color: $value;
    border-color: $value;
  }
}
</style>
