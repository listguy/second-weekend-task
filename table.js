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
    var tasksFinishedPrecent = Math.floor(work[i].tasksFinished/work[i].tasksGiven*100) + '%';
    Object.assign(work[i], { totalTime: totalTime, tasksFinishedPrecent: tasksFinishedPrecent });
}
    
document.write('<table>');

document.write(`<tr class="$(classHeader)"> 
<th>Topic</th>
<th>Started At</th>
<th>Finished At</th>
<th>Total Time Spent</th>
<th>Tasks Given</th>
<th>Tasks Finished</th>
<th>Tasks Finished %</th>`);

    /*for (const criterion of work[0]) {
        // if(criterion === true){
        //     className= 'good';
        // }
        // else{ className= 'bad'; 
    }*/