let allObj = [{
    startedAt : new Date("2021-01-10:12:00"),
    finishedAt: new Date("2021-01-10:18:30"),
    totalTime: 0 ,
    tasksGiven: 15,
    tasksFinished: 8,
    tasksFinishedPercents: 0,
    topic: "JavaScript"
}, {
    startedAt : new Date("2021-01-11:14:30"),
    finishedAt: new Date("2021-01-11:17:30"),
    totalTime: 0 ,
    tasksGiven: 22,
    tasksFinished: 6,
    tasksFinishedPercents: 0,
    topic: "HTML"
}, {
    startedAt : new Date("2021-01-12:10:00"),
    finishedAt: new Date("2021-01-12:20:30"),
    totalTime: 0 ,
    tasksGiven: 16,
    tasksFinished: 7,
    tasksFinishedPercents: 0,
    topic: "CSS"
}, {
    startedAt : new Date("2021-01-13:14:00"),
    finishedAt: new Date("2021-01-13:15:30"),
    totalTime: 0 ,
    tasksGiven: 17,
    tasksFinished: 17,
    tasksFinishedPercents: 0,
    topic: "GitHub"
}, {
    startedAt : new Date("2021-01-14:11:00"),
    finishedAt: new Date("2021-01-14:20:00"),
    totalTime: 14 ,
    tasksGiven: 10,
    tasksFinished: 3,
    tasksFinishedPercents: 0,
    topic: "More HTML"
}, {
    startedAt : new Date("2021-01-15:12:00"),
    finishedAt: new Date("2021-01-15:17:30"),
    totalTime: 0 ,
    tasksGiven: 25,
    tasksFinished: 24,
    tasksFinishedPercents: 0,
    topic: "Loops"
}, {
    startedAt : new Date("2021-01-16:09:00"),
    finishedAt: new Date("2021-01-16:13:30"),
    totalTime: 0 ,
    tasksGiven: 24,
    tasksFinished: 12,
    tasksFinishedPercents: 0,
    topic: "Conditions"
}, {
    startedAt : new Date("2021-01-17:12:00"),
    finishedAt: new Date("2021-01-17:17:00"),
    totalTime: 0 ,
    tasksGiven: 15,
    tasksFinished: 13,
    tasksFinishedPercents: 0,
    topic: "Arrays"
}, {
    startedAt : new Date("2021-01-18:10:30"),
    finishedAt: new Date("2021-01-19:9:30"),
    totalTime: 0 ,
    tasksGiven: 16,
    tasksFinished: 6,
    tasksFinishedPercents: 0,
    topic: "Objects"
},
];



for (let obj of allObj) {
    //calculate tasksFinishedPercents
    obj.tasksFinishedPercents = (Math.floor((obj.tasksFinished / obj.tasksGiven) *100 ));

    //calculate totalTime
    let orr =( (obj.finishedAt - obj.startedAt) /3600000 );
    obj.totalTime = orr;
    
    //display only the hours and minutes in startedAt & finishedAt
    let hourStart = obj.startedAt.getHours();
    hourStart = hourStart.toString();

    let hourFinish = obj.finishedAt.getHours();
    hourFinish = hourFinish.toString();

    let minuteStart = obj.startedAt.getMinutes();
    minuteStart = minuteStart.toString();

    let minuteFinish = obj.finishedAt.getMinutes();
    minuteFinish = minuteFinish.toString();

    let dayStart = obj.startedAt.getDay();
    dayStart = dayStart.toString();

    let dayFinish = obj.finishedAt.getDay();
    dayFinish = dayFinish.toString();

    if (minuteStart < 10 ) {
        minuteStart = `${minuteStart}0`;
    }
    if (minuteFinish < 10) {
        minuteFinish = `${minuteFinish}0`;

    }
    if (hourStart < 10 ) {
        hourStart = `0${hourStart}` ;

    }
    if (hourFinish < 10) {
        hourFinish = `0${hourFinish}`;
    }

    obj.startedAt = hourStart + ":" + minuteStart;
    obj.finishedAt = hourFinish + ":" + minuteFinish;

}

//create table
//an array of all the headline od the tab
let arrHeadline = ["started At", "Finished At", "Total Time", "Tasks Given", "Tasks Finished","Tasks Finished %", "Topic"];
let table = document.createElement("table");
document.body.append(table);

//adding head of the table
let thead = document.createElement("thead");
table.append(thead)
let tr = document.createElement("tr");
thead.append(tr);

for (let i = 0; i < 7; i++){
    let th = document.createElement("th");
    th.innerText = arrHeadline[i];
    tr.append(th);
}

//adding body of the table
let tbody = document.createElement("tbody");
table.append(tbody);
for (let element of allObj) {
    let secTr = document.createElement("tr");
    tbody.append(secTr);
    for (let sub in element) {
        let td = document.createElement("td");
        let textTable = document.createTextNode(element[sub]);
        td.append(textTable);
        secTr.append(td);
        if(sub === "totalTime") {
            let timeTo = changeColorTotal(element.totalTime);
            td.style.backgroundColor = timeTo;
        }
        if(sub === "tasksFinishedPercents") {
            let percentsFin = changeColorFinishedPercents(element.tasksFinishedPercents);
            td.style.backgroundColor = percentsFin;
        }
    }
}

//select the color of totalTime
function changeColorTotal(color) {
    if (color.toString() < 4) {
        return "#86f4c8";
    } else if (color.toString() < 8) {
        return "#ffffaa";
    } else {
        return "#ff3959";
    }
}
//select the color of FinishedPercents
function changeColorFinishedPercents(col) {
    if (col.toString() < 40) {
        return "#ff3959";
    } else if (col.toString() < 75) {
        return "#ffffaa";
    } else {
        return "#86f4c8";
    }
}