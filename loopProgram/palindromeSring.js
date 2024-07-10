var string=prompt("Enter a string");
var len=string.length;
var msg='It is a Palindrome string'
 for(let i=0;i<len/2;i++ ){
     if(string[i]!=string[len - 1 - i]){
         msg='It is not Palindrome string';
     }
 }
 console.log(msg);