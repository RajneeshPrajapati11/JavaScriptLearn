const name = "Rajneesh"
const repoCount = 50

console.log(name +repoCount+" value")//this syntax is outdated

//syntax jo more readable hai
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)//`` backtex// string interpolation bhi bolte hai

const gameName = new String('rajneesh-prajapati-moon')//string creation
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);// aise hi or bhi prototype methods access krskte hai.
console.log(gameName.toUpperCase())//lekin isne hamari orignal string ko change nahi kiya hai.
console.log(gameName.charAt(4))
console.log(gameName.indexOf('e'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Rajneesh   "
console.log(newStringOne)
console.log(newStringOne.trim());//trim study link
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url ="https://rajneesh.com/rajneesh%20prajapati"

console.log(url.replace('%20','-'))

console.log(url.includes('rajneesh'))

//split-->https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

console.log(gameName.split('-'))