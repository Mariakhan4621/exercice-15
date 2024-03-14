var guestlist = ["Maria", "Salman", "Iqra", "Saiqa"];
var dontCome = guestlist[0];
console.log(dontCome, "Nai Ahh skti");
guestlist.splice(0, 1, "Amirr");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ", Would u like to Dinner with me")); });
