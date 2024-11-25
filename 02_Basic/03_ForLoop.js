
//For Loop 

for(let i = 0; i <=10;i++){
   const element = i;
   if(element ==7){
      //console.log(`7 is west number.`);
      
   }
   //console.log(element);
}


//Print Table's
for (let i = 0; i <=10; i++) {
   //console.log(`Outer loop : ${i}`);
   for (let j = 0; j <=10; j++) {
      //console.log(`Inner loop value ${j} and Inner loop ${i}`); 
      //console.log(i + '*' + j + ' = ' + i * j);  // Print Table's
   }
}



for (let dayOfMonth = 1; dayOfMonth <= 30; dayOfMonth++) {
   // Get the current date 
   const date = new Date();
   date.setDate(dayOfMonth);  // month

   const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

   // Get the day of the week for the current date (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
   const dayName = daysOfWeek[date.getDay()];
   console.log(`Date: ${dayOfMonth}, Day: ${dayName}`);
}

