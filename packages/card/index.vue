<template>
  <div class="y-card">
    <div class="left">
      <h3>{{ value }}</h3>
      <p>{{ title }}</p>
      <div>
        <span :class="percentClass">{{ percent }}</span>
        <span>{{ description }}</span>
      </div>
    </div>
    <div class="right">
      <i :class="['bi', iconClass, 'icon']" />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'YCard',
  props: {
    iconClass: {
      type: String
    },
    value: {
      type: [String, Number],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    percent: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  },
  setup (props) {
    const percentClass = computed(() => {
      if (props.percent.startsWith('-')) {
        return 'dec'
      } else {
        return 'inc'
      }
    })
    return {
      percentClass
    }
  }
}
</script>

<style lang="scss" scoped>
.y-card {
  display: flex;
  height: 130px;
  padding: 24px 20px;
  color: rgb(178, 72, 255);
}
.left {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  margin-right: 16px;
  height: 100%;
}
.right {
  flex-grow: 1;
  width: 48px;
  color: inherit;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}
.icon {
  width: 48px;
  height: 48px;
  font-size: 48px;
  border-radius: 50%;
}
h3 {
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 8px;
  color: #000;
}
p {
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.625;
  color: #6c757d;
  text-align: left;
}
span {
  color: #6c757d;
  font-size: 13px;
}
.inc {
  color: rgb(48, 204, 35);
  background-color: rgba(48, 204, 35, 0.2);
  margin-right: 5px;
  padding: 2px 4px;
}
.dec {
  color: rgb(255, 72, 48);
  background-color: rgba(255, 72, 48, 0.2);
  margin-right: 5px;
  padding: 2px 4px;
}
</style>
