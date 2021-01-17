let a= document;//DOM haa tree structure ahving parent-child....
//console.log(a);
a = document.all;//gives all html tag in array format
//a=document.body;//return whole body tag including sub tags
//a=document.forms;//return all forms in array format
//a=document.forms[0];

//we can not use forEach loop with html collections
// a.forEach(function(element){//givies us array ,use below method
//     console.log(element);
// })

Array.from(a).forEach(element=> {
    console.log(element);   
});

//a=document.links;
a=document.links[0].href
a=a=document.links[1].text
a=a=document.links[1]
console.log(a);
