<!-- <template>
  <div id="app" class="">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template> -->
<template>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>

  <body id="app">
    <NavMenu />
    <router-view></router-view>
  </body>

  </html>
</template>

<script>
import NavMenu from './components/NavMenu.vue'

export default {
  name: 'App',
  components: {
    NavMenu
  },
  data() {
    return {
      
    }
  },
  computed: {
  }
}
</script>

<style>
body,
html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 100%;
  /* font-family: 'Titillium Web', sans-serif; */
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Titillium Web', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  background-image: url("@/assets/bg-3.jpg");
  background: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
