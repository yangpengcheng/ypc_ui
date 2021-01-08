<template>
  <div class="app-container">
    <y-accordion>
      <y-accordion-item title="颜色">
        <div class="row">
          <p>color:['attention','danger','info','primary','success','warning'],默认为'primary'</p>
          <y-checkbox v-model="checkVal" :value="1" label="注意" color="attention"/>
          <y-checkbox v-model="checkVal" :value="2" label="危险" color="danger"/>
          <y-checkbox v-model="checkVal" :value="3" label="信息" color="info" />
          <y-checkbox v-model="checkVal" :value="4" label="主要" color="primary"/>
          <y-checkbox v-model="checkVal" :value="5" label="成功" color="success"/>
          <y-checkbox v-model="checkVal" :value="6" label="警告" color="warning"/>
          <br />{{ checkVal.toString() }}
        </div>
      </y-accordion-item>
      <y-accordion-item title="禁用">
        <div class="row">
          <p>disabled</p>
          <y-checkbox label="注意" disabled color="attention" :value="1" v-model="checkVal"/>
          <y-checkbox label="危险" disabled color="danger" :value="2" v-model="checkVal"/>
          <y-checkbox label="信息" disabled color="info" :value="3" v-model="checkVal"/>
          <y-checkbox label="主要" disabled color="primary" :value="4" v-model="checkVal"/>
          <y-checkbox label="成功" disabled color="success" :value="5" v-model="checkVal"/>
          <y-checkbox label="警告" disabled color="warning" :value="6" v-model="checkVal"/>
        </div>
      </y-accordion-item>
      <y-accordion-item title="尺寸">
        <div class="row">
          <p>size:['big','medium','small','mini'],默认为'small'</p>
          <y-checkbox label="注意" size="large" color="attention" :value="1" disabled v-model="checkVal"/>
          <y-checkbox label="危险" size="medium" color="danger" :value="2" disabled v-model="checkVal"/>
          <y-checkbox label="信息" size="small" color="info" :value="3" disabled v-model="checkVal"/>
          <y-checkbox label="主要" size="mini" color="primary" :value="4" disabled v-model="checkVal"/>
        </div>
      </y-accordion-item>
      <y-accordion-item title="checkbox 组">
        <div class="row">
          <p>checkbox 组</p>
          <y-checkbox-group
            :checkData="checkData"
            v-model="checkArray"
          ></y-checkbox-group>
          <br />{{ checkArray.toString() }}
        </div>
      </y-accordion-item>
      <y-accordion-item title="不确定状态">
        <p>indeterminate</p>
        <p style="margin-top:5px">使用checkbox组</p>
        <y-checkbox label="全选" :value="['大杯', '中杯', '小杯']" v-model="checkArray1"/>
        <y-checkbox-group :checkData="checkData" v-model="checkArray1">
        </y-checkbox-group>
        <br />{{ checkArray1 }}
        <p style="margin-top:5px">使用checkbox</p>
        <y-checkbox label="全选" :value="['大杯', '中杯', '小杯']" v-model="checkArray2"/>
        <y-checkbox label="大杯" value="大杯" v-model="checkArray2"/>
        <y-checkbox label="中杯" value="中杯" v-model="checkArray2"/>
        <y-checkbox label="小杯" value="小杯" v-model="checkArray2"/>
        <br />{{ checkArray2 }}
      </y-accordion-item>
    </y-accordion>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const checkArray = ref(['大杯'])
    const checkArray1 = ref(['大杯', '中杯'])
    const checkArray2 = ref(['中杯'])
    const checkVal = ref([1])
    return {
      checkData: [
        { label: '大杯', value: '大杯', disabled: false },
        { label: '中杯', value: '中杯', disabled: false },
        { label: '小杯', value: '小杯', disabled: false },
        { label: '不可选择', value: 'biger than biger', disabled: true }
      ],
      checkArray,
      checkArray1,
      checkArray2,
      checkVal
    }
  }
}
</script>

<style>
.app-container p {
  color: #555;
  font-size: 12px;
}
.checkbox-container + .checkbox-container {
  margin-left: 10px;
}
</style>
