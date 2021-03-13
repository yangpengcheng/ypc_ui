<template>
  <div class="radio-container">
    <input
      type="radio"
      :value="value"
      :disabled="disabled"
      :class="['y-radio', size, color, disabled ? 'disabled' : '']"
      @change="handleChange"
      :checked="checked"
    />
    <span :class="['y-radio-label-' + size]">{{ label }}</span>
  </div>
</template>

<script>
import { computed } from 'vue'
import { sizeValidator } from '../utils/validate.js'
import { UPDATE_MODEL_EVENT } from '../utils/constant.js'
export default {
  name: 'YRadio',
  emits: [UPDATE_MODEL_EVENT],
  props: {
    modelValue: {
      type: [Boolean, Number, String]
    },
    color: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'default',
      validator: sizeValidator
    },
    value: {
      type: [String, Boolean, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'no-label'
    }
  },
  setup (props, { emit }) {
    const handleChange = (event) => {
      emit(UPDATE_MODEL_EVENT, event.target.value)
    }
    const checked = computed(() => props.modelValue === props.value)
    return {
      checked,
      handleChange
    }
  }
}
</script>
<style lang="scss">
@import "../styles/variables.scss";
.y-radio {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  position: relative;
  right: 0;
  bottom: 0;
  left: 0;
  transition:all .15s ease-out 0s;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  outline: none;
  border-radius: 10%;
}
.y-radio {
  border-radius: 50%;
}
.y-radio:checked:before {
  transform: scale(1);
}
.radio-container{
  display: flex;
  display: inline-flex;
  align-items: center;
}
.y-radio:before {
  content: "";
  display: block;
  border-radius: 50%;
  transform: scale(0);
  transition: all ease-out 250ms;
}
.y-radio.large:before{
  margin: 6px;
  width: 10px;
  height: 10px;
}
.y-radio.default:before{
  margin: 5px;
  width: 8px;
  height: 8px;
}
.y-radio.small:before{
  margin: 4px;
  width: 6px;
  height: 6px;
}
@each $color, $value in $default_colors {
  .y-radio.#{$color}{
    border: 2px solid $value;
  }
  .y-radio.#{$color}:checked:before{
    background: $value;
  }
}
@each $color, $value in $disabled_colors {
  .y-radio.#{$color}.disabled{
    cursor: not-allowed;
    border: 2px solid $value;
  }
  .y-radio.#{$color}disabled:checked:before{
    background: $value;
  }
}
.y-radio.large{
  margin: 8px 0;
  margin-right: 5px;
  height: 26px;
  width: 26px;
}
.y-radio.default{
  margin: 6px 0;
  margin-right: 5px;
  height: 22px;
  width: 22px;
}
.y-radio.small{
  margin: 5px 0;
  margin-right: 5px;
  height: 18px;
  width: 18px;
}
.y-radio-label-large{
  font-size: 16px;
}
.y-radio-label-default{
  font-size: 14px;
}
.y-radio-label-small{
  font-size: 12px;
}
</style>
