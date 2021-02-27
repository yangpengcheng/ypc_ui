<template>
  <div class="app-container">
    <y-accordion>
      <y-accordion-item title="基本使用">
        <p>基本使用</p>
        <div>
          <y-radio v-model="radioVal" value="1" label="1" color="attention" class="col"></y-radio>
          <y-radio v-model="radioVal" value="2" label="2" color="danger" class="col"></y-radio>
          <y-radio v-model="radioVal" value="3" label="3" color="info" class="col"></y-radio>
          <y-radio v-model="radioVal" value="4" label="4" color="primary" class="col"></y-radio>
          <y-radio v-model="radioVal" value="5" label="5" color="success" class="col"></y-radio>
          <y-radio v-model="radioVal" value="6" label="6" color="warning" class="col"></y-radio>
        </div>
        {{radioVal}}
      </y-accordion-item>
      <y-accordion-item title="禁用">
        <p>禁用</p>
        <div>
          <y-radio v-model="radioVal" value="big" label="big" disabled class="col"></y-radio>
          <y-radio v-model="radioVal" value="default" label="medium" disabled class="col"></y-radio>
        </div>
      </y-accordion-item>
      <y-accordion-item title="尺寸">
        <p>尺寸</p>
        <div>
          <y-radio v-model="radioVal2" value="1" label="1" size="large" class="col"></y-radio>
          <y-radio v-model="radioVal2" value="4" label="4" size="default" class="col"></y-radio>
          <y-radio v-model="radioVal2" value="3" label="3" size="small" class="col"></y-radio>
          {{radioVal2}}
        </div>
      </y-accordion-item>
      <y-accordion-item title="radio 组">
        <p>radio 组</p>
        <div>
          <y-radiogroup :radioData="radioData" v-model="radioVal2"></y-radiogroup>
          {{radioVal2}}
        </div>
      </y-accordion-item>
    </y-accordion>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const radioVal = ref()
    const radioVal2 = ref()
    return {
      radioVal,
      radioVal2,
      radioData: [{ label: '大杯', value: 'big' }, { label: '中杯', value: 'medium' }, { label: '小杯', value: 'small' }]
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
