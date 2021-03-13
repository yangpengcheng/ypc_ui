<template>
  <ul class="y-menu" :style="menuStyle" ref="menu">
    <slot />
  </ul>
</template>
<script>
import { ref, nextTick, provide, computed, watch } from 'vue'
import mitt from 'mitt'
export default {
  name: 'YMenu',
  emits: ['select'],
  props: {
    backgroundColor: {
      type: String,
      default: 'rgb(45,107,207)'
    },
    textColor: {
      type: String,
      default: '#f8f9fa'
    },
    activeTextColor: {
      type: String,
      default: '#ffffff'
    },
    width: {
      type: String,
      default: '260px'
    },
    fold: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    const menu = ref(null)
    const emitter = mitt()
    const CurrExpand = ref('')
    provide('menu', { emit: emitter.emit })
    const menuStyle = computed(() => {
      return (
        'background-color:' +
        props.backgroundColor +
        ';' +
        'color:' +
        props.textColor +
        ';' +
        'width:' +
        props.width +
        ';'
      )
    })
    emitter.on('select', (target) => {
      var items = document.getElementsByClassName('menu-item')
      for (const item of items) {
        if (String(item.id) === String(target.id)) {
          item.style.color = props.activeTextColor
        } else {
          item.style.color = props.textColor
        }
      }
      CurrExpand.value = ''
      foldAllItems(target.parentNode.children)
      emit('select', target.id)
    })
    emitter.on('display', (target) => {
      if (
        CurrExpand.value !== target.parentNode.id &&
        target.nextElementSibling.style.display === 'none'
      ) {
        // 如果当前处于折叠状态，则展开
        expandItems(target.parentNode.children)
        // 折叠
        if (target.parentNode.parentNode) {
          if (target.parentNode.parentNode.classList.contains('y-menu')) {
            for (const item of target.parentNode.parentNode.children) {
              if (
                item.classList.contains('y-submenu') &&
                item.id !== target.parentNode.id
              ) {
                foldItems(item.children)
              }
            }
          } else {
            for (const item of target.parentNode.parentNode.children) {
              if (
                item.classList.contains('y-submenu') &&
                item.id === CurrExpand.value
              ) {
                foldItems(item.children)
              }
            }
          }
        }
        CurrExpand.value = target.parentNode.id
      } else {
        foldItems(target.parentNode.children)
        CurrExpand.value = ''
      }
    })
    // 折叠子菜单
    const foldItems = (items) => {
      for (const item of items) {
        if (item.classList.contains('y-submenu')) {
          item.style.display = 'none'
        }
        if (item.classList.contains('menu-item')) {
          item.style.display = 'none'
        }
      }
    }
    // 展开子菜单
    const expandItems = (items) => {
      for (const item of items) {
        if (item.classList.contains('y-submenu')) {
          item.style.display = 'block'
        }
        if (item.classList.contains('menu-item')) {
          item.style.display = 'flex'
        }
      }
    }
    const foldAllItems = (items) => {
      for (const item of items) {
        if (item.classList.contains('y-submenu')) {
          var menuItems = item.getElementsByClassName('menu-item')
          for (const item of menuItems) {
            item.style.display = 'none'
          }
          var submenu = item.getElementsByClassName('y-submenu')
          for (const item of submenu) {
            item.style.display = 'none'
          }
        }
      }
    }
    nextTick(() => {
      foldAllItems(menu.value.children)
      watch(
        () => props.fold,
        (val) => {
          if (val) {
            hideTitle()
          } else {
            displayTitle()
          }
        }
      )
    })
    // 隐藏标题
    const hideTitle = () => {
      menu.value.style.width = '70px'
      const items = menu.value.getElementsByClassName('item')
      for (const item of items) {
        item.style.display = 'none'
      }
    }
    const displayTitle = () => {
      menu.value.style.width = props.width
      const items = menu.value.getElementsByClassName('item')
      for (const item of items) {
        item.style.display = 'block'
      }
    }
    return {
      menu,
      menuStyle
    }
  }
}
</script>
<style lang="scss" scoped>
.y-menu {
  height: 100%;
}
</style>
