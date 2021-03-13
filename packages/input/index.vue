<template>
  <div
    :class="[
      'y-input',
      inputSize,
      transitionName,
      {
        'is-disabled': inputDisabled,
        'is-exceed': inputExceed,
        'is-line': line,
        'has-content': noEmpty,
        'is-focus': focused,
        'has-transition': transitionName
      }
    ]"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <!-- 前置内容 -->
    <span v-if="$slots.prefix" class="y-input__prefix">
      <slot name="prefix"/>
    </span>
    <div class="y-input__content">
      <input
      ref="input"
      class="y-input__inner"
      v-bind="$attrs"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :disabled="inputDisabled"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :tabindex="tabindex"
      :value="modelValue"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      @keydown="handleKeydown"
      />
      <label
      v-if="label"
      :class="[
        !transitionName && 'label'
      ]"
      >{{ label }}</label
    >
    </div>
    <!-- 后置内容 -->
    <span v-if="getSuffixVisible()" class="y-input__suffix">
      <template v-if="!showClear && !showPwdVisible && !isWordLimitVisible && validateStatus ==='' ">
        <slot name="suffix"/>
      </template>
      <span v-show="showClear" @click="clear" class="y-input__clear">
        <i class="bi bi-x y-input__icon"/>
      </span>
      <span
        v-show="showPwdVisible && !passwordVisible"
        @click="handlePasswordVisible"
      >
        <i class="bi bi-eye y-input__icon"/>
      </span>
      <span
        v-show="showPwdVisible && passwordVisible"
        @click="handlePasswordVisible"
      >
        <i class="bi bi-eye-slash y-input__icon"/>
      </span>
      <span v-if="validateStatus != ''">
        <i class="bi bi-check-circle" style="color:#29cc47" v-show="validateStatus==='correct'"/>
        <i class="bi bi-x-circle" style="color:#ff533d" v-show="validateStatus==='incorrect'"/>
      </span>
      <template v-if="isWordLimitVisible">
        <span class="y-input__check"> {{ textLength }}/{{ upperLimit }} </span>
      </template>
    </span>
    <span class="focus-border" v-if="transitionName"/>
  </div>
