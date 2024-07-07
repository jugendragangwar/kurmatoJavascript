for(let i=1;i<=4;i++){
    for(let j=4;j>=i;j--){
        document.write("&nbsp");
    }
    for(let k=1;k<=i;k++){
        document.write(i+" ");
    }
    document.write("<br>");
}


//    1
//   2 2
//  3 3 3
// 4 4 4 4