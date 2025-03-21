//declare object

// const tinderUser = new Object() // singleton object

const tinderUser ={} // non-singleton object
tinderUser.id = "123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        firstname:"Rajneesh",
        lastname:"Prajapati"
    }
}

// console.log(regularUser.fullname.firstname)// chaining krk access bhi krskte hai...


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 ={obj1,obj2}//object k andar object aajayegaa
// const obj3 = Object.assign({},obj1,obj2)//first vaalue target ki tarah mtlb last mai kya aana hai or last two as a source jo usmai inlcude honge jaake this is the right way for merge two objects
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign


// efficient method two merge two objects

const obj3 ={...obj1,...obj2}

// console.log(obj3)


const users = [
    {
        id: 1,
        email:"raj@gmail.com"
    },
    {
        id: 1,
        email:"raj@gmail.com"
    },
    {
        id: 1,
        email:"raj@gmail.com"
    },
    {
        id: 1,
        email:"raj@gmail.com"
    }
]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))//important baat yeh hai ki output as a array milta hai jisko hum manipulate krskte hai baad mai...
// console.log(Object.values(tinderUser))

// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))//true
// console.log(tinderUser.hasOwnProperty('isLogged'))//false


// Object de-structure

const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

// course.courseInstructor//ab suppose hume yeh hi chiz baar baar call krni hai tohh itna bada syntax thodi likhenge ....

const {courseInstructor:Instructor}= course

console.log(Instructor)


// Json--api

// {
//     "name":"Rajneesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }// key or value dono string type mai mention krni padti hai--- or iska koi naam nahi hota.


// or kai baar api array ki form mai bhi milti hai

// [
//     {},
//     {},
//     {}
// ]



