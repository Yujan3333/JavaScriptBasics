/*HTTP request 

const request = new XMLHttpRequest(); //send a request to get some data


//fires every time there is state change
//4phases LOOK in MDN
request.addEventListener('readystatechange',()=>{
    // console.log(request, request.readyState);
    
    //after the phase is 4 then we can get the response text
    // the readyState 4 denotes the request is done and the status 200 shows that there are no errors along the way like in the URL exists from where the data is needed to be fetched
    if(request.readyState === 4 && request.status === 200){
        //Now we can do something with the data
        console.log(request.responseText);
    } else if(request.readyState ===4){
        console.log("Couldnot fetch the data");
    }
});


//types of request we can make like POST, PUT
//2 arguments first is the type of request and 2nd is from where you would like to get the data
request.open("GET","https://jsonplaceholder.typicode.com/todos");
//sends the HttpRequest
request.send();

//if we get some error in the 2nd argument of open then we go through all the phases until 4 and we get the satus 404 and no reponse text
*/

/*Using JSON created by myself */
//writing all the above code inside the function todos to make it more reusable
const getTodos= (callback)=>{
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status === 200){
            //using callback function
            //here request.responseText is in string not in JS so changing it to JS object
            const data= JSON.parse(request.responseText)
            callback(undefined,data);
        } else if(request.readyState ===4){
            callback("could no fetch the data", undefined);
        }
    });

    request.open("GET","todos.json ");
    request.send();
}

//Using the concept of the Async programming
console.log(1);
console.log(2);
//convention in the callback function to use err first then the data
getTodos((err ,data)=>{
    console.log('callback fired');
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
console.log(3);
console.log(4);

