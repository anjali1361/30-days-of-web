//Single Element Selectors:-getElementById(),querySelector()


//1. getElementById()
let element = document.getElementById("heading");
//element = element.className;
//element=element.classList;
//element = element.childNodes;//parentNode
element.style.color ="red";//applied to text
element.innerText ="Hey I am inner text embeded via javascript"
element.innerHTML = "<b>Hey I am inner text embeded via javascript</b>"
console.log(element);

//2. querySelector()
//let sel = document.querySelector('#myfirst');
//sel = document.querySelector('.container')//return first element from dom having that class
sel =  document.querySelector('div')//return first div
sel.style.color="green"
console.log(sel);


//Multi element selector

//1.getElementByClassName()
let elems=document.getElementsByClassName('child');
//console.log(elems[0]);
//elems= document.getElementsByClassName('container')
//console.log(elems[0].getElementsByClassName("child"))//chaining
//console.log(elems);

//2.getElementByTagName()

elems=document.getElementsByTagName('div')

//we can not use forEach loop with html collections
Array.from(elems).forEach(element=> {
    console.log(element);  
    element.style.color="blue" 
});
console.log(elems);






