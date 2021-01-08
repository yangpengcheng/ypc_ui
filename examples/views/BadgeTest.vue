<template>
  <div class="app-container">
    <y-accordion>
      <y-accordion-item title="颜色">
        <p>color:['attention','danger','info','primary','success','warning'],默认为'primary'</p>
        <y-badge :value="3" color="attention">
          <y-button plain>点赞</y-button>
        </y-badge>
        <y-badge :value="3" color="danger">
          <y-button plain>点赞</y-button>
        </y-badge>
        <y-badge :value="3" color="info">
          <y-button plain>点赞</y-button>
        </y-badge>
        <y-badge :value="3" color="primary">
          <y-button plain>点赞</y-button>
        </y-badge>
        <y-badge :value="3" color="success">
          <y-button plain>点赞</y-button>
        </y-badge>
        <y-badge :value="3" color="warning">
          <y-button plain>点赞</y-button>
        </y-badge>
      </y-accordion-item>
      <y-accordion-item title="自定义最大值">
        <p>自定义最大值(max)</p>
        <y-badge :value="0" color="attention" :max="99">
          <y-button plain>点赞</y-button>
        </y-badge>
        <y-badge :value="98" color="danger" :max="99">
          <y-button plain>点赞</y-button>
        </y-badge>
        <y-badge :value="99" color="info" :max="99">
          <y-button plain>点赞</y-button>
        </y-badge>
        <y-badge :value="100" color="primary" :max="99">
          <y-button plain>点赞</y-button>
        </y-badge>
        <y-badge :value="101" color="success" :max="99">
          <y-button plain>点赞</y-button>
        </y-badge>
        <y-badge :value="102" color="warning" :max="99">
          <y-button plain>点赞</y-button>
        </y-badge>
      </y-accordion-item>
      <y-accordion-item title="自定义内容">
        <p>自定义内容(value)</p>
        <y-badge value="max" color="attention">
          <y-button plain>点赞</y-button>
        </y-badge>
        <y-badge value="max" color="danger">
          <y-button plain>点赞</y-button>
        </y-badge>
        <y-badge value="max" color="info">
          <y-button plain>点赞</y-button>
        </y-badge>
        <y-badge value="max" color="primary">
          <y-button plain>点赞</y-button>
        </y-badge>
        <y-badge value="max" color="success">
          <y-button plain>点赞</y-button>
        </y-badge>
        <y-badge value="max" color="warning">
          <y-button plain>点赞</y-button>
        </y-badge>
      </y-accordion-item>
      <y-accordion-item title="小红点">
        <p>小红点(is-dot)</p>
        <y-badge is-dot>消息</y-badge>
        <y-badge is-dot>
          <y-button plain>点赞</y-button>
        </y-badge>
      </y-accordion-item>
    </y-accordion>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.app-container p{
  color: #555;
  font-size: 12px;
  margin-bottom: 10px;
}
.y-badge + .y-badge{
  margin-left:40px;
}
</style>
