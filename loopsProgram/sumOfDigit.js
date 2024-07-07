var num=prompt("Enter a  Number");
var sum=0;

while(num !=0){
    sum +=num%10;
    num=parseInt(num/10);
}
console.log("Sum of digit Number " +sum);