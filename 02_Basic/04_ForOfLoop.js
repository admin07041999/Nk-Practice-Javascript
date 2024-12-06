
const greek = [1,2,3,4,5,6,7,8]

for (const element of greek) {
    //console.log(element);
}

const iterable = [10, 20, 30];

for (let value of iterable) {
  //value += 1;
  //console.log(value);
}

////iterable of the Statement 
const nameOfItem = 'Hello Neeraj Kumar!'
for (const element of nameOfItem) {
    if(element === ' '){
        continue
    }else{
        //console.log(`Each char is ${element.toUpperCase()}`); 
    }
}


////use of Mapp are use of unique value (work with key, value pare and Mapp is not iterable) 
const map = new Map(); 
map.set('In', 'India');
map.set('Us', 'America');
map.set('UK', 'United Kingdom');  
map.set('UK', 'United Kingdom');  
map.set('Fr', 'France');  
 //console.log(map);   // Mapp return as a array object and unique value 

 //Destructure of array (forof loop get by default value)
for (const [key, value] of map) {
   //console.log(key, `:-`, value); 
}


//// iterable of the object 
const myobj ={
    game1 : 'Circket',
    game2 : 'Foot Ball',
    game3 : 'Fuss Ball',
    game4 : 'Pro Kabaddi',
}

//// forof loop not  iterable  of the object in this case use the forIn loop 
// for (const [key,value] of myobj) {
//     console.log(key, `:-`, value); 
// }


////use of forIn loop 
//// forin loop get by default key (index)
for (const key in myobj) {
   //console.log(`${key} Structore is for ${myobj[key]}`); 
}

const programming = ['javascript','java','python','c++','C#','Swift']
//we are apply forin loop in the array 
for (const key in programming) {
   //console.log(key); // forIn loop return the default key
}

////use of callBack function 
programming.forEach(function (item) {
    //console.log(item);
})

////use of callBack function with arrow function 
programming.forEach((item) => {
    console.log(item);
})
