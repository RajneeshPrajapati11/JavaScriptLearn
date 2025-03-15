const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)//ab isse hum sochenge array merge hogaye but nahiii array k andar array aagya

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);// flash

//concat method

// const Allheros = marvel_heros.concat(dc_heros)//isse sb concat hojaayenge
// console.log(Allheros)// or naya array return karta hai


// spread operator --> drop the glass of water for just remembering

// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)


// subarrays ko ek array ko ek array ko ek array mai convert krne k liye---> flat method

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)



// array banane k liyeh alag format ki file ko

console.log(Array.isArray("Rajneesh"))//false
console.log(Array.from("Rajneesh"))// string ko aaray banadiya

console.log(Array.from({name:"Rajneesh"}))//yaha key or value dediya but humne yeh mention nahi kiya ki key ko aaray mai change krna hai yaha value ko ---->toh yeh khaali array dedeta hai -----> **interesting interview question**

//jaise maanlo kuch elements ko array mai change krna hai

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))//Returns a new array from a set of elements.

//----------isArray,ofArray, fromArray------or padho ink baare mai....