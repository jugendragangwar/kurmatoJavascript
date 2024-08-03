const letter = prompt("Enter a Letter");
function checkLetter(letter){
  letter = letter.toLowerCase();
  if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
    return "Vowel";
  } else {
    return "Consonant";
  }
}

const result = checkLetter(letter);
console.log(result);