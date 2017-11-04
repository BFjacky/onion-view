<template>
<div class="all">
  <back></back>
  <group>
      <x-input title="密码" v-model="value" type="password" class="pswd-input" @on-change="isCorrect"></x-input>
  </group>
</div>
</template>
<script>
import axios from "axios";
import { XInput, Group } from "vux";
import back from "./background";
const host = "http://www.dyycyf.top";
const url = "/login";
export default {
  data: function() {
    return {
      value: "",
      directlyLogin: false
    };
  },
  created: async function() {
    let self = this;

    let res = await axios.get(host + url + "?islogin=true", {
      withCredentials: true
    });
    console.log("created:", res.data.login);
    //如果后端允许登陆
    if (res.data.login === "success") {
      self.$router.push("/home");
    }
  },
  methods: {
    isCorrect: async function() {
      let self = this;
      //将密码发送至后端检查是否输入正确
      let res = await axios.get(
        host + url + "?islogin=true&pswd=" + self.value,
        {
          withCredentials: true
        }
      );
      //如果后端允许登陆
      if (res.data.login === "success") {
        self.$router.push("/home");
      }
    }
  },
  components: {
    XInput,
    Group,
    back
  }
};
</script>
<style scoped>
.all {
  width: 100%;
  height: 100%;
}
.pswd-input {
  font-size: 25px;
  opacity: 0.5;
  background-color: #fdefe2;
}
</style>
