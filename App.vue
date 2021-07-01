<template>
  <div id="app">
    <router-view/>
  </div>
</template>

  
<style lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

body{
  background: white;
  border-width: 30px;
  border-style: solid;
  border-color: $light-purple;
  
}
#app {
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
