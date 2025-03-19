// Immediately Invoked Function Expression(IIFE)

// function chai(){
//     console.log(`DB CONNECTED`)
// }
// chai()

(function chai(){
    console.log(`DB CONNECTED`)
})();//----> yeh semicolon bhi important hai// iife k liyeh---> yaad kro arrow function mai implict mai object declaration

//iifee---->()() global scope k pollution se problem hoti hai kai baar.isliyeh iifee use

// arrow function iifee mai

// ( () => {
//     console.log(`DB CONNECTED TWO`)
// })()

// arrow function iifee mai--------------------------------------

// ( function chai() { // named iifee
//     console.log(`DB CONNECTED TWO`)
// })()

( (name)=> {
    console.log(`DB CONNECTED TWO ${name}`)
})("rajneesh")// isway mai parameter pass krenge ---> kuch nahi normal function yaad rakho usk according sb hoga.
