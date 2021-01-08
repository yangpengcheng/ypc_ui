<template>
  <div class="app-container">
    <y-accordion>
      <y-accordion-item title="基本使用">
        <p>基本使用</p>
        <y-input v-model="input" placeholder="请输入"/>
      </y-accordion-item>
      <y-accordion-item title="禁用状态">
        <p>disabled</p>
        <y-input v-model="input" placeholder="请输入" disabled/>
      </y-accordion-item>
      <y-accordion-item title="可清空">
        <p>clearable</p>
        <y-input v-model="input" placeholder="请输入" clearable>
          <template #clear>
            <i class="fa fa-times" aria-hidden="true"></i>
          </template>
        </y-input>
      </y-accordion-item>
      <y-accordion-item title="密码框">
        <p>show-password</p>
        <y-input v-model="input" placeholder="请输入" show-password>
          <template #show-password>
            <i class="fa fa-eye" aria-hidden="true"></i>
          </template>
          <template #hide-password>
            <i class="fa fa-eye-slash" aria-hidden="true"></i>
          </template>
        </y-input>
      </y-accordion-item>
      <y-accordion-item title="带图标">
        <p>prefix图标</p>
        <y-input v-model="input" @input="handleInput" placeholder="请输入">
          <template v-slot:prefix>
            <i class="fa fa-address-card" aria-hidden="true"></i>
          </template>
        </y-input>
        <p style="margin-top:5px">suffix图标</p>
        <y-input v-model="input" @input="handleInput" placeholder="请输入">
          <template v-slot:suffix>
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </template>
        </y-input>
      </y-accordion-item>
      <y-accordion-item title="尺寸">
        <p>尺寸(size['','medium','small','mini'])</p>
        <y-input v-model="input" @input="handleInput" placeholder="请输入" size="large"/>
        <y-input v-model="input" @input="handleInput" placeholder="请输入" size="medium"/>
        <y-input v-model="input" @input="handleInput" placeholder="请输入" size="small"/>
        <y-input v-model="input" @input="handleInput" placeholder="请输入" size="mini"/>
      </y-accordion-item>
      <y-accordion-item title="输入长度限制">
        <p>show-word-limit,maxlength</p>
        <y-input v-model="input" placeholder="请输入" show-word-limit maxlength="10"/>
      </y-accordion-item>
      <y-accordion-item title="带标签">
        <p>带标签(获取焦点或输入框中有内容，标签会上移)</p>
        <y-input v-model="input" label="Username" size="large"/>
        <y-input v-model="input" label="Username" size="medium"/>
        <y-input v-model="input" label="Username" size="small"/>
        <y-input v-model="input" label="Username" size="mini"/>
      </y-accordion-item>
      <y-accordion-item title="只有底边框">
        <p>只有底边框(line)</p>
        <y-input v-model="input" line/>
      </y-accordion-item>
      <y-accordion-item title="边框过渡效果">
        <p>边框过渡效果</p>
        <y-input v-model="input" transitionName="border_bottom_left_right" placeholder="border_bottom_left_right"/>
        <y-input v-model="input" transitionName="border_bottom_middle_edge" placeholder="border_bottom_middle_edge"/>
        <y-input v-model="input" transitionName="border_bottom_edge_middle" placeholder="border_bottom_edge_middle"/>
        <y-input v-model="input" transitionName="border_bottom_top" placeholder="border_bottom_top"/>
        <y-input v-model="input" transitionName="border_left_right" placeholder="border_left_right"/>
        <y-input v-model="input" transitionName="border_right_left" placeholder="border_right_left"/>
      </y-accordion-item>
      <y-accordion-item title="背景过渡效果">
        <p>transitionName</p>
        <y-input v-model="input" transitionName="background-general" placeholder="background-general"/>
        <y-input v-model="input" transitionName="background-left-right" placeholder="background-left-right"/>
        <y-input v-model="input" transitionName="background-middle-edge" placeholder="background-middle-edge"/>
        <y-input v-model="input" transitionName="background-edge-middle" placeholder="background-edge-middle"/>
        <y-input v-model="input" transitionName="background-diagonal" placeholder="background-diagonal"/>
        <y-input v-model="input" transitionName="background-center-edge" placeholder="background-center-edge"/>
      </y-accordion-item>
      <y-accordion-item title="带标签过渡效果">
          <p>transitionName</p>
          <y-input v-model="input" label="First Name" transitionName="border_bottom_left_right"/>
          <y-input v-model="input" label="First Name" transitionName="border_bottom_middle_edge"/>
          <y-input v-model="input" label="First Name" transitionName="border_bottom_edge_middle"/>
          <y-input v-model="input" label="First Name" transitionName="border_bottom_top"/>
          <y-input v-model="input" label="First Name" transitionName="border_left_right"/>
          <y-input v-model="input" label="First Name" transitionName="border_right_left"/>
          <y-input v-model="input" label="First Name" transitionName="background-general"/>
          <y-input v-model="input" label="First Name" transitionName="background-left-right"/>
          <y-input v-model="input" label="First Name" transitionName="background-middle-edge"/>
          <y-input v-model="input" label="First Name" transitionName="background-edge-middle"/>
          <y-input v-model="input" label="First Name" transitionName="background-diagonal"/>
          <y-input v-model="input" label="First Name" transitionName="background-center-edge"/>
      </y-accordion-item>
    </y-accordion>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const input = ref('')
    const handleInput = (val) => {
      console.log('input', val)
    }
    return {
      input,
      handleInput
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container p{
  color: #555;
  font-size: 12px;
}
.y-input {
  margin-top: 5px;
}
</style>
