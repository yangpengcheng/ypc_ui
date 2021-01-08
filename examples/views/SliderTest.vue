<template>
  <div class="app-container">
    <y-accordion>
      <y-accordion-item title="基本使用">
        <p>基本使用</p>
        <div>
          <y-slider v-model="sliderValue" color="attention"></y-slider>
          <y-slider v-model="sliderValue" color="danger"></y-slider>
          <y-slider v-model="sliderValue" color="info"></y-slider>
          <y-slider v-model="sliderValue" color="primary"></y-slider>
          <y-slider v-model="sliderValue" color="success"></y-slider>
          <y-slider v-model="sliderValue" color="warning"></y-slider>
          {{sliderValue}}
        </div>
      </y-accordion-item>
      <y-accordion-item title="禁用">
        <p>禁用</p>
        <y-slider v-model="sliderValue" color="attention" disabled></y-slider>
        <y-slider v-model="sliderValue" color="danger" disabled></y-slider>
        <y-slider v-model="sliderValue" color="info" disabled></y-slider>
        <y-slider v-model="sliderValue" color="primary" disabled></y-slider>
        <y-slider v-model="sliderValue" color="success" disabled></y-slider>
        <y-slider v-model="sliderValue" color="warning" disabled></y-slider>
      </y-accordion-item>
      <y-accordion-item title="min step max">
        <p>min step max</p>
        <y-slider v-model="sliderValue" color="attention" min="0" step="1"></y-slider>
        <y-slider v-model="sliderValue" color="danger" min="10" step="0.1"></y-slider>
        <y-slider v-model="sliderValue" color="info" min="20" step="0.2"></y-slider>
        <y-slider v-model="sliderValue" color="primary" min="30" step="0.3"></y-slider>
        <y-slider v-model="sliderValue" color="success" min="40" step="0.4"></y-slider>
        <y-slider v-model="sliderValue" color="warning" min="50" step="0.5"></y-slider>
        {{sliderValue}}
      </y-accordion-item>
    </y-accordion>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const sliderValue = ref()
    return {
      sliderValue
    }
  }
}
</script>

<style>
.app-container p{
  color: #555;
  font-size: 12px;
}
.y-slider + .y-slider{
  margin-top: 15px;
}
</style>
