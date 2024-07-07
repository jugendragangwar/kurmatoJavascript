const num=prompt("Enter a 3 Digit Number");

var temp=num;
var sum=0;
while(temp>0){
var digit=temp%10;
sum +=digit**3;
temp=parseInt(temp/10);
}
if(sum==num){
    console.log("It is a Armstrong Number");
}
else{
    console.log("It is not a Armstrong Number");
}
