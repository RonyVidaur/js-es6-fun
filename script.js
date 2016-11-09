window.onload = function(){
  //constants
  const pi = 3.142
  //this cannot be modified or re-declares
  function calcArea(r){
    //this backstick string is helpful cause we dont need to concatenate it's called template strings :)
    console.log(`the area is ${ pi * r * r }`)
  }
  calcArea(5)
//default parameters:
  //function log (num) if we dont pass anything it will log undefined
  function log(num = 10){
    console.log(num)
  }
  log();
  //another example
  function logUser(name = "Barack", lastName = "Obama", age = 200){
    console.log(`my name is ${name} ${lastName} and my age is ${age}`)
  }
  logUser("rony", "vidaur", 23)
  logUser()

  /*Spread operator
  this feature can take an array and spread it into individual elements
  */
  let teams = ["madrid", "motagua", "napoli"]
  console.log(teams) //this logs the whole array
  console.log(...teams)//logs every element separetly
  //second example

  let nums1 = [1,2,3]
  let nums2 = [...nums1,4,5,6]
  console.log(nums2)

  function addNums(a, b, c){
    console.log(a + b + c)
  }
  addNums(...nums1)
}
