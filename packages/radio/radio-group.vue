<template>
  <div v-for="(item, index) in radioData" :key="index" class="radio-container" style="margin-right:10px">
    <input
      type="radio"
      :value="item.value"
      v-model="radioVal"
      :disabled="item.disabled"
      :class="['y-radio', size, color, item.disabled ? 'disabled' : '']"
      @change="$emit('update:modelValue', radioVal)"
    />
    <span :class="['y-radio-label-' + size]">{{ item.label }}</span>
  </div>
</template>

<script>
import { ref } from 'vue'
import { colorValidator, sizeValidator } from '../utils/validate.js'
import { UPDATE_MODEL_EVENT } from '../utils/constant.js'
export default {
  name: 'YRadiogroup',
  props: {
    modelValue: {
      type: [Boolean, Number, String]
    },
    color: {
      type: String,
      default: 'primary',
      validator: colorValidator
    },
    size: {
      type: String,
      default: 'default',
      validator: sizeValidator
    },
    radioData: {
      type: Array
    }
  },
  emits: [UPDATE_MODEL_EVENT],
  setup () {
    const radioVal = ref()
    return {
      radioVal
    }
  }
}
</script>
