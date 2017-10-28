<script>
import axios from "axios";
const width = 14.28;
const height = 16.66;
export default {
  name: "course",
  data: function() {
    return {
      coursesData: []
    };
  },
  beforeCreate: async function() {
    let index = 0;
    console.log("0-");
    let m = await axios.get("http://47.94.15.66:7001/DyySche");
    for (let i = 0; i < m.data.length; i++) {
      for (let j = 0; j < m.data[i].courseUnits.length; j++) {
        this.coursesData[index] = {
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
    //将this.coursesData 解析成易用的数据信息
    for (let i = 0; i < this.coursesData.length; i++) {
      switch (this.coursesData[i].count) {
        case "一大":
          this.coursesData[i].count = 1;
          break;
        case "二大":
          this.coursesData[i].count = 2;
          break;
        case "三大":
          this.coursesData[i].count = 3;
          break;
        case "四大":
          this.coursesData[i].count = 4;
          break;
        case "五大":
          this.coursesData[i].count = 5;
          break;
        case "六大":
          this.coursesData[i].count = 6;
          break;
      }
      switch (this.coursesData[i].dayOfWeek) {
        case "周一":
          this.coursesData[i].dayOfWeek = 1;
          break;
        case "周二":
          this.coursesData[i].dayOfWeek = 2;
          break;
        case "周三":
          this.coursesData[i].dayOfWeek = 3;
          break;
        case "周四":
          this.coursesData[i].dayOfWeek = 4;
          break;
        case "周五":
          this.coursesData[i].dayOfWeek = 5;
          break;
        case "周六":
          this.coursesData[i].dayOfWeek = 6;
          break;
        case "周七":
          this.coursesData[i].dayOfWeek = 7;
          break;
      }
    }

    console.log("1-" + index);
  },
  method: {
    pause: function() {
      setTimeout(function() {
        resolve("ok");
      }, 1000);
    }
  },
  render: function(createElement) {
    console.log("2-" + this.coursesData.length);
    if (this.coursesData.length !== 0) {
      return createElement(
        "div",
        {
          class: {
            courses: true
          }
        },
        this.coursesData.map(function(item) {
          let left = (item.dayOfWeek - 1) * width + "%";
          let top = (item.count - 1) * height + "%";
          console.log(left, top);
          return createElement("div", {
            class: {
              course: true
            },
            style: {
              left: left,
              top: top
            }
          });
        })
      );
    }
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
.course {
  display: inline-block;
  position: absolute;
  width: 14.28%;
  height: 16.66%;
  border: 1px solid black;
  box-sizing: border-box;
  font-size: 30px;
  text-align: center;
  color: black;
}
div {
  margin: 0;
  padding: 0;
}
.course1 {
  background-color: #add8e6;
}
.course2 {
  background-color: #71c671;
}
.course3 {
  background-color: #ff69b4;
}
.course4 {
  background-color: #eeee00;
}
</style>
