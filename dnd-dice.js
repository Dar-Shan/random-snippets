//DnD DICE
function dice(min, max){
    min = Math.ceil(min);
    max = Math.floor(++max);
    return Math.floor(Math.random() * (max - min) + min);
 }
 var rollSix = dice(1,6);
 var rollTwenty = dice(1,20);
 if(rollSix == 1 && rollTwenty == 1) {
 console.log("You rolled 1 on both dices, congrats, you die.");
 }
 else {
    console.log("You rolled " + rollSix + " on 1d6 and " + rollTwenty + " on 1d12.");
    }

/*
//simplified dice
var x = Math.random();
x = x * 6
x = Math.floor(x) + 1;
console.log(x);
*/