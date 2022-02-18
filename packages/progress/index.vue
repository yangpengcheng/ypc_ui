<template>
  <div class="y-progress" :style="progressStyle">
    <div
      :class="['y-progress-bar']"
      :style="[`background:${barColor};`, `width:${percent}%;`]"
    >
      {{ content }}
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'YProgress',
  props: {
    percent: Number,
    color: [String, Function, Array],
    height: {
      type: Number,
      default: 20
    },
    round: Boolean,
    format: {
      type: Function,
      default: (percent) => {
        return `${percent}%`
      }
    }
  },
  setup(props) {
    const content = computed(() => {
      return props.format(props.percent)
    })
    const progressStyle = computed(() => {
      if (props.round) {
        return `height:${props.height}px;border-radius: ${
          props.height / 2
        }px;font-size:${props.height * 0.3}px`
      } else {
        return `height:${props.height}px;border-radius: 0px;font-size:${
          props.height * 0.3
        }px`
      }
    })
    const barColor = computed(() => {
      let color
      if (typeof props.color === 'function') {
        return props.color(props.percent)
      } else if (typeof props.color === 'string') {
        switch (props.color) {
          case 'attention':
            color = 'rgb(255,210,42)'
            break
          case 'danger':
            color = 'rgb(255,72,48)'
            break
          case 'primary':
            color = 'rgb(63,128,234)'
            break
          case 'success':
            color = 'rgb(48,204,35)'
            break
          case 'warning':
            color = 'rgb(255,148,49)'
            break
          default:
            color = props.color
        }
        return color
      } else {
        for (const seriesColor of props.color) {
          if (props.percent <= seriesColor.percent) {
            return seriesColor.color
          }
        }
        return props.color[props.color.length - 1]?.color
      }
    })
    return {
      progressStyle,
      barColor,
      content
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../styles/variables.scss';
.y-progress {
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 38px;
  min-height: 14px;
  background: #ebeef5;
}
.y-progress-bar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  padding: 5px;
  font-size: inherit;
  height: inherit;
  border-radius: inherit;
  width: 0%;
  transition: width 0.5s;
  -moz-transition: width 0.5s;
  -webkit-transition: width 0.5s;
  -o-transition: width 0.5s;
  border-color: transparent;
}
</style>
