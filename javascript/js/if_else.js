const log =console.log;
if( 5 > 0){
    console.log("5 is greater than 0");
 }
if( 5 < 0){
    console.log("5 is less than 0");
}
let salary = 500;
if( salary > 1000)
{
console.log("My Salary is greater than 1000");
}else{
console.log("My Salary is less than or equal to 1000");
}
var salary2 = 500;
if( salary2 > 1000)
{
console.log("My Salary is greater than 1000");
}
else if(salary2 < 1000){
console.log("My Salary is less than 1000");
} else{
console.log("My Salary equal to 1000");
}

//conditional
log(5>0? "Greater" : "Smaller");

const age = 128;
const doesDrive = false;
// const vari = 34;

if (age!=19){
    console.log('Age is not 19')
}

if(age !== 65){
    console.log('Age is not 65')
}

else{
    console.log('Age is not 19')
}

//to check whether vari is defined or not
if (typeof vari !== 'undefined'){
    console.log('Vari is defined');
}

else{
    console.log('Vari is not defined');
}

if (doesDrive || age>18){
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}

switch (age) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;

    default:
        console.log("You are unknown age");
        break;
}  
