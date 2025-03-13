//Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)//object-->interview mai poocha jaata hai

// let myCreatedDate = new Date(2023,0,23)// month 0 se start hai javascript k andar
// console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString())//1/23/2023, 5:03:00 AM

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString())//1/14/2023, 12:00:00 AM

let myCreatedDate = new Date("03-13-2025")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)// 1741872485311 milisecond value
// console.log(myCreatedDate.getTime());//1741824000000

// console.log(Math.floor(Date.now()/1000))//1741872771

 let newDate = new Date()
//  console.log(newDate)
//  console.log(newDate.getMonth()+1)
//  console.log(newDate.getDay())

// newDate.toLocaleString('default',{
//     weekday: "long",
    
// })