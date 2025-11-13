// undefined
// null
 

// when we dont declare the value of the variable is type shows ____ undefined
// let firstName;  
// console.log(typeof firstName); 
// firstName = "priyanshu";
// console.log(typeof firstName,firstName);



// let myVariable = null;
// console.log(myVariable);
// myVariable = "priyanshu";
// console.log(typeof myVariable,myVariable);


console.log(typeof null);  // bug , error typeof null. = object ;


//BigInt;

let myNumber = BigInt(123456789023456789123456789023456789023);
let Number = BigInt(123);
let safeNumber = 1233n;
// console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);
