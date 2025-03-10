function LinearSearch(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
             return `Number found at index ${i}`
        }
    }
    return "Element is not present in the Array"
}
const arr = [1, 2, 76, 45, 44, 33, 5, 66, 77];
const result =(LinearSearch(arr, 33));  
console.log(result)

// Using js inbuilt method
const array = [1, 2, 76, 45, 44, 33, 5, 66, 77];
const num = 2;
const index = array.indexOf(num);
// console.log(index);
