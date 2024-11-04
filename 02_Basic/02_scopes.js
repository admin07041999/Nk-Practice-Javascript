// var c = 300  // This not work 
let a = 100
//// this {} is a Scope
if (true) {
    let a = 10
    const b = 20
    var c = 30  
    //console.log("Inner Block value :", a);   
}

console.log(a);
//console.log(b);
console.log(c);

///////////////////////////////////
// Inner function 

function funOne(){
    const userName = "Neeraj kuamr"

    function funTwo(){
        const webSite = "GitHub"
        console.log(userName);
    }
    //console.log(webSite);  // webSite not access out of scope
   funTwo()
}
//funOne()

////+++++++++++++++++Something Interesting++++++++++++++++++++++++++++

function addOne(num1){
    return num1 + 1
}
addOne(5)  // THis function execute only not Print this value.

//Expration  
const addTwo = function(num1){
     return num1 + 1
}
addTwo(5)








