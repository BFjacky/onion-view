<template>
<div class="all">
  <grid cols='3' class="grid">
    <grid-item  class="gridItem"  :link="{ path: '/schedule'}" >
      <img  class="img"slot="icon" src="../../assets/schedule.png" >
    </grid-item>
        <grid-item  class="gridItem" :link="{ path: '/whether'}" >
      <img  class="img"slot="icon" src="../../assets/whether.png" >
    </grid-item>
       <grid-item  class="gridItem">
      <img class="img" slot="icon" src="../../assets/album.png" >
    </grid-item>
           <grid-item  class="gridItem">
      <img class="img" slot="icon" src="../../assets/everyday.png" >
    </grid-item>
  </grid>
</div>
</template>
<script>
import { Grid, GridItem } from "vux";
export default {
  methods: {
    goSchedule: function() {
      console.log("123");
      this.$router.push({ path: "/schedule" });
    }
  },
  components: {
    Grid,
    GridItem
  }
};
</script>
<style scoped>
.all {
  height: 100%;
  width: 100%;
}
.grid {
  height: 100%;
  width: 100%;
}
.gridItem {
  height: 25%;
  width: 100%;
  padding: 0;
  margin: 0px;
}
.img {
  transform: translateY(250%) scale(2,2.5);
}
</style>

