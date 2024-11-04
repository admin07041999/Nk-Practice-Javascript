
const userProperty ={
    userName : "Neeraj",
    price : 999,
    welComeMessage : function(){
        // this key work denot a current context 
        console.log(`${this.userName} , WelCome to website.`);
    }
}

// userProperty.welComeMessage()
// userProperty.userName = "Neeraj Kumar" // Now change the UserName Value 
// userProperty.welComeMessage()

// console.log(this); // Now Print a {} empty object

//// THis is a Ragular function 
function thisCheckValue(){
    console.log(this);  // when use this in the function return Prototype
}
//thisCheckValue()

//// This is a Arrow function (Basic)
const firstArrowFun = () => {
    console.log(this);
}
//firstArrowFun()

// with Paramiter arrow function 

const secondArrow = (val1, val2) =>{
   return val1 + val2
}
//console.log(secondArrow(20,30));

////Implicit return 
const secondArrowFun = (val1, val2) => `Addition of two numbers: ${val1 + val2}`;

//console.log(secondArrowFun(20,30));

const secArrowFun = (val1, val2) => ({userName : "Neeraj"})

console.log(secArrowFun(20,30));
