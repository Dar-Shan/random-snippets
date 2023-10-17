//Oprava pismen ve jmene
var myName = prompt("What is your name?");
function correctName(x){
    return(x.slice(0,1).toUpperCase() + x.slice(1,99).toLowerCase());
}
alert(correctName(myName));