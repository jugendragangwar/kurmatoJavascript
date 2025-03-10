//=========Quetion.no 1 Largest number

const array =[1,2,4,5,6,7,8,2,34,45,0,6]
let largest =0
for(let i=1; i<array.length;i++)
if(array[i]>largest)
{
    largest=array[i]
}
console.log(largest)

//Smallest number
let smallest=array[0]
for(let i=0;i<array.length;i++)
if(array[i]<smallest){
    smallest=array[i]
}
console.log(smallest)