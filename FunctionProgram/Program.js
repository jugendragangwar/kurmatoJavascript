// take a array (a) with three value and number(b) in a function i 
const details = (a,b) => {
    const first=a[0];
    if(a[0]==first){
        console.log(` It is first ${first}`);
    }
    const second=a[1];
    if(a[1]==second){
        console.log(` It is second ${second}`);
    }
    const third=a[2];
    if(a[2]==third){
        console.log(` It is third ${third}`);
    }
}
let a = ['x', 'y', 'z']
let b = 69
details(a,b)

