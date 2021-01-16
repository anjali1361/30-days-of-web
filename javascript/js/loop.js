for(var i=1; i<=5; i++) {
    console.log(i);
}
// An object with some properties 
var person = {name: "Harry", language: "JavaScript", age: 20};
// Loop through all the properties in the object  
for(var i in person) {  
console.log( i + " = " + person[i]); 
}

const  alpha = ['a', 'b', 'c'];
for (let i = 0; i < alpha.length; i++) {
console.log(alpha[i]);
}

alpha.forEach(function(element, index, array){
    console.log(element, index, array);
});

let l = 1, m = 100;
while (l <= m) {
    console.log(i);
l += 1;
}

let j = 1;
let n =100;
do {
    console.log(i);
    j++;
} while(j <= n);

for (let i = 0; i < 100; i++) {
    console.log(i);
       if (i == 90) {
           break;
       }
}

//skipping iteration
let k = 10;
for (let x = 1; x <=k; x++) {
    if (x == 5) {
        continue;
}}