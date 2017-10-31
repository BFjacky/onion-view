<template>
  <div id="app">
    <router-view/>
    <back></back>
  </div>
</template>

<script>
import back from "./components/backButton"
export default {
  name: 'app',
  components:{
    back,
  }
}
</script>

<style>
body,html{
  margin:0;
  padding: 0;
}
#app{
  width:100vw;
  height:100vh;
}
</style>
