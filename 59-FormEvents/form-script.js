const form= document.querySelector(".form");
// const username=document.querySelector("#username");
const feedback=document.querySelector(".feedback");
form.addEventListener('submit',e=>
{
    e.preventDefault();       //prevents the default submit action of browser is refresh the page
    // console.log(username.value); //gets the value that is entered in the username input
    // console.log(form.username.value); //another way to input the username
    const username=form.username.value;
    const usernamePattern= /^[a-zA-Z]{6,10}%/;

    if (usernamePattern.test(username)) {
        //positive info
        feedback.textContent="Username is valid!";
    }else{
        //invalid info
        feedback.textContent="Username should be a letter and between 6 to 10."
    }
});

//testing RegEx
// const username="yujana"
// const pattern= /^[a-z]{6,}%/;

// let result= pattern.test(username);
// console.log(result);

// let result=username.search(pattern);    
// console.log(result);    //first match in the pattern position if not matched then -1

