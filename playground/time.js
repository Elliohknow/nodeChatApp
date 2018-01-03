var moment = require('moment');

// Jan 1st 1970 00:00:00 am

// var date = new Date();
// var months = ['Jan', 'Feb'];
// console.log(date.getMonth());

// var date = moment();
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// 8:03 am

var time = moment();
time.subtract(3, 'hours').subtract(7, 'minutes');
console.log(time.format('h:mm a'));