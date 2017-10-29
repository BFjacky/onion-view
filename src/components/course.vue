<template>
  <div class="courses">
    <div v-for="course in Data" v-bind:key="course.colorNum" 
    v-bind:class="{course1:course.color1,course2:course.color2,course3:course.color3,
    course4:course.color4,course5:course.color5,courseClose:course.courseClose,courseMore:course.occupied}"
    class="course" v-bind:style="{position:'absolute', left:course.x , top :course.y}" v-on:click="detailCourse(course)">
      <div>{{course.name}}</div>
      <div class="room">{{course.room}}</div>
    </div>
    <detailLog v-bind:content="courseDetail" v-bind:display="dialogOut"></detailLog>
  </div>
</template>

<script>
import axios from "axios";
import parseWeek from "./parseWeek";
import detailLog from "./detailLog";
//test主机域名
const host = "http://www.dyycyf.top";
const width = 14.28;
const height = 16.66;
export default {
  name: "course",
  //当前周
  props: ["currWeek"],
  data: function() {
    return {
      Data: [],
      courseBox: [],
      courseDetail: {},
      dialogOut: false
    };
  },
  methods: {
    detailCourse: function(course) {
      this.dialogOut = false;
      this.dialogOut = true;
      let result = [];
      let index = 0;
      console.log(course.boxNumber);
      for (let i = 0; i < this.Data.length; i++) {
        if (this.Data[i].boxNumber === course.boxNumber) {
          result[index] = this.Data[i];
          index++;
        }
      }
      this.courseDetail = result;
    }
  },
  components: {
    detailLog: detailLog
  },
  created: async function() {
    let coursesData = [];
    let index = 0;
    let m = await axios.get(host+"/DyySche");
    for (let i = 0; i < m.data.length; i++) {
      for (let j = 0; j < m.data[i].courseUnits.length; j++) {
        coursesData[index] = {
          name: m.data[i].name,
          teacher: m.data[i].teacher,
          count: m.data[i].courseUnits[j].count,
          dayOfWeek: m.data[i].courseUnits[j].dayOfWeek,
          room: m.data[i].courseUnits[j].room,
          weeks: m.data[i].courseUnits[j].weeks
        };
        index++;
      }
    }
    for (let i = 0; i < coursesData.length; i++) {
      coursesData[i].weekOnWork = parseWeek(coursesData[i].weeks);
      coursesData[i].thisWeek = coursesData[i].weekOnWork[this.currWeek];
      if (coursesData[i].thisWeek === 1) {
        coursesData[i].thisWeek = true;
      } else {
        coursesData[i].thisWeek = false;
      }
    }
    //将this.coursesData 解析成易用的数据信息
    for (let i = 0; i < coursesData.length; i++) {
      coursesData[i].colorNum = 0;
      //this.coursesData[i].weeks = parseWeek(this.coursesData);
      switch (coursesData[i].count) {
        case "一大":
          coursesData[i].y = 0 + "%";
          coursesData[i].colorNum += 0;
          break;
        case "二大":
          coursesData[i].y = 1 * height + "%";
          coursesData[i].colorNum += 7 * 1;
          break;
        case "三大":
          coursesData[i].y = 2 * height + "%";
          coursesData[i].colorNum += 7 * 2;
          break;
        case "四大":
          coursesData[i].y = 3 * height + "%";
          coursesData[i].colorNum += 7 * 3;
          break;
        case "五大":
          coursesData[i].y = 4 * height + "%";
          coursesData[i].colorNum += 7 * 4;
          break;
        case "六大":
          coursesData[i].y = 5 * height + "%";
          coursesData[i].colorNum += 7 * 5;
          break;
      }
      switch (coursesData[i].dayOfWeek) {
        case "周一":
          coursesData[i].x = 0 + "%";
          coursesData[i].colorNum += 1;
          break;
        case "周二":
          coursesData[i].x = 1 * width + "%";
          coursesData[i].colorNum += 2;
          break;
        case "周三":
          coursesData[i].x = 2 * width + "%";
          coursesData[i].colorNum += 3;
          break;
        case "周四":
          coursesData[i].x = 3 * width + "%";
          coursesData[i].colorNum += 4;
          break;
        case "周五":
          coursesData[i].x = 4 * width + "%";
          coursesData[i].colorNum += 5;
          break;
        case "周六":
          coursesData[i].x = 5 * width + "%";
          coursesData[i].colorNum += 6;
          break;
        case "周七":
          coursesData[i].x = 6 * width + "%";
          coursesData[i].colorNum += 7;
          break;
      }
    }
    //判断某节课是否有和他在同一个位置的课
    for (let i = 0; i < coursesData.length; i++) {
      for (let j = 0; j < coursesData.length; j++) {
        if (coursesData[i].colorNum === coursesData[j].colorNum && j !== i) {
          coursesData[i].occupied = true;
          break;
        }
        coursesData[i].occupied = false;
      }
    }

    //判断应属色块
    for (let i = 0; i < coursesData.length; i++) {
      coursesData[i].boxNumber = coursesData[i].colorNum;
      coursesData[i].colorNum = coursesData[i].colorNum % 5;
      if (coursesData[i].thisWeek) {
        switch (coursesData[i].colorNum) {
          case 1:
            coursesData[i].color1 = true;
            coursesData[i].color2 = false;
            coursesData[i].color3 = false;
            coursesData[i].color4 = false;
            coursesData[i].color5 = false;
            break;
          case 2:
            coursesData[i].color1 = false;
            coursesData[i].color2 = true;
            coursesData[i].color3 = false;
            coursesData[i].color4 = false;
            coursesData[i].color5 = false;
            break;
          case 3:
            coursesData[i].color1 = false;
            coursesData[i].color2 = false;
            coursesData[i].color3 = true;
            coursesData[i].color4 = false;
            coursesData[i].color5 = false;
            break;
          case 4:
            coursesData[i].color1 = false;
            coursesData[i].color2 = false;
            coursesData[i].color3 = false;
            coursesData[i].color4 = true;
            coursesData[i].color5 = false;
            break;
          case 0:
            coursesData[i].color1 = false;
            coursesData[i].color2 = false;
            coursesData[i].color3 = false;
            coursesData[i].color4 = false;
            coursesData[i].color5 = true;
            break;
        }
      } else {
        coursesData[i].color1 = false;
        coursesData[i].color2 = false;
        coursesData[i].color3 = false;
        coursesData[i].color4 = false;
        coursesData[i].color5 = false;
        coursesData[i].courseClose = true;
      }
    }
    this.Data = coursesData;
  }
};
</script>
<style scoped>
.courses {
  position: relative;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
}
.room{
  font-weight:700;
}
.course {
  overflow: hidden;
  display: inline-block;
  width: 14.28%;
  height: 16.66%;
  font-size: 30px;
  text-align: center;
  color: black;
}
div {
  margin: 0;
  padding: 0;
}
.course1 {
  background-color: #2894ff;
  z-index: 1;
}
.course2 {
  background-color: #71c671;
  z-index: 1;
}
.course3 {
  background-color: #ff69b4;
  z-index: 1;
}
.course4 {
  background-color: #eeee00;
  z-index: 1;
}
.course5 {
  background-color: #00e3e3;
  z-index: 1;
}
.courseClose {
  background-color: #f0f0f0;
  z-index: 0;
}
.courseMore:before {
  content: "";
  display: block; /*伪元素默认是行内元素，所以如果要设定宽高，这必须显性设置为block*/
  border-width: 0 0px 30px 30px; /*设置边框宽度*/
  border-color: #fff transparent #fff transparent;
  background: transparent;
  border-style: solid; /*设置边框为固体的*/
  width: 0; /*设定新创建的元素*/
  position: absolute; /*相对于父容器绝对定位，设置偏移父容器边框距离*/
  bottom: 0;
  right: 0;
  box-shadow: 4px 4px 10px 10px rgba(0, 0, 0, 0.3);
}
</style>
