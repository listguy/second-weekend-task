//declaration of object
const myObj = [
    {
        StartedAt: new Date('2021-01-09:09:00'),
        FinishedAt: new Date('2021-01-09:14:00'),
        TotalTimeSpent: '',
        TasksGiven: 6,
        TasksFinished: 5,
        TasksFinishedPrecent: '',
        Topic: 'Html'
    },
    {
        StartedAt: new Date('2021-01-09:09:00'),
        FinishedAt: new Date('2021-01-09:16:00'),
        TotalTimeSpent: '',
        TasksGiven: 7,
        TasksFinished: 4,
        TasksFinishedPrecent: '',
        Topic: 'Javascript'
    },
    {
        StartedAt: new Date('2021-01-09:09:00'),
        FinishedAt: new Date('2021-01-09:11:30'),
        TotalTimeSpent: '',
        TasksGiven: 9,
        TasksFinished: 9,
        TasksFinishedPrecent: '',
        Topic: 'Css'
    },
    {
        StartedAt: new Date('2021-01-09:12:30'),
        FinishedAt: new Date('2021-01-09:20:00'),
        TotalTimeSpent: '',
        TasksGiven: 5,
        TasksFinished: 2,
        TasksFinishedPrecent: '',
        Topic: 'Array'
    },
    {
        StartedAt: new Date('2021-01-09:04:00'),
        FinishedAt: new Date('2021-01-09:12:00'),
        TotalTimeSpent: '',
        TasksGiven: 6,
        TasksFinished: 3,
        TasksFinishedPrecent: '',
        Topic: 'Function'
    },
    {
        StartedAt: new Date('2021-01-09:10:00'),
        FinishedAt: new Date('2021-01-09:12:00'),
        TotalTimeSpent: '',
        TasksGiven: 6,
        TasksFinished: 1,
        TasksFinishedPrecent: '',
        Topic: 'Object'
    },
    {
        StartedAt: new Date('2021-01-09:08:30'),
        FinishedAt: new Date('2021-01-09:16:00'),
        TotalTimeSpent: '',
        TasksGiven: 10,
        TasksFinished: 8,
        TasksFinishedPrecent: '',
        Topic: 'JSON'
    },
    {
        StartedAt: new Date('2021-01-09:13:00'),
        FinishedAt: new Date('2021-01-09:16:00'),
        TotalTimeSpent: '',
        TasksGiven: 7,
        TasksFinished: 5,
        TasksFinishedPrecent: '',
        Topic: 'VS code'
    },
    {
        StartedAt: new Date('2021-01-09:09:00'),
        FinishedAt: new Date('2021-01-09:15:30'),
        TotalTimeSpent: '',
        TasksGiven: 4,
        TasksFinished: 3,
        TasksFinishedPrecent: '',
        Topic: 'Loops'
    },
    {
        StartedAt: new Date('2021-01-09:04:00'),
        FinishedAt: new Date('2021-01-09:13:00'),
        TotalTimeSpent: '',
        TasksGiven: 13,
        TasksFinished: 11,
        TasksFinishedPrecent: '',
        Topic: 'Github'
    }
];
const table_headers = Object.keys(myObj[0]);
let index;

// here start the table section
const table = document.createElement('table');
let tr = document.createElement('tr');
// add all the headers to the table
for (let header of table_headers) {
    let th = document.createElement('th');
    th.classList.add('col');
    th.style = 'background-Color: #383535; color: #fff';
    th.innerHTML = header;
    tr.append(th);
    table.appendChild(tr);
};

for (let obj of myObj) {
    //redefines the properties
    obj.TotalTimeSpent = diff_hours(obj.StartedAt, obj.FinishedAt);
    obj.TasksFinishedPrecent = calculatePrecent(obj.TasksFinished, obj.TasksGiven);
    obj.StartedAt = getTime(obj.StartedAt);
    obj.FinishedAt = getTime(obj.FinishedAt);

    // add all the values to the table   
    const row_values = Object.values(obj);
    index = 0;
    let tr2 = document.createElement('tr');
    for (let value of row_values) {
        
        if (index === row_values.length - 1) {
            let th = document.createElement('th');
            th.classList.add('topic');
            th.style = 'background-Color: #4e5052; color: #fff';
            th.innerHTML = value;
            tr2.append(th);
            table.appendChild(tr2);
        } else if (index === 2) {
            let td = document.createElement('td');
            td.classList.add(getColorTotalTime(value));
            td.innerHTML = value;
            tr2.append(td);
            table.appendChild(tr2);
        } else if (index === 5) {
            let td = document.createElement('td');
            td.classList.add(getColorPrecent(value));
            td.innerHTML = value;
            tr2.append(td);
            table.appendChild(tr2);
        } else {
            let td = document.createElement('td');
            td.innerHTML = value;
            tr2.append(td);
            table.appendChild(tr2);
        }
        index++
    }
};
document.body.append(table);
// function to get the difference between the hours
function diff_hours(dt1, dt2) {
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    let total = Math.abs(diff); 
    return total;
} 
//function to get precent of the tesks finished
function calculatePrecent(num1, num2) {
    let precent = Math.floor((num1 / num2) * 100);

    return precent;
}

// function to get the full time (00:00)
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

//functions for changing color by value
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