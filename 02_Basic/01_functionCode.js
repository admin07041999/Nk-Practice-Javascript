
function sayMyName(){
    console.log("N");
    console.log("E");
    console.log("E");
    console.log("R");
    console.log("A");
    console.log("J");
}

//THis sayMyName function refrence and () Executation
//sayMyName();

///addTowNumber function with Paramiter
function addTowNumber(num1, num2){
   console.log(num1 + num2);
}
//addTowNumber(2, 5); // addTowNumber When call without Paramiter return Nan value 


function logInUserMessage(userName){
    if(!userName){ 
        console.log("Please enter User Name...!");       
    }
    return `${userName} just loged in`; // string interPolution 
}
console.log(logInUserMessage("Neeraj"));

/// ... rest Operater or Sprid operater 
//...num1 Rest Operater 
// function calculaterPrice(...num1){
//     return num1;
// }
// console.log(calculaterPrice(200,300,100,40,50,80));

//// val1 = 200, val2 =300 value and num1 in the all paramiter value's 
// function calculaterPrice1(val1,val2, ...num1){
//     return num1;
// }
// console.log(calculaterPrice1(200,300,100,40,50,80));

const userProperty ={
    userName : "Neeraj Kumar",
    price : 199
}

function handleObject(anyObject){
    console.log(`User Name is ${anyObject.userName} and price is ${anyObject.price}`);   
}

////this handleObject function call different different type's  
//handleObject(userProperty);
handleObject({
    userName : "Ram",
    price : 399
});

/// use Array in the function 
const  myNewArr = [200,100,300,50]

function returnSecondValue(getArray){
   return getArray[1]
}
//console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200,100,300,50]));

 

