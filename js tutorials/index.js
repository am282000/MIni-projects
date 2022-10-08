//ways to print in javascript
//console.log("hello world");
//document.write("hello guys ")
//alert("me");

//javascript console api -application programming interface.
// console.log("hello world", 4 + 8, "This is mutiple log")
// console.warn("this is a warning")
// console.error("this is an error")
//console.clear()



//javascript variables
// what are variables? containers to store data values.



//datatypes in js
//number
var number1 = 77;
var number2 = 36;
//console.log(number1+number2);

//string
var str1 = "this is a string";
var str2 = 'this is also a string';

//objects

var marks = {
    madaan: 99,
    chawla: 89
}

//booleans
var a = true;
var b = false;
// console.log(a,b)


var und = undefined;
// console.log(undefined)

var n = null;
// console.log(n)

//array
var arr = [1, 2, 3, 4, 5]


//operators in js
//airthematic operators
var a = 100;
var b = 10;
// console.log("value of a+b is",a+b)
// console.log("value of a-b is",a-b)
// console.log("value of a*b is",a*b)
// console.log("value of a/b is",a/b)

//assignment operators
var c = b;
//c+=2;
//c-=2;
//c*=2;
//c/=2;
// console.log(c); 

//comparision operator
var x = 54;
var y = 77;
// console.log(x==y);
// console.log(x>y);
// console.log(x<y)
// console.log(x>=y);
// console.log(x<=y);

//logical operaators

//logical and
// console.log(true && true)  //&& operator is true only whn both true 
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)


//logical or
// console.log(true || true)  // || operator is false only whn both false 
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)   //alt + click to make multiple cursor

//logical not
// console.log(!true);
// console.log(!false);


//functions in js
function avg(a, b) {
    return (a + b) / 2;
}

//DRY princle p work krte h = Don't repeat yourself
c1 = avg(4, 10);
c2 = avg(30, 10);
// console.log(c1,c2);   //this is called function ko invoke krna


// conditionals in js
var age = 90;
//single if statement
// if(age<18){
//     console.log("you are a teenager");
// }

// if else condition

// if(age<18){
//     console.log("you are a teenager");
// }
// else
// {
//     console.log("you are machour now")
// }

//if else ladder
// age=31;
// if(age>32){
//     console.log("adult")
// }
// else if(age>22){
//     console.log("machour")
// }
// else if(age>12){
//     console.log("kid")
// }
// else if(age>2){
//     console.log("bache ho aap")
// }
// else{
//     console.log("paida to hole bhai")
// }
// console.log("end of ladder")



/*
function rasna_checker(age){
    
    if(age<18){
        console.log("you can't drink");
    }
    else{
        console.log("you can drink");
    }    
}
rasna_checker(16);
*/

// var arr = [1, 2, 3, 4, 5, 6, 7];

//console.log(arr);
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])     
//ittrating array means alg alh values to line wise print karana
//}


// 2nd method of ittration of array

/*
arr.forEach(function(element){
console.log(element);
})

*/

//while loop

// aise to var b use kr skte h but var purana ho 
//chuka iska scope pure program m rhta h.

//let ka block level scope hota h !bs curly braces k ander hi use kr skte h

// const z = 0;    //value fix krdi z ki
// z++;
// z = z + 1;

//while loop
let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

//while loop phle condition chck krta h fir chlta h

//do while loop ek baar to chle hi chlega caha condition false b ho

//do while loop

//let j=10; // p unfined print hoga

// do{
//     console.log(arr[j]);
//     j++;
// }
// while(j<arr.length);


//break and continue statements !
//continue is ittration ko chodo agle m bdh jaao
//break looping krna chod do


/*
var arr = [1, 2, 3, 4, 5, 6, 7];


for(var i=0;i<arr.length;i++){
    if(i==2){
        //break;
        continue;
    }
    console.log(arr[i])     
    //ittrating array means alg alh values to line wise print karana
}
*/


let myArr = ["fan", "camera", 34, null, true];
//array methods
// console.log(myArr.length);
//myArr.pop();       //last se ek element ko htana
//myArr.push("maddy");   //adding new element
//myArr.shift();  //removing starting element
myArr.unshift("madaan")  //first p kuch add krna ho
// console.log(myArr);    

const newLen = myArr.unshift("hello")
// console.log(newLen);   //new line m new length likh dega    
// console.log(myArr)
// console.log(myArr.toString());    //covert array into string

d = [1, 34, 65, 6, 7, 33];
// console.log(d.sort());  //sorted array alphabatically

//explore other array methods 

