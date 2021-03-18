var temps =[
   [31, 32, 19, 37],
   [29, 27, 55, 36 ],
   [17, 27, 42, 46],
   [29, 52, 21, 64],
   [91, 27, 31, 61]
   ];
   function myArrayFunction()
   {
       var avergeDayTemp=[];
       
   
   for(var i = 0; i < temps.length; i++) {

       avergeDayTemp[i] = 0;
      for(j = 0; j < temps[i].length; j++) {
       avergeDayTemp[i] = avergeDayTemp[i] + temps[i][j]
        
      }
      console.log(avergeDayTemp[i]/(j));
   }
   }
   
   
   
   
   myArrayFunction(temps);
   module.exports = myArrayFunction;
   