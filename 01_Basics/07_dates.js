//Dates

let myDates = new Date()
// console.log(myDates);
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toLocaleString());
// console.log(typeof myDates);

// let mycreatedDate = new Date(2005, 1, 2)
// console.log(mycreatedDate.toDateString());

// let myCreatedDate = new Date(2005, 1, 2, 5, 2)
// console.log(myCreatedDate.toLocaleString());

 let myCreatedDate = new Date("2005-02-02")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000); // seconds

let newDate = new Date()
console.log(newDate.getMonth()+1); // 0-11
console.log(newDate.getFullYear()); // 4 digit year
console.log(newDate.getDay()); // 0-6 (0 is Sunday)


// `${newDate.getDate()}` is the day of the month (1-31)

newDate.toLocaleDateString('default', {
    weekday: 'long',
    timeZone: 'Asia/Kolkata',
    month: 'long',
})