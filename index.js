const date = new Date("2020");
const tasks = [
    { 
        startedAt: new Date("2021-01-20 13:00") , finishAt: new Date("2021-01-21 13:30") , tasksGiven: 20, taskFinished: 18, topic: 'HTML', totalTime:'', tasksFinishedPrecent:''
    },
    { 
        startedAt: new Date("2021-01-20 12:00") , finishAt: new Date("2021-01-21 9:00") , tasksGiven: 20, taskFinished: 15, topic: 'CSS', totalTime:'', tasksFinishedPrecent:''
    },
    { 
        startedAt: new Date("2021-01-19 9:00") , finishAt: new Date("2021-01-21 11:20") , tasksGiven: 22, taskFinished: 18, topic: 'JS', totalTime:'', tasksFinishedPrecent:''
    },
    { 
        startedAt: new Date("2021-01-21 10:40") , finishAt: new Date("2021-01-23 18:50") , tasksGiven: 10, taskFinished: 9, topic: 'FUNCTION', totalTime:'', tasksFinishedPrecent:''
    },
    { 
        startedAt: new Date("2021-01-01 9:00") , finishAt: new Date("2021-01-03 12:00") , tasksGiven: 15, taskFinished: 12, topic: 'TEST', totalTime:'', tasksFinishedPrecent:''
    },
    { 
        startedAt: new Date("2021-01-17 9:00") , finishAt: new Date("2021-01-19 13:20") , tasksGiven: 20, taskFinished: 18, topic: 'LOOPS', totalTime:'', tasksFinishedPrecent:''
    },
    { 
        startedAt: new Date("2021-01-25 14:30") , finishAt: new Date("2021-01-26 9:00") , tasksGiven: 10, taskFinished: 7, topic: 'ARRAYS', totalTime:'', tasksFinishedPrecent:''
    },
    { 
        startedAt: new Date("2021-01-21 9:00") , finishAt: new Date("2021-01-26 9:00") , tasksGiven: 25, taskFinished: 25, topic: 'DOM', totalTime:'', tasksFinishedPrecent:''
    },
    { 
        startedAt: new Date("2021-01-28 7:00") , finishAt: new Date("2021-01-28 19:00") , tasksGiven: 19, taskFinished: 18, topic: 'FFC', totalTime:'', tasksFinishedPrecent:''
    },
    { 
        startedAt: new Date("2021-01-01 9:00") , finishAt: new Date("2021-01-26 9:00") , tasksGiven: 5, taskFinished: 0, topic: 'FUN', totalTime:'', tasksFinishedPrecent:''
    }, 
];
function calculateTotalTime (arr) {
    for (task of arr) {
            let time = task.finishAt.getTime() - task.startedAt.getTime();
            let totalTime = Math.floor(time / (1000*3600*24));
            console.log (totalTime);
            document.write( ' '+ totalTime);
        }
    }
calculateTotalTime(tasks)
// document.write('<table>');

// document.write('</table>');