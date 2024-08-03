const num=prompt("Enter no Of steps");

var a=0,b=1;
console.log(a);
console.log(b);

for(var i=0;i<num;i++){
    var temp=a+b;
    console.log(temp);
    a=b;
    b=temp;
}

