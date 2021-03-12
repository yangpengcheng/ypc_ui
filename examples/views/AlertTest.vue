<template>
  <div class="app-container">
    <y-accordion>
      <y-accordion-item title="颜色">
        <p>color:['attention','danger','info','primary','success','warning'],默认为'primary'</p>
        <y-alert title="注意提示的文案" color="attention"/>
        <y-alert title="错误提示的文案" color="danger"/>
        <y-alert title="信息提示的文案" color="info"/>
        <y-alert title="主要提示的文案" color="primary"/>
        <y-alert title="成功提示的文案" color="success"/>
        <y-alert title="警告提示的文案" color="warning"/>
      </y-accordion-item>
      <y-accordion-item title="效果">
        <p>effect:['light','dark','outline'],默认为'dark'</p>
        <y-alert title="注意提示的文案" color="attention"/>
        <y-alert title="错误提示的文案" color="danger"/>
        <y-alert title="信息提示的文案" color="info"/>
        <y-alert title="主要提示的文案" color="primary"/>
        <y-alert title="成功提示的文案" color="success"/>
        <y-alert title="警告提示的文案" color="warning"/>
        <y-alert title="注意提示的文案" effect="light" color="attention"/>
        <y-alert title="错误提示的文案" effect="light" color="danger"/>
        <y-alert title="信息提示的文案" effect="light" color="info"/>
        <y-alert title="主要提示的文案" effect="light" color="primary"/>
        <y-alert title="成功提示的文案" effect="light" color="success"/>
        <y-alert title="警告提示的文案" effect="light" color="warning"/>
        <y-alert title="注意提示的文案" effect="outline" color="attention"/>
        <y-alert title="错误提示的文案" effect="outline" color="danger"/>
        <y-alert title="信息提示的文案" effect="outline" color="info"/>
        <y-alert title="主要提示的文案" effect="outline" color="primary"/>
        <y-alert title="成功提示的文案" effect="outline" color="success"/>
        <y-alert title="警告提示的文案" effect="outline" color="warning"/>
      </y-accordion-item>
      <y-accordion-item title="自定义关闭选项">
        <p>自定义关闭选项[不显示关闭按钮,显示为自定义文字,显示关闭按钮(默认)]</p>
        <y-alert title="注意提示的文案"  color="attention"  :closable="false"/>
        <y-alert title="错误提示的文案"  color="danger" close-text="知道了"/>
        <y-alert title="信息提示的文案"  color="info"/>
      </y-accordion-item>
      <y-accordion-item title="图标">
        <div class="row">
          <p>图标</p>
            <y-alert title="注意提示的文案" color="attention" show-icon/>
            <y-alert title="错误提示的文案" color="danger" show-icon/>
            <y-alert title="信息提示的文案" color="info" show-icon/>
            <y-alert title="主要提示的文案" color="primary" show-icon/>
            <y-alert title="成功提示的文案" color="success" show-icon/>
            <y-alert title="警告提示的文案" color="warning" show-icon/>
        </div>
      </y-accordion-item>
      <y-accordion-item title="图标文字居中">
        <p>图标文字居中(center)</p>
          <y-alert title="注意提示的文案" color="attention" show-icon center/>
          <y-alert title="错误提示的文案" color="danger" show-icon center/>
          <y-alert title="信息提示的文案" color="info" show-icon center/>
          <y-alert title="主要提示的文案" color="primary" show-icon center/>
          <y-alert title="成功提示的文案" color="success" show-icon center/>
          <y-alert title="警告提示的文案" color="warning" show-icon center/>
      </y-accordion-item>
      <y-accordion-item title="带有辅助性文字(有图标)">
        <div class="row">
          <p>带有辅助性文字(有图标)</p>
            <y-alert
              title="带辅助性文字介绍"
              color="attention"
              show-icon
              description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
            </y-alert>
            <y-alert
              title="带辅助性文字介绍"
              color="danger"
              show-icon
              description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
            </y-alert>
            <y-alert
              title="带辅助性文字介绍"
              color="info"
              show-icon
              description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
            </y-alert>
            <y-alert
              title="带辅助性文字介绍"
              color="primary"
              show-icon
              description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
            </y-alert>
            <y-alert
              title="带辅助性文字介绍"
              color="success"
              show-icon
              description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
            </y-alert>
            <y-alert
              title="带辅助性文字介绍"
              color="warning"
              show-icon
              description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
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
