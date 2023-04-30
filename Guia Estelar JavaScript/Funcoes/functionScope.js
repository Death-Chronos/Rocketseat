//fucntion Scope
let subject = 'create video'

function creatThink(subject){
    //Caso não exista o parametro acima, a função mudara a variavel do escopo global
    subject = 'study'
    return subject
}

console.log(creatThink(subject))
console.log(subject)