var list = ["Linda","Dana","Pavel","Karin","Zuzana","David","Sofie"];
function whosPaying(names) {
    var numberOfGuests = names.length;
    var randomNumber = Math.floor((Math.random() * numberOfGuests));
    return(names[randomNumber] + " is going to buy lunch today!");
}
console.log(whosPaying(list));