/*1.primitve
Number
bigint
String
Boolean
Symbol
null
undefined

2.non primitve
Array
Object
function*/


//1 primitve

/*let num = 1;
let num2 = 2;
console.log("num",num,num2)


let string = "jaydeep";
let string1 = "nandan";
console.log("str",string,string1)

let istrue =true;
let isfalse=false;
console.log(isfalse)

let a;
console.log("undifined",a)

let bigint=123456789023456;
console.log(bigint)

//non primitve

let Student={
    name :"jaydeep",
    roll:"maneger"
}
console.log(Student)


 //arrary
 
 let arr=[1,2,3,4,5,6,];
 let student ={

 }
 let arraryofstud =[{},{}]
 
 console.log(arr)

 function greet(){
    console.log("this is function")
 }
 greet()

 function show (value){
    console.log("this is funtion",value)
    if(value==20){
        console.log("conditionl",value)
    }
 }
 show(12)
 show(20)

 function sum (num1,num2){
      if (num1,num2==null){
        console.log("this is null vale")
      }
      else
        {
            console.log("add",num1+num2)
            console.log("sub",num1-num2)
            console.log("multi",num1*num2)
            console.log("divi",num1/num2)
       }
 }

 //arthemetical
 sum(12,12)
 sum()
 

const add = (num1=0,num2=0) => {
    
           return num1+num2
       }

const sub = (num1=0,num2=0) => {
    
           return num1-num2
       }
const multi = (num1=0,num2=0) => {
    
           return num1*num2
       }
const divition = (num1=0,num2=0) => {
    
           return num1/num2
       }
console.log("this is arrow funtion",add(20,10),sub(12,10),multi(12,12),divition(10,2))

//assment
let dvalue =10;
console.log("defult value:",dvalue);

dvalue +=5 
console.log(dvalue)

dvalue -=5 
console.log(dvalue)

dvalue *=5 
console.log(dvalue)

dvalue /=5 
console.log(dvalue)

//logical 

let age =20;
let hasId=false
let name="jaydeep"
let obj ={
    name:"exampale"
}
console.log("logical and(&&)",age>18 && hasId);
console.log("logical or(||)",age>18 || hasId)
console.log("logical not(&&)", !hasId)
//typeof
console.log(typeof age)
console.log(typeof hasId)
console.log(typeof name)
console.log(typeof obj)
*/
//comperition

let value1 = 10;
let num1 = "10"
console.log(value1 == num1)
console.log(value1 === num1)
console.log(value1 != num1)
