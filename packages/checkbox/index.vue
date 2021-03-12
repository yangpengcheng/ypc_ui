<template>
  <div class="checkbox-container">
    <input
      type="checkbox"
      :class="['y-checkbox', color, size, disabled ? 'disabled' : '']"
      :disabled="disabled"
      :value="value"
      v-model="checkVal"
      @change="handleChanged"
      :indeterminate="indeterminate"
    />
    <span :class="['y-checkbox-label-' + size]">{{ label }}</span>
  </div>
</template>
<script>
import { computed } from 'vue'
import { colorValidator, sizeValidator } from '../utils/validate.js'
import { UPDATE_MODEL_EVENT } from '../utils/constant.js'
export default {
  name: 'YCheckbox',
  emits: [UPDATE_MODEL_EVENT],
  props: {
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
    label: {
      type: String,
      default: 'no-label'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Array, Object]
    },
    modelValue: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  setup (props, { emit }) {
    const indeterminate = computed(() => Array.isArray(props.value) && props.modelValue.length > 0 && props.modelValue.length < props.value.length)
    const checkVal = computed({
      get: () => {
        if (Array.isArray(props.value)) {
          return props.modelValue.length === props.value.length
        } else {
          return props.modelValue.indexOf(props.value) !== -1
        }
      },
      set: (val) => val
    })

    const handleChanged = () => {
      if (Array.isArray(props.value)) {
        if (props.modelValue.length < props.value.length) {
          // 未全部选中=>全部选中
          emit(UPDATE_MODEL_EVENT, props.value)
        } else {
          // 全部选中=>全部未选中
          emit(UPDATE_MODEL_EVENT, [])
        }
      } else {
        if (props.modelValue.includes(props.value)) {
          var temp = props.modelValue
          for (const [i, v] of temp.entries()) {
            if (v === props.value) {
              temp.splice(i, 1)
              break
            }
          }
          emit(UPDATE_MODEL_EVENT, temp)
        } else {
          temp = props.modelValue
          temp.push(props.value)
          emit(UPDATE_MODEL_EVENT, temp)
        }
      }
    }
    return {
      checkVal,
      indeterminate,
      handleChanged
    }
  }
}
</script>
<style lang="scss">
@import "../styles/variables.scss";
.y-checkbox{
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  position: relative;
  transition:all .15s ease-out 0s;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  outline: none;
}
.checkbox-container{
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
}
.y-checkbox:before,
.y-checkbox:after {
  position: absolute;
  content: "";
  background: #fff;
  transition: all .2s ease-in-out;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
}
.y-checkbox:before {
  left: 2px;
  top: 6px;
  width: 0;
  height: 3px;
}
.y-checkbox:after {
  right: 9px;
  bottom: 3px;
  width: 3px;
  height: 0;
}
.y-checkbox:indeterminate:before,.y-checkbox:indeterminate:after {
  width: calc(50% - 1px);
  height: 2px;
  transform: rotate(0);
  -webkit-transform: rotate(0);
  -moz-transform: rotate(0);
  -ms-transform: rotate(0);
  -o-transform: rotate(0);
}
@each $size, $value in $font_size {
  .y-checkbox.#{$size}:indeterminate:before{
    left: 1px;
    top: ($value)-6;
  }
  .y-checkbox.#{$size}:indeterminate:after{
    right: 1px;
    top: ($value)-6;
  }
  .y-checkbox.#{$size}{
    margin-right: 5px;
    height: ($value*2)-6;
    width: ($value*2)-6;
  }
}
@each $color, $value in $default_colors {
  .y-checkbox.#{$color}{
    border: 2px solid $value;
  }
  .y-checkbox.#{$color}:checked,.y-checkbox.#{$color}:indeterminate{
    background: $value;
  }
}
@each $color, $value in $disabled_colors {
  .y-checkbox.#{$color}.disabled{
    border: 2px solid $value;
    cursor: not-allowed;
  }
  .y-checkbox.#{$color}.disabled:checked,.y-checkbox.#{$color}.disabled:indeterminate{
    background: $value;
  }
}
// .y-checkbox.large{
//   margin-right: 5px;
//   height: 26px;
//   width: 26px;
// }
// .y-checkbox.default{
//   margin-right: 5px;
//   height: 22px;
//   width: 22px;
// }
// .y-checkbox.small{
//   margin-right: 5px;
//   height: 18px;
//   width: 18px;
// }
.y-checkbox.small:checked:before {
  left: 0px;
  top: 9px;
  width: 7px;
  height: 2px;
}
.y-checkbox.small:checked:after {
  right: 4px;
  bottom: 0px;
  width: 2px;
  height: 13px;
}
.y-checkbox.default:checked:before {
  left: 0px;
  top: 12px;
  width: 8px;
  height: 2px;
}
.y-checkbox.default:checked:after {
  right: 6px;
  bottom: 0px;
  width: 2px;
  height: 15px;
}
.y-checkbox.large:checked:before {
  left: 3px;
  top: 13px;
  width: 8px;
  height: 2px;
}
.y-checkbox.large:checked:after {
  right: 7px;
  bottom: 3px;
  width: 2px;
  height: 16px;
}
.y-checkbox-label-large{
  font-size: 16px;
}
.y-checkbox-label-default{
  font-size: 14px;
}
.y-checkbox-label-small{
  font-size: 12px;
}
</style>
