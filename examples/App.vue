<template>
  <div id="nav">
    <router-link to="/button">Button</router-link> |
    <router-link to="/alert">Alert</router-link> |
    <router-link to="/badge">Badge</router-link> |
    <router-link to="/checkbox">Checkbox</router-link> |
    <router-link to="/input">Input</router-link> |
    <router-link to="/link">Link</router-link> |
    <router-link to="/radio">Radio</router-link>  |
    <router-link to="/switch">Switch</router-link> |
    <router-link to="/tag">Tag</router-link> |
    <router-link to="/slider">Slider</router-link> |
    <router-link to="/menu">Menu</router-link>
  </div>
  <router-view/>
</template>

<style>
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
</style>
