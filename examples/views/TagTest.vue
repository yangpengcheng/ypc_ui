<template>
  <div class="app-container">
    <y-accordion>
      <y-accordion-item title="基本使用">
        <p>基本使用(type:[null,'success','info','warning','danger'])</p>
        <y-tag color="attention">注意标签</y-tag>
        <y-tag color="danger">危险标签</y-tag>
        <y-tag color="info">信息标签</y-tag>
        <y-tag color="primary">主要标签</y-tag>
        <y-tag color="success">成功标签</y-tag>
        <y-tag color="warning">警告标签</y-tag>
      </y-accordion-item>
      <y-accordion-item title="可移除标签">
        <p>可移除标签(closable)</p>
        <y-tag closable>默认标签</y-tag>
        <y-tag color="attention" closable>注意标签
          <template #icon>
            <i class="fa fa-times" aria-hidden="true"></i>
          </template>
        </y-tag>
        <y-tag color="danger" closable>危险标签</y-tag>
        <y-tag color="info" closable>信息标签</y-tag>
        <y-tag color="primary" closable>主要标签</y-tag>
        <y-tag color="success" closable>成功标签</y-tag>
        <y-tag color="warning" closable>警告标签</y-tag>
      </y-accordion-item>
      <y-accordion-item title="动态可编辑标签">
        <p>动态可编辑标签</p>
        <y-tag
          class="col"
          v-for="tag in tags"
          :key="tag.name"
          closable
          :disable-transitions="false"
          :color="tag.type"
          @close="handleClose(tag)">
          {{tag.name}}
          <template #icon>
            <i class="fa fa-times" aria-hidden="true"></i>
          </template>
        </y-tag>
        <y-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          @keyup.enter="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </y-input>
        <y-button v-else class="button-new-tag" @click="showInput"><p style="color:#fff">+ new tag</p></y-button>
      </y-accordion-item>
      <y-accordion-item title="尺寸">
        <p>标签尺寸(size:['large','medium','small','mini'])</p>
        <y-tag size="large">大号标签</y-tag>
        <y-tag size="medium">中等标签</y-tag>
        <y-tag size="small">小型标签</y-tag>
        <y-tag size="mini">超小标签</y-tag>
      </y-accordion-item>
      <y-accordion-item title="主题">
        <p>主题(effect:['light','dark','plain'])</p>
        <div class="row">
          <p>light主题(默认)</p>
          <y-tag color="attention" effect="light">注意标签</y-tag>
          <y-tag color="danger" effect="light">危险标签</y-tag>
          <y-tag color="info" effect="light">信息标签</y-tag>
          <y-tag color="primary" effect="light">主要标签</y-tag>
          <y-tag color="success" effect="light">成功标签</y-tag>
          <y-tag color="warning" effect="light">警告标签</y-tag>
        </div>
        <div class="row">
          <p>dark主题</p>
          <y-tag color="attention" effect="dark">注意标签</y-tag>
          <y-tag color="danger" effect="dark">危险标签</y-tag>
          <y-tag color="info" effect="dark">信息标签</y-tag>
          <y-tag color="primary" effect="dark">主要标签</y-tag>
          <y-tag color="success" effect="dark">成功标签</y-tag>
          <y-tag color="warning" effect="dark">警告标签</y-tag>
        </div>
        <div class="row">
          <p>plain主题</p>
          <y-tag color="attention" effect="plain">注意标签</y-tag>
          <y-tag color="danger" effect="plain">危险标签</y-tag>
          <y-tag color="info" effect="plain">信息标签</y-tag>
          <y-tag color="primary" effect="plain">主要标签</y-tag>
          <y-tag color="success" effect="plain">成功标签</y-tag>
          <y-tag color="warning" effect="plain">警告标签</y-tag>
        </div>
      </y-accordion-item>
      <y-accordion-item title="自定义背景色">
        <p>自定义背景色(color)</p>
        <y-tag backgroundColor="orange">自定义主题</y-tag>
      </y-accordion-item>
    </y-accordion>
  </div>
</template>

<script>
import { ref, nextTick } from 'vue'
export default {
  setup () {
    var tags = ref([
      { name: '默认标签', type: 'primary' },
      { name: '成功标签', type: 'success' },
      { name: '信息标签', type: 'info' },
      { name: '警告标签', type: 'warning' },
      { name: '危险标签', type: 'danger' }
    ])
    const saveTagInput = ref(null)
    const inputVisible = ref(false)
    const inputValue = ref('')
    const handleClose = (tag) => {
      tags.value.splice(tags.value.indexOf(tag), 1)
    }
    const showInput = () => {
      inputVisible.value = true
      nextTick(() => {
        saveTagInput.value.$refs.input.focus()
      })
    }
    const handleInputConfirm = () => {
      const value = inputValue.value
      if (value) {
        tags.value.push({ name: value, type: 'success' })
      }
      inputVisible.value = false
      inputValue.value = ''
    }
    return {
      tags,
      saveTagInput,
      handleClose,
      inputVisible,
      inputValue,
      showInput,
      handleInputConfirm
    }
  }
}
</script>

<style lang="scss" scoped>
.row{
  margin-top: 5px;
}
.y-tag + .y-tag{
  margin-left:10px
}
.app-container p{
  color: #555;
  font-size: 12px;
}
.button-new-tag {
  margin-left: 10px;
  line-height: 24px;
  padding-top: 0;
  padding: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
}
</style>
