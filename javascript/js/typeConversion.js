//type conversion and type coercion

//String() finction
let myVar;
myVar=34; console.log("data-type is "+(typeof marks1));//note
console.log("data-type is "+(typeof myVar));

myVar = String(34);//we can use all string functions on myVar after type conversion
console.log("data-type is "+(typeof myVar));

//booleanVar = true;
let booleanVar = String(true);
console.log("data-type is "+(typeof booleanVar));
booleanVar = true;
console.log("data-type is "+(typeof booleanVar));

//date
let date =String(new Date());
console.log("data-type is "+(typeof date));

//array
let arr = String([1,7.9,90,89]);
console.log(arr.length,"data-type is "+(typeof arr));//note
arr=[1,7.9,90,89]
console.log(arr.length,"data-type is "+(typeof arr));//note

let i=8;
console.log(i.toString());
console.log("data-type is "+(typeof i));//note

//Number() function
let str1="4567";
console.log("data-type is "+(typeof str1));
str1 = Number(str1);
console.log("data-type is "+(typeof str1));
str1=Number("9hju8");
console.log("data-type is "+(typeof str1));
str1=Number(false);
console.log("data-type is "+(typeof str1));
str1 = Number([1.5,9,8,6]);
console.log("data-type is "+(typeof str1));

//pareseInt/parseFloat
let number = parseInt('34.098');
console.log(number,"data-type is "+(typeof number));//note,use parseFloat to get exact value
number='34';
console.log(number,"data-type is "+(typeof number));
number=parseFloat('34.098');
console.log(number,"data-type is "+(typeof number));

//toFixed() mthod,used to display prices in pretty manner
console.log(number.toFixed(30),"data-type is "+(typeof number));
console.log(number.toFixed(3),"data-type is "+(typeof number));
console.log(number.toFixed(),"data-type is "+(typeof number));


//type coercion
let mystr ="689";
let myNum =34;
console.log(mystr+myNum);//number is converted to string and concatenated

