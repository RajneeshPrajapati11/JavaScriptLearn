let score = "33" // ab kai baar hume pata hi nahi hota vo value kaha se aayi hai suppose yaha pe(front end se aayi hai) tohh pata ki score mai ek no. hai.

//but yaha pe nahi pata
// const {score}=req.body

// isliyeh type check krte

console.log(typeof score)
console.log(typeof(score))//dono hi same work karte hai....

// ab suppose upar vaali value string mai hai.

let valueInNumber = Number(score)//string se number conversion hogaya..
console.log(typeof valueInNumber)

//different scenerio
let score2 = "33abc" // agr *null* hua toh---> 0 dega value so be carefull. or *undefined* daala toh bhi NaN value hogi or agr *true* daale toh 1 value hogi or suppose proper String daali toh bhi NaN hoga.
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)//ab iska type bhi number aara hai ...toh type conversion krte hue **NaN ka bhi dhyan**rakhna hoga. 
console.log(valueInNumber2)// or iski value NaN hogi


//"33"=> 33
//"33abc"=>NaN
//true =>1; false=>0



let isLoggedIn =1// agr empty string ko kiya ""=>false , "rajneesh"=>true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)//true mai convert hogayi

// 1=>true; 0=>false
// ""=>false
//"Rajneesh"=>true



let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


// ********************** Operations *****************

let value =3
let negValue = -value
console.log(negValue)// -3 print krdega terminal pr

// console.log(2+3)
// console.log(2%3)
// console.log(2*3)
// console.log(2/3)
// console.log(2-3)
// console.log(2%3)


let str1 = "hello"
let str2 = " Rajneesh"
let str3 = str1+str2
console.log(str3)

//now some tricky ones....
console.log("1"+2)
console.log(1+"2")
console.log("1"+"2")// sbka output same aara hai 12
//lekin ab ek dusri situation lete hai
console.log("1"+2+2)//ab output 122 aara hai mtlb last k 2 toh number the but unka addition nahi hua

// lekin ab ek or interesting thing

console.log(1+2+"2")// lekin ab iska output 32 aara hai
// isko refer kro or jaanne k liye
//https://tc39.es/ecma262/#sec-toprimitive

console.log(true)
console.log(+true)//iska output 1 dega
//console.log(true+)ispe error dega
console.log(+"")//iska output 0 dega but aise conversions nahi karne chahiyeh.

let num1,num2,num3

num1 = num2 = num3 =2+2 // aisaa nhi likhenge kyoki coding k andar readablity sabse important hoti hai.

let gameCounter = 100
++gameCounter//gameCounter++
//prefix or postfix ---> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
console.log(gameCounter);

