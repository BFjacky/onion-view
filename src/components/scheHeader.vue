<template>
  <div class="header">
      <div class="header_up">
        <div class="litTitle">
          第{{currWeek}}周
        </div>
        <div class="header_page">
            <div class="choise" v-bind:class="{isChoose:choise1}"></div>
            <div class="choise" v-bind:class="{isChoose:choise2}"></div>
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
.header_page {
  background-color: black;
  position: relative;
  top: 25%;
  height: 10%;
  width: 100%;
  display:flex;
  justify-content: center;
}
.choise {
  background-color: #bbbec4;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-right:30px;
  margin-left:30px;
}
.isChoose{
  background-color: white;
}
.litTitle {
  text-align: center;
  color: white;
  font-size: 50px;
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  letter-spacing: 10px;
}
.header_down {
  width: 100%;
  height: 35%;
  display: flex;
}
.header_down_block {
  text-align: center;
  color: white;
  font-size: 40px;
  width: 14.28%;
}
</style>


