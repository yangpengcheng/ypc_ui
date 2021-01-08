<template>
  <div class="switch-container">
    <span :class="['y-switch-label-'+size]">{{label}}</span>
    <label :class="['y-switch', color, disabled ? 'disabled':'',size]">
      <input type="checkbox" name="switch" v-model="switchVal" @change="$emit('update:modelValue',switchVal)" :disabled="disabled"/>
      <span class="y-switch-style"></span>
    </label>
  </div>
</template>

<script>
import { ref } from 'vue'
const UPDATE_MODEL_EVENT = 'update:modelValue'
export default {
  name: 'YSwitch',
  emits: [UPDATE_MODEL_EVENT],
  props: {
    modelValue: {
      type: [Boolean, Number, String]
    },
    color: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'small'
    },
    label: {
      type: String
    }
  },
  setup () {
    const switchVal = ref()
    return {
      switchVal
    }
  }
}
</script>
