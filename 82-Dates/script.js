/* Basics notation in Date Object
const now = new Date();

console.log(now);

// year month and day
now.getFullYear();
now.getMonth();
now.getDate();
now.getDay();
now.getHours();
now.getMinutes();
now.getSeconds();

//timeouts
now.getTime();

//date strings
now.toDateString();
now.toTimeString();
now.toLocaleString();
*/

// --------------------------------------

/*Lesson83:Timestamps and Comparisons 
//Directly assigining the date
const before=new Date('January 25 2021');
const now= new Date();

// console.log(before);
// console.log(now);

const diff=now.getTime()-before.getTime();
// the diff here is in milliseconds
console.log(diff);

//1000milliseconds = 1 second
const seconds=Math.round(diff/1000);
console.log("Seconds:",seconds);

const minutes=Math.round(seconds/60);
console.log("Minutes:",minutes);

const hours=Math.round(seconds/60/60);
console.log("Hours:",hours);

const days=Math.round(hours/24);
console.log("Last posted Days Count",days);
*/

/*Digital Clock Making
const clock=document.querySelector(".clock");

const everySecondClockUpdate=()=>{
    const time= new Date();
    const h = time.getHours();
    const m = time.getMinutes();
    const s = time.getSeconds();

    const html=`
    <span>${h}</span>:
    <span>${m}</span>:
    <span>${s}</span>
    `
    clock.innerHTML=html;
};

setInterval(everySecondClockUpdate, 1000);
*/

/*Using dateFns library 
const now= Date();

// console.log(dateFns.isToday(now));

//formatting time and dates
console.log(dateFns.format(now,'YYYY'));
console.log(dateFns.format(now,'MMM'));
console.log(dateFns.format(now,'dddd'));
console.log(dateFns.format(now,'Do'));
console.log(dateFns.format(now,'dddd,Do,MMM,YYYY'));
//output Tuesday,2nd,Aug,2022

//Comparing dates
const before=new Date("Febraury 2 2022 12:00:00");
console.log(dateFns.distanceInWords(now,before,{addSuffix:true}));
*/