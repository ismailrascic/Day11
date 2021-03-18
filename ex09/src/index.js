
    falsy = [false, null, 0, "", undefined, NaN];
    function myBouncer(arr)
{

  arr = arr.filter( ( el ) => !falsy.includes( el ) );
  console.log(arr);
}


myBouncer([7, "ate", "", false, 9]);
myBouncer(["a", "b", "c"]);
myBouncer([false, null, 0, NaN, undefined, ""]);
myBouncer([null, NaN, 1, 2, undefined]);


module.exports=myBouncer;