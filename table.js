let work = [
work0 = {
    topic: 'html',
    startedAt: new Date("2021-01-20:09:00"),
    finishedAt: new Date("2021-01-20:19:33"),
    tasksGiven: 10,
    tasksFinished: 3
},

work1 = {
    topic: 'javaScript',
    startedAt: new Date("2021-01-22:13:00"),
    finishedAt: new Date("2021-01-22:13:30"),
    tasksGiven: 15,
    tasksFinished: 9
},

work2 = {
    topic: 'Css',
    startedAt: new Date("2021-01-11:13:00"),
    finishedAt: new Date("2021-01-11:17:00"),
    tasksGiven: 34,
    tasksFinished: 15
},

work3 = {
    topic: 'Github',
    startedAt: new Date("2021-01-23:09:00"),
    finishedAt: new Date("2021-01-23:10:30"),
    tasksGiven: 26,
    tasksFinished: 20
},

work4 = {
    topic: 'more Html',
    startedAt: new Date("2021-01-12:13:00"),
    finishedAt: new Date("2021-01-12:16:00"),
    tasksGiven: 33,
    tasksFinished: 28
},

work5 = {
    topic: 'Loop',
    startedAt: new Date("2021-01-13:13:00"),
    finishedAt: new Date("2021-01-13:19:00"),
    tasksGiven: 12,
    tasksFinished: 8
},

work6 = {
    topic: 'Conditions',
    startedAt: new Date("2021-01-15:10:00"),
    finishedAt: new Date("2021-01-15:12:00"),
    tasksGiven: 9,
    tasksFinished: 2
},

work7 = {
    topic: 'Array',
    startedAt: new Date("2021-01-30:14:00"),
    finishedAt: new Date("2021-01-30:19:00"),
    tasksGiven: 22,
    tasksFinished: 21
},

work8 = {
    topic: 'Objects',
    startedAt: new Date("2021-01-11:13:00"),
    finishedAt: new Date("2021-01-11:16:00"),
    tasksGiven: 20,
    tasksFinished: 8
}];

for(let i = 0; i < work.length; i++){
    let totalTime =  Math.floor(((work[i].finishedAt - work[i].startedAt) / (1000 * 60 * 60)));
    let tasksFinishedPercent = Math.floor(work[i].tasksFinished/work[i].tasksGiven*100);
    Object.assign(work[i], { totalTime: totalTime, tasksFinishedPercent: tasksFinishedPercent });
}

let headers = ["Topic", "Started At", "Finished At",  "Tasks Given", "Tasks Finished", "Total Time Spent","Tasks Finished %"];

function formatHoursMinutes(input) {
    var date = new Date(Date.parse(input));
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return hours + ':' + ("0" + minutes).slice(-2);
}

function generateTableHead(headers) {
    const body = document.body;
    let table = document.createElement("table");
    //let tableHead;
    for (let h = 0; h < headers.length; h++) 
    { 
        let th = document.createElement('th');
        th.innerText = headers[h];
        table.append(th);
    }
    body.append(table);
    return true;
}

function generateTable(work) {
    let table = document.querySelector("table");
    for (let data of work) {
        let tr = document.createElement("tr");
        for (let element in data) {
            let format = "";
            switch (element) {
                case 'startedAt':
                case 'finishedAt':
                data[element] = formatHoursMinutes(data[element]);
                break;
                case 'totalTime':
                format = "green";
                if (data[element] > 2 ){
                    format = "orange";
                }
                if (data[element] >= 5) {
                    format = "red";
                }    
                break;
                case 'tasksFinishedPercent':
                format = "LightCyan";
                if (data[element] > 50 ) {
                    format = "lightSkyBlue";
                }
                if (data[element] >= 75 ) {
                    format = "royalBlue";
                }
                break;
            }
            let td = document.createElement("td");
            td.innerText = data[element];
            td.style.backgroundColor = format;
            tr.append(td);
            format = "";
        }
        table.append(tr);
     }
    return true;
}
  

generateTableHead(headers);
generateTable(work);
