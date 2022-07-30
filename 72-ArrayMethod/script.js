
/*Lesson71:Filter Method
const people=[
    {name:'Elon',status:"VIP"},
    {name:'Natsu',status:"Common"},
    {name:'Naruto',status:"VIP"},
    {name:'Rick',status:"Youtuber"},
];

const onlyVip= people.filter((person)=>{
    if(person.status==="VIP"){
        return true;
    }
})

console.log(onlyVip);
*/

/*Lesson:72:Map Method
const animes=[
        {name:"Naruto",rating:"9"},
        {name:"Onepiece",rating:"9.5"},
        {name:"Bleach",rating:"6"},
        {name:"My Hero Academia",rating:"8.5"}
];
//Subtracting 1 rating from anime.rating over 9
const changedRatings= animes.map((anime)=>{
    if (anime.rating >= 9) {
        return {name:anime.name,rating:anime.rating-1};
    } else {
        return anime;
    }
});

//Original Array
console.log(animes);
//Mapped array
console.log(changedRatings);
*/

/*any value you want .. number .. but still iterates the array by using callback function 
parameters in this "accumulator" remembers the  previous value and another is the "current"*/
/*Lesson 73:Reduce Method
const students=[
    {name:"yujan",marks:90},
    {name:"rabee",marks:80},
    {name:"prabhat",marks:99},
    {name:"yujan",marks:90},
    {name:"nitesh",marks:95}
];

const yujanTotalMarks= students.reduce((acc,curr) =>{
    if(curr.name==="yujan"){
        acc+= curr.marks;
    }
    return acc;
},0);

console.log(yujanTotalMarks);
*/

/*Lesson74:Find Method
const array=[10,50,20,30,60,70,40,80,90];

//finding the 1st value greater then 50
const greater=array.find((value)=>{
    if(value>50){
        return true;
    }
});

console.log(greater);
*/

/*Lesson75Sort and Reverse
//Destructive Because changes the original array

//string
const name=["yujan","nitesh","rabee","prabhat"];

//sorts in ascending order
name.sort();
//sorts in opposite  order of the order in array
name.reverse();
// console.log(name);

//numbers
const numbers=[1,20,25,35,79,62,69,75,90,100,99];
//here sort() only looks at the first number OUPUT will be::Array(11)
//0: 1
//1: 100
//2: 20
//3: 25
//4: 35
//5: 62
//6: 69
//7: 75
//8: 79
//9: 90
//10: 99
//length: 11

numbers.sort();
// console.log(numbers);

const anime=[
    {name:"Naruto",rating:20},
    {name:"Onepiece",rating:10},
    {name:"Fairy tale",rating:104},
    {name:"Black Clover",rating:34},
    {name:"MHA",rating:45}
]

//here sort() algo doesnot know what to sort so we use a function with parameter a and b; a,b are two simultaneous element of the array
// a comes first then -1(neg) ... b comes first then 1(pos) else equal then 0
anime.sort((a,b)=>
{
    if (a.rating>b.rating) {
        return -1;
    }
    else if(b.rating>a.rating) 
    {
        return 1;
    }
    else{
        return 0;
    }
});

// console.log(sorting);
console.log(anime);

//above code can be shortened to
anime.sort((a,b)=>b-a);
console.log(anime);

//solving the problems of the number
const number=[1,20,25,35,79,62,69,75,90,100,99];
number.sort((a,b)=>b-a); //descending order sort
console.log(number);
number.sort((a,b)=>a-b);    //acending order sort
console.log(number);

*/

/*Lesson76:Array Method Chaining*/
const people=[
    {name:'Elon',marks:20},
    {name:'Natsu',marks:60},
    {name:'Naruto',marks:70},
    {name:'Rick',marks:50}
];
//fitering non VIP
const fileteredPeople=people.filter((person)=>person.marks>50);

const mappedPeople=fileteredPeople.map((person)=>{
    return `${person.name} got ${person.marks} in the test.`;
});

//here combining both method without the use of extra variable
const finalVariable=people
    .filter((person)=>person.marks>50)
    .map((person)=>{
    return `${person.name} got ${person.marks} in the test.`;
});

console.log(finalVariable);
