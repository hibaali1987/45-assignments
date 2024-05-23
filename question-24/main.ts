

//Tests for equality 

console.log("hiba" as string === "ali"); // false

// test for inequality

console.log("hiba" as string != "ali");//  true

// test using the lower case method 

console.log("bisma".toLowerCase() === "bisma");// true

// Numerical tests involving equality

console.log(12 ===12); // true

//Numerical tests  inequality,

console.log(30 as number   != 15); // true

// greater than 

console.log(10>5); // true

//less than

console.log(10<5);// true

//greater than or equal to, 

console.log(10 >=10);// true

// and less than or equal to

console.log(30<= 40); // true

// tests using "and" and "or" operators

console.log(7===7 && 5===5);//true
console.log (10 < 5 || 7 >9); //false

//Test whether an item is in a array

let names_array = ["hiba","ahmad", "ali"]

console.log(names_array.includes("ahmad")===true);

//test whether an item is not in a array.

console.log(names_array.includes("sara") === false); // true














