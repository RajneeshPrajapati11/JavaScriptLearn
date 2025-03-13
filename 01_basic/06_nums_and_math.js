const score = 400
console.log(score)
const balance = new Number(100)
console.log(balance)

console.log(balance.toString())
console.log(balance.toFixed(2))//100.00

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3))//23.9


const hundreds = 1000000
console.log(hundreds.toLocaleString())//1,000,000-->us standard k according
console.log(hundreds.toLocaleString('en-IN'))//10,00,000-->in indian standard



//++++++++++++++++++++++ Maths +++++++++++++++++

// console.log(Math)//Object [Math] {}
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))//upar vaali value hi lega
// console.log(Math.floor(4.9))

// console.log(Math.min(2,3,4,8))
// console.log(Math.max(2,3,4,8))

console.log(Math.random())// 0 or 1 k bich hi value aayegi

console.log((Math.random()*10)+1)
console.log(Math.floor((Math.random()*10))+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min)// kuch nahi bs basic math hai...