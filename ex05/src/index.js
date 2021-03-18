var prvi =["Toblerone", 5];
var drugi =["Milka", 3]
var myNestedArray =[prvi , drugi]

function myNestedFuntction(arr)
{
     var arr = myNestedArray;
     return arr;
}

console.log(myNestedFuntction(myNestedArray));
module.exports = myNestedFuntction;