let score = 50;

console.log(score)
console.log(2+2);
console.log(2**2);
console.log(2%2);
let str  = "";
console.log(Boolean(str));
//=====Compersion Operation =================
// console.log("2" > 1);  //Match both dataType 
// console.log("02" > 1);


console.log("Compersion Operation");

console.log(2 > 1);
console.log(2 < 1);
console.log(null > 0);
console.log(null >= 0);
console.log(null == 0);


//In this case all time false value 
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);
console.log(undefined <= 0);

//=== This check Stractly (checking condition with datatype)
console.log("02" ===1);


// Primitive DataType 
// 7, string,number,Boolearn, BigInt, null, undefiend,Symble

const strNum = 1000;
const scoreValue = 100.3;
const isLoggedIn = false;
const outSideTemp = null;
let userEmailId;


const id = Symbol('1234');
const anotherId = Symbol('1234');

console.log(id === anotherId);

const bigNum = 864823768746237692n   // THis is a BigInt number use in this n prefix for using bigint
console.log(bigNum);


// ReferenceType (Non Primitive Data Type)
// Array, object , Function,

// Array 
const heros = ["Neeraj", "Up", " Delhi",78];
console.log(heros);

//object 
let objData={
    Name : "Neeraj",
    Age : 22,
    City : "Delhi"
}
console.log(objData);


//Function 

const myFunction = function(){
    console.log("This is Function..!"); 
}

console.log(typeof myFunction);

//  Stack and Heap memory in javascript
//Stack store the value of all Primitive Data type 

let cityName = "Delhi";
let newCityName = cityName;
newCityName = "New Delhi";
console.log(newCityName);  // THis Data store in the Stack and geting a copy 

//This Data Store in Heap Memory 
let objOne = {
    Email : "neeraj@google.com",
    Name: "Neeraj Kumar",
    Age : 18
}

console.log(objOne.Name); // Intreact with actual value

//Strings Method in Javascript 

const adminName = "Neeraj";
const repoCount = 50;

//console.log(adminName +' '+  repoCount); //This is old  

// I recommended 
//Use of BackTick Like this `` Under this string InterPolution 

console.log(`Hellow My Name Is ${adminName} and my repo count is ${repoCount}`);

const gameName = new String("Neeraj kumar");
console.log(gameName[0]);
console.log(gameName.toUpperCase());  // THis Intreact with heap Memory Not change actual value 
console.log(gameName.charAt(2));  //Returns the character at the specified index
console.log(gameName.indexOf('j'));  //Returns the index of string

const newGameName  = gameName.substring(0, 3); // accept string start point and end point;
console.log(newGameName);


const anotherString = gameName.slice(-6,3);
console.log(anotherString);


const strTrim = "   NeerajKumar  ";
console.log(strTrim.trim()); // 'NeerajKumar' 

const url = "https://github.com/admin07041999/%20Nk-Practice-Javascript";

console.log(url.replace('%20',''));
console.log(url.includes('%20',''));  // Return Boolean value


const spliString = "My Name is Neeraj kumar";
const words = spliString.split(' ');
console.log(words[3]);


// Date and time in depth in javascript 

let myDate = new Date();
console.log(myDate.toString());  //(India Standard Time)
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate); // return type 


let myCreatedDate = new Date(2024,0,22);
console.log(myCreatedDate.getTime()); // return number 

console.log(Math.floor(Date.now()/1000)); // return milisecond

let getNewDate = new Date();
console.log(getNewDate.getMonth() + 1); // Get Month only But month start from 0 alwayse 

console.log(getNewDate.getDate()); 