arr = ["banana", "orange", "apple", "mango"];
// console.log(arr.toString());    //convert array into string seprated with comma
//console.log(arr.join(" * "));  //simple join if brackets are null or
// brackets m kuch hoga to uske saath
//console.log(arr.pop());  //remove last element from array
// console.log(arr.push("happy"));  //adds a new element at last return length
// console.log(arr); 
// console.log(arr.shift());  //return 1st element which he remove.
// console.log(arr);    // 1st element is removed all three are as it is.
// console.log(arr.unshift("hello","madaan"));  //print array new length 
// console.log(arr);   //print new array with 2 elements at starting
// console.log(arr[0]="hi");                    //hi
// console.log(arr);                  //hi at 1st position by replacing 0th index
// console.log(arr[arr.length]="cute");      //cute
// console.log(arr);
// console.log(delete arr[0]);         //leave holes
// console.log(arr);
// console.log(arr.splice(1,0, "jaadu","boom","mew"));     // index no , how many elements remove
//what to add
// console.log(arr.splice(2,1));    // just to remove 
// console.log(arr);       //show added element
// console.log(arr.concat(myArr))  // merge to arrays - comma lga k or b add kr skte h 
// console.log(arr.slice(1)); // slice out this in a new array #phle vali same rahegi
// console.log(arr.slice(1,4)); // to slice to or more add first and last+1 index
// console.log(arr); // automatic converts an array in string with comma nd "quotes"
// console.log(arr.toString());  //quotes nhi aayeinge isme
// console.log(arr.sort()); //alphabatical sort
// console.log(arr.reverse());  //reverse ho jayegi





//string methods in js
let myLovelyString = "madaan sahaab 777 sahaab sahaab"
// console.log(myLovelyString.length)  //length btayega including space
// console.log(myLovelyString.indexOf("sahaab")); // 0 se start hoega ...1st sahaab ki index dega
// console.log(myLovelyString.lastIndexOf("sahaab")); // last avle sahaab ka index dega

//  console.log(myLovelyString.slice(1,6)); //staring with zero ..slice upto starting and ending+1 index
// console.log(myLovelyString.substring(1,5)); //difference substring cannot accept neagative value 
// console.log(myLovelyString.substring(5)); //wipe out this display all other
//staring with zero ..slice upto starting and ending+1 index
// var k=myLovelyString.replace("madaan","ashish") //#case sensitive madaan lo replace with ashish
// console.log(k);

// console.log(myLovelyString.search("sahaab")) //search inddex of any
// console.log(myLovelyString.toUpperCase()) //uppercase
// console.log(myLovelyString.toLowerCase())  //lowercase

// let text="have a good day";
// console.log(myLovelyString.concat(" ",text));  //concant 2 strings
// let unknownString="     hi there ! you know me     "
// console.log(unknownString.trim());     //left n right side k extra space ko hta dega
// console.log(unknownString)   //see the diff.

//extracting string character

// console.log(myLovelyString.charAt(3))  //char at that position index start 0
// console.log(myLovelyString.charCodeAt(3))  //char ka ascii code..integer between 0 and 65535 index start 0
// console.log(myLovelyString[2])  // char at this index
// console.log(myLovelyString[2]="k")  // k at this index #string as a array
txt = "a,b,c,d,r"

// console.log(txt.split(""));  //split krdega sbke around with his own comma alg
// console.log(txt.split(","));  //split krdega commas k around text ko #khud , ko nhi krega 
// we can also split these around "|" and " ".



//dates of js

// let myDate=new Date();     // new is used to create a new date
// console.log(myDate);   //current time nd date
// console.log(myDate.getTime());   //tym in seconds
// console.log(myDate.getFullYear());  //live year
// console.log(myDate.getDay());
// s  - 0
// m  - 1
// t  - 2
// w  - 3
// t  - 4
// f  - 5
// s  - 6

// console.log(myDate.getHours());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());



//dom (document object model) manupulation  - everything is a dom in the form of documents
// write document in console to see the code of document
// write document.location in console to see the location of document

//dynamically apne page k contents ko change krna by js

// 1st method is getElemntById

// document.getElementById('click').click();
// document.getElementById('click').style.border='blue';
// document.getElementById('click').style.border='2px solid blue';

// let elem =document.getElementById("click");
// console.log(elem)    //element aajayega console m

let elemClass = document.getElementsByClassName("container")
// console.log(elemClass)
// elemClass[0].style.background ="cyan";   //elemClass naam ki vlass k first container
// ki css ko change krne k liye .style.background or whatever you want to change

// elemClass[1].classList.add("bg-primary"); // kisi b class m .classList.add se kisi or class ki css add kr skte h 
// elemClass[1].classList.add("non-existable"); //yeah class create b nhi hui h abhi still inpect m jake dekho add hogyi h
// elemClass[1].classList.remove("bg-primary"); // remove b kr skte h ese kisi class ko

