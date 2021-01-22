const myObj = [
    {
        startedAt: new Date('2021-01-09:09:00'),
        finishedAt: new Date('2021-01-09:14:00'),
        tasksGiven: '6',
        tasksFinished: '5',
        totalTime: '',
        tasksFinishedPrecent: '',
        topic: 'Html'
    },
    {
        startedAt: new Date('2021-01-09:09:00'),
        finishedAt: new Date('2021-01-09:16:00'),
        tasksGiven: '7',
        tasksFinished: '4',
        totalTime: '',
        tasksFinishedPrecent: '',
        topic: 'Javascript'
    },
    {
        startedAt: new Date('2021-01-09:09:00'),
        finishedAt: new Date('2021-01-09:18:00'),
        tasksGiven: '9',
        tasksFinished: '9',
        totalTime: '',
        tasksFinishedPrecent: '',
        topic: 'Css'
    },
    {
        startedAt: new Date('2021-01-09:12:00'),
        finishedAt: new Date('2021-01-09:20:00'),
        tasksGiven: '5',
        tasksFinished: '2',
        totalTime: '',
        tasksFinishedPrecent: '',
        topic: 'Array'
    },
    {
        startedAt: new Date('2021-01-09:04:00'),
        finishedAt: new Date('2021-01-09:12:00'),
        tasksGiven: '6',
        tasksFinished: '3',
        totalTime: '',
        tasksFinishedPrecent: '',
        topic: 'Function'
    },
    {
        startedAt: new Date('2021-01-09:10:00'),
        finishedAt: new Date('2021-01-09:12:00'),
        tasksGiven: '6',
        tasksFinished: '1',
        totalTime: '',
        tasksFinishedPrecent: '',
        topic: 'Object'
    },
    {
        startedAt: new Date('2021-01-09:07:00'),
        finishedAt: new Date('2021-01-09:12:00'),
        tasksGiven: '4',
        tasksFinished: '4',
        totalTime: '',
        tasksFinishedPrecent: '',
        topic: 'JSON'
    },
    {
        startedAt: new Date('2021-01-09:13:00'),
        finishedAt: new Date('2021-01-09:16:00'),
        tasksGiven: '7',
        tasksFinished: '5',
        totalTime: '',
        tasksFinishedPrecent: '',
        topic: 'Methods'
    },
    {
        startedAt: new Date('2021-01-09:09:00'),
        finishedAt: new Date('2021-01-09:14:00'),
        tasksGiven: '4',
        tasksFinished: '3',
        totalTime: '',
        tasksFinishedPrecent: '',
        topic: 'Loops'
    },
    {
        startedAt: new Date('2021-01-09:04:00'),
        finishedAt: new Date('2021-01-09:13:00'),
        tasksGiven: '3',
        tasksFinished: '3',
        totalTime: '',
        tasksFinishedPrecent: '',
        topic: 'Github'
    }
];

const table_headers = Object.keys(myObj[0]);
let index;
// here start the table
document.write(`<table>`);
document.write(`<tr>`);

for (let header of table_headers) {
    document.write(`<th scope='col'>${header} </th>`);
};

document.write(`</tr>`);

for (let obj of myObj) {
    obj.totalTime = diff_hours(obj.startedAt, obj.finishedAt);
    obj.tasksFinishedPrecent = calculatePrecent(obj.tasksFinished, obj.tasksGiven);
    obj.startedAt = getTime(obj.startedAt);
    obj.finishedAt = getTime(obj.finishedAt);
    
    document.write(`<tr>`);
    
    const row_values = Object.values(obj);
    index = 0;
    for (let value of row_values) {
        if (index === row_values.length - 1) {
            document.write(`<th scope='topic'>${value}</th>`);
        }else if (index === 4) {
            document.write(`<td class=${getColorTotalTime(value)}>${value}</td>`);
        } else if (index === 5) {
            document.write(`<td class=${getColorPrecent(value)}>${value}%</td>`);
        } else {
            document.write(`<td>${value}</td>`);
        }
        index++
    }
    document.write(`</tr>`);
};
document.write(`</table>`);




function diff_hours(dt1, dt2) {
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    let total = Math.abs(Math.round(diff)); 
    return total;
} 




function calculatePrecent(num1, num2) {
    let precent = Math.floor((num1 / num2) * 100);

    return precent;
}



function getTime(date) {
    let hour = date.getHours();
    let minutes = date.getMinutes();
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    return hour + ':' + minutes;
} 




function getColorPrecent(number) {
    let classN;
    if (number > 75) {
        classN = "range75";
    } else if (number >= 50) {
        classN = "range50";
    } else if (number < 50) {
        classN = "range00"
    }
    return classN;
}



function getColorTotalTime(number) {
    let className;
    if (number > 7) {
        className = "range7";
    } else if (number >= 4) {
        className = "range4";
    } else if (number < 4) {
        className = "range0"
    }
    return className;
}