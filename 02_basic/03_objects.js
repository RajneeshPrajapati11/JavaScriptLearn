// object declare krne k tarike

//1.singleton--> jab bhi koi object constructor ki help se banate hai ....object.create ki help se banate hai.

// 2.object literals

//declare kaise krte hai object ko......

// const Jsuser = {
//     name: "Rajneesh",
//     "full name":"Rajneesh Prajapati",// ***ab isko apn dot se access nhi krskte--error aayega** tohh dusre method se access krenge
//     age: 20,
//     location:"Jaipur",
//     email:"Rajneesh@google.com",
//     isLoggedIn:false,
//     lastLoginDays:["monday","saturday"]
// }

// console.log(Jsuser.email)
// // console.log(Jsuser.full name) error occur
// console.log(Jsuser["full name"])
// console.log(Jsuser["email"])


// ab agr interviewer bol ki sybmol declare kro or use object mai daalk print karao tohh kaise....

const mySym = Symbol("key1")

const Jsuser = {
    name: "Rajneesh",
    "full name":"Rajneesh Prajapati",// ***ab isko apn dot se access nhi krskte--error aayega** tohh dusre method se access krenge

    // mysym:"mykey1" // but yeh tohh symbol ki tarah kaam nahi krega iss ka type string hai 

    [mySym] : "mykey1",// ab yeh symbol type show krega


    age: 20,
    location:"Jaipur",
    email:"Rajneesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}

// console.log(Jsuser[mySym])
// console.log(typeof mySym)//----symbol----

// Jsuser.email = "Rajneeshprjapapati@chatgpt.com"//yeh value override hogayi

// // agr override nahi krna tohh kaise---- freeze object ka use krenge

// Object.freeze(Jsuser)
// Jsuser.email ="Rajneeshprajapati@microsoft.com"

// console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hello JS user")
}

// console.log(Jsuser.greeting)// undefined
// console.log(Jsuser.greeting())//Hello JS user 

Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())