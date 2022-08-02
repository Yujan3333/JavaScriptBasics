const getTodos= (resource)=>{
    return new Promise((resolve,reject)=>{
        const request= new XMLHttpRequest();

        request.addEventListener('readystatechange',()=>{
            if(request.readyState === 4 && request.status === 200){
                const data= JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4){
                reject("error on gettin resource");
            }
        });

        request.open("GET",resource);
        request.send();
    });
};


// getTodos('/94-Promises/todos/yujan.json')
    // .then(data=>console.log('promise is resolved:',data))
    // .catch(err=>console.log("Promises is rejected:",err));

    //chaining the promises which solves the callback hell
getTodos('/94-Promises/todos/yujan.json').then(data=>{
    console.log("Promise 1 resolved",data);
    return getTodos('/94-Promises/todos/rabee.json');
}).then(data=>{
    console.log("Promise 2 resolved",data);
    return getTodos('/94-Promises/todos/prabhat.json');
}).then(data=>{
    console.log("Promise 3 resolved",data);
}).catch(err=>{
        console.log("Promise rejected :",err);
    })