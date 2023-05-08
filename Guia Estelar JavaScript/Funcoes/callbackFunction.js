//Função que é usada como argumento para outra( e é executada lá)
function sayMyName(name){
    console.log(name);
    name()
}

sayMyName(
    () => {
        console.log("Bom dia filha de uma mãe");
    }
)