+let arr=[12,34,11,6,84,23,45,65];

let max=arr[0];

for(i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log("The maximum value is" + "=" + max);