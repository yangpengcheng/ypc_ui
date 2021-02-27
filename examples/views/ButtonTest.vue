<template>
  <div>
    <y-accordion>
      <y-accordion-item title="颜色">
        <p>
          color:['attention','danger','info','primary','success','warning'],默认为'primary'
        </p>
        <y-button color="attention">注意按钮</y-button>
        <y-button color="danger">危险按钮</y-button>
        <y-button color="info">信息按钮</y-button>
        <y-button color="primary">主要按钮</y-button>
        <y-button color="success">成功按钮</y-button>
        <y-button color="warning">警告按钮</y-button>
      </y-accordion-item>
      <y-accordion-item title="朴素按钮">
        <p>plain</p>
        <y-button plain color="attention">注意按钮</y-button>
        <y-button plain color="danger">危险按钮</y-button>
        <y-button plain color="info">信息按钮</y-button>
        <y-button plain color="primary">主要按钮</y-button>
        <y-button plain color="success">成功按钮</y-button>
        <y-button plain color="warning">警告按钮</y-button>
      </y-accordion-item>
      <y-accordion-item title="圆角按钮">
        <p>round</p>
        <y-button round color="attention">注意按钮</y-button>
        <y-button round color="danger">危险按钮</y-button>
        <y-button round color="info">信息按钮</y-button>
        <y-button round color="primary">主要按钮</y-button>
        <y-button round color="success">成功按钮</y-button>
        <y-button round color="warning">警告按钮</y-button>
      </y-accordion-item>
      <y-accordion-item title="圆形按钮">
        <p>circle</p>
        <y-button circle color="attention" iconClass="bi-alarm"></y-button>
        <y-button circle color="danger" iconClass="bi-alarm"></y-button>
        <y-button circle color="info" iconClass="bi-alarm"></y-button>
        <y-button circle color="primary" iconClass="bi-alarm"></y-button>
        <y-button circle color="success" iconClass="bi-alarm"></y-button>
        <y-button circle color="warning" iconClass="bi-alarm"></y-button>
      </y-accordion-item>
      <y-accordion-item title="禁用状态">
        <p>disabled</p>
        <y-button disabled color="attention">注意按钮</y-button>
        <y-button disabled color="danger">危险按钮</y-button>
        <y-button disabled color="info">信息按钮</y-button>
        <y-button disabled color="primary">主要按钮</y-button>
        <y-button disabled color="success">成功按钮</y-button>
        <y-button disabled color="warning">警告按钮</y-button><br>
        <y-button disabled plain color="attention">注意按钮</y-button>
        <y-button disabled plain color="danger">危险按钮</y-button>
        <y-button disabled plain color="info">信息按钮</y-button>
        <y-button disabled plain color="primary">主要按钮</y-button>
        <y-button disabled plain color="success">成功按钮</y-button>
        <y-button disabled plain color="warning">警告按钮</y-button>
      </y-accordion-item>
      <y-accordion-item title="尺寸">
        <p>size:['large','default','small'],默认为'small'</p>
        <y-button size="large" color="danger">危险按钮</y-button>
        <y-button size="large" round color="danger">危险按钮</y-button>
        <y-button size="large" circle color="danger" iconClass="bi-alarm"></y-button>
        <y-button size="default" color="info">信息按钮</y-button>
        <y-button size="default" round color="info">信息按钮</y-button>
        <y-button size="default" circle color="info" iconClass="bi-alarm"></y-button>
        <y-button size="small" color="primary">主要按钮</y-button>
        <y-button size="small" round color="primary">主要按钮</y-button>
        <y-button size="small" circle color="primary" iconClass="bi-alarm"></y-button>
      </y-accordion-item>
      <y-accordion-item title="图标(图标类名)">
        <p>iconClass</p>
        <y-button size="large" color="attention" iconClass="bi-alarm">闹钟</y-button>
        <y-button size="large" round color="attention" iconClass="bi-alarm">闹钟</y-button>
        <y-button size="large" circle color="attention" iconClass="bi-alarm"/>
        <y-button size="default" color="danger" iconClass="bi-alarm">闹钟</y-button>
        <y-button size="default" round color="danger" iconClass="bi-alarm">闹钟</y-button>
        <y-button size="default" circle color="danger" iconClass="bi-alarm"/>
        <y-button size="small" color="info" iconClass="bi-alarm">闹钟</y-button>
        <y-button size="small" round color="info" iconClass="bi-alarm">闹钟</y-button>
        <y-button size="small" circle color="info" iconClass="bi-alarm"/>
      </y-accordion-item>
      <y-accordion-item title="图标(默认插槽)">
        <p>默认插槽</p>
        <y-button size="large" color="attention">
          <i class="bi bi-alarm large y-button__icon"/><span>闹钟</span>
        </y-button>
        <y-button size="large" round color="attention">
          <i class="bi bi-alarm large y-button__icon"/><span>闹钟</span>
        </y-button>
        <y-button size="large" circle color="attention">
          <i class="bi bi-alarm large y-button__icon"/>
        </y-button>
        <y-button size="default" color="danger">
          <i class="bi bi-alarm default y-button__icon"/><span>闹钟</span>
        </y-button>
        <y-button size="default" round color="danger">
          <i class="bi bi-alarm default y-button__icon"/><span>闹钟</span>
        </y-button>
        <y-button size="default" circle color="danger">
          <i class="bi bi-alarm default y-button__icon"/>
        </y-button>
        <y-button size="small" color="info">
          <i class="bi bi-alarm small y-button__icon"/><span>闹钟</span>
        </y-button>
        <y-button size="small" round color="info">
          <i class="bi bi-alarm small y-button__icon"/><span>闹钟</span>
        </y-button>
        <y-button size="small" circle color="info">
          <i class="bi bi-alarm small y-button__icon"/>
        </y-button>
      </y-accordion-item>
      <y-accordion-item title="加载中">
        <p>loading</p>
        <y-button loading>
          <template #loadingIcon>
            <i class="fa fa-spinner fa-pulse"></i>
          </template>
          主要按钮</y-button
        >
      </y-accordion-item>
      <y-accordion-item title="防抖节流">
        <p>防抖:[wait=0], [options=],</p>
        <p>[wait=0] (number): 需要延迟的毫秒数</p>
        <p>[options.leading=false] (boolean): 指定在延迟开始前调用</p>
        <p>[options.maxWait] (number): 设置 func 允许被延迟的最大值</p>
        <p>[options.trailing=true] (boolean): 指定在延迟结束后调用</p>
        <y-button :debounce="debounce" @click="click">注意按钮</y-button>
        <p>节流:[wait=0], [options=],</p>
        <p>[wait=0] (number): 需要节流的毫秒</p>
        <p>[options.leading=true] (boolean): 指定调用在节流开始前</p>
        <p>[options.trailing=true] (boolean): 指定调用在节流结束后。</p>
        <y-button :throttle="throttle" @click="click">注意按钮</y-button>
      </y-accordion-item>
      <y-accordion-item title="自定义样式">
        <y-button class="customer">自定义按钮</y-button>
      </y-accordion-item>
    </y-accordion>
  </div>
</template>

<script>
export default {
  setup () {
    const Doptions = { leading: true, maxWait: 3000, trailing: false }
    const Toptions = { leading: true, trailing: false }
    const debounce = { wait: 2000, options: Doptions }
    const throttle = { wait: 2000, options: Toptions }
    const click = (evt) => {
      console.log('click', evt.target)
    }
    return {
      debounce,
      throttle,
      click
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
.y-button + .y-button {
  margin-left: 5px;
}
.customer{
  color: #c862cf;
  background-color: white;
  border: 1px solid #c862cf;
  padding: 10px 20px;
  border-radius: 6px;
}
</style>
