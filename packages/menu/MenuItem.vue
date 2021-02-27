<template>
  <li class="menu-item" @click.stop="handleClick" :id="index">
    <i :class="iconClass" style="font-size:24px;" v-if="iconClass !== ''"></i>
    <slot />
    <span class="item" style="display:block">
      <slot name="title"/>
    </span>
  </li>
</template>

<script>
import { inject } from 'vue'
export default {
  name:'YMenuItem',
  props:{
    iconClass:{
      type:String,
    },
    index:{
      type:String,
      required:true,
    }
  },
  setup(props){
    const menu = inject('menu')
    const handleClick = () =>{
      menu.emit('select',props.index)
    }
    return {
      handleClick
    }
  }
}
</script>

<style scoped>
.menu-item{
  height: 45px;
  display: flex;
  align-items: center;
  padding-left: 16px;
}
.item{
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 300ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
  -ms-transition: all 300ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
  -o-transition: all 300ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
  transition: all 300ms cubic-bezier(0.000, 0.995, 0.990, 1.000);	
}
</style>