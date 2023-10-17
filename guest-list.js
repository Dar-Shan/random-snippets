var guestList = ["pes","kocka","papousek"];
var guestName = prompt("Jak se jmenujes?")
if (guestList.includes(guestName)) {
   console.log("Vitej na party");
} else {
   console.log("Nejsi na seznamu");
}