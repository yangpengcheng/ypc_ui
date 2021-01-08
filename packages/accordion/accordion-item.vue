<template>
  <input :id='id' name='buttons' type='radio'>
  <label :for='id'>
    <div class='y_accordion__inner'>
      <slot v-if="$slots.title" name="title" class="title"/>
      <span v-else class="title">{{title}}</span>
      <slot/>
    </div>
  </label>
</template>

<script>
export default {
  name: 'YAccordionItem',
  props: {
    title: String
  },
  setup () {
    return {
      id: new Date().getTime() + Math.random()
    }
  }
}
</script>

<style lang="scss" scoped>
.y_accordion input[type="radio"] {
  display: none;
}
.y_accordion input[type="radio"]:checked + label .y_accordion__inner {
  height: auto;
}
.y_accordion input[type="radio"]:not(checked) + label .y_accordion__inner {
  height: 28px;
}

.y_accordion label {
  display: block;
  width: 100%;
}
.y_accordion__inner {
  width: 100%;
  height: 80px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  -webkit-transition: all 0.2s cubic-bezier(1, 0, 0.41, 1.01);
  transition: all 0.2s cubic-bezier(1, 0, 0.41, 1.01);
  padding-bottom: 5px;
}

.y_accordion label:not(:last-child){
  border-bottom: 1px solid #ccc;
}

.y_accordion__inner .title{
  display: block;
  margin-top:5px;
  margin-bottom:5px;
}
</style>
