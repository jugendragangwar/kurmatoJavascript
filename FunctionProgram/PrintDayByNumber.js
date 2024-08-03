const day=parseInt(prompt("Enter a number between (1-7) "));

function printDay(day){
if(day==1){
    return "Sunday";
}
else if(day==2){
    return "Monday";
}
else if(day==3){
    return "Tuesday";
}
else if(day==4){
    return "Wednesday";
}
else if(day==5){
    return "Thursday";
}
else if(day==6){
    return "Friday";
}
else if(day==7){
    return "saturday";
}
else{
   return "Invalid Number";
}
}
 const result =printDay(day);
console.log(result);