<template>
  <td>
    <slot :item="item.row">
      {{ item.row[prop] }}
    </slot>
  </td>
</template>

<script>
export default {
  name: 'YTableColumn',
  props: {
    item: {
      type: Object
    },
    prop: {
      type: String
    }
  },
  setup(props) {
    // console.log(props.item)
  }
}
</script>
