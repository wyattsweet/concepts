// convert 12 hour time to 24 hour time
// date = '07:05:45PM'
// should become = '19:05:45PM'

var time = '12:05:39AM'
var hour = time.substr(0,2);
var min = time.substr(3, 2);
var sec = time.substr(6, 2);
var m = time[time.length - 2] + time[time.length - 1];

if (hour < 12 && m == 'AM') {
  time = `${hour}:${min}:${sec}`
} else if (hour == 12 && m == 'AM') {
  time = `00:${min}:${sec}`
} else if (hour == 12 && m == 'PM') {
  time = `12:${min}:${sec}`
}else {
   time = `${(parseInt(hour[0]) + 1)}${(parseInt(hour[1]) + 2)}:${min}:${sec}`;
}

console.log(time);
