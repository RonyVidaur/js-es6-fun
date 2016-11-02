window.onload = function(){
  //constants
  const pi = 3.142
  //this cannot be modified or re-declares
  function calcArea(r){
    //this backstick string is helpful cause we dont need to concatenate it's called template strings :)

    console.log(`the area is ${ pi * r * r }`)
  }
  calcArea(5)
}
