const log = console.log;

//declaring and initializing array
let marks =[34,89,76,56,09];//array of no.
const fruits =['Orange','Apple','Pineapple'];//array of string
const mixed =['str',34,[23,false,'str2'],45.0,{name:'anjali',marks:90},45];
const arr = new Array(23,123,21,'Apple');

//printing or accessing array
log(arr);
log(fruits);
log(marks);
log(mixed);
log(mixed[4]);
log(mixed[4].name+" "+mixed[4].marks);
log(mixed.length);

log(Array.isArray(arr));
log(Array.isArray('adsfg'));
arr[0] = 'harry';
log(arr);

//array methods,note the below methods are changing original array
let value = marks.indexOf(34);
log(value);

//mutating/modifying array
marks.push(67,89);//one or more values are added to end of array
log(marks);
marks.unshift(10,20,'anjali')//one or more values are added to start of array
log(marks);

marks.pop();//remove last element from array
log(marks);
marks.shift();//remove first element from array
log(marks);

marks.splice(1,2);//starting from 1 ,2 elemnts are getting removed from the array
log(marks);

marks.reverse();
log(marks);

let marks2=[1,2,3];
marks=marks.concat(marks2);
log(marks);

let myObj={
    'first name':'anjali',//to add space in key use string datatype
    channel:'HnCC',
    isActive:true,
    marks:[1,2,34,67]
}
log(myObj);
log(myObj.isActive);
log(myObj['first name']);
log(myObj['channel']);
