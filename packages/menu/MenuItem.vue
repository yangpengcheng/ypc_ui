<template>
  <li class="menu-item" :id="index" @click.stop="handleClick" ref="menuitem">
    <i
      :class="[iconClass, 'icon']"
      v-if="iconClass !== ''"
      @click.stop="handleClick"
    />
    <span class="icon" v-if="$slots.icon" @click.stop="handleClick">
      <slot name="icon" />
    </span>
    <span class="item" v-if="$slots.title" @click.stop="handleClick">
      <slot name="title" />
    </span>
  </li>
</template>
<script>
import { ref, inject } from 'vue'
export default {
  name: 'YMenuItem',
  props: {
    iconClass: {
      type: String,
      default: ''
    },
    index: {
      type: [String, Number],
      required: true
    }
  },
  setup () {
    const menuitem = ref(null)
    const menu = inject('menu')
    const handleClick = () => {
      menu.emit('select', menuitem.value)
    }
    return {
      menuitem,
      handleClick
    }
  }
}
</script>
<style lang="scss" scoped>
.menu-item {
  padding: 10px 26px;
  height: 42px;
  width: 100%;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.icon,
.item {
  display: block;
}
.icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  margin-right: 12px;
}
.item {
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
  -ms-transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
  -o-transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
  transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
}
</style>
