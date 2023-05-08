/*Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo. */

let financeiro = {
    receitas:[2000, 300, 412, 100],
    despesas:[800, 120, 500, 200]
}
let receitasTotal = 0
let despesasTotal = 0

function calculaTotalReceita(valor){
    receitasTotal += valor
}

function calculaTotalDespesa(valor){
    despesasTotal += valor
}

function calculaSituacao(){
    financeiro.receitas.forEach(calculaTotalReceita)
    financeiro.despesas.forEach(calculaTotalDespesa)
    let situacao = receitasTotal > despesasTotal ? "Saldo positivo" : "Saldo negativo";

    console.log(situacao)
}

calculaSituacao()