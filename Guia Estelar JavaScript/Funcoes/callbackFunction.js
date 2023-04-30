function sayMyName(name){
    console.log(name);
    name()
}

sayMyName(
    () => {
        console.log("Bom dia filha de uma mãe");
    }
)