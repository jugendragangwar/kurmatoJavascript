const year=prompt("Enter a Year");

if(year%4==0 && year%100!==0 || year%400==0)
    {
console.log("Enterd year is a Leap year");
}
else{
    console.log("Enterd year is not a leap year");
}