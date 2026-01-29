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
// const person1 = {
//     name: "jay",
//     age: 20,
//     add: {
//         city: "junagagh",
//         zipcode: '36245',
//         street: "mavdichok"
//     }
// }

// console.log(person1)
// console.log(person1?.add?.city)//? error handling mate jo true hoy to aagad vadhe
// console.log(Object.keys(person1))
// console.log(Object.values(person1))
// console.log(Object.entries(person1))


const user = {
    name: "user",
    role: "Admin",
    designation: "devloper",
    age: 20,
    add: {
        city: "junagagh",
        zipcode: '36245',
        street: "mavdichok"
    }
}

// // const {name,age,role}=user
// console.log(name,age,role)
// const{name:pname,age:page}=user
// console.log(pname,page)


// const {name,age,role,state="guj"}=user
// console.log(name,age,role,state)

// const array =[1,2,3,]
// const moreElement =[...array,4,5,6]
// console.log("moreelemet",moreElement)

// const originalarr =[1,2,3]
// const copyarr=[...originalarr]
// console.log(copyarr)

// const arr1 =[1,2,3]
// const arr2 =[4,5,6]
// const mergearr = [...arr1,...arr2]
// console.log(mergearr)


// //sperad opt in obj

// const user1={
//     name:"jaydeep",
//     city:"maliya"
// }
// console.log(user1)

// const newobj ={
//     ...user1,
//     role:"rect"
// }
// console.log(newobj)


//copy obj 

// const ori = {
//     name: "jaydeep"
// }
// const copy = {
//     ...ori
// }
// const user3 = { copy }
// console.log(user3)
// console.log(copy)

//marge
const ori = {
    name: "jaydeep",
    age:11
}
const copy = {
    city:"maliya",
    age:12
}
const user3 = { ...ori,...copy }
console.log(user3)
