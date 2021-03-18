

function mySplice (arr1 ,arr2 ,n)
{
    var arr12 =  Array.from(arr2);

    arr12.splice(n,0,...arr1);

    console.log(arr12);
    
}
mySplice([1,2,3], [4, 5], 1);
mySplice(["Dell", "Philips"],["Samsung", "AOX", "Sony"], 2);

module.exports = mySplice;