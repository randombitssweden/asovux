function test() {
    document.body.innerHTML+=":-D"
}

document.body.innerHTML+="Testar funktioner, jätteroligt.";
test();
document.body.innerHTML+="<br>"
function rubrik(str) {
    var antal = str.length;
    document.body.innerHTML+=str+"<br>";
    for (var i = 0; i < antal; i++) {
        document.body.innerHTML+="=";
    }
    document.body.innerHTML+="<br>";
}
rubrik("TESTAR");