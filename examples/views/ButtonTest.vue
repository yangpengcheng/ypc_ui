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
        <y-button circle color="attention">注</y-button>
        <y-button circle color="danger">危</y-button>
        <y-button circle color="info">信</y-button>
        <y-button circle color="primary">主</y-button>
        <y-button circle color="success">成</y-button>
        <y-button circle color="warning">警</y-button>
      </y-accordion-item>
      <y-accordion-item title="禁用状态">
        <p>disabled</p>
        <y-button disabled color="attention">注意按钮</y-button>
        <y-button disabled color="danger">危险按钮</y-button>
        <y-button disabled color="info">信息按钮</y-button>
        <y-button disabled color="primary">主要按钮</y-button>
        <y-button disabled color="success">成功按钮</y-button>
        <y-button disabled color="warning">警告按钮</y-button>
      </y-accordion-item>
      <y-accordion-item title="尺寸">
        <p>size:['big','medium','small','mini'],默认为'small'</p>
        <y-button size="large" color="attention">注意按钮</y-button>
        <y-button size="large" round color="attention">注意按钮</y-button>
        <y-button size="large" circle color="attention">注</y-button>
        <y-button size="medium" color="danger">危险按钮</y-button>
        <y-button size="medium" round color="danger">危险按钮</y-button>
        <y-button size="medium" circle color="danger">危</y-button>
        <y-button size="small" color="info">信息按钮</y-button>
        <y-button size="small" round color="info">信息按钮</y-button>
        <y-button size="small" circle color="info">信</y-button>
        <y-button size="mini" color="primary">主要按钮</y-button>
        <y-button size="mini" round color="primary">主要按钮</y-button>
        <y-button size="mini" circle color="primary">主</y-button>
      </y-accordion-item>
      <y-accordion-item title="图标(具名插槽)">
        <p>具名插槽(icon)(例:使用fontawesome)</p>
        <p>
          在html插入 &lt;link rel="stylesheet"
          href="https://cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"&gt;
        </p>
        <y-button size="large" color="attention">
          <template #icon>
            <i class="fa fa-check-square" aria-hidden="true" />
          </template>
          注意按钮
        </y-button>
        <y-button size="large" round color="attention">
          <template #icon>
            <i class="fa fa-check-square" aria-hidden="true" />
          </template>
          注意按钮</y-button
        >
        <y-button size="large" circle color="attention">
          <template #icon>
            <i class="fa fa-check-square" aria-hidden="true" />
          </template>
        </y-button>
        <y-button size="medium" color="danger">
          <template #icon>
            <i class="fa fa-check-square" aria-hidden="true" />
          </template>
          危险按钮
        </y-button>
        <y-button size="medium" round color="danger">
          <template #icon>
            <i class="fa fa-check-square" aria-hidden="true" />
          </template>
          危险按钮
        </y-button>
        <y-button size="medium" circle color="danger">
          <template #icon>
            <i class="fa fa-check-square" aria-hidden="true" />
          </template>
        </y-button>
        <y-button size="small" color="info">
          <template #icon>
            <i class="fa fa-check-square" aria-hidden="true" />
          </template>
          信息按钮
        </y-button>
        <y-button size="small" round color="info">
          <template #icon>
            <i class="fa fa-check-square" aria-hidden="true" />
          </template>
          信息按钮
        </y-button>
        <y-button size="small" circle color="info">
          <template #icon>
            <i class="fa fa-check-square" aria-hidden="true" />
          </template>
        </y-button>
        <y-button size="mini" color="primary">
          <template #icon>
            <i class="fa fa-check-square" aria-hidden="true" />
          </template>
          主要按钮
        </y-button>
        <y-button size="mini" round color="primary">
          <template #icon>
            <i class="fa fa-check-square" aria-hidden="true" />
          </template>
          主要按钮
        </y-button>
        <y-button size="mini" circle color="primary">
          <template #icon>
            <i class="fa fa-check-square" aria-hidden="true" />
          </template>
        </y-button>
      </y-accordion-item>
      <y-accordion-item title="图标(默认插槽)">
        <p>默认插槽(例:使用fontawesome)</p>
        <p>
          在html插入 &lt;link rel="stylesheet"
          href="https://cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"&gt;
        </p>
        <y-button size="large" color="attention">
          <template #default>
            <i
              class="fa fa-check-square y-button__icon large"
              aria-hidden="true"
            /><span>注意按钮</span>
          </template>
        </y-button>
        <y-button size="large" round color="attention">
          <template #default>
            <i
              class="fa fa-check-square y-button__icon large"
              aria-hidden="true"
            /><span>注意按钮</span>
          </template>
        </y-button>
        <y-button size="large" circle color="attention">
          <template #default>
            <i
              class="fa fa-check-square y-button__icon large"
              aria-hidden="true"
            />
          </template>
        </y-button>
        <y-button size="medium" color="danger">
          <template #default>
            <i
              class="fa fa-check-square y-button__icon medium"
              aria-hidden="true"
            /><span>危险按钮</span>
          </template>
        </y-button>
        <y-button size="medium" round color="danger">
          <template #default>
            <i
              class="fa fa-check-square y-button__icon medium"
              aria-hidden="true"
            /><span>危险按钮</span>
          </template>
        </y-button>
        <y-button size="medium" circle color="danger">
          <template #default>
            <i
              class="fa fa-check-square y-button__icon medium"
              aria-hidden="true"
            />
          </template>
        </y-button>
        <y-button size="small" color="info">
          <template #default>
            <i
              class="fa fa-check-square y-button__icon small"
              aria-hidden="true"
            /><span>信息按钮</span>
          </template>
        </y-button>
        <y-button size="small" round color="info">
          <template #default>
            <i
              class="fa fa-check-square y-button__icon small"
              aria-hidden="true"
            /><span>信息按钮</span>
          </template>
        </y-button>
        <y-button size="small" circle color="info">
          <template #default>
            <i
              class="fa fa-check-square y-button__icon small"
              aria-hidden="true"
            />
          </template>
        </y-button>
        <y-button size="mini" color="primary">
          <template #default>
            <i
              class="fa fa-check-square y-button__icon mini"
              aria-hidden="true"
            /><span>主要按钮</span>
          </template>
        </y-button>
        <y-button size="mini" round color="primary">
          <template #default>
            <i
              class="fa fa-check-square y-button__icon mini"
              aria-hidden="true"
            /><span>主要按钮</span>
          </template>
        </y-button>
        <y-button size="mini" circle color="primary">
          <template #default>
            <i
              class="fa fa-check-square y-button__icon mini"
              aria-hidden="true"
            />
          </template>
        </y-button>
      </y-accordion-item>
      <y-accordion-item title="加载中">
        <p>loading</p>
        <y-button disabled loading>
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
      <y-accordion-item title="结尾">
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
</style>
