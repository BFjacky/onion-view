<template>
  <div class="loginBox">
      <div class ="accountBox">
        <input ref="ref1" class="account" v-on:focus="textHolder" v-on:blur="textLost" placeholder="账号"></input>
      </div>
      <div class ="pswdBox">
        <input ref="ref2" type="password" class="pswd"  v-on:focus="pswdHolder" v-on:blur="pswdLost" placeholder="密码"></input>
      </div>
      <div class ="btnBox">
        <div class="confirm" v-on:click="submitInfo"></div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'loginBox',
  props: [],
  methods: {
    textHolder: function () {
      this.$refs.ref1.placeholder = ''
      // console.log('text get focus!')
    },
    textLost: function () {
      this.$refs.ref1.placeholder = '账号'
      // console.log('text lost focus!')
    },
    pswdHolder: function () {
      this.$refs.ref2.placeholder = ''
      // console.log('pswd get focus!')
    },
    pswdLost: function () {
      this.$refs.ref2.placeholder = '密码'
      // console.log('pswd lost focus!')
    },
    submitInfo: function () {
      console.log(this.$refs.ref1.value + this.$refs.ref2.value)
    }
  }
}
</script>
<style scoped>
@keyframes surf{
  0% {
    transform: scale(1,1);
  }
  25% {
    transform: scale(1.15,1.15);
  }
  50%{
    transform: scale(1.3,1.3);
  }
  75%{
    transform: scale(1.15,1.15);
  }
  100%{
    transform: scale(1,1);
  }
}
input{
    border-width: 0px ;
    border-bottom: 2px solid black;
    background-color: inherit;
    width:100%;
    font-size:80px;
}
div {
  padding: 0px;
  margin: 0px;
}
.confirm{
  text-align: center;
  font-size: 70px;
  margin-top: 100px;
  width: 400px;
  height: 100px;
  border-radius: 50px;
  background-color: yellow;
  margin: 0 auto;
}
.confirm:active{
  animation-duration: 100ms;
  animation-name: surf;
  animation-fill-mode: forwards;
}
.loginBox {
  width: 600px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
}
.accountBox {
  width: 600px;
  height: 75px;
  display: flex;
}
.btnBox{
  margin-top: 100px;
  width: 600px;
  height: 75px;
}
.pswdBox {
  margin-top:50px;
  width: 600px;
  height: 75px;
  display: flex;
}
</style>
