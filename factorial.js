const num=prompt("Enter a number for finding the factorial");

let i=1;
fact=1;
while(i<=num){
    fact=fact*i;
    i++;
    console.log(fact);
}