let weight

console.log(typeof weight)


const student={
    name: "Jose",
    age: 28,
    weight: 60.9,
    isSubscribed: true
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

students=[
    student
]
console.log(students)

console.log(students[0])

const john={
    name: "john",
    age: 18,
    weight: 90.4,
    isSubscribed: true
}

students[1]=john;

console.log(students[1])
