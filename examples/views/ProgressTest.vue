<template>
  <div class="app-container">
    <y-accordion>
      <y-accordion-item title="线形进度条">
        <p>线形进度条(status:[null,'success','warning','exception'])</p>
        <y-progress :percentage="50"/>
        <y-progress :percentage="50" status="success"/>
        <y-progress :percentage="50" status="warning"/>
        <y-progress :percentage="50" status="exception"/>
      </y-accordion-item>
      <y-accordion-item title="百分比内显">
        <p>百分比内显(text-inside:true),可通过stroke-width设置宽度</p>
        <y-progress :percentage="50" :text-inside="true" :stroke-width="16"/>
        <y-progress :percentage="60" :text-inside="true" :stroke-width="18" status="success"/>
        <y-progress :percentage="70" :text-inside="true" :stroke-width="20" status="warning"/>
        <y-progress :percentage="80" :text-inside="true" :stroke-width="22" status="exception"/>
      </y-accordion-item>
      <y-accordion-item title="自定义颜色">
        <p>自定义颜色</p>
        <y-progress :percentage="50" color="#409eff"/>
        <y-progress :percentage="60" :color="calColor"/>
        <y-progress :percentage="70" :color="customColors"/>
      </y-accordion-item>
      <y-accordion-item title="环形进度条">
        <p>环形进度条(type:'circle'),可通过width设置大小</p>
        <y-progress type="circle" :percentage="25" :width="60"/>
        <y-progress type="circle" :percentage="100" status="success" :width="60">
          <template #icon>
            <i class="fa fa-minus-circle" aria-hidden="true"></i>
          </template>
        </y-progress>
        <y-progress type="circle" :percentage="70" status="warning" :width="60">
          <template v-slot:icon>
            <i class="fa fa-question-circle" aria-hidden="true"></i>
          </template>
        </y-progress>
        <y-progress type="circle" :percentage="50" status="exception" :width="60">
          <template v-slot:icon>
            <i class="fa fa-times-circle" aria-hidden="true"></i>
          </template>
        </y-progress>
      </y-accordion-item>
      <y-accordion-item title="仪表盘">
        <p>仪表盘</p>
        <y-progress type="dashboard" :percentage="60" :color="customColors"/>
      </y-accordion-item>
      <y-accordion-item title="自定义显示内容">
        <p>自定义显示内容(format)</p>
        <y-progress :percentage="100" :format="format"/>
      </y-accordion-item>
    </y-accordion>
  </div>
</template>

<script>
export default {
  setup () {
    const format = (percentage) => {
      return percentage === 100 ? '满' : `${percentage}%`
    }
    const calColor = (percentage) => {
      if (percentage < 30) {
        return '#909399'
      } else if (percentage < 70) {
        return '#e6a23c'
      } else {
        return '#67c23a'
      }
    }
    return {
      calColor,
      format,
      customColors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.y-progress + .y-progress{
  margin-top:10px;
}
.app-container p{
  color: #555;
  font-size: 12px;
}
.y-progress--circle + .y-progress--circle{
  margin-left: 10px;
}
</style>
