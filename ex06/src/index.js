
var myArray =
[
  [2],
  [5, 6, 7],
  [8, 9]

]

var arr = [];
function multiplyArrayFunction(myArray)
{
  var sum = 0;
  var product = 1; 


  for(var i = 0; i < myArray.length; i++) {

    for(j = 0; j < myArray[i].length; j++) {
      sum= sum + myArray[i][j];
      product = product * myArray[i][j];
    }

  }
  arr.push(product, sum)
  console.log(arr);
}

    
multiplyArrayFunction(myArray);
arr = [];
multiplyArrayFunction([[2.5,2],[0.5,0.2],[8]]);
arr = [];
multiplyArrayFunction([[1,2],[3,4,5,6],[7,8,9]]);
module.exports = multiplyArrayFunction;