// WAP to accept 10 numbers in an array. Accept a position from user and delete the element at that position from Array.
const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let Position = 0
if (Position >= 0 && Position < Array.length) {
    for (let i = Position; i < Array.length-1; i++) {
        Array[i] = Array[i + 1];
      
    }
}
Array.length=Array.length-1
console.log(Array)



