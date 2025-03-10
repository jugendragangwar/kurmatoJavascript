// WAP to accept 12 numbers in an array and swap first half of Array with its second half.
const array=[1,23,43,5,6,3,67,7,75,77,5,56]
const mid=array.length/2
const halfarrray=[]
for(let i=0;i<mid;i++)
halfarrray.push(array[i]);
console.log(halfarrray)

const secondarray=[]
for(let j=6;j<array.length;j++)
    secondarray.push(array[j])
console.log(secondarray)

const modifiedArray = [...secondarray, ...halfarrray]
console.log(modifiedArray)