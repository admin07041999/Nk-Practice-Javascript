// Array 

const myArr = ['neeraj',1,2,3,4,5,true]
console.log(myArr);


// Array Methods
myArr.push(20); // accept one argument  
myArr.pop(); // Not accept argument
console.log(myArr);

const myArr2 = new Array(1,2,3,4,5,6,7,8);
//myArr2.unshift(9); // accept one argument  Un shift of the array value 
//myArr2.shift(); // Not accept argument  shift of the array value 

//myArr2.includes(50);
//myArr2.indexOf(0);
const newArr = myArr2.join();
console.log(myArr2); // return actual array
console.log(newArr); // retun array but string format 


const arrn = [0,1,2,3,4,5,6];
const myarrn = arrn.slice(1,4);

const myarrn2 = arrn.splice(1,4);
console.log(arrn);
console.log(myarrn2);





