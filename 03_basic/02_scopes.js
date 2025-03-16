// let a = 10
// const b = 20
// var c = 30
// var c = 300 // ab bhi dusra c declare ka hi value de raha hai


// bahar vaali value global scope hota hai mtlb block mai bhi use hoskti hai but block ka andar vaali value block k andar hi use hogi isliyeh unka local scope hota hai. 


// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
//     // c = 30// declare nahi karoge tab bhi problem aayegi
// }
// console.log(a)//a is not defined--> jo ki shi bhi baat hai kyoki vo apne scope se bahar kaam nahi karega
// console.log(b)// b is not defined
// console.log(c)// yeh var access hogaye iska yeh hi problem hai scope ka.


let a =300
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("inner",a)
}

console.log("outer",a)