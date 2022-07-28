/*For Button 
const button=document.querySelector("button");
//Add event Listener
button.addEventListener('click',()=>console.log("Button is clicked"))
*/
/* Lesson53: ADDING LI AND REMOVING AS WELL
const ul=document.querySelector('ul');

const button=document.querySelector('button');
button.addEventListener('click',()=>{
    // ul.innerHTML+= "<li>NEW ITEM</li>"   // It is one way to do this
    const li=document.createElement('li');
    li.textContent="Something new";
    //adds at the bottom of parent 'ul'
    ul.append(li);
    //adds at the top of  parent 'ul'
    ul.prepend(li);
})

const items=document.querySelectorAll('li'); 
items.forEach(item=>
    {
        //addEventListener has a argument element or in short 'e' it is a object 
        item.addEventListener('click',(e)=>{
            // console.log(e);
            // console.log(e.target); // //Targets the particular list element
            // e.target.style.textDecoration="line-through";
            e.target.remove(); //alos item.remove()
        })
    });
*/

/*Lesson 55: EventBubling and EventDelegation 

const button=document.querySelector('button');
button.addEventListener('click',()=>{
    // ul.innerHTML+= "<li>NEW ITEM</li>"   // It is one way to do this
    const li=document.createElement('li');  // Another way to this
    li.textContent="Something new";
    //adds at the bottom of parent 'ul'
    ul.append(li);
    //adds at the top of  parent 'ul'
    ul.prepend(li);
})

NEED TO REMOVE THE DOWN CODE TO AUTOMATIC EVENTLISTENER TO <LI>>
const items=document.querySelectorAll('li'); 
items.forEach(item=>
    {
        //addEventListener has a argument element or in short 'e' it is a object 
        item.addEventListener('click',(e)=>{
            // console.log(e);
            // console.log(e.target); // //Targets the particular list element
            // e.target.style.textDecoration="line-through";
            
            // e.stopPropagation();    // //Stops the Event bubbling to go to the parent
            e.target.remove(); //alos item.remove()
        })
    });


    const ul=document.querySelector('ul');

    ul.addEventListener('click',e =>
    {
       // e.target.remove(); // if only doing this JS cannot identify if you clicked on LI or not.
       //Thats why
        if(e.target.tagName==="LI"){
            e.target.remove();
        }
    })
    
*/
