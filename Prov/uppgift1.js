console.log("Startar växelkurs kalkylator v1.0");
console.log("Av Peter Roosdorp - Javascript Programmering 1, VT2019");
var buffer = 0;
var counter = 0;

while(1) {
    if (counter != 0 ) {
        console.log("Du har använt kalylatorn " +counter +" gånger")
    }
    var daCash = prompt("Ange hur många kronor du vill omvandla till Euro:\n(0 för att avsluta)");
    if (daCash == "0") break;
    buffer = Math.floor(daCash/9.98 * 100) / 100;
    alert(daCash +" kronor blir " +buffer +"€");
    counter++
}
document.innerHTML += ("Tack för besöket. Kontrollera dina resultat med forex. ;)")

