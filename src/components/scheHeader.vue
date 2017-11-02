<template>
  <div class="header">
      <div class="header_up">
        <div class="litTitle">
          第{{currWeek}}周
        </div>
      </div>
      <div class="header_down">
          <div class="header_down_block">周一</div>
          <div class="header_down_block">周二</div>
          <div class="header_down_block">周三</div>
          <div class="header_down_block">周四</div>
          <div class="header_down_block">周五</div>
          <div class="header_down_block">周六</div>
          <div class="header_down_block">周日</div>
      </div>
  </div>
</template>
<script>
export default {
  name: "scheHeader",
  props: ["currWeek","choise1","choise2"],
  methods: {},
};
</script>
<style scoped>
div {
  margin: 0;
  padding: 0;
}
.header {
  width: 100%;
  height: 100%;
  background-color: black;
}
.header_up {
  height: 65%;
  width: 100%;
}
.litTitle {
  text-align: center;
  color: white;
  font-size: 17px;
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  letter-spacing: 3px;
}
.header_down {
  width: 100%;
  height: 35%;
  display: flex;
}
.header_down_block {
  text-align: center;
  color: white;
  font-size: 13px;
  width: 14.28%;
}
</style>


