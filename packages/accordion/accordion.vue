<template>
  <div class='y_accordion'>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'YAccordion'
}
</script>

<style lang="scss" scoped>
.y_accordion{
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  border: 1px solid #ccc;
  padding: 20px;
}
</style>
