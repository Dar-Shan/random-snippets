//love score
var loveScore = Math.random();
loveScore = loveScore * 100
loveScore = Math.floor(loveScore) + 1;
prompt("What is your name?");
prompt("What is his/her name<");
if (loveScore > 70) {
   alert("Your match in love is is " + loveScore + " %. You love each other eternally.");
} else if (loveScore <= 70 && loveScore > 30) {
   alert("Your match in love is is " + loveScore + " %.");
} else {
   alert("Your match in love is is " + loveScore + " %. Not good.");
}