// WAP to accept N numbers in an Array in ascending order. Now accept a number and insert it in Array in such a way that even after insertion, Array remains sorted.

const Array = [1, 2, 3, 5, 6, 7, 9,10,11,12]
const Num = 8
let Position = Array.length
for (let i = 0; i < Array.length; i++) {
    if (Array[i] > Num) {
        Position = i
        break;
    }
}
for(let i=Array.length;i>Position;i--){
    Array[i] = Array[i - 1];
}
Array[Position] = Num;
console.log(Array)

