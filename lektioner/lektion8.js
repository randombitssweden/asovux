function test() {
    document.body.innerHTML+=":-D"
}
document.body.innerHTML+="Testar funktioner, jätteroligt.";
test();
document.body.innerHTML+="<br>";
/* del 1
function rubrik(str) {
    var antal = str.length;
    document.body.innerHTML+=str+"<br>";
    for (var i = 0; i < antal; i++) {
        document.body.innerHTML+="=";
    }
    document.body.innerHTML+="<br>";
}
rubrik("TESTAR");
*/

/* Del 2 
var svar = prompt("Ange typ 0-4");
function rubrik2(str, n) {
    var antal = str.length; 
    var typ = n; 
    document.body.innerHTML+=str+"<br>";
    for (var i = 0; i < str.length ; i++) {
        if (typ == 1) document.body.innerHTML+="=";
        if (typ == 2) document.body.innerHTML+="*";
        if (typ == 3) document.body.innerHTML+="#";
        else {}
    }
}
rubrik2("TESTAR", svar);
*/

function myReturn(siffra) {
    var nySiffra;
    nySiffra = siffra + 5;
    return nySiffra
}
// Så att resultatet syns på skärmen.
document.body.innerHTML+=myReturn(10);
