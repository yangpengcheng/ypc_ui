<template>
  <y-menu
    backgroundColor="#ecb390"
    activeTextColor="rgb(122,117,53)"
  >
    <y-menu-item iconClass="bi bi-briefcase" index="/button1">
      <template #title>组件示例</template>
    </y-menu-item>
    <y-sub-menu index="3">
      <template #title>
        <y-menu-item iconClass="bi bi-briefcase" index="/button">
          <template #title>组件示例</template>
        </y-menu-item>
      </template>
      <template #default>
        <y-menu-item iconClass="bi bi-hand-index" index="/button">
          <template #title>按钮</template>
        </y-menu-item>
        <y-menu-item iconClass="bi bi-input-cursor" index="/input">
          <template #title>输入框</template>
        </y-menu-item>
      </template>
    </y-sub-menu>
  </y-menu>
</template>

<script>
export default {}
</script>

<style>
</style>
