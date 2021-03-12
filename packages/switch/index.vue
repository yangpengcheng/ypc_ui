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
      default: 'default'
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
<style lang="scss">
@import "../styles/variables.scss";
.y-switch {
  display: inline-block;
  font-size: 100%;
  position: relative;
  vertical-align: middle;
}
.y-switch .y-switch-style {
  left: 0;
  background: #C0CCDA;
  display: inline-block;
  position: relative;
  top: 0;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.y-switch .y-switch-style:before {
  display: block;
  content: '';
  position: absolute;
  background-color: #fff;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.y-switch > input[type="checkbox"] {
  display: none;
}
.y-switch > input[type="checkbox"][disabled] + .y-switch-style {
  cursor: not-allowed;
  background-color: #D3DCE6;
}
@each $color, $value in $default_colors {
  .y-switch.#{$color} > input[type="checkbox"]:checked + .y-switch-style{
    background: $value;
  }
}
@each $color, $value in $disabled_colors {
  .y-switch.#{$color}.disabled > input[type="checkbox"]:checked[disabled] + .y-switch-style {
    background: $value;
  }
}
.y-switch.large,
.y-switch.large .y-switch-style{
  height: 24px;
  width: 48px;
}
.y-switch.default,
.y-switch.default .y-switch-style{
  height: 20px;
  width: 40px;
}
.y-switch.small,
.y-switch.small .y-switch-style{
  height: 18px;
  width: 36px;
}
.y-switch.large .y-switch-style{
  -webkit-border-radius: 12px;
  border-radius: 12px;
}
.y-switch.default .y-switch-style{
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
.y-switch.small .y-switch-style{
  -webkit-border-radius: 9px;
  border-radius: 9px;
}
.y-switch.large .y-switch-style:before{
  height: 24px;
  width: 24px;
}
.y-switch.default .y-switch-style:before{
  height: 20px;
  width: 20px;
}
.y-switch.small .y-switch-style:before{
  height: 18px;
  width: 18px;
}
.y-switch.large > input[type="checkbox"]:checked + .y-switch-style:before {
  left: 24px;
}
.y-switch.default > input[type="checkbox"]:checked + .y-switch-style:before {
  left: 20px;
}
.y-switch.small > input[type="checkbox"]:checked + .y-switch-style:before {
  left: 18px;
}
.y-switch-label-large{
  margin-right: 5px;
  font-size: 16px;
}
.y-switch-label-default{
  margin-right: 5px;
  font-size: 14px;
}
.y-switch-label-small{
  margin-right: 5px;
  font-size: 14px;
}
.switch-container{
  display: flex;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
