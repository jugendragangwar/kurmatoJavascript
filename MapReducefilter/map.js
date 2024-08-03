//Write a code to double all numbers in an array using Map.

const array=[2,4,3,8,8,9,1];
const newArray=array.map( (a) => a*2);
console.log(newArray);

//Use Map to convert all strings in an array to uppercase.

const string=["Aman","Ambuj","Prasang","Kapil"];
const upperCase=string.map( (s) => s.toLocaleUpperCase());
console.log(upperCase);

//Write a code to add 2 to all numbers in an array using Map.

const number=[23,43,56,76,87];
const newNumber=number.map( (a) => a+2);
console.log(newNumber);

//Use Map to convert all objects in an array to strings.


//Write a code to multiply all numbers in an array by 3 using Map.

const num=[23,43,56,76,87];
const multiply=num.map( (a) => a*3);
document.write("Array after multiply by three" + "=" + multiply);