</template>
<script>
import { computed, nextTick, ref } from 'vue'
import { sizeValidator } from '../utils/validate.js'
import { isKorean } from '../utils/util.js'
import {
  UPDATE_MODEL_EVENT,
  INPUT,
  CHANGE,
  FOCUS,
  BLUR,
  CLEAR,
  MOUSE_LEAVE,
  MOUSE_ENTER,
  KEY_DOWN
} from '../utils/constant.js'
export default {
  inheritAttrs: true,
  name: 'YInput',
  emits: [
    INPUT,
    CHANGE,
    FOCUS,
    BLUR,
    CLEAR,
    MOUSE_LEAVE,
    MOUSE_ENTER,
    KEY_DOWN,
    UPDATE_MODEL_EVENT
  ],
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    size: {
      type: String,
      default: 'default',
      validator: sizeValidator
    },
    autocomplete: {
      type: String,
      default: 'off',
      validator: (val) => ['on', 'off'].includes(val)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    line: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    label: {
      type: String
    },
    transitionName: {
      type: [String, Array]
    },
    opportunity: {
      type: String,
      default: ''
    },
    validateFunc: {
      type: Function
    }
  },
  setup (props, ctx) {
    const validateStatus = ref('')
    const noEmpty = computed(() => props.modelValue !== '')
    const input = ref(null)
    const focused = ref(false)
    const hovering = ref(false)
    const isComposing = ref(false)
    const passwordVisible = ref(false)
    const inputValue = computed(() => input.value)
    const inputSize = computed(() => props.size)
    const inputDisabled = computed(() => props.disabled)
    const nativeInputValue = computed(() => String(props.modelValue))
    const upperLimit = computed(() => ctx.attrs.maxlength)
    const showClear = computed(() => {
      return (
        props.clearable &&
        !inputDisabled.value &&
        !props.readonly &&
        nativeInputValue.value &&
        (focused.value || hovering.value)
      )
    })
    const showPwdVisible = computed(() => {
      return (
        props.showPassword &&
        !inputDisabled.value &&
        !props.readonly &&
        (!!nativeInputValue.value || focused.value)
      )
    })
    const isWordLimitVisible = computed(() => {
      return (
        props.showWordLimit &&
        ctx.attrs.maxlength &&
        props.type === 'text' &&
        !inputDisabled.value &&
        !props.readonly &&
        !props.showPassword &&
        validateStatus.value === ''
      )
    })
    const textLength = computed(() => {
      return typeof props.modelValue === 'number'
        ? String(props.modelValue).length
        : (props.modelValue || '').length
    })
    const inputExceed = computed(() => {
      return isWordLimitVisible.value && textLength.value > upperLimit.value
    })

    const handleInput = (event) => {
      const { value } = event.target

      if (isComposing.value) return

      if (value === nativeInputValue.value) return

      ctx.emit(UPDATE_MODEL_EVENT, value)
      ctx.emit(INPUT, value)
    }
    const handleChange = (event) => {
      if (props.opportunity === 'change') {
        props.validateFunc(event).then(
          () => {
            validateStatus.value = 'correct'
          }
        ).catch(
          () => {
            validateStatus.value = 'incorrect'
          }
        )
      }
      ctx.emit(CHANGE, event.target.value)
    }

    const focus = () => {
      nextTick(() => {
        inputValue.value.focus()
      })
    }

    const blur = () => {
      inputValue.value.blur()
    }

    const handleFocus = (event) => {
      focused.value = true
      ctx.emit(FOCUS, event)
    }

    const handleBlur = (event) => {
      focused.value = false
      ctx.emit(BLUR, event)
    }

    const select = () => {
      inputValue.value.select()
    }

    const handleCompositionStart = () => {
      isComposing.value = true
    }

    const handleCompositionUpdate = (event) => {
      const text = event.target.value
      const lastCharacter = text[text.length - 1] || ''
      isComposing.value = !isKorean(lastCharacter)
    }

    const handleCompositionEnd = (event) => {
      if (isComposing.value) {
        isComposing.value = false
        handleInput(event)
      }
    }

    const clear = () => {
      ctx.emit(UPDATE_MODEL_EVENT, '')
      ctx.emit(CHANGE, '')
      ctx.emit(CLEAR)
    }

    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value
      focus()
    }

    const getSuffixVisible = () => {
      return (
        ctx.slots.suffix ||
        showClear.value ||
        props.showPassword ||
        isWordLimitVisible.value ||
        validateStatus.value
      )
    }

    const onMouseLeave = (e) => {
      hovering.value = false
      ctx.emit(MOUSE_LEAVE, e)
    }

    const onMouseEnter = (e) => {
      hovering.value = true
      ctx.emit(MOUSE_ENTER, e)
    }

    const handleKeydown = (e) => {
      ctx.emit(KEY_DOWN, e)
    }
    return {
      input,
      inputSize,
      focused,
      validateStatus,
      inputDisabled,
      showClear,
      showPwdVisible,
      isWordLimitVisible,
      upperLimit,
      textLength,
      hovering,
      inputExceed,
      passwordVisible,
      inputValue,
      handleInput,
      handleChange,
      handleFocus,
      handleBlur,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd,
      handlePasswordVisible,
      clear,
      select,
      focus,
      blur,
      getSuffixVisible,
      onMouseLeave,
      onMouseEnter,
      handleKeydown,
      noEmpty
    }
  }
}
</script>
<style lang="scss">
@import '../styles/variables.scss';
// Base
.y-input {
  position: relative;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: auto;
  border: 1px solid $input_border_color;
}
// Prefix
.y-input__prefix {
  display: inline-flex;
  align-items: center;
  padding: 0 5px;
  height: 28px;
  border: none
}
// Content
.y-input__content{
  width: 100%;
  display: flex;
  flex-direction: column;
}
// Inner
.y-input__inner {
  -webkit-appearance: none;
  background-color: inherit;
  background-image: none;
  border: none;
  color: inherit;
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  height: 28px;
  line-height: 1;
  outline: 0;
  padding: 0 5px;
  width: 100%;
}
// Disabled
.y-input.is-disabled{
  border-color: #999999;
}
.y-input.is-disabled .y-input__inner {
  background-color: #f5f7fa;
  color: #c0c4cc;
  cursor: not-allowed;
}
// Suffix
.y-input__suffix{
  display: inline-flex;
  align-items: center;
  padding: 0 5px;
  height: 28px;
  border: none
}
// clear
.y-input .y-input__clear {
  color: #f56c6c;
  font-size: inherit;
  cursor: pointer;
}
// exceed
.y-input.is-exceed{
  border-color: #f56c6c;
}
.y-input.is-exceed .y-input__check {
  color: #f56c6c;
}
// append
.y-input .y-input__append {
  height: 100%;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #909399;
  font-size: 12px;
}
.y-input .y-input__append .y-input__append-inner {
  background: #fff;
  line-height: initial;
  display: flex;
  display: inline-flex;
  align-items: center;
  padding: 0 5px;
}
// Placeholder
.y-input__inner::-webkit-input-placeholder {
  color: #c0c4cc;
}
.y-input__inner:-ms-input-placeholder {
  color: #c0c4cc;
}
.y-input__inner::-ms-input-placeholder {
  color: #c0c4cc;
}
.y-input__inner::placeholder {
  color: #c0c4cc;
}

