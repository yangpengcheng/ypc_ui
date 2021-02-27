<template>
  <div class="app-container">
    <y-accordion>
      <y-accordion-item title="基本使用">
        <p>基本使用</p>
        <div>
          <y-switch label="1" v-model="switchVal" color="attention"></y-switch>
          <y-switch label="2" v-model="switchVal" color="danger"></y-switch>
          <y-switch label="3" v-model="switchVal" color="info"></y-switch>
          <y-switch label="4" v-model="switchVal" color="primary"></y-switch>
          <y-switch label="5" v-model="switchVal" color="success"></y-switch>
          <y-switch label="6" v-model="switchVal" color="warning"></y-switch>
          {{switchVal}}
        </div>
      </y-accordion-item>
      <y-accordion-item title="禁用">
          <p>禁用</p>
          <y-switch label="1" v-model="switchVal" color="attention" disabled></y-switch>
          <y-switch label="2" v-model="switchVal" color="danger" disabled></y-switch>
          <y-switch label="3" v-model="switchVal" color="info" disabled></y-switch>
          <y-switch label="4" v-model="switchVal" color="primary" disabled></y-switch>
          <y-switch label="5" v-model="switchVal" color="success" disabled></y-switch>
          <y-switch label="6" v-model="switchVal" color="warning" disabled></y-switch>
        <p>禁用</p>
      </y-accordion-item>
      <y-accordion-item title="尺寸">
        <p>尺寸</p>
          <y-switch label="1" v-model="switchVal" color="attention" size="large"></y-switch>
          <y-switch label="2" v-model="switchVal" color="danger" size="default"></y-switch>
          <y-switch label="3" v-model="switchVal" color="info" size="small"></y-switch>
      </y-accordion-item>
    </y-accordion>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const switchVal = ref()
    const radioVal2 = ref()
    return {
      switchVal,
      radioVal2
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container p{
  color: #555;
  font-size: 12px;
}
.col{
  margin-right: 10px;
}
</style>
