//Função mais curta, entre parentes está o paramentro dela(nome ou x), depois do => está o retorno (console.log(nome) ou x*x)
const sayMyName = (nome) => {
    console.log(nome);
}

sayMyName("JV")

var numbers = [1,2,3];
squares = numbers.map(x => x * x)
// mesma coisa que squares = numbers.map(function (x) { return x * x });
console.log(squares);
