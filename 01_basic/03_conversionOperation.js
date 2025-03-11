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