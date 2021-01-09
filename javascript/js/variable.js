//keyword used to create variables in java
//var,let,const

//var keyword(has global level scope ,doesn't matter wether it is declared)

var name = `harry's name`;//use of backticks
var channel;
var marks=34;
var marks ='34'
var marks=67
//var marks=76yhjj;
console.log(name,channel,marks,$city);
//rules to create variabes in js
/**
 * 1. Canoot start with no.
 * 2. can start with letters,_,or,$
 * 3. case sensitive
 * however it is advisable to not use _(as _ is used in object oriented js) or $(as $ is used in jquery) for naming variables
 */
// var ^city ='Delhi';,gives error

var $city ='delhi';
console.log($city);

//const is same as final in java which must be initialize
//the scope of const variable depends on the position where it s declared

//const name = 'anjali',can not declare name var twice
const ownersName ="hari ram";
//ownersName="anjali",const can not be overriden
//const fruit;//const must be initialized
console.log(ownersName);
let gender = "male"
console.log(gender);
//let gender = "",redeclaration not possible for let  but can be reinitialized

//let keyword(has block level scope,doesn't matter wether it is declared)
{
    let $city="dhanbad";
    $city="kolkata";
    console.log($city);
    var age1=34;//global level scope of var variables
    const gender ="female";
    console.log(gender);
}
age1=90;
console.log($city);
console.log(age1);
//console.log(gender);

//in js arrays r dynamic
const arr1=[12,34,67,90];
//arr1=[56,89,78,90];//as a whole can not be reinitialized
arr1.push(45);
console.log(arr1);

/**
 * Most common programming case types
 * 
 * 1.camelCase//mostly preffered as used in emmet abbreviation
 * 2.Kabab-case
 * 3.snake_case
 * 4.pascalCase 
 */




