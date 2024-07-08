const string=prompt("Enter a String");
let count=0;
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
for(let char of string){
 if(vowels.includes(char)){
     count++;
 }
}
if (count > 0) {
  document.write(`The string contains ${count} vowels.`);
} else {
  document.write("The string doesn't have any vowels.");
}

