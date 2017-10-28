export default function parseWeek(weeksStr) {
    const maxWeeks = 25;
    //初始化一个数组，记录第几周上课
    let days = [];
    for (let i = 1; i <= maxWeeks; i++) {
        days[i] = 0;
    }
    //条件判断
    if (weeksStr != '') {
        switch (weeksStr) {
            case '全周上课':
                for (let i = 1; i <= maxWeeks; i++) {
                    days[i] = 1;
                }
                return days;
            case '单周上课':
                for (let i = 1; i <= maxWeeks; i++) {
                    if (i % 2 === 1) {
                        days[i] = 1;
                    }
                }
                return days;
            case '双周上课':
                for (let i = 1; i <= maxWeeks; i++) {
                    if (i % 2 === 0) {
                        days[i] = 1;
                    }
                }
                return days;
            default:
                //匹配x-x
                let patt1 = /\d+-\d+/g;
                let res1;
                res1 = weeksStr.match(patt1);

                let newres = [];
                if (res1) {
                    res1.forEach((e) => {
                        newres = newres.concat(e.split('-'));

                    })
                }
                let index = 0;
                while (newres[index]) {
                    for (let i = parseInt(newres[index]); i <= parseInt(newres[index + 1]); i++) {
                        days[i] = 1;
                    }
                    index = index + 2;
                }

                //匹配x,x,x,x
                let patt2 = /\d+/g;
                let res2;
                res2 = weeksStr.match(patt2);
                for (let i = 0; i <= res2.length; i++) {
                    days[parseInt(res2[i])] = 1;
                }
        }
    }
    //返回标记每个周是否上课的数组
    return days;
}
// courses.forEach(function (e) {
//     e.courseUnits.forEach(function (c) {
//         let res = parseWeeks(c.weeks);
//         console.log(c.weeks + '----' + res);
//     })
// })