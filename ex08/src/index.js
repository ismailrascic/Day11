
function myMutation(arr){
    var myArray = [];
    if(arr[0] === arr[1])
        return true; 
    else          
        return false;


for(var i = 0; i < myArray.length; i++) {
    console.log(myMutation(myArray[i]))
}    
}

console.log(myMutation([ "hello", "hey"]));
console.log(myMutation([ "hello", "hello"]));
console.log(myMutation([ "Mary", "Army"]));
module.exports=myMutation;