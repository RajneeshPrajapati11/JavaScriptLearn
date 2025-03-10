const accountId = 144553 // const ka matlab yeh hai ki ek baar jo value dedi ab vo lock hogyi means ab no change.

/*variable ko declare karne k 2 tarike hai let and var but var use nahi krte because js mai ek chota sa problem hota tha ki isko scope nahi pata tha tohh hum scope mai jo variable ko define krte the tohh saare variable change hojaate the uss k basis pr */
/*{
    //isko(currly braces ko) hi scope bolte hai
}*/

let accountEmail ="rajneesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // aisa bhi possible hai but please avoid such types of practices.

let accountState; //iski value as a output-->undefined aayegi//javascript mai colon lagao ya mt lagao.

// accountId = 2 // not allowed

accountEmail ="rj@rj.com"
accountPassword ="344333"
accountCity = "begaluru" 

console.log(accountId);

/*
prefer not to use var  because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

