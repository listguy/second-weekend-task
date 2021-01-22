let work = [];
work[0]= {
    topic: 'Topic',
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 10,
    tasksFinished: 7
};

work[1]= {
    topic: 'Topic',
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 10,
    tasksFinished: 7
};

work[2]= {
    topic: 'Topic',
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 10,
    tasksFinished: 7
};

work[3]= {
    topic: 'Topic',
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 10,
    tasksFinished: 7
};

work[4]= {
    topic: 'Topic',
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 10,
    tasksFinished: 7
};

work[5]= {
    topic: 'Topic',
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 10,
    tasksFinished: 7
};

work[6]= {
    topic: 'Topic',
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 10,
    tasksFinished: 7
};

work[7]= {
    topic: 'Topic',
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 10,
    tasksFinished: 7
};

work[8]= {
    topic: 'Topic',
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 10,
    tasksFinished: 7
};

work[9]= {
    topic: 'Topic',
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 10,
    tasksFinished: 7
};

for(var i = 0; i < work.length; i++){
    var totalTime =  Math.floor(((work[i].finishedAt - work[i].startedAt) / (1000 * 60 * 60)) % 24);
    var tasksFinishedPercent = Math.floor(work[i].tasksFinished/work[i].tasksGiven*100);
    Object.assign(work[i], { totalTime: totalTime, tasksFinishedPercent: tasksFinishedPercent });
}

let headers = ["Topic", "Started At", "Finished At", "Total Time Spent", "Tasks Given", "Tasks Finished", "Tasks Finished %"];    

function generateTableHead(table, headers) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (var h = 0; h < headers.length; h++) 
    {
      let th = document.createElement("th");
      let text = document.createTextNode(headers[h]);
      th.appendChild(text);
      row.appendChild(th);
    }
  }

  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      let topicCell = row.insertCell();
      topicCell.innerHTML = element.topic;
      let startedCell = row.insertCell();
      startedCell.innerHTML = element.startedAt.getHours();
      let finishedCell = row.insertCell();
      finishedCell.innerHTML = element.finishedAt.getHours();
      let totalTimeCell = row.insertCell();
      //set colour of cell based on value
      let colorValue1 = "green";
      if (element.totalTime > 2){
        colorValue1 = "orange";
      }
      if (element.totalTime > 5){
        colorValue1 = "red";
      }
    
      totalTimeCell.style.backgroundColor = colorValue1;
      totalTimeCell.innerHTML = element.totalTime;
      let tasksGivenCell = row.insertCell();
      tasksGivenCell.innerHTML = element.tasksGiven;
      let tasksFinishedCell = row.insertCell();
      tasksFinishedCell.innerHTML = element.tasksFinished;
      let tasksFinishedPercentCell = row.insertCell();
      //set colour of cell based on value
      let colorValue2 = "light blue";
      if (element.taskFinishedPercent > 50){
          colorValue2 = "blue";
      }
      if (element.taskFinishedPercent >= 75){
          colorValue2 = "deep blue";
      }
      tasksFinishedPercentCell.style.backgroundColor = colorValue2;
      tasksFinishedPercentCell.innerHTML = element.tasksFinishedPercent + '%';
    }
  }

var table = document.createElement("table");
generateTableHead(table, headers);
generateTable(table, work);
document.body.appendChild(table);
