<template>
  <div class="app-container">
    <y-accordion>
      <y-accordion-item title="颜色">
        <p>color:['primary','success','warning','danger','info']</p>
        <y-link color="attention">注意链接</y-link>
        <y-link color="danger">危险链接</y-link>
        <y-link color="info">信息链接</y-link>
        <y-link color="primary">主要链接</y-link>
        <y-link color="success">成功链接</y-link>
        <y-link color="warning">警告链接</y-link>
      </y-accordion-item>
      <y-accordion-item title="禁用状态">
        <p>disabled</p>
        <y-link color="attention" disabled>注意链接</y-link>
        <y-link color="danger" disabled>危险链接</y-link>
        <y-link color="info" disabled>信息链接</y-link>
        <y-link color="primary" disabled>主要链接</y-link>
        <y-link color="success" disabled>成功链接</y-link>
        <y-link color="warning" disabled>警告链接</y-link>
      </y-accordion-item>
      <y-accordion-item title="不带下划线">
        <p>underline</p>
        <y-link color="attention" :underline="false">注意链接</y-link>
        <y-link color="danger" :underline="false">危险链接</y-link>
        <y-link color="info" :underline="false">信息链接</y-link>
        <y-link color="primary" :underline="false">主要链接</y-link>
        <y-link color="success" :underline="false">成功链接</y-link>
        <y-link color="warning" :underline="false">警告链接</y-link>
      </y-accordion-item>
      <y-accordion-item title="带图标">
        <p>图标</p>
        <y-link color="success">查看
          <template v-slot:icon>
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </template>
        </y-link>
      </y-accordion-item>
    </y-accordion>
  </div>
</template>
<script>
export default {
}
</script>

<style lang="scss" scoped>
.y-link + .y-link{
  margin-left: 10px;
}
.app-container p{
  color: #555;
  font-size: 12px;
}
</style>
