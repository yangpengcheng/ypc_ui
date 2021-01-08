<template>
  <div>
    <input type="checkbox" @change="change" :value="1" v-model="checkval1">
    <input type="checkbox" @change="change" :value="2" v-model="checkval2">
    <input type="checkbox" :checked="false">
    <input type="checkbox" :indeterminate="true">
    {{checkval1}}
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const checkval1 = ref(1)
    const checkval2 = ref(1)
    const change = (evt) => {
      console.log(evt.target.value)
    }
    return {
      checkval1,
      checkval2,
      change
    }
  }
}
</script>

<style>

</style>
