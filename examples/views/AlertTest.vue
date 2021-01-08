<template>
  <div class="app-container">
    <y-accordion>
      <y-accordion-item title="颜色">
        <p>color:['attention','danger','info','primary','success','warning'],默认为'primary'</p>
        <y-alert title="注意提示的文案" color="attention"></y-alert>
        <y-alert title="错误提示的文案" color="danger"></y-alert>
        <y-alert title="信息提示的文案" color="info"></y-alert>
        <y-alert title="主要提示的文案" color="primary"></y-alert>
        <y-alert title="成功提示的文案" color="success"></y-alert>
        <y-alert title="警告提示的文案" color="warning"></y-alert>
      </y-accordion-item>
      <y-accordion-item title="样式[light]">
        <p>默认light</p>
        <y-alert title="注意提示的文案" effect="light" color="attention"></y-alert>
        <y-alert title="错误提示的文案" effect="light" color="danger"></y-alert>
        <y-alert title="信息提示的文案" effect="light" color="info"></y-alert>
        <y-alert title="主要提示的文案" effect="light" color="primary"></y-alert>
        <y-alert title="成功提示的文案" effect="light" color="success"></y-alert>
        <y-alert title="警告提示的文案" effect="light" color="warning"></y-alert>
      </y-accordion-item>
      <y-accordion-item title="样式[dark]">
        <p>dark</p>
        <y-alert title="注意提示的文案" effect="dark" color="attention"></y-alert>
        <y-alert title="错误提示的文案" effect="dark" color="danger"></y-alert>
        <y-alert title="信息提示的文案" effect="dark" color="info"></y-alert>
        <y-alert title="主要提示的文案" effect="dark" color="primary"></y-alert>
        <y-alert title="成功提示的文案" effect="dark" color="success"></y-alert>
        <y-alert title="警告提示的文案" effect="dark" color="warning"></y-alert>
      </y-accordion-item>
      <y-accordion-item title="自定义关闭选项">
        <div class="row">
          <p>自定义关闭选项[不显示关闭按钮,显示为自定义文字,显示关闭按钮(默认)]</p>
            <y-alert title="注意提示的文案"  color="attention"  :closable="false" class="row"></y-alert>
            <y-alert title="错误提示的文案"  color="danger" close-text="知道了" class="row"></y-alert>
            <y-alert title="信息提示的文案"  color="info" class="row">
              <template #closeIcon>
                <i class="fa fa-times" aria-hidden="true"></i>
              </template>
            </y-alert>
        </div>
      </y-accordion-item>
      <y-accordion-item title="图标">
        <div class="row">
          <p>图标</p>
            <y-alert title="注意提示的文案" color="attention" show-icon>
              <template v-slot:icon>
                <i class="fa fa-question-circle" aria-hidden="true"></i>
              </template>
            </y-alert>
            <y-alert title="错误提示的文案" color="danger" show-icon>
              <template v-slot:icon>
                <i class="fa fa-times-circle" aria-hidden="true"></i>
              </template>
            </y-alert>
            <y-alert title="信息提示的文案" color="info" show-icon>
              <template v-slot:icon>
                <i class="fa fa-info-circle" aria-hidden="true"></i>
              </template>
            </y-alert>
            <y-alert title="主要提示的文案" color="primary" show-icon>
              <template v-slot:icon>
                <i class="fa fa-minus-circle" aria-hidden="true"></i>
              </template>
            </y-alert>
            <y-alert title="成功提示的文案" color="success" show-icon>
              <template v-slot:icon>
                <i class="fa fa-check-circle" aria-hidden="true"></i>
              </template>
            </y-alert>
            <y-alert title="警告提示的文案" color="warning" show-icon>
              <template v-slot:icon>
                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
              </template>
            </y-alert>
        </div>
      </y-accordion-item>
      <y-accordion-item title="图标文字居中">
        <p>图标文字居中(center)</p>
          <y-alert title="注意提示的文案" color="attention" show-icon center>
            <template v-slot:icon>
              <i class="fa fa-question-circle" aria-hidden="true"></i>
            </template>
          </y-alert>
          <y-alert title="错误提示的文案" color="danger" show-icon center>
            <template v-slot:icon>
              <i class="fa fa-times-circle" aria-hidden="true"></i>
            </template>
          </y-alert>
          <y-alert title="信息提示的文案" color="info" show-icon center>
            <template v-slot:icon>
              <i class="fa fa-info-circle" aria-hidden="true"></i>
            </template>
          </y-alert>
          <y-alert title="主要提示的文案" color="primary" show-icon center>
            <template v-slot:icon>
              <i class="fa fa-minus-circle" aria-hidden="true"></i>
            </template>
          </y-alert>
          <y-alert title="成功提示的文案" color="success" show-icon center>
            <template v-slot:icon>
              <i class="fa fa-check-circle" aria-hidden="true"></i>
            </template>
          </y-alert>
          <y-alert title="警告提示的文案" color="warning" show-icon center>
            <template v-slot:icon>
              <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
            </template>
          </y-alert>
      </y-accordion-item>
      <y-accordion-item title="带有辅助性文字(有图标)">
        <div class="row">
          <p>带有辅助性文字(有图标)</p>
            <y-alert
              title="带辅助性文字介绍"
              color="attention"
              show-icon
              description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
              <template v-slot:icon>
                <i class="fa fa-question-circle" aria-hidden="true"></i>
              </template>
            </y-alert>
            <y-alert
              title="带辅助性文字介绍"
              color="danger"
              show-icon
              description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
              <template v-slot:icon>
                <i class="fa fa-times-circle" aria-hidden="true"></i>
              </template>
            </y-alert>
            <y-alert
              title="带辅助性文字介绍"
              color="info"
              show-icon
              description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
              <template v-slot:icon>
                <i class="fa fa-info-circle" aria-hidden="true"></i>
              </template>
            </y-alert>
            <y-alert
              title="带辅助性文字介绍"
              color="primary"
              show-icon
              description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
              <template v-slot:icon>
                <i class="fa fa-minus-circle" aria-hidden="true"></i>
              </template>
            </y-alert>
            <y-alert
              title="带辅助性文字介绍"
              color="success"
              show-icon
              description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
              <template v-slot:icon>
                <i class="fa fa-check-circle" aria-hidden="true"></i>
              </template>
            </y-alert>
            <y-alert
              title="带辅助性文字介绍"
              color="warning"
              show-icon
              description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
              <template v-slot:icon>
                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
              </template>
            </y-alert>
        </div>
      </y-accordion-item>
      <y-accordion-item title="带有辅助性文字">
        <div class="row">
          <p>带有辅助性文字</p>
            <y-alert
              class="row"
              title="带辅助性文字介绍"
              color="attention"
              description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
            </y-alert>
            <y-alert
              class="row"
              title="带辅助性文字介绍"
              color="danger"
              description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
            </y-alert>
            <y-alert
              class="row"
              title="带辅助性文字介绍"
              color="info"
              description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
            </y-alert>
            <y-alert
              class="row"
              title="带辅助性文字介绍"
              color="primary"
              description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
            </y-alert>
            <y-alert
              class="row"
              title="带辅助性文字介绍"
              color="success"
              description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
            </y-alert>
            <y-alert
              class="row"
              title="带辅助性文字介绍"
              color="warning"
              description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
            </y-alert>
        </div>
      </y-accordion-item>
    </y-accordion>
  </div>
</template>

<script >
export default {
  setup () {
    const hello = () => {
      console.log('hello')
    }
    return {
      hello
    }
  }
}
</script>
<style lang="scss" scoped>
.y_accordion p {
  color: #555;
  font-size: 12px;
  margin-bottom: 5px;
}
.y-alert{
  margin-top: 5px;
}
</style>
