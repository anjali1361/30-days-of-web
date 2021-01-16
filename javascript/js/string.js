//string functions are very helpful in DOM-Manipulation
const log = console.log;
log('we are at tut 6');
const name ='Anjali';
const greeting ='Good Morning';
log(greeting+" "+name);

let html;
// html ='<h1> this is a heading 
// <p> this is a para';,not valid syntax

html ='<h1> this is a heading' +
'<p> this is a para';//valid

html=html.concat(' this',' str2');//concatenating any no. of string
log(html);
log(html.length);
log(html.toUpperCase());//not changes the actual string
log(html.toLowerCase());
log(html);//not changes the actual string
log(html[0]);
log(html.indexOf('<'));//returns -1 if not found and 1st occurence of repeated string/char
log(html.lastIndexOf('<'));
log(html.charAt(3));
log(html.endsWith('str25'));
log(html.includes('is'));//whther the passed character is in the original string

log(html.substring(1,5));//excluding 5 including 1
log(html.substring(5));//return whole string from 5th index
log(html.substring(-5))//return whole string

log(html.slice(0,4));//including 0 excluding 4,same as substring but excepts -ve parameter also
log(html.slice(-4));//returns last 4 char
log(html.slice(0,4));//returns first 4 char

log(html.split(' '));//returns array based on passed parameter

log(html.replace('this','it'));//replaces only 1st occurence

//template literals

let fruit1='Orange';
let fruit2 ='Apple';
let myHtml = `Hello ${name}
<h1> This is "my" heading</h1>
<p> You like ${fruit1} and ${fruit2}
`;
document.body.innerHTML=myHtml;




