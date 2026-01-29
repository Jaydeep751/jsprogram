//obj is colltion of any type of data 

// const person={
//     name:'jaydeep',
//     age:24,
//     hobby:['watch move','play game'],
//     greet: function(){
//         console.log("hello")
//     }
// }


// //access value
// console.log(person.name)
// console.log(person['name'])


// //add or modified

// person.job="rect devloper"
// person.salary=10000000000000000000000000000000;
// console.log(person)

// delete person.salary
// console.log(person)


//nested obj
const person1 = {
    name: "jay",
    age: 20,
    add: {
        city: "junagagh",
        zipcode: '36245',
        street: "mavdichok"
    }
}

console.log(person1)
console.log(person1?.add?.city)//? error handling mate jo true hoy to aagad vadhe
console.log(Object.keys(person1))
console.log(Object.values(person1))
console.log(Object.entries(person1))


