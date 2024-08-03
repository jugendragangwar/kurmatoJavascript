const percentage=parseInt(prompt("Enter your marks in percentage"));

function getGrades(percentage){
if(percentage>=90){
    return "Grade A+";
}
else if(percentage>=80){
    return "Grade A";
}
else if(percentage>=70){
    return "Grade B";
}
else if(percentage>=60){
    return "Grade C";
}
else{
    return "Grade D";
   
}
}
 const result =getGrades(percentage);
console.log(result);