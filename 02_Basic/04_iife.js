//Immediately Invoked Function Experations (IIFE)

// IIFE USE FOR DATABASE CONNECTION 


function dbConnection(){
    console.log(`DB CONNECTION`);
}
// dbConnection() // Basic use of function 

//Global Scope ke polotion ko hatane kay liya IIFE Ka use karte hai  
(function dbConnectioned(){
    console.log(`DB CONNECTION FIRST`);
})();

((name) => {
   console.log(`DB CONNECTED TWO ${name}`);
})("Neeraj kumar");
