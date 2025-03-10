// =========Quetion.no 4 add 2 to all odd numbers in array and multiply 2 to all even numbers.

const array=[23,54,6,6,44,54,65,6,76,7,5,44,3]
let newarray=[]
for( let i=1;i<array.length;i +=2)
newarray.push(array[i]+2)
// console.log("add 2 to all odd numbers in array",newarray)
const modifiedarray=[]
for(let j=0;j<newarray.length;j +=2)
modifiedarray.push(newarray[j]*2)
console.log(modifiedarray)