<template>
  <div
    v-show="visible"
    :class="['y-alert',color, `e-${effect}`,{'is-center' : center}]"
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
      <span v-if="closable" @click="close" class="y-alert__closebtn">
        <i class="bi bi-x" v-if="closeText === ''"/>
        <span v-else>{{ closeText }}</span>
      </span>
    </div>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
import { effectValidator } from '../utils/validate.js'
import { CLOSE } from '../utils/constant.js'
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
  emits: [CLOSE],
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
      default: 'primary'
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
// Base
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
// effect
.y-alert.e-dark,
.y-alert.e-light{
  border-color: transparent;
}
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
  }
}
// content
i + .y-alert__content{
  padding: 0 8px;
}
.y-alert__content {
  display: flex;
  display: inline-flex;
  align-items: center;
}
// Close Button
.y-alert.e-light .y-alert__closebtn,
.y-alert.e-dark .y-alert__closebtn {
  color: #fff;
}
.y-alert__closebtn {
  font-size: 12px;
  opacity: 1;
  position: absolute;
  right: 16px;
  cursor: pointer;
}
// Description
.y-alert .y-alert__description {
  color: inherit;
  font-size: 12px;
  margin: 5px 0 0;
}
// Align center
.y-alert.is-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
// Big Icon
i.is-big{
  font-size: 26px;
}
// Title
.y-alert__title {
  font-size: 13px;
  line-height: 18px;
}
.y-alert__title.is-bold {
  font-weight: 700;
}
</style>
