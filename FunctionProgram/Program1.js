//Take three parameters in Function string,name,boolean ( if boolean is true then print details , else print boolean have false value ) 
const details = (name="sameer", age=23, bool=true) => {
    if(bool === false){
        console.log("user dident send the details properly")
    }else{
        console.log("name:", name)
        console.log("age:", age)
    }
}

details()
