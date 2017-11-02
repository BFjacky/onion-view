<template>
  <div class="back" v-bind:class="{touchStart:touchStart,touchEnd:touchEnd}" v-on:touchstart="backStart" v-on:touchend="backEnd" v-on:touchmove="isBack">

  </div>
</template>
<script>
let beginX = 0;
let beginY = 0;
let nowX = 0;
let nowY = 0;
//判断touch是否生效的flag
let flag = true;
export default {
  data: function() {
    return {
      touchStart: false,
      touchEnd: false
    };
  },
  methods: {
    backStart: function(e) {
      this.touchStart = true;
      this.touchEnd = false;
      flag = true;
      beginX = e.touches[0].screenX;
      nowX = beginX;
      beginY = e.touches[0].screenY;
      nowY = beginY;
    },
    backEnd: function() {
      this.touchStart = false;
      this.touchEnd = true;
      if (flag) {
        this.$router.go(-1);
      }
    },
    //如果手指按下后悔，从按钮上移开应该记录这件事
    isBack: function(e) {
      nowX = e.touches[0].screenX;
      nowY = e.touches[0].screenY;
      if (Math.abs(nowX - beginX) >= 50 || Math.abs(nowY - beginY) >= 50) {
        flag = false;
      }
    }
  }
};
</script>
<style scoped>
.back {
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 70px;
  height: 50px;
  background-image: url(../assets/back.png);
  background-position: center center;
  background-size: cover;
  float: right;
  z-index: 100000;
  opacity: 0.5;
}
@keyframes bigger {
  0% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1.5, 1.5);
  }
}
@keyframes smaller {
  0% {
    transform: scale(1.5, 1.5);
  }
  100% {
    transform: scale(1, 1);
  }
}
.touchStart {
  animation-name: bigger;
  animation-duration: 100ms;
  animation-fill-mode: forwards;
}
.touchEnd {
  animation-name: smaller;
  animation-duration: 100ms;
  animation-fill-mode: forwards;
}
</style>
