//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0])
// console.log(myHeroes)
// console.log(myArr2)

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()//simple si baat hai jo last element vo remove hojaayega.

// myArr.unshift(9)//starting mai put krega sbko shift krk

// myArr.shift()//[0, 1, 2, 3, 4, 5, 6 ]-->[ 1, 2, 3, 4, 5, 6 ]

//boolean return type operation

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

// const newArr = myArr.join()//string type output deta hai

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)


// slice, splice

console.log("A", myArr)
const myn1 = myArr.slice(1,3)// yaha pe original array mai koi change nahi aata

console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.splice(1,3)// yaha original aaray hi manipulate hojaata hai
console.log("C",myArr)
console.log(myn2)