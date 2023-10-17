//Character counter
var maxCharacters = 50;
var inputMessage = prompt("How are you today?");
alert("You wrote " + inputMessage.length + " characters. There are " + (maxCharacters-inputMessage.length) + " characters left.");
alert("Your post has been limited to " + maxCharacters + " characters. Post preview: " + inputMessage.slice(0,50));