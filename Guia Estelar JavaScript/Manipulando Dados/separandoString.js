/* Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador. */

let phase = "Quero dominar ao menos uma linguagem de programação"
let array = phase.split(" ")
phase = array.join("_")
console.log(phase)