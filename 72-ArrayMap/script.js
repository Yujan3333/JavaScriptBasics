
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