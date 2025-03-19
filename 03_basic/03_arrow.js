const user = {
    username: "rajneesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        // console.log(this)//current context show karega.
    }
}

// user.welcomeMessage()//rajneesh,welcome to website
// user.username = "sam"
// user.welcomeMessage()//sam,welcome to website--> aisa isliyeh hopaaye kyoki humne uska exact username na use krk "this" ki help se current context k according aayega.

// console.log(this)// abhi node mai empty object show krega

// browser k andar jo global object hai vo hain window object


//------------------------------function k andar this------------
// function chai(){
    
//     let username ="rajneesh"
//     console.log(this.username);// undefined show krega function k andar
//     // console.log(this);// abhi bahut kuch show krega jab function k andar node environment mai run krte hai tab.
// }

// chai()


// const chai = function(){
//     let username = "rajneesh"
//     console.log(this.username)// undefined
// }
// chai()


//---------------- function ko or kaise alag se declare krskte hai-------

// arrow function
// const chai = ()=>{
//     let username = "rajneesh"
//     // console.log(this.username)// undefined hi aaraha hai arrow function mai bhi

//     console.log(this)//{} yeh hi aara hai
// }
// chai()

//------------------------ basic arrow function---------------------
// const addTwo = (num1,num2)=>{
//     return num1+num2 // jab return keyword lagate hai toh explicit hota hai
// }

//implicit return---> parentesis use nahi krne hote or ek line mai

// const addTwo = (num1,num2)=>num1+num2 // no need to return

// const addTwo = (num1,num2)=> (num1+num2)// yaha pe bhi return keyword likne ki need nahi hai.***important round bracket use hua hai***


// ab object kaise reutrn krenge

const addTwo = (num1,num2)=> ({username:"rajneesh"})// aise hoga

console.log(addTwo(3,4))// 7
