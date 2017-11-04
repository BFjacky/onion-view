<template>
    <div class="allPage">
        <background></background>
       <login-box class="loginBox"></login-box>
    </div>
</template>
<script>
import loginBox from "./loginBox";
import background from "./background";
export default {
  name: "loginPage",
  props: [],
  components: {
    loginBox: loginBox,
    background: background
  }
};
</script>
<style scoped>
.allPage {
  width: 100%;
  height: 100%;
}
.loginBox {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
