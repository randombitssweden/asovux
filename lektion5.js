var see = document.getElementById("yellow");
var hear = document.getElementById("pink");
var talk = document.getElementById("green");
var apa = document.getElementById("apa");
see.addEventListener("mouseover", function() {
    see.style.cursor="pointer";
});
hear.addEventListener("mouseover", function() {
    hear.style.cursor="pointer";
    apa.style.color="green";
});
talk.addEventListener("mouseover", function() {
    talk.style.cursor="pointer";

});

see.addEventListener("click", function() {
    apa.innerHTML="&#128584;";
});
hear.addEventListener("click", function() {
    apa.innerHTML="&#128585;";
});
talk.addEventListener("click", function() {
    apa.innerHTML="&#128586;";
});
var color = 0;
window.addEventListener("keypress", function(){
    document.body.style.backgroundColor = "hsl("+color+",100%,50%)";
    color++;
});
apa.addEventListener("mouseover", function() {
    apa.style.color="blue";
});

apa.addEventListener("mouseout", function() {
    apa.style.color="black";
    hear.style.color="purple";
});
