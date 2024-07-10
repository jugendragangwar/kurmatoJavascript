const array=[2,3,4,5,6,1,6,7,6];
function sumArray(arr){

    let sum=0;
    for(let i=0;i<array.length;i++){
    sum +=arr[i];
        }
        return sum;
}
console.log(sumArray(array));