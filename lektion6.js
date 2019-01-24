/*
var pre = 0;
var post = 1;
document.body.innerHTML+="Let's go fibinatchi!"
for (var i = 0; i < 10 ; i++) {
    var sum = pre + post; 
    document.body.innerHTML+=sum+" ";
    pre = post; 
    post = sum; 
    if (i == 9) {
        document.body.innerHTML+=i+1;
    } else {
        document.body.innerHTML+=i+1+",";
    }
}*/

//while ()

var antal = parseInt(prompt("Ange rader"));
var t = document.getElementById("triangel");
for (var rad = 0; rad < antal; rad++) {
    t.innerHTML+="*";
    for (var y = 0; y < rad ; y++) {
        t.innerHTML+=("*");
    }
    t.innerHTML+="<br>"
}