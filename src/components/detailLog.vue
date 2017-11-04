<template>
    <div id="all" class='all'>
        <div id="mask" class="mask " v-bind:class="{fadeIn:fadeIn,fadeOut:fadeOut}" v-show="isShow"></div>
        <div id="dialog" class="dialog " v-bind:class="{zoomIn:fadeIn,zoomOut:fadeOut}" v-show="isShow">
            <div v-for="course in content" v-bind:key="course.name" class="dialog_content">
              <div class="detailBox">
                <div class="contentStr"> {{course.name}}</div>
                <div class="contentStr"> {{course.teacher}}</div>
                <div class="contentStr">{{course.count}}</div>
                <div class="contentStr">{{course.dayOfWeek}}</div>
                <div class="contentStr">{{course.room}}</div>
                <div class="contentStr">{{course.weeks}}</div>
              </div>
            </div>
            <div v-on:click="openDialog" class="dialog_confirm_button">
                确 认
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["content", "display"],
  data: function() {
    return {
      fadeIn: false,
      fadeOut: false,
      isShow: false
    };
  },
  created: function() {

  },
  watch: {
    display: function() {
      if (this.display) {
        this.openDialog();
      }
    }
  },
  methods: {
    openDialog: async function() {
      if (!this.isShow) {
        this.isShow = true;
        this.fadeIn = true;
      } else {
        this.fadeIn = false;
        this.fadeOut = true;
        this.display = false;
        await this.pause(150);
        this.isShow = false;
        this.fadeOut = false;
      }
    },
    pause: function(time) {
      return new Promise((resolve, reject) => {
        setTimeout(function() {
          resolve("ok");
        }, time);
      });
    }
  }
};
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
}
.detailBox {
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
}
.contentStr {
  width: 100%;
  font-size: 16px;
  font-weight: 700;
}
.all {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: #fbf9fe;
}

.mask {
  background-color: rgb(0, 0, 0);
  opacity: 0.6;
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  margin: 0px;
  padding: 0px;
  display: block;
  z-index: 10000;
}

.dialog {
  background-color: white;
  position: fixed;
  display: flex;
  left: 50%;
  top: 50%;
  flex-direction: column;
  opacity: 1;
  width: 200px;
  text-align: center;
  border-radius: 7px;
  z-index: 10000;
}

.dialog_content {
  font-size: 10px;
}

.dialog_confirm_button {
  color: #ffa113;
  height: 33px;
  border-top: 1px solid #bebcbc;
  text-indent: 10px;
  letter-spacing: 10px;
  line-height: 33px;
  overflow: hidden;
  font-size: 20px;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 0.6;
  }
}

@keyframes fadeOut {
  from {
    opacity: 0.6;
  }
  to {
    opacity: 0;
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.7, 0.7) translate(-71%, -71%);
  }
  to {
    opacity: 1;
    transform: scale(1, 1) translate(-50%, -50%);
  }
}

@keyframes zoomOut {
  from {
    opacity: 1;
    transform: scale(1, 1) translate(-50%, -50%);
  }
  to {
    opacity: 0;
    transform: scale(0.7, 0.7) translate(-71%, -71%);
  }
}

.fadeIn {
  animation-duration: 200ms;
  animation-name: fadeIn;
}

.fadeOut {
  animation-duration: 200ms;
  animation-name: fadeOut;
}

.zoomIn {
  animation-duration: 200ms;
  animation-name: zoomIn;
  animation-fill-mode: forwards;
}

.zoomOut {
  animation-duration: 200ms;
  animation-name: zoomOut;
  animation-fill-mode: forwards;
}
</style>
