function myFunction(x,y,z){
    if(x>y && x>z){
       return "x is greater";
   }
   else if(y>x && y>z){
       return "y is greater";
   }
   else if(z>x && z>y){
       return "z is greater";
   }
    }
    const a=myFunction(2,9,60);
    console.log(a);
    