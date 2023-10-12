var myHp = 20;
var goblinHp = 15;

function kostka() {
var x = Math.random();
x = x * 6;
x = Math.floor(x) + 1;
return x;
}

function fightGoblin(myNewHp, goblinNewHp) {
    while (myNewHp > 0 && goblinNewHp > 0) {
        var goblinDamage = kostka();
        var myDamage = kostka();
        myNewHp = myNewHp - goblinDamage;
        goblinNewHp = goblinNewHp - myDamage;
        if (goblinNewHp < 0) {
            goblinNewHp = 0;
        }
        if (myNewHp < 0) {
            myNewHp = 0;
        }
        alert("You both roll dice. Goblin attacks for " + goblinDamage + " , yor HP is " + (myNewHp) + " and you attack for " + myDamage + " and goblin is left with " + goblinNewHp);
    }
    if (myNewHp <= 0 && goblinNewHp <= 0) {
        alert("You killed each other. Bwhahahaha!");
    }
    else if (myNewHp > 0 && goblinNewHp <= 0) {
        alert("You win, the goblin has been defeated. You are left with " + myNewHp + " hitpoints.");
    }
    else {
        alert("You died. Pity.");
    }

}

alert("You get into the fight with a goblin. Roll the dice and defeat him. Your HP is " + myHp + " and goblin has " + goblinHp + ". Good luck!");
fightGoblin(myHp, goblinHp);
