<template>
  <div class="all">
    <x-header title="天气" >
      <div slot="overwrite-left"></div>
      <div slot="right" v-on:click="delay" style="font-size:17px;">更新</div>
    </x-header>
    <group title="今日气温">
      <cell title="当前气温" :value="today.nowTem" style="height:20px"></cell>
      <cell title="最高气温" :value="today.maxTem" style="height:20px"></cell>
      <cell title="最低气温" :value="today.minTem" style="height:20px"></cell>
      <cell title="pm2.5" :value="today.pm2" style="height:20px"></cell>
      <cell title="天气" :value="today.tianqi" style="height:20px"></cell>
      <cell title="风级" :value="today.wind" style="height:20px"></cell>
    </group>
    <group title="明日白天">
      <cell title="最高气温" :value=" tmorDay.maxTem" style="height:20px"></cell>
       <cell title="天气" :value="tmorDay.tianqi" style="height:20px"></cell>
        <cell title="风级" :value=" tmorDay.wind" style="height:20px"></cell>
    </group>
    <group title="明日夜间">
      <cell title="最低气温" :value=" tmorNight.minTem" style="height:20px"></cell>
       <cell title="天气" :value="tmorNight.tianqi" style="height:20px"></cell>
        <cell title="风级" :value=" tmorNight.wind" style="height:20px"></cell>
    </group>
  </div>
</template>
<script>
import axios from "axios";
const host = "http://www.dyycyf.top";
const url = "/whether";
import { Cell, Group, Divider, XHeader } from "vux";
export default {
  data: function() {
    return {
      today: {
        maxTem: "",
        minTem: "",
        nowTem: "",
        pm2: "",
        tianqi: "",
        wind: ""
      },
      tmorDay: {
        maxTem: "",
        tianqi: "",
        wind: ""
      },
      tmorNight: {
        minTem: "",
        tianqi: "",
        wind: ""
      }
    };
  },
  created: async function() {
    await this.delay();
  },
  methods: {
    delay: function() {
      let self = this;
      this.$vux.loading.show({
        text: "搬运数据中..."
      });
      setTimeout(function() {
        self.update();
      }, 500);
    },
    update: async function() {
      let result = await axios.get(host + url);
      result = result.data[0];
      // console.log(result);
      this.today.tianqi = result.weather;
      this.today.maxTem = result.temphigh + "℃";
      this.today.minTem = result.templow + "℃";
      this.today.pm2 = result.aqi.pm2_5;
      this.today.nowTem = result.temp + "℃";
      this.today.wind = result.windpower;
      this.tmorDay.maxTem = result.daily[1].day.temphigh + "℃";
      this.tmorDay.tianqi = result.daily[1].day.weather;
      this.tmorDay.wind = result.daily[1].day.windpower;
      this.tmorNight.minTem = result.daily[1].night.templow + "℃";
      this.tmorNight.tianqi = result.daily[1].night.weather;
      this.tmorNight.wind = result.daily[1].night.windpower;
      this.$vux.loading.hide();
      this.$vux.toast.show({
        text: "更新成功",
        position: "middle",
        time: 1000
      });
    }
  },
  components: {
    Cell,
    Group,
    Divider,
    XHeader
  }
};
</script>
<style>
.all {
  height: 100%;
  width: 100%;
  background-color: #fbf9fe;
}
</style>
