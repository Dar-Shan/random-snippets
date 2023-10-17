var purse = 7;
var milkPrice = 1.5;
function buyMilk(startingMoney, costPerBottle){
    var amount = Math.floor(startingMoney / costPerBottle);
    return amount;
}
function getChange(startingMoney, costPerBottle){
   var change = (purse % milkPrice).toFixed(2); 
   return change;
}
alert("For " + purse + " dollars you can buy " + buyMilk(purse, milkPrice) + " bottles of milk at the price of " + milkPrice + " per bottle and will be left with " + getChange(purse, milkPrice) + " dollars.");