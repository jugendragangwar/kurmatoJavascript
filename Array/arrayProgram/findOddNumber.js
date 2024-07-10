const array=[1,2,3,4,5,6,7,8];

const oddArray=[];

for(let i=0;i<array.length;i++){
    if(array[i]%2==1){
    oddArray.push(array[i]);
    }
}
console.log(oddArray);