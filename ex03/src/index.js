var myPetsArry = ["Dog",  "Cat"];

function myArryFunction()
{ 
  var myNewPets = ["Bird", "Fish"];
  var firstPet = myNewPets[0];
  var lastPet = myNewPets[2];
  myNewPets.unshift("lion") 
 return myNewPets;

 }
console.log(myArryFunction());
module.exports = myArryFunction;