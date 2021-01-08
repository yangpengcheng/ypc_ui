<template>
  <div
    :class="[
      'y-input',
      inputSize,
      {
        'is-disabled': inputDisabled,
        'is-exceed': inputExceed,
        'y-input--prefix': $slots.prefix,
        'y-input--suffix': $slots.suffix || clearable || showPassword
      },
      $attrs.class
    ]"
    :style="$attrs.style"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <input
      ref="input"
      :class="['y-input__inner',{'is_line':line,'has-content':noEmpty},transitionName]"
      v-bind="$attrs"
      :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
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
    >
    <!-- 前置内容 -->
    <span v-if="$slots.prefix" class="y-input__prefix">
      <span class="y-input__append">
        <span class="y-input__append-inner">
          <slot name="prefix"></slot>
        </span>
      </span>
    </span>
    <!-- 后置内容 -->
    <span v-if="getSuffixVisible()" class="y-input__suffix">
      <span class="y-input__suffix-inner">
        <span class="y-input__append">
          <span class="y-input__append-inner">
            <template v-if="!showClear || !showPwdVisible || !isWordLimitVisible">
              <slot name="suffix"></slot>
            </template>
            <span v-show="showClear" @click="clear">
              <slot name="clear"></slot>
            </span>
            <span v-show="showPwdVisible && !passwordVisible" @click="handlePasswordVisible">
              <slot name="show-password"/>
            </span>
            <span v-show="showPwdVisible && passwordVisible" @click="handlePasswordVisible">
              <slot name="hide-password"/>
            </span>
            <!-- <icon v-if="validateState" :iconClass="[validateIcon]" :className="[validateState]"/> -->
          </span>
        </span>
        <span v-if="isWordLimitVisible" class="y-input__append">
          <span class="y-input__append-inner">
            {{ textLength }}/{{ upperLimit }}
          </span>
        </span>
      </span>
    </span>
    <label v-if="label" :class="[!transitionName && 'label', !transitionName && noEmpty && 'no-empty']">{{label}}</label>
    <span class="focus-border" v-if="transitionName"></span>
  </div>
</template>

<script>
import {
  computed,
  nextTick,
  ref
} from 'vue'
import { getSize } from '../utils/util'
import { sizeValidator } from '../utils/validate.js'
import { UPDATE_MODEL_EVENT, INPUT, CHANGE, FOCUS, BLUR, CLEAR, MOUSE_LEAVE, MOUSE_ENTER, KEY_DOWN } from '../utils/constant.js'
export default {
  inheritAttrs: false,
  name: 'YInput',
  emits: [INPUT, CHANGE, FOCUS, BLUR, CLEAR, MOUSE_LEAVE, MOUSE_ENTER, KEY_DOWN, UPDATE_MODEL_EVENT],
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
    }
  },
  setup (props, ctx) {
    const isKorean = (text) => {
      const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi
      return reg.test(text)
    }
    const noEmpty = computed(() => props.modelValue !== '')
    const input = ref(null)
    const focused = ref(false)
    const hovering = ref(false)
    const isComposing = ref(false)
    const passwordVisible = ref(false)
    const inputValue = computed(() => input.value)
    const inputSize = computed(() => props.size || getSize() || 'small')
    // const needStatusIcon = computed(() => false)
    const inputDisabled = computed(() => props.disabled)
    const nativeInputValue = computed(() => String(props.modelValue))
    const upperLimit = computed(() => ctx.attrs.maxlength)
    const showClear = computed(() => {
      return props.clearable &&
        !inputDisabled.value &&
        !props.readonly &&
        nativeInputValue.value &&
        (focused.value || hovering.value)
    })
    const showPwdVisible = computed(() => {
      return props.showPassword &&
        !inputDisabled.value &&
        !props.readonly &&
        (!!nativeInputValue.value || focused.value)
    })
    const isWordLimitVisible = computed(() => {
      return props.showWordLimit &&
        ctx.attrs.maxlength &&
        (props.type === 'text') &&
        !inputDisabled.value &&
        !props.readonly &&
        !props.showPassword
    })
    const textLength = computed(() => {
      return typeof props.modelValue === 'number' ? String(props.modelValue).length : (props.modelValue || '').length
    })
    const inputExceed = computed(() => {
      return isWordLimitVisible.value && (textLength.value > upperLimit.value)
    })

    const handleInput = (event) => {
      const { value } = event.target

      if (isComposing.value) return

      if (value === nativeInputValue.value) return

      ctx.emit(UPDATE_MODEL_EVENT, value)
      ctx.emit('input', value)
    }

    const handleChange = (event) => {
      ctx.emit('change', event.target.value)
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
      ctx.emit('focus', event)
    }

    const handleBlur = (event) => {
      focused.value = false
      ctx.emit('blur', event)
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
      ctx.emit('change', '')
      ctx.emit('clear')
    }

    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value
      focus()
    }

    const getSuffixVisible = () => {
      return ctx.slots.suffix ||
        showClear.value ||
        props.showPassword ||
        isWordLimitVisible.value
        // (validateState.value && needStatusIcon.value)
    }

    const onMouseLeave = (e) => {
      hovering.value = false
      ctx.emit('mouseleave', e)
    }

    const onMouseEnter = (e) => {
      hovering.value = true
      ctx.emit('mouseenter', e)
    }

    const handleKeydown = (e) => {
      ctx.emit('keydown', e)
    }
    return {
      input,
      inputSize,
      // validateState,
      // validateIcon,
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
