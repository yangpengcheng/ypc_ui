<template>
  <div
    class="y-row"
    :style="{ 'margin-left': `-${space}`, 'margin-top': `-${space}` }"
  >
    <slot />
  </div>
</template>
<script>
import { provide } from 'vue'
export default {
  name: 'YRow',
  props: {
    space: {
      type: String,
      default: '5px'
    }
  },
  setup (props) {
    provide('row', { space: props.space })
  }
}
</script>
<style lang="scss">
.y-row {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
</style>
