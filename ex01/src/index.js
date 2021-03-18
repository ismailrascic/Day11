var myArr = [2, 4, 0, 8, 10];
function myArrayFunction()
{
    myArr[2] = 6;
    var myItems = myArr;
    return myItems;
}


console.log(myArrayFunction(myArr));
module.exports = myArrayFunction;
