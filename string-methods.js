/*
NEW STRING METHODS
-repeat
-startsWith
-endsWith
-includes
*/
let str = "hellooooo "
console.log(str.repeat(6));
console.log(str.startsWith('hell'))//true
console.log(str.startsWith('o'))//false
console.log(str.startsWith('o',4))//true specifying a start position
console.log(str.endsWith('good'))//false
console.log(str.endsWith('lo'))

let youSay = 'GoodBye!'

if(youSay.startsWith('GoodBye')){
  var iSay = 'Hello' //I use var for hoisting :)
}
console.log(`you say ${youSay} and I say ${iSay}`)

let test = "My name is Rony"
console.log(test.includes('name'))//true
console.log(test.includes('beer'))//false
