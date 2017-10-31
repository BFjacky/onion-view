<template>
  <div class="schePage">
      <div class="header">
        <sche-header  v-bind:curr-week="currWeek"></sche-header>
      </div>
      <div class="main" v-on:touchstart="touchStart" v-on:touchmove = "touchMove" v-on:touchend="touchEnd">
        <course v-bind:curr-week="currWeek" url="/DyySche" class="course1" v-bind:class="{moveLeft1:left,moveRight1:right}"></course>
        <course v-bind:curr-week="currWeek" url="/CyfSche" class="course2" v-bind:class="{moveLeft2:left,moveRight2:right}"></course>
      </div>
  </div>
</template>
<script>
import scheHeader from "./scheHeader";
import course from "./course";
//滑动生效距离
const actLength = 50;
export default {
  name: "schedule",
  data: function() {
    return {
      currWeek: 0,
      left: false,
      right: false,
      beginScreenX: 0,
      beginScreenY: 0,
      nowScreenX: 0,
      nowScreenY: 0,
      prepared: true
    };
  },
  methods: {
    moveLeft: function() {
      this.left = true;
      this.right = false;
    },
    moveRight: function() {
      this.left = false;
      this.right = true;
    },
    touchStart: function(e) {
      this.beginScreenX = e.touches[0].screenX;
      this.beginScreenY = e.touches[0].screenY;
      this.nowScreenX = e.touches[0].screenX;
      this.nowScreenY = e.touches[0].screenY;
    },
    touchMove: function(e) {
      if (this.prepared) {
        this.nowScreenX = e.touches[0].screenX;
        this.nowScreenY = e.touches[0].screenY;
        //横向滑动距离为纵向滑动距离的 2 倍才视为生效
        let flag =
          Math.abs(this.nowScreenX - this.beginScreenX) /
          Math.abs(this.nowScreenY - this.beginScreenY);
        if (flag >= 2) {
          flag = true;
        }
        //判断滑动方向,true:right ,false:left;
        let direct = false;
        if (this.nowScreenX - this.beginScreenX >= 0) {
          direct = true;
        }
        //滑动手势生效
        if (
          Math.abs(this.nowScreenX - this.beginScreenX) >= actLength &&
          flag
        ) {
          if (direct) {
            //向右
            console.log("right");
            this.moveRight();
          } else {
            //向左
            console.log("left");
            this.moveLeft();
          }
          //直到touchEnd 事件触发都不会再使手势生效
          this.prepared = false;
        }
      }
    },
    touchEnd: function(e) {
      this.prepared = true;
      this.beginScreenX = 0;
      this.beginScreenY = 0;
      this.nowScreenX = 0;
      this.nowScreenY = 0;
    }
  },
  created: function() {
    let myData = new Date();
    let beginTime = "2017-08-28 00:00:00";
    let beginTimes = Date.parse(new Date(beginTime.replace(/-/g, "/"))); //指定时间的毫秒数
    let betweenTimes = myData.getTime() - beginTimes;
    //因为国庆少算了一周
    let betweenWeeks = betweenTimes / 1000 / 3600 / 24 / 7;
    this.currWeek = parseInt(betweenWeeks);
  },
  components: {
    course,
    scheHeader
  }
};
</script>
<style scoped>
.schePage {
  width: 100%;
  height: 100%;
}
.header {
  height: 10%;
  width: 100%;
}
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
}
.course1 {
  position: absolute;
  left: 0%;
}
.course2 {
  position: absolute;
  left: 100%;
  top: 0px;
}

@keyframes mf1 {
  from {
    left: 0%;
  }
  to {
    left: -100%;
  }
}
.moveLeft1 {
  animation-name: mf1;
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}
@keyframes mf2 {
  from {
    left: 100%;
  }
  to {
    left: 0%;
  }
}
.moveLeft2 {
  animation-name: mf2;
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}

@keyframes mr1 {
  from {
    left: -100%;
  }
  to {
    left: 0%;
  }
}
.moveRight1 {
  animation-name: mr1;
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}
@keyframes mr2 {
  from {
    left: 0%;
  }
  to {
    left: 100%;
  }
}
.moveRight2 {
  animation-name: mr2;
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}
</style>
