const marks=prompt("Enter your Marks in Percentage");

if(marks<30){
    console.log("You are failed in exam");
}
else if(marks>30 && marks<45){
    console.log("You got 'D' grade");
}
else if(marks>45 && marks<60){
    console.log("You got 'B' grade");
}
else if(marks>60 && marks<75){
    console.log("You got 'A' grade");
}
else{
    console.log("You got 'A+' grade");
}