let guestlist = ["Maria","Salman","Iqra","Saiqa"];

let dontCome = guestlist[0];

console.log(dontCome, "Nai Ahh skti");

guestlist.splice(0, 1, "Amirr");


guestlist.forEach(guest => console.log(`Salam ${guest}, Would u like to Dinner with me`) );