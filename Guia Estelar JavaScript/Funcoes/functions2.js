// function expression or anonymous
let total = 0
//parâmetros(parametrers)
const sum = function (number1, number2) {
    let total = number1+number2
    return total
}

num1 = 2
num2 = 3

console.log(`A soma entre ${num1} e ${num2} é ${sum(num1,num2)}`) //Arguments - argumentos
console.log(total) //total passa a existir no escopo global após o retorno da função