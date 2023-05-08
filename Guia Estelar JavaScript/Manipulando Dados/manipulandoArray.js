/*Existem várias maneiras de manipular arrays, como: o método push(), que adiciona um elemento no final do array, o método unshift(), que adiciona um elemento no começo do array, o método pop(), que retira um elemento do final do array, o método shift(), que retira um elemento do começo do array, o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições, o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover e o método indexOff(), que encontra o index do valor que recebe como argumento em um array. */

let array = ["Java", "Python", "JavaScript"];

//adicionando no final
array.push('PHP')
//adicionando no começo
array.unshift("SQL")
//removendo no final
array.pop()
//removendo no começo
array.shift()
//pegar somente alguns elementos do array
console.log(array.slice(0,2))
//remover 1 ou mais elementos em qualquer posição, e adicionar mais um
array.splice(1,3, "C++")
//encontrar a posição de um item no array
let index = array.indexOf("C++")
console.log(array[index])  

console.log(array)