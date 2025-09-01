let score="33"

console.log(typeof score);

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
score="33aa"
valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33"-> 33
//"33a" => NaN
//true =>1; false =>0

let isLoggedIn=1
let booleanIsLoggedin=Boolean(isLoggedIn)
console.log(booleanIsLoggedin);

//1 => true 0 => flase
// "" =>false value =>true