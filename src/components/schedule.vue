<template>
  <div class="schePage">
      <div class="header">
        <sche-header  v-bind:curr-week="currWeek" v-bind:choise1="isChoise1" v-bind:choise2="isChoise2"></sche-header>
      </div>
      <div class="main">
         <course v-bind:curr-week="currWeek"></course>
      </div>
  </div>
</template>
<script>
import scheHeader from "./scheHeader";
import course from "./course";
export default {
  name: "schedule",
  data:function(){
    return {
      currWeek:0,
      isChoise1:false,
      isChoise2:true,
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
    course: course,
    scheHeader: scheHeader
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
}
</style>
