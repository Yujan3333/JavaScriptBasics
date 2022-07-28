/*
// Example for Template String
let name="Harry";
let age=20;
let address='Nepal';
//Uses the backtick in here
let result =`My name is ${name}. I am ${age} years old. My country name is ${address}`;
//Printing in the console
console.log(result);
*/


/*
//Arrays
let array = ["Harry", "Ram", "Naruto"];
let result;
// Printing the length of the array
console.log("This is the side result array speaking")
result = array.length;
console.log(result);

result = array.join("*");
console.log(result);

array2 = ["This", "Is", "Dio", "Speaking"];
result = array.concat(array2);
console.log(result);

console.log("\nThis is the main array speaking");
array.push("Hinata");
console.log(array);
array.pop();
console.log(array);
*/

/* Video 15 Boolean 

//method can return boolean value
let array1=['ram','hari','deku'];
let result=array1.includes('ram');
console.log(result);

let email="abc@gmail.com";
let result1=email.includes('@');
console.log(result1);

//comparision operator
let name='yujan';
console.log(name=='yujan'); //true
console.log(name > 'abiram'); //true // because a comes first(so smaller) then y
console.log(name >'Yujan'); //true // because small letters come first then big letters
*/


/* Video 28 Variables and Block scope
//declaring a global variable
let age=30;

if(true){
    //changes the value of global variable
    // age=50;

    //creates a local scope for the variable age
    let age=50;
    console.log("This is code inside the FIRST code block",age);
    if(true){
    
        console.log("This is code inside the Second code block",age);
        
    }
}

console.log("This is code Outside the code block",age);
*/



/* Lesson 30 Function
//2ways -> function declarationa -> function expression
function age(){
    console.log("This is age using declaration");
}

//funtion is stored inside the variable me here so this is expression and ; at end
const  me= function(){
    console.log("This is me inside the function expression");
};

//function declaration supports hoisting while function expression doesnot
me();
age();
*/

/*Lesson 31 Arguments and Parameters

const hello=function(name="Rocky",day="Whenever he wants"){
    console.log(`${name} is sleeping in ${day}`);
};

hello("Yujan","Afternoon");
*/

/* Lesso33 Arrow function 
//Arrow Function doesnot use function keyword
// One parameter doesnot need the paranthesis But empty and more then one need
//Short code
// if only return you can write directly

//Only One parameter with only return in code block
let area=length => length**2;
console.log(area(10));

//2parameters with some logic and return
const total = (array,per) => {
    let sum=0;
    for(let i =0; i<array.length;i++){
        sum+=array[i]+array[i]*per;
    }
    return sum;
};
console.log(total([10,50,100,150,200],0.13));
*/

/*Lesson 35 Callback Function 
//Function as a parameter
//Execution order of the function is being maintained by the callback function??
let firstFunction= (callBackFunction)=>{
    let sum= 20+34;
    callBackFunction(sum);
    console.log("firstFunction is executing!!");
};

firstFunction((sum)=>{
    console.log(sum)
    console.log("this is the callback function")});
*/

/* Lesson 35 foreach Method 
//foreach takes argument as a callback function in JS
//Syntax anime.forEach(function(currentValue,index,arr),thisValue)
let anime=['Naruto','MHA','OnePiece'];
// let anime1=[...anime1];

anime.forEach((currentAnime,index,array)=> {
    array[index]=currentAnime +" My Fav";
    console.log(`${currentAnime}\t${index}\t${array}`);
});

console.log(anime);
*/

/*Lesson 38 to 40: Creating a Object literal 
let anime = {
    name:'Naruto',
    year:2022,
    location: 'Japan',
    blogs: ['why Naruto is the best anime of all time?','10 things about Naruto'],
    register: function(){
        console.log("This is a method inside anime");
    },
    //One way to declare a method inside the object
    login: function()
    {
        console.log("User logged In to watch Naruto");
    }, 

    logout()
    {
        console.log("User logged Out and didnot watch Naruto");
    },
    
   //Using the "this" keyword and arrow function cannot be used because "this" will be window(global) object
    //One way to use method inside a object
    logBlogs() {       ////Or logBlogs()
        console.log("The Blog contained in anime is:");
        // The forEach method user a callback function as a parameter and i am using here the arrow function
        // Only one parameter so no () and only one statement so no{}
        this.blogs.forEach(blog=>console.log(blog));
    }
    

};
// //Dot Notation to access object
// console.log(anime);
// console.log(anime.name);
// // Can Change the value
// anime.year=1999;
// console.log(anime.year);
// //Square bracket notation to access object
// console.log(anime['name']);
// anime['name']='One Piece';
// console.log(anime['name']);
// // typeof
// console.log(typeof anime);

// //Global Window Object
console.log(this);

anime.login();
anime.logout();
anime.logBlogs();
*/

