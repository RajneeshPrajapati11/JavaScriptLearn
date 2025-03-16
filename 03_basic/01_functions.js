
function sayMyName(){
    console.log("R")
    console.log("A")
    console.log("J")
    console.log("N")
    console.log("E")
    console.log("E")
    console.log("S")
    console.log("H")
}

// sayMyName()

// function addTwoNumbers(number1,number2){

//     console.log(number1+number2);
// }

// const result = addTwoNumbers(3,4)//addTwoNumbers(3,4)--> output:7
// console.log("Result:",result)//Result: undefined---> print kr raha hai value but return nahi krraha hai isliyeh aisa ho ra hai

function addTwoNumbers(number1,number2){

    let result = number1+number2
    return result

    // console.log("Rajneesh")// ab return k baad yeh execute nahi hoga yeh ek rule hai
}

const result = addTwoNumbers(3,4)
// console.log("Result:",result)//Result: 7


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("rajneesh"))
// console.log(loginUserMessage()) //jab koi value pass nahi krta tab undefined aata hai


//default value bhi deskte hai 
// function loginUserMessage(username="sam "){
//     if(username === undefined){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }


function calculateCartPrice(...num1){
    return num1 // ...num1--> rest operation
}

// console.log(calculateCartPrice(200,400,500))//[ 200, 400, 500 ] array type

function calculateCartPrice(val1,val2,...num1){
    return num1 // ...num1--> rest operation
}

console.log(calculateCartPrice(200,400,500,2000))// start k do value val1,val2 mai chalijaayegi or baaki rest as a array return hogi.[ 500, 2000 ]


// object ko as a parameter pass krna

const user ={
    username:"Rajneesh",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)// or agr vaha price ki jagah prices hota tohh undefined aata output
}

// handleObject(user)

handleObject({
    username:"sam",   // aise bhi object pass krskte hai function mai
    price:399
})


// array ko bhi pass krskte hai function mai

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,500,400]))
