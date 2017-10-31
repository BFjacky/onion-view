<template>
<div class="all">
  <grid cols='3' class="grid">
    <grid-item  class="gridItem"  :link="{ path: '/schedule'}" >
      <img class="img" slot="icon" src="../../assets/schedule.png" >
    </grid-item>
        <grid-item  class="gridItem">
      <img class="img" slot="icon" src="../../assets/whether.png" >
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
    GridItem,
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
  position: relative;
  transform: scale(6, 8) translateY(90%);
}
.spanTitle {
  display: block;
  text-align: center;
  color: #666;
  font-size: 40px;
  transform: translateY(500%);
}
</style>