/* Lesson41: Objects in a array

const anime={
    name:"Naruto",
    year:2022,
    otherAnime:[
        {name:"OnePiece",year:1999},
        {name:"Bleach",year:2020}
    ],
    display(){
        console.log(this.name+'\t'+this.year);
        this.otherAnime.forEach(animeName=>console.log(animeName.name,animeName.year));
    }
};

anime.display();
*/

/*Lesson 46 // //querySekector
//Selects only one p form the top
const single=document.querySelector('p');
console.log(single);
//Selects all the p in the DOM
const multiple=document.querySelectorAll("p");
console.log(multiple);
//Selects all class with classname = class1
const multipleTwo=document.querySelectorAll(".class1");
console.log(multipleTwo);
*/

/*Lesson 47
// Html collection format is there and no forEach method can be used in this unlike the nodelist of querySelector
const para= document.getElementById('');
const para1=document.getElementsByClassName('');
const para2=document.getElementsByTagName('');
*/

/*Lesson 48 adding and changing page content 
const para=document.querySelector('p');
console.log(para.innerText);
para.innerText+=" I am appending something extra";
console.log(para.innerText);

// const multiple=document.querySelectorAll(".class1");
// multiple.forEach(content=>{
//     console.log(content.innerText);
//     content.innerText+=" I am appending this inside the querySelectorAll"
//     console.log(content.innerText);
// })
// console.log(multiple[0].innerText);

let anime=['Naruto','Onepiece'];
const content=document.querySelector('.class1');

anime.forEach(name=>{
    content.innerHTML += `<p>${name}</p>`;
})
*/

/*Lesson 49: getAttribute and setAtrribute 
const att=document.querySelector('a');
console.log(att.getAttribute('href'));

att.setAttribute('href','www.youtube.com');
att.innerText="Link to Youtube";

//setting attribute that doesnot previously exist
att.setAttribute('style','color:red');
*/

/*Lesson 51: classList
// const selector=document.querySelector(".red");
// console.log(selector.classList);
// selector.classList.add("green");
// selector.classList.remove("red");
// console.log(selector.classList);                                    
*/

/*classList property in JS
const para=document.querySelectorAll('p');
para.forEach(element=>{
    //innerText gives only the visible text // <span style="display:none">red and green</span>
    console.log(element.innerText);
    //textContent gives all the text including the hidden one
    if(element.textContent.includes('error')){
        element.classList.add('red');
    }
    if(element.textContent.includes('success')){
        element.classList.add('green');
    }
    const header=document.querySelector('.test');
    //works like add but if used twice removes the class 
    header.classList.toggle('another');
    // header.classList.toggle('another');
});
*/

/*HTML CODE lesson52 */
/*<article>    
        <h1>Header1</h1>
        <p>Paragraph1</p>
        <p>paragraph2</p>
        <p>paragraph3</p>
        <script src="/sandbox.js"></script>
    </article> */
/*For chldren  
const article=document.querySelector('article');
console.log(article.children);  //HTML collection forEach cannot be used
console.log(Array.from(article.children));   //Changed to array forEach can be used
console.log(article.children);    //Doesnot change HTMLcollection only

Array.from(article.children).forEach(child => {
    console.log(child)
});
*/
/*parentElement Practice
const title=document.querySelector("h1");
console.log(title.parentElement);
console.log(title.parentElement.parentElement);

console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

//chaining
Array.from(title.previousElementSibling.parentElement.children).forEach(child=> console.log(`the children here is ${child}`));
*/

