const date = new Date("2020");
const tasks = [
    { topic: 'HTML', startedAt: new Date("2021-01-20 13:00") , finishAt: new Date("2021-01-21 13:30") , tasksGiven: 20, taskFinished: 18},
    { topic: 'CSS', startedAt: new Date("2021-01-20 12:00") , finishAt: new Date("2021-01-21 9:00") , tasksGiven: 20, taskFinished: 15},
    { topic: 'JS', startedAt: new Date("2021-01-19 9:00") , finishAt: new Date("2021-01-21 11:20") , tasksGiven: 22, taskFinished: 18},
    { topic: 'FUNCTION', startedAt: new Date("2021-01-21 10:40") , finishAt: new Date("2021-01-23 18:50") , tasksGiven: 10, taskFinished: 9},
    { topic: 'TEST', startedAt: new Date("2021-01-01 9:00") , finishAt: new Date("2021-01-03 12:00") , tasksGiven: 15, taskFinished: 12},
    { topic: 'LOOPS', startedAt: new Date("2021-01-17 9:00") , finishAt: new Date("2021-01-19 13:20") , tasksGiven: 20, taskFinished: 18},
    { topic: 'ARRAYS', startedAt: new Date("2021-01-25 14:30") , finishAt: new Date("2021-01-26 9:00") , tasksGiven: 10, taskFinished: 7},
    { topic: 'DOM', startedAt: new Date("2021-01-21 9:00") , finishAt: new Date("2021-01-26 9:00") , tasksGiven: 25, taskFinished: 25},
    { topic: 'FFC', startedAt: new Date("2021-01-28 7:00") , finishAt: new Date("2021-01-28 19:00") , tasksGiven: 19, taskFinished: 18},
    { topic: 'FUN', startedAt: new Date("2021-01-01 9:00") , finishAt: new Date("2021-01-26 9:00") , tasksGiven: 5, taskFinished: 0} 
];
//get array and calculate the time between the start and the end of each task
function calculateTotalTime (arr) {
    let i = 0;
    for (task of arr) {
            let time = task.finishAt.getTime() - task.startedAt.getTime();
            console.log(time);
            let totalTime = (time / (36e5));
            arr[i].totalTime = totalTime.toFixed(1);
            i++;
    }
}
// get array and calculate the percent of mission complete
function tasksPercent (arr) {
    let i = 0;
    for (task of arr) {
        let percent = (task.taskFinished / task.tasksGiven)*100;
        percent = percent.toFixed(1);
        arr[i].tasksPercent = `${percent}%`; 
        i++;
    }
}
calculateTotalTime(tasks)
tasksPercent(tasks);

function addZero(t) {
    if (t < 10) {
      t = "0" + t;
    }
    return t;
  }

document.write('<table id = table>');
document.write('<tr id = "headeRow" >');
const header = ['topic','started At', 'finish At', 'task Given', 'task Finished', 'total Time', 'task Percent' ];
for (const head of header) {  
    document.write('<th class = "tableHeader">  ' + head + '</th>');
}
document.write('</tr> ');
document.write('<tr class = "row" >');
for (const task of tasks) { 
    for (const i in task) {
        if (typeof(task[i]) === 'object') {
            let h = addZero(task[i].getHours());
            let m = addZero(task[i].getMinutes());
            document.write(`<td class = "tableBody"> ${h} : ${m} </td>`)
            console.log(m);
        } else { 
            if (i === 'totalTime') {
                if (task[i] <= 25) {
                    document.write(`<td class = "totalTimeLow"> ${task[i]} </td>`);
                }
                if ((task[i] > 25) && (task[i] <= 55)) {
                    document.write(`<td class = "totalTimeMedium"> ${task[i]} </td>`);
                }
                if (task[i] > 55) {
                    document.write(`<td class = "totalTimeHigh"> ${task[i]} </td>`);
                }
            } else {
                if (i === 'tasksPercent') {
                    if (parseInt(task[i]) < 80) {
                        document.write(`<td class = "taskPercentLow"> ${task[i]} </td>`)
                    }   
                    if (parseInt(task[i]) >= 80 && parseInt(task[i]) < 90) {
                        document.write(`<td class = "taskPercentMedium"> ${task[i]} </td>`)
                    }   
                    if (parseInt(task[i]) >= 90) {
                        document.write(`<td class = "taskPercentHigh"> ${task[i]} </td>`)
                    }   
                } else {
                    document.write(`<td class = "tableBody"> ${task[i]} </td>`);
                }
            }
        }
    }
    document.write('</tr>');
}
document.write('</table>')



// console.log(tasks);
// document.write('<idtable>');

// let i = 0;
// for (task of tasks) {
//     let nameTag
//     if (task.totalTime <= 2) {
//         nameTag = 'green';
//     }
//     if (task.totalTime > 2 && task.totalTime <= 5) {
//         nameTag = 'orange';
//     }
//     if (task.totalTime > 5) {
//         nameTag = 'red';
//     }
//     for (property in task) {
//         document.write(`<th class="${nameTag}"><tr> ${tasks[task]}</tr></th>`)
//     }
// };
// document.write('</id>');
// // console.log(tasks.map(task=>task.startedAt));
// // console.log(body);