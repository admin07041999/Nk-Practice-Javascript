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




