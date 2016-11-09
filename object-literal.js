let name = 'Rony'
let belt = 'Black'

let ninja = {
  /*
  ES5
  name: name,
  belt: belt
  */
  //ES6
  name, belt,
  /*ES5
  chop: function(x){
    console.log(`you chopped the element ${x} times`)
  }
  */
  //ES6
  chop(x){
    console.log(`you chopped the element ${x} times`);
  }
}
console.log(ninja.belt)
ninja.chop(6)
