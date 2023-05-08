function Pessoa(nome) {
    this.nome = nome
    this.walk = function(){
        return this.nome +" Está andando.";
    }
}

let JV = new Pessoa("Joao Victor")

console.log(JV.walk())