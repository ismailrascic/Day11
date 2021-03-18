

function splitArrayInGroups(arr, n){
var arrays = [];

    while (arr.length > 0)
        arrays.push(arr.splice(0, n));
  
  console.log(arrays);
}
splitArrayInGroups(["a", "b", "c", "d"], 2);  
splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);    
module.exports = splitArrayInGroups;