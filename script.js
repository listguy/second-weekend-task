"use strict"

let object1 = {
    startedAt: new Date("2021-01-20:10:30"),
    finishedAt: new Date("2021-01-20:11:30"),
    objectsGiven: 10,
    objectsFinished: 7,
    topic: "English",
  };
  
  let object2 = {
    startedAt: new Date("2021-01-20:11:30"),
    finishedAt: new Date("2021-01-20:22:30"),
    objectsGiven: 12,
    objectsFinished: 9,
    topic: "Hebrew",
  };
  
  let object3 = {
    startedAt: new Date ("2021-01-20:05:00"),
    finishedAt: new Date("2021-01-20:12:30"),
    objectsGiven: 20,
    objectsFinished: 10,
    topic: "History",
  };
  
  let object4 = {
    startedAt: new Date("2021-01-20:18:30"),
    finishedAt: new Date("2021-01-20:23:30"),
    objectsGiven: 14,
    objectsFinished: 4,
    topic: "Math",
  };
  
  let object5 = {
    startedAt: new Date("2021-01-20:20:30"),
    finishedAt: new Date("2021-01-20:22:30"),
    objectsGiven: 19,
    objectsFinished: 19,
    topic: "Sport",
  };
  
  let object6 = {
    startedAt: new Date("2021-01-20:11:30"),
    finishedAt: new Date("2021-01-20:17:00"),
    objectsGiven: 12,
    objectsFinished: 5,
    topic: "Literature",
  };
  
  let object7 = {
    startedAt: new Date("2021-01-20:14:30"),
    finishedAt: new Date("2021-01-20:16:30"),
    objectsGiven: 13,
    objectsFinished: 6,
    topic: "Bible",
  };
  
  let object8 = {
    startedAt: new Date("2021-01-20:15:30"),
    finishedAt: new Date("2021-01-20:18:00"),
    objectsGiven: 16,
    objectsFinished: 3,
    topic: "Sciences",
  };
  
  let object9 = {
    startedAt: new Date("2021-01-20:09:30"),
    finishedAt: new Date("2021-01-20:21:00"),
    objectsGiven: 15,
    objectsFinished: 8,
    topic: "Physics",
  };
  
  let object10 = {
    startedAt: new Date("2021-01-20:15:30"),
    finishedAt: new Date("2021-01-20:18:30"),
    objectsGiven: 23,
    objectsFinished: 20,
    topic: "Chemistry",
  }
  
  let objectArr = [object1, object2, object3, object4, object5, object6, object7, object8, object9, object10];
  
  for (let object of objectArr) {
    object['totalTime'] = Math.abs(object.finishedAt - object.startedAt) / 3600000;
    object['objectsFinishedPercent'] = Math.floor((object.objectsFinished / object.objectsGiven) * 100); object['finishedAt'] = object.finishedAt.toLocaleTimeString();
    object['startedAt'] = object.startedAt.toLocaleTimeString();
  }
    let allObjectsArr = ['Started At', 'Finished At', 'Total Time', 'Objects Given','Topic', 'Objects Finished','Objects Finished %'];

    document.write('<table><tr>');

    for (let allObjects of allObjectsArr) {
    document.write(`<th>${allObjects}</th>`);
}

for (let object of objectArr) {
  document.write('<tr>');

  
  for (let value in object) {
    if (value === 'totalTime') {
      if (object[value] >= 3) {
        let className = 'lotTime';
        document.write(`<td class="${className}">${object[value]} hours</td>`);
      } else if (object[value] >= 2) {
        let className = 'mediumTime';
        document.write(`<td class="${className}">${object[value]} hours</td>`);
      } else if (object[value] < 2) {
        let className = 'littleTime';
        document.write(`<td class="${className}">${object[value]} hours</td>`);
      }
    } else if (value === 'objectsFinishedPercent') {
      if (object[value] >= 70) {
        let className = 'lotWork';
        document.write(`<td class="${className}">${object[value]}%</td>`);
      } else if (object[value] >= 50) {
        let className = 'mediumWork';
        document.write(`<td class="${className}">${object[value]}%</td>`);
      } else if (object[value] < 50) {
        let className = 'littleWork';
        document.write(`<td class="${className}">${object[value]}%</td>`);
      }
    } else {
      document.write(`<td>${object[value]}</td>`);
    }
  }

  document.write('</tr>');
}

document.write('</table>');