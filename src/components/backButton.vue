<template>
  <div class="back" v-bind:class="{clicking:clicking}" v-on:click="clickBack" v-on:animationend="clickEnd">

  </div>
</template>
<script>
export default {
  data: function() {
    return {
      clicking: false
    };
  },
  methods: {
    clickBack: function() {
      console.log("12213");
      this.clicking = true;
      this.$router.go(-1);
    },
    clickEnd: function() {
      this.clicking = false;
    }
  }
};
</script>
<style scoped>
.back {
  position: fixed;
  right: 50px;
  bottom: 200px;
  width: 150px;
  height: 110px;
  background-image: url(../assets/back.png);
  background-position: center center;
  background-size: cover;
  float: right;
  z-index: 100000;
}
@keyframes bigger {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.5, 1.5);
  }
  100% {
    transform: scale(1, 1);
  }
}
.clicking {
  animation-name: bigger;
  animation-duration: 300ms;
}
</style>
