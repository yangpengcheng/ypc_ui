<template>
  <div id="sidebar-menu" class="y-menu" ref="menu" :style="menuStyle">
    <div id="toggleMenu" :style="visable?'text-align:center':'text-align:right;padding-right:16px'">
      <i class="bi bi-text-indent-left list" style="font-size:24px;" @click="expand" v-if="visable"></i>
      <i class="bi bi-text-indent-right thumbs" style="font-size:24px;" @click="fold" v-else></i>
    </div> 
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import { computed, nextTick, provide, ref, watch } from 'vue'
import mitt from 'mitt'
export default {
  name: 'YMenu',
  props:{
    collapse:{
      type:Boolean
    },
    backgroundColor:{
      type:String,
      default:'#229bdc'
    },
    textColor:{
      type:String,
      default:'#fff'
    },
    activeTextColor:{
      type:String,
      default:'red'
    }
  },
  setup(props,{emit}){
    const visable = ref(props.collapse)
    const emitter = mitt()
    const menu = ref(null)
    const menuStyle = computed(()=>{
      return 'background-color:'+props.backgroundColor+';'+
      'color:'+props.textColor+';'
    })
    const fold = () => {
      var items = document.getElementsByClassName('item')
      for(let item of items){
        item.style.opacity = 0;
        item.style.marginLeft="0px";
      }
      menu.value.style.width="56px"
      visable.value = true
    }
    const expand = () => {
      var items = document.getElementsByClassName('item')
      for(let item of items){
        item.style.opacity = 1;
        item.style.marginLeft="10px";
      }
      menu.value.style.width="200px"
      visable.value = false
    }
    emitter.on('select',(index)=>{
      emit('select',index)
      var items = document.getElementsByClassName('menu-item')
      for(let item of items){
        if(item.id === index){
          item.style.color = props.activeTextColor
        }else{
          item.style.color = props.textColor
        }
      }
      var curElement = document.getElementById(index)
      if(curElement.parentNode.className === 'y-submenu'){
        toggleMenu(curElement.parentNode.id)
      }
      // 选择的是1一级菜单
      if(curElement.parentNode.parentNode.className === 'y-menu'){
        toggleMenu(null)
      }
    })
    // 改变子菜单展开状态
    const toggleMenu = (id) =>{
      var items = document.getElementsByClassName('y-submenu')
      for(let item of items){
        if(item.id === id){
          item.getElementsByClassName('inner')[0].style.display = 'block'
        }else{
          item.getElementsByClassName('inner')[0].style.display = 'none'
        }
      }
    }


    provide('menu',{'emit':emitter.emit})
    nextTick(()=>{
      watch(()=>props.collapse,(val)=>{
        if(val){
          fold()
        }else{
          expand()
        }
      },{immediate:true})
    })
    return{
      visable,
      fold,
      expand,
      menu,
      menuStyle
    }
  }
}
</script>

<style lang="scss" scoped>
.y-menu{
	overflow:hidden;
	width:56px;
  height: 100%;
	font-size:14px;
	-webkit-transition: all 200ms ease-out;
	-moz-transition: all 300ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
	-ms-transition: all 300ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
	-o-transition: all 300ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
	transition: all 300ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
}
</style>