//primtive datatypes
// 7types: String,Number,Boolean,Null,Undefined,Symbol,BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false

const outsideTemp = null

let userEmail;

const id = Symbol('123')//symbol type banane k liyeh

const anotherId = Symbol('123')

console.log(id==anotherId);

const bigNumber =3456545346463n//bigInt mai convert hogaya



//Reference(Non-primitive)

//Array, Objects, Functions

const heros =["shaktiman","naagraj","doga"]
let myobj={
    name:"rajneesh",
    age:20
}

const myfunction=function(){
    console.log("Hello world")
}

console.log(typeof bigNumber)
console.log(typeof myfunction)//output "function" aata hai but deeply padhne pe pata chalega usko object function bolte hai.

//typeof function ko Ecma web se padhna hai interview mai poocha jaata hai