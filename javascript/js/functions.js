let name1 = "Ruhi"
let name2="Rani"


console.log(`Happy birthday ${name1} Wishing you a very happy birthday on this special ocassion`)
console.log(`Happy birthday ${name2} Wishing you a very happy birthday on this special ocassion`)

//use of functions
function greet(name,thank){
    console.log(`Happy birthday ${name} Wishing you a very happy birthday on this special ocassion ${thank}`)
    return 1;
}

function greet2(name,thank="Thanks a lot"){
    console.log(`Happy birthday ${name} Wishing you a very happy birthday on this special ocassion ${thank}`)
    return 1;
}

let name ="anjali"

let val =greet(name,"Thanks a lot")//if any of the parameter is not passed it gives undefined,to prevent getting undefined,assign default value to function as above
console.log(val)//gives undefined when nothing is returned

val = greet2(name2)

//we can assign a fnctionto variable
const myGreet = function myGreet(name,thank="Thanks a lot") {
    console.log(`Happy birthday ${name} Wishing you a very happy birthday on this special ocassion ${thank}`)
    return 1;//myGreet stores the returned value
}

const myGreet2 = function myGreet2(name,thank="Thanks") {
    let msg = `Happy birthday ${name} Wishing you a very happy birthday on this special ocassion ${thank}`;
    return msg;
}

console.log(myGreet())//note
console.log(myGreet2)//note the syntax difference

const obj ={
    name:"anjali",
    game:function() {//the function with no name are called anonymous function
        return "GTA";
        
    }
}

console.log(obj.game())

arr=['fruit','vegetable','furniture'];

arr.forEach(function(element,array,index){
    console.log(element,index,array);
});


//scope in js
var i=234
console.log(i);

function ui(name){
    var i=9;
    console.log(i);
    return `This is a ${name} ui`
}
console.log(ui("anjali"),i);

var i=234
console.log(i);

function ui(name){
     i=9;
    console.log(i);
    return `This is a ${name} ui`
}
console.log(ui("anjali"),i);

let j=234//i has been alreday declared
console.log(i);

function ui(name){
    let i=9;
    console.log(i);
    return `This is a ${name} ui`
}
console.log(ui("anjali"),i);

