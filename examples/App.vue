<template>
  <y-row space="5px" style="background:gray">
    <y-col :xs="24" :sm="12" :md="6">
      <y-card iconClass="bi bi-twitter" value="100" title="twitter" percent="+5.00%" description="较上周" class="twitter" />
    </y-col>
    <y-col :xs="24" :sm="12" :md="6">
      <y-card iconClass="bi bi-google"  value="100" title="google" percent="-0.23%" description="较上周" class="google"/>
    </y-col>
    <y-col :xs="24" :sm="12" :md="6">
      <y-card iconClass="bi bi-bootstrap" value="100" title="bootstrap" percent="+10.1%" description="较上周" class="bootstrap"/>
    </y-col>
    <y-col :xs="24" :sm="12" :md="6">
      <y-card iconClass="bi bi-instagram" value="100" title="instagram" percent="+50%" description="较上周" class="instagram"/>
    </y-col>
  </y-row>
</template>
<script>
export default {
  setup () {
    return {
      input: ''
    }
  }
}
</script>
<style lang="scss" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.instagram,
.bootstrap,
.google,
.twitter{
  background-color: #fff;
}
</style>
