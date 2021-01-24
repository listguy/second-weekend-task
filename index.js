const tasks = [
    { topic: 'HTML', startedAt: new Date("2021-01-20 12:00") , finishAt: new Date("2021-01-21 13:30") , tasksGiven: 20, taskFinished: 18},
    { topic: 'CSS', startedAt: new Date("2021-01-20 9:00") , finishAt: new Date("2021-01-21 9:00") , tasksGiven: 20, taskFinished: 15},
    { topic: 'JS', startedAt: new Date("2021-01-19 7:50") , finishAt: new Date("2021-01-21 11:20") , tasksGiven: 22, taskFinished: 18},
    { topic: 'FUNCTION', startedAt: new Date("2021-01-21 12:20") , finishAt: new Date("2021-01-23 18:50") , tasksGiven: 10, taskFinished: 9},
    { topic: 'TEST', startedAt: new Date("2021-01-01 9:30") , finishAt: new Date("2021-01-03 12:00") , tasksGiven: 15, taskFinished: 12},
    { topic: 'LOOPS', startedAt: new Date("2021-01-17 8:50") , finishAt: new Date("2021-01-19 13:20") , tasksGiven: 20, taskFinished: 18},
    { topic: 'ARRAYS', startedAt: new Date("2021-01-25 18:30") , finishAt: new Date("2021-01-26 9:00") , tasksGiven: 10, taskFinished: 7},
    { topic: 'DOM', startedAt: new Date("2021-01-21 6:00") , finishAt: new Date("2021-01-26 9:00") , tasksGiven: 25, taskFinished: 25},
    { topic: 'FCC', startedAt: new Date("2021-01-28 17:00") , finishAt: new Date("2021-01-28 19:00") , tasksGiven: 19, taskFinished: 18},
    { topic: 'FUN', startedAt: new Date("2021-01-01 9:00") , finishAt: new Date("2021-01-26 9:00") , tasksGiven: 5, taskFinished: 0} 
];

//get array and calculate the time between the start and the end of each task
function calculateTotalTime (arr) {
    for (task of arr) {
        let time = task.finishAt.getTime() - task.startedAt.getTime();
        let totalTime = (time / (36e5));
        task.totalTime = totalTime.toFixed(1);
    }
}

// get array and calculate the percent of mission complete
function tasksPercent (arr) {
    for (task of arr) {
        let percent = (task.taskFinished / task.tasksGiven)*100;
        percent = percent.toFixed(1);
        task.tasksPercent = `${percent}%`; 
    }
}
calculateTotalTime(tasks)
tasksPercent(tasks);

// get number that presented time and if needed add '0'. 
function addZero(t) {
    if (t < 10) {
        t = "0" + t;
    }
    return t;
  }

// start build table in index.html
const table = document.createElement('table');
table.setAttribute('id','table');
document.body.appendChild(table);
const tbody = document.createElement('tbody');
table.appendChild(tbody);
const trHead = document.createElement('tr');
trHead.setAttribute('id', 'headRow');
tbody.appendChild(trHead);
const header = ['topic','started At', 'finish At', 'task Given', 'task Finished', 'total Time', 'task Percent' ];

for (const head of header) {  
    const tableHeader = document.createElement('th');
    tableHeader.setAttribute('class', 'tableHeader');
    trHead.appendChild(tableHeader);
    tableHeader.textContent = head;
}

// start build the body of the table


for (const task of tasks) { 
    const tableRow = document.createElement('tr');
    tbody.appendChild(tableRow);
    for (const i in task) {
            const tdTable = document.createElement('td');
            tableRow.appendChild(tdTable);
        if (i === 'startedAt' || i === 'finishAt') {
            let h = addZero(task[i].getHours());
            let m = addZero(task[i].getMinutes());
            tdTable.setAttribute ('class', 'tableBody');
            tdTable.textContent = (`${h} : ${m}`);
        } else { 
            if (i === 'totalTime') {
                if (task[i] <= 25) {
                    // light green
                    tdTable.setAttribute ('class', 'totalTimeLow');
                    tdTable.textContent = (`${task[i]}`);
                }
                if ((task[i] > 25) && (task[i] <= 55)) {
                    //green
                    tdTable.setAttribute ('class', 'totalTimeMedium');
                    tdTable.textContent = (`${task[i]}`);
                }
                if (task[i] > 55) {
                    //dark green
                    tdTable.setAttribute ('class', 'totalTimeHigh');
                    tdTable.textContent = (`${task[i]}`);
                }
            } else {
                if (i === 'tasksPercent') {
                    if (parseInt(task[i]) < 80) {
                        //pink
                        tdTable.setAttribute ('class', 'taskPercentLow');
                        tdTable.textContent = (`${task[i]}`);
                    }   
                    if (parseInt(task[i]) >= 80 && parseInt(task[i]) < 90) {
                        //dark pink
                        tdTable.setAttribute ('class', 'taskPercentMedium');
                        tdTable.textContent = (`${task[i]}`);
                    }   
                    if (parseInt(task[i]) >= 90) {
                        //purple
                        tdTable.setAttribute ('class', 'taskPercentHigh');
                        tdTable.textContent = (`${task[i]}`);
                    }   
                } else {
                        tdTable.setAttribute ('class', 'tableBody');
                        tdTable.textContent = (`${task[i]}`);
                }
            }
        }
    }
}
