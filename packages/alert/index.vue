<template>
  <div
    v-show="visible"
    class="y-alert"
    :class="[color, center ? 'is-center' : '', 'is-' + effect]"
  >
    <span v-if="showIcon && $slots.icon" :class="[isBigIcon]"><slot name="icon"></slot></span>
    <div class="y-alert__content">
      <div>
        <span v-if="title || $slots.title" class="y-alert__title" :class="[ isBoldTitle ]">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="y-alert__description" v-if="description !== ''">
          <slot>
            {{ description }}
          </slot>
        </p>
      </div>
      <span v-if="closable && closeText === ''" class="y-alert__closebtn" @click="close"><slot name="closeIcon"></slot></span>
      <span v-if="closable && closeText !== ''" class="y-alert__closebtn is-customed" @click="close">{{ closeText }}</span>
    </div>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
import { colorValidator } from '../utils/validate.js'

export default {
  name: 'YAlert',
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
    // state
    const visible = ref(true)

    // computed
    const isBigIcon = computed(() => props.description || ctx.slots.default ? 'is-big' : '')
    const isBoldTitle = computed(() => props.description || ctx.slots.default ? 'is-bold' : '')

    // methods
    const close = (evt) => {
      visible.value = false
      ctx.emit('close', evt)
    }

    return {
      visible,
      isBigIcon,
      isBoldTitle,
      close
    }
  }
}
</script>
