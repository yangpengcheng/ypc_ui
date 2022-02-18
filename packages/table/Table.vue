<template>
  <table border="0" cellspacing="0" cellpadding="" class="y-table">
    <thead>
      <tr>
        <th style="width: 100px">Month</th>
        <th style="width: 100px">Money</th>
      </tr>
    </thead>
    <tbody ref="tbody">
      <tr v-for="item of tdata" :key="item">
        <slot name="tbody" :row="item"></slot>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { onMounted, ref } from 'vue'
export default {
  name: 'YTable',
  setup() {
    const tbody = ref(null)
    onMounted(() => {
      console.log(
        tbody.value.children[0].children[0].getAttribute('class'),
        tbody.value.children[0].children[0].getAttribute('label')
      )
    })
    return {
      tbody,
      tdata: [
        {
          month: 'January',
          money: '$100'
        },
        {
          month: 'February',
          money: '$80'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
tr th {
  font-weight: normal;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}
tr td {
  border-bottom: 1px solid gray;
  padding: 2px 0px;
}
.y-table {
  text-align: center;
  width: 100%;
  font-size: 14px;
}
</style>
