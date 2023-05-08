//For para cada atributo de um objeto
let person= {
    name: "João",
    age: 20,
    weight: 190
}

for (const x in person) {
    console.log(x+":")
    console.log(person[x])
}