/**
 * DataTypes in js types:-
 * 1.Primitive(stored in stack,base data-types)-->string,numbers,boolean,null(var name = null;,used to intentionally check whether a variable has a null as a value or not),undefined(var gender;,default value undefined),symbol
 * 2.Reference(stored in heap(dynamic memory),objects)-->arrays,object literals,functions,dates
 */

 //Primitive data-types

 //String
 let name ="anjali";
 console.log("hello"+name);
 console.log("data-type is "+(typeof name));

 //Numbers
 let marks=34.4;
 let marks1='34';
 console.log(marks);
 console.log("data-type is "+(typeof marks));
 console.log("data-type is "+(typeof marks1));

 //Boolean
 let isDriver =false;
 console.log(isDriver);
 console.log("data-type is "+(typeof isDriver));

 //Null
 let nullVar=null;
 console.log(nullVar);
 console.log("data-type is "+(typeof nullVar));//datatype of null is object but actually it is a primitive data-type

 //Undefined
 let undef;//let undef=undefined;
 console.log(undef);
 console.log("data-type is "+(typeof undef));

 //Reference data-type
 myarr=[1,4,true,9,'anjali',67,null,undefined];
 console.log(myarr);
 console.log("data-type is "+(typeof myarr));
 myarr1=[1.6,5,4];
 console.log("data-type is "+(typeof myarr1));

 //Object literals
 let stMarks ={
     harry:34,
     shubham:78,
     'Rohan Das':67,
     //Rohan Das=78
 }
 console.log(stMarks);
 console.log("data-type is "+(typeof stMarks));

 //functions
 function findName() {
     
 }
 console.log("data-type is "+(typeof findName));

 let date = new Date();
 console.log("data-type is "+(typeof date));
