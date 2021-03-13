<template>
  <ul class="y-submenu" :id="index">
    <div class="submenu-item" @click="handleClick" ref="submenuItem">
      <i :class="[iconClass,'icon']" v-if="iconClass !== ''" @click.stop="handleClick" />
      <span class="icon" v-if="$slots.icon" @click.stop="handleClick">
        <slot name="icon" />
      </span>
      <span class="item" v-if="$slots.title" @click.stop="handleClick">
        <slot name="title" />
      </span>
    </div>
    <slot />
  </ul>
</template>
<script>
import { ref, inject } from 'vue'
export default {
  name: 'YSubMenu',
  props: {
    iconClass: {
      type: String,
      default: ''
    },
    index: {
      type: String
    }
  },
  setup () {
    const submenuItem = ref(null)
    const menu = inject('menu')
    const handleClick = () => {
      menu.emit('display', submenuItem.value)
    }
    return {
      handleClick,
      submenuItem
    }
  }
}
</script>
<style lang="scss" scoped>
.submenu-item {
  padding: 10px 26px;
  height: 42px;
  width: 100%;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  margin-right: 12px;
}
</style>
