"use strict"
let object1 = {
    startedAt: new Date("2021-01-20:21:30"),
    finishedAt: new Date("2021-01-20:11:30"),
    tasksGiven: 10,
    tasksFinished: 7,
    topic: "English",
  };
  
  let object2 = {
    startedAt: new Date("2021-01-20:11:30"),
    finishedAt: new Date("2021-01-20:22:30"),
    tasksGiven: 12,
    tasksFinished: 9,
    topic: "Hebrew",
  };
  
  let object3 = {
    startedAt: new Date ("2021-01-20:05:00"),
    finishedAt: new Date("2021-01-20:12:30"),
    tasksGiven: 20,
    tasksFinished: 10,
    topic: "History",
  };
  
  let object4 = {
    startedAt: new Date("2021-01-20:23:30"),
    finishedAt: new Date("2021-01-20:05:30"),
    tasksGiven: 14,
    tasksFinished: 3,
    topic: "Math",
  };
  
  let object5 = {
    startedAt: new Date("2021-01-20:20:30"),
    finishedAt: new Date("2021-01-20:22:30"),
    tasksGiven: 19,
    tasksFinished: 18,
    topic: "Sport",
  };
  
  let object6 = {
    startedAt: new Date("2021-01-20:11:30"),
    finishedAt: new Date("2021-01-20:17:00"),
    tasksGiven: 12,
    tasksFinished: 3,
    topic: "Literature",
  };
  
  let object7 = {
    startedAt: new Date("2021-01-20:14:30"),
    finishedAt: new Date("2021-01-20:16:30"),
    tasksGiven: 13,
    tasksFinished: 6,
    topic: "Bible",
  };
  
  let object8 = {
    startedAt: new Date("2021-01-20:15:30"),
    finishedAt: new Date("2021-01-20:18:00"),
    tasksGiven: 16,
    tasksFinished: 3,
    topic: "Sciences",
  };
  
  let object9 = {
    startedAt: new Date("2021-01-20:09:30"),
    finishedAt: new Date("2021-01-20:21:00"),
    tasksGiven: 15,
    tasksFinished: 8,
    topic: "Physics",
  };
  
  let object10 = {
    startedAt: new Date("2021-01-20:15:30"),
    finishedAt: new Date("2021-01-20:18:30"),
    tasksGiven: 23,
    tasksFinished: 20,
    topic: "Chemistry",
  }
  
  let objectArr = [object1, object2, object3, object4, object5, object6, object7, object8, object9, object10];
  
  for (let object of objectArr) {
    object['totalTime'] = Math.abs(object.finishedAt - object.startedAt) / 3600000;
    object['tasksFinishedPercent'] = Math.floor((object.tasksFinished / object.tasksGiven) * 100); object['finishedAt'] = object.finishedAt.toLocaleTimeString();
    object['startedAt'] = object.startedAt.toLocaleTimeString();
  }
    let allObjectsArr = ['Started At', 'Finished At', 'Tasks Given', 'Tasks Done', 'Topic', 'Total Time', 'Tasks Finished %'];

    document.write('<table><tr>');

    for (let allObjects of allObjectsArr) {
    document.write(`<th>${allObjects}</th>`);
}

for (let object of objectArr) {
  document.write('<tr>');

  for (let value in object) {
    if (value === 'totalTime') {
      if (object[value] >= 3) {
        let className = 'alotofTime';
        document.write(`<td class="${className}">${object[value]}</td>`);
      } else if (object[value] >= 2) {
        let className = 'mediumofTime';
        document.write(`<td class="${className}">${object[value]}</td>`);
      } else if (object[value] < 2) {
        let className = 'alittleofTime';
        document.write(`<td class="${className}">${object[value]}</td>`);
      }
    } else if (value === 'tasksFinishedPrecent') {
      if (object[value] >= 70) {
        let className = 'alotofWork';
        document.write(`<td class="${className}">${object[value]}</td>`);
      } else if (object[value] >= 50) {
        let className = 'mediumofWork';
        document.write(`<td class="${className}">${object[value]}</td>`);
      } else if (object[value] < 50) {
        let className = 'alittleofWork';
        document.write(`<td class="${className}">${object[value]}</td>`);
      }
    } else {
        
      document.write(`<td>${object[value]}</td>`);
    }
  }

  document.write('</tr>');
}

document.write('</table>');