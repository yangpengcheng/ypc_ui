<template>
  <div
    v-show="visible"
    class="y-alert"
    :class="[color, center ? 'is-center' : '', 'is-' + effect]"
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
import { colorValidator } from '../utils/validate.js'
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
      default: 'info',
      validator: colorValidator
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
    center: Boolean,
    effect: {
      type: String,
      default: 'light',
      validator: (value) => ['light', 'dark'].indexOf(value) > -1
    }
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
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
}
@each $color, $value in $default_colors {
  .y-alert.#{$color}
  {
    color:$value;
  }
}
@each $color, $value in $outline_colors {
  .y-alert.#{$color}
  {
    background-color:$value;
  }
}
@each $color, $value in $default_colors {
  .y-alert.#{$color}.is-dark
  {
    color: #fff;
    background-color: $value;

  }
}
.y-alert__content {
  display: flex;
  display: inline-flex;
  align-items: center;
  padding: 0 8px;
}
.y-alert.is-light .y-alert__closebtn {
  color: #c0c4cc;
}
.y-alert.is-dark .y-alert__closebtn{
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
  right: 15px;
  cursor: pointer;
}
.y-alert .y-alert__description {
  font-size: 12px;
  margin: 5px 0 0;
}
.y-alert.is-dark .y-alert__description {
  color: #fff;
}
@each $color, $value in $default_colors {
  .y-alert.#{$color} .y-alert__description
  {
    color:$value;
  }
}
.y-alert.is-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
i.is-big{
  font-size: 26px;
}
.y-alert__title {
  font-size: 13px;
  line-height: 18px;
}
.y-alert__title.is-bold {
  font-weight: 700;
}
</style>
