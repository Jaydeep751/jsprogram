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

// let str=" Hello jaydeep bhendarada "
// console.log(str)
// console.log("length() :",str.length)


// let tremText = str.trim();
// console.log("trim():",tremText.length)

// console.log("upprr case:",str.toUpperCase())
// console.log("lower case:",str.toLowerCase())

// console.log("include()",str.includes("jaydeep"))
// console.log("include()",str.includes("jayahir"))

// console.log("indexof",str.indexOf("jaydeep"))

// console.log("slice():",str.slice(2,-7))

// console.log("substreing():",str.substring(2,5,))

// console.log("replace",str.replace("Hello","hey"))
// let exe ="jay"
// console.log("concat():",str.concat(exe))
// console.log("split():",str.split(" "))





/*arrray method  
length()
pop()
push()
unshift()
shift()
concat()
includes()
indexOf()
splice()
slice()
join()
delete()
map()
fileter()
find()
forEach()
sort()
reverse()
flat()
*/

//  let arr=['one','two','three',{name:'jaydeep'}]
// console.log("defult arrary",arr)

// console.log("length():",arr.length)

// arr.push("new add")
// console.log("new",arr)
// arr.pop();
// console.log(" array after pop()", arr)

// arr.unshift("first element")
// console.log("arry after aunshift()",arr)

// arr.shift("")
// console.log("arry after shift()",arr)

// let newarr=["str 1","str 2"];
// let mix=arr.concat(newarr)
// console.log("defult",arr)
// console.log("mix concat",mix)


// console.log("include",arr.includes("one"))
// console.log("include",arr.includes("aa"))


// console.log("indexof:",arr.indexOf("two"))

// console.log("slice",arr.slice(2,4))//c

// console.log("splice",arr.splice(2,4))
// console.log(arr)


//  console.log("join()",arr.join(", "))

// delete arr[1]
// console.log(arr)



// console.log("arrar iteration method :")
// let numbers =[1,2,3,4,5]
// console.log("map:",numbers.map(num => num*2))
// console.log("old",numbers)

// console.log("fileter:",numbers.filter(num => num >2))
// console.log("old",numbers)


// console.log("forEcah")
// numbers.forEach(num =>console.log(num))

// let num1 =[2,3,4,4,65,5,]
// console.log("sort",num1.sort())

// console.log("revers",num1.reverse())


// let nestedarray =[1,2,[3,4],[5,6]]
// console.log("nested arrary",nestedarray)

// let flatArray=nestedarray.flat()
// console.log("flet arrary",flatArray)



//arrary destrturing

// let array=[1,2,3,4,]
// const [first,second,thard]=array
// console.log(first)
// console.log(second)
// console.log(thard)

//skpingvalue

// let array1 = [1,2,3,4]
// const[first, , third]=array1
// console.log(first)
// console.log(third)


//rest opretor spared
const num1 = [1, 2, 3, 4]
const [fir, second, ...rest] = num1
console.log(fir)
console.log(second)
console.log(rest)