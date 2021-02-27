<template>
  <div class="y-submenu" :id="index">
    <slot name="title" />
    <div class="inner">
      <ul>
        <slot />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YSubMenu',
  props: {
    index: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.y-submenu {
  background: inherit;
  overflow: hidden;
  width: inherit;
  align-items: center;
}
.y-submenu .inner {
  margin-left: 5px;
  display: none;
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
  -ms-transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
  -o-transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
  transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
}
</style>
