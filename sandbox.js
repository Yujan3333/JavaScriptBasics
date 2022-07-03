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