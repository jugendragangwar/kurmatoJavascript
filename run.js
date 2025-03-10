// WAP to accept N numbers in an Array. Accept a number from user and check for its existence in Array using Linear Search Technique.
const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const Element = 12
let found = false;
for (let i = 0; i < Array.length; i++) {
    if (Array[i] === Element) {
        found = true;
        console.log("Element is present in Array");
        break;  
    }
}
if(!found){
    console.log("Element is not found");
}




