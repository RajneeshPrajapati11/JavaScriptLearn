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


//++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive), Heap(Non-primitive)

let myYoutubename ="rajneeshprajapati"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername)// stack k andar copy mai change hota hai na ki actual value mai

// another example(now for heap)
let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne//yaha pe ek jagah ka reference diya jaa raha but stack mai ek copy di jaa rahi thi uski

userTwo.email = "rajneesh@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)// same hi value aayegi kyoki reference pe change hua hai naa isliyeh