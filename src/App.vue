<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Dashboard from "./components/Dashboard";

export default {
  name: "App",
  components: {
    HelloWorld,
    Dashboard
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
