function one(){
    console.log("One");
    two()
}
function two(){
    console.log("Two");
    three()
}
function three(){
    console.log("Three");
}
one()
two()
three()