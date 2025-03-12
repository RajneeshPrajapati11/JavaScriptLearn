// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log("2">1)//output true dega js ne automatic uska conversion krliaa..
console.log("02">1)//output true

console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true but aisa kyu-->the reason is that an equality check == and comparisons ><>=<= works differently.
// comparisons convert null to a number, treating it as 0.That's why (3)null>=0 is true and (1)null>0 is false.

console.log(undefined == 0)//false
console.log(undefined<0)//false
console.log(undefined>0)//false
console.log(undefined<=0)//false  yaha pe sb false honge


// === strict check

console.log("2"===2)//strictly check karega toh yaha pe output false aayega ..