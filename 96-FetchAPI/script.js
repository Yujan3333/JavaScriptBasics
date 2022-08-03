/*fetch api

// even is url is error no problem
//promise in only rejected if we get the network error
fetch('todos/yujan.json').then((response)=>{
    console.log("resolved",response);
    //json method is used like JSON.parse
    //responce.json() -> returns a promise
    return response.json();
    //so we return the promise and print the data in the next .then()
}).then(data=>{
    console.log(data);
}).catch((err)=>{
    console.log("rejected: ",err);
});
*/

//Lesson 97 async and await
const getTodos= async ()=>{
    const response = await fetch('todos/yujan1.json');
    //fetch returns promise
    const data = await response.json();
    // await returns promise
    return data;
}

//getTodos returns promise so to resolve we use then()
getTodos()
    .then((data)=>console.log(data));