// console.log(elemClass[0].innerHTML)  // inner html; aa jayegi all tags
// console.log(elemClass[0].innerText)  // inner text mil jayega only text

// tn=document.getElementsByTagName('button')
// console.log(tn)         //sare buttons aa jayeinge

// tn=document.getElementsByTagName('div')
// console.log(tn)         //sare divs aa jayeinge
// createdElement = document.createElement('p');  //element create krdia
// createdElement.innerText="this is a created para";   //paragraph add kr dia
// tn[0].appendChild(createdElement);      //append krdia child ko
// createdElement2 = document.createElement('b');  //element create krdia
// createdElement2.innerText="this is a created bold";   //bold add kr dia
// tn[0].replaceChild(createdElement2,createdElement)  //repalce krdia 2 childs ko

// function myFunction() {
//     var list = document.getElementById("myList");
//     list.removeChild(list.childNodes[0]);     // to remove an element
//   }

// console.log(document.title);
// console.log(document.URL);
// console.log(document.location);
// console.log(document.scripts);
// console.log(document.links);
// console.log(document.images);
// console.log(document.domain);


//selecting using query
// sel=document.querySelector(".container")  //container class ka  1st element aa jayega
// console.log(sel)

// sel=document.querySelectorAll(".container")  //container class ka  sare element aa jayega
// console.log(sel)


function clicked() {
    console.log("button is clicked");
}
// window.onload = function(){              //to load a document
//     console.log("the document was loaded")
// }


// //events in js

// firstContainer.addEventListener("click" ,function(){
//     document.querySelectorAll(".container")[1].innerHTML = "<b>we have clicked</b>"
//     //by this we can change the text on clicking
// console.log("clicked on container");
//}) //kyuki firstcontainer naam se id h to direct hi likhdo
//addEventListner (event name , function)

// firstContainer.addEventListener("mouseover" ,function(){
//     console.log("mouse on container");  //mouse container p le jaate hi print hoga
// });


// firstContainer.addEventListener("mouseout" ,function(){
//     console.log("mouse out of container");  //mouse ko cointainer se bhar le jane p msg aayega
// // });


// let prevHTML =document.querySelectorAll(".container")[1].innerHTML;

// firstContainer.addEventListener("mouseup" ,function(){
//     document.querySelectorAll(".container")[1].innerHTML =prevHTML;
//     console.log("mouse up when clicked on container");
// });

// firstContainer.addEventListener("mousedown" ,function(){
//     document.querySelectorAll(".container")[1].innerHTML = "<b>we have clicked</b>"
//     console.log("mouse down when clicked on container");
// });


//arrow functions
// function sum(a,b){        //both are same thing
//     return(a+b);
// }

// sum=(a,b)=>{
//     return a+b;    //array function
// }

//set timeout  and setinterval

// logCall=()=>{
//     document.querySelectorAll('.container')[1].innerHTML="<b>set time fired</b>"
//     console.log("i am log");
// }
// p=setTimeout(logCall,2000)     //function name , time in milli sec = sec*1000 //one tym
// clearTimeout(p) likhte hi ruk jayega console ,
// q=setInterval(logCall,2000)     //function name , time in milli sec = sec*1000 //chlta jayegaa
//clearInterval(q) likhte hi ruk jayega console m


//local storage in js
//data save krne m help krta in user pc as a string !
localStorage.setItem("name","madaansahaab77")     //don' store any personal info in local stroge
//anyone can easily see it @inspect>applical>localStorage>server link
// console.log(localStorage)
// console.log(localStorage.clear())
// console.log(localStorage.getItem("name"))
// console.log(localStorage.removeItem("name"))  
// console.log(localStorage.clear())



//JSON in js - javascriot object notation

//open standard file format - data exchange m useful hota h
obj = {name: "madaansahaab77", length: 1, a:{this:'th"at'}} 
//single quote ko valid standard nhi maanta JSON
//beech m khi b quote lagaoge to ye \(backslash) s ssath return karega
//agr appa \"quote se phle khud ka \=\ ,\\= \\\ return karega
 //local storage vali hi value leli string type ka nhi h vaice
// js=JSON.stringify(obj);  //string m convert krdia
// console.log(js)      //ab string type ka h
// console.log(typeof js)
// console.log(typeof obj)
// parsed =JSON.parse(`{"name":"madaansahaab77","length":1,"a":{"this":"that"}}`)
// //valid json string diya h input m    //backticks m b likh skte is string ko
// console.log(parsed);

//backtics-template literals
// let v=34;
// console.log(`this is my ${v}`)   //vaeriable se replace ho jayega



//versions of js 

// ecmascript ek standard h jisse javascript ko mantain kiya jaana h
