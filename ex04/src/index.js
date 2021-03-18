var monitorsListArry=["Apple", "Peach", "Berry"];
function myMonitorsFunction(arr)
{
    var monitorsList=[];
    for(var i = 0; i < monitorsListArry.length; i++)
    {
        monitorsList.push([monitorsListArry[i],i+1]);
            console.log(monitorsList[i] );
    }
    
    
}
myMonitorsFunction(monitorsListArry);
module.exports = myMonitorsFunction;