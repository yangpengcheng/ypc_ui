<template>
  <div
    v-show="visible"
    class="y-alert"
    :class="[color, center ? 'is-center' : '', 'e-' + effect]"
  >
    <template v-if="showIcon">
      <i :class="['bi',iconClass,isBigIcon]"/>
    </template>
    <div class="y-alert__content">
      <div>
        <span
          v-if="title || $slots.title"
          class="y-alert__title"
          :class="[isBoldTitle]"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="y-alert__description" v-if="description !== ''">
          <slot>
            {{ description }}
          </slot>
        </p>
      </div>
      <span
        v-if="closable && closeText === ''"
        class="y-alert__closebtn"
        @click="close"
        ><i class="bi bi-x"></i>
      </span>
      <span
        v-if="closable && closeText !== ''"
        class="y-alert__closebtn is-customed"
        @click="close"
        >{{ closeText }}</span
      >
    </div>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
import { colorValidator, effectValidator } from '../utils/validate.js'
const icons = {
  attention: 'bi-question-circle',
  danger: 'bi-x-circle',
  info: 'bi-info-circle',
  primary: 'bi-record-circle',
  success: 'bi-check-circle',
  warning: 'bi-exclamation-circle'
}
export default {
  name: 'YAlert',
  emits: ['close'],
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'primary',
      validator: colorValidator
    },
    effect: {
      type: String,
      default: 'dark',
      validator: effectValidator
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ''
    },
    showIcon: Boolean,
    center: Boolean
  },
  setup (props, ctx) {
    const visible = ref(true)
    const isBigIcon = computed(() =>
      props.description || ctx.slots.default ? 'is-big' : ''
    )
    const isBoldTitle = computed(() =>
      props.description || ctx.slots.default ? 'is-bold' : ''
    )
    const iconClass = computed(() => icons[props.color])
    const close = (evt) => {
      visible.value = false
      ctx.emit('close', evt)
    }
    return {
      visible,
      isBigIcon,
      isBoldTitle,
      close,
      iconClass
    }
  }
}
</script>
<style lang="scss">
@import "../styles/variables.scss";
// 基本样式
.y-alert {
  width: 100%;
  padding: 8px 16px;
  margin: 0;
  border-radius: 4px;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  opacity: 1;
  display: flex;
  align-items: center;
}
// 效果
@each $color, $value in $light_colors {
  .y-alert.#{$color}.e-light
  {
    color: $value;
  }
}
@each $color, $value in $light_bg_colors {
  .y-alert.#{$color}.e-light
  {
    background-color: $value;
    border-color: $value;
  }
}
@each $color, $value in $outline_colors {
  .y-alert.#{$color}.e-outline
  {
    color: $value;
    background-color: #fff;
    border: 1px solid $value;
  }
}
@each $color, $value in $default_colors {
  .y-alert.#{$color}.e-dark
  {
    color: #fff;
    background-color: $value;
    border-color: $value;
  }
}
i + .y-alert__content{
  padding: 0 8px;
}
.y-alert__content {
  display: flex;
  display: inline-flex;
  align-items: center;
}
// 关闭按钮
.y-alert.e-light .y-alert__closebtn,
.y-alert.e-dark .y-alert__closebtn {
  color: #fff;
}
.y-alert__closebtn.is-customed {
  font-style: normal;
  font-size: 13px;
}
.y-alert__closebtn {
  font-size: 12px;
  opacity: 1;
  position: absolute;
  right: 16px;
  cursor: pointer;
}
// 描述
.y-alert .y-alert__description {
  font-size: 12px;
  margin: 5px 0 0;
}
.y-alert.is-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
i.is-big{
  font-size: 26px;
}
// 标题
.y-alert__title {
  font-size: 13px;
  line-height: 18px;
}
.y-alert__title.is-bold {
  font-weight: 700;
}
</style>
