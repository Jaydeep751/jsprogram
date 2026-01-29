/*string mrthod
length()
trim()
toUpperCase()
toLowerCase()
includes()
indexedOf()
slice()
substring()
replece()
concat()
splite()*/

let str=" Hello jaydeep "
console.log(str)
console.log("length() :",str.length)


let tremText = str.trim();
console.log("trim():",tremText.length)

console.log("upprr case:",str.toUpperCase())
console.log("lower case:",str.toLowerCase())

console.log("include()",str.includes("jaydeep"))
console.log("include()",str.includes("jayahir"))

console.log("indexof",str.indexOf("jaydeep"))

console.log("slice():",str.slice(2,-7))

console.log("substreing():",str.substring(1,5,))

console.log("replace",str.replace("Hello","hey"))

console.log("concat():",str.concat("jayahir"))
console.log("split():",str.split("Hello"))

