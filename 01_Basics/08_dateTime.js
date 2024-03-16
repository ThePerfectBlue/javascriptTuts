// datatype = object

// month starts from 0

let date = new Date;
console.log(date);

let dd = date.toDateString().split(" ")  // => [ 'Sat', 'Mar', '16', '2024' ]

console.log(`day is ${dd[0]} month is ${dd[1]} dateNo. is ${dd[2]} and year is ${dd[3]}`);

console.log(date.toISOString()) // => 2024-03-16T20:28:15.451Z

console.log(date.toJSON())  // => 2024-03-16T20:28:15.451Z

console.log(date.toLocaleDateString())  // => 3/16/2024

console.log(date.toLocaleString())  // => 3/16/2024, 8:28:15 PM

console.log(date.toTimeString())  // => 20:33:27 GMT+0000 (Coordinated Universal Time)

/*

getDate()	Returns the day of the month (from 1-31)
getDay()	Returns the day of the week (from 0-6)
getFullYear()	Returns the year
getHours()	Returns the hour (from 0-23)
getMilliseconds()	Returns the milliseconds (from 0-999)
getMinutes()	Returns the minutes (from 0-59)
getMonth()	Returns the month (from 0-11)
getSeconds()	Returns the seconds (from 0-59)
getTime()	Returns the number of milliseconds since midnight Jan 1 1970, and a specified date

*/

let timeStamp = Date.now() // =>    1710621970350

console.log(`get time wali: ${date.getTime()}`);
console.log(`now wali:${timeStamp}`);


newDate.toLocaleString('default', {
    weekday: "long", 
})