.y-input.is-disabled .y-input__inner::-webkit-input-placeholder {
  color: #c0c4cc;
}
.y-input.is-disabled .y-input__inner:-ms-input-placeholder {
  color: #c0c4cc;
}
.y-input.is-disabled .y-input__inner::-ms-input-placeholder {
  color: #c0c4cc;
}
.y-input.is-disabled .y-input__inner::placeholder {
  color: #c0c4cc;
}
.y-input.is-disabled .y-input__icon {
  cursor: not-allowed;
}
.y-transfer-panel__filter .y-icon-circle-close {
  cursor: pointer;
}
// hover
.y-input__inner:hover {
  border-color: #c0c4cc;
}
// active focus
.y-input.is-active .y-input__inner,
.y-input__inner:focus {
  border-color: $input_border_color;
  outline: 0;
}
// Suffix
.y-input__suffix-inner {
  pointer-events: all;
}
.y-input--suffix .y-input__inner {
  padding-right: 30px;
}
.y-input--prefix .y-input__inner {
  padding-left: 30px;
}
@each $size, $value in $font_size {
  .y-input.#{$size}
  {
    font-size: $value;
  }
  .y-input.#{$size} .y-input__inner{
    height: ($value*2);
    line-height: 1;
  }
  .y-input.#{$size} .y-input__icon {
    width: $value;
    height: $value;
  }
}
.y-input__inner::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}
// label
.y-input .label {
  top: 6px;
  position: absolute;
  padding-left: 5px;
  pointer-events: none;
  transition: 0.2s ease all;
  color: #758575;
}
.y-input.large input:focus ~ .label,
.y-input.large.has-content input ~ label{
  top: -22px;
  font-size: 16px;
  opacity: 1;
}
.y-input.default input:focus ~ .label,
.y-input.default.has-content input ~ label {
  top: -20px;
  font-size: 14px;
  opacity: 1;
}
.y-input.small input:focus ~ .label,
.y-input.small.has-content input ~ label {
  top: -18px;
  font-size: 12px;
  opacity: 1;
}
.y-input.is-line{
  border:none;
  border-bottom: 1px solid $input_border_color;
}
</style>
