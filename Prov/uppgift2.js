var stockholm = document.getElementById("sverige");
var oslo = document.getElementById("oslo");
var helsingfors = document.getElementById("helsingfors");
var kopenhamn = document.getElementById("kopenhamn");
var reykjavik = document.getElementById("island");
stockholm.addEventListener("click", function() {
    stockholm.innerHTML="Stockholm - Sverige"
});
oslo.addEventListener("click", function() {
    oslo.innerHTML="Oslo - Norge"
});
helsingfors.addEventListener("click", function() {
    helsingfors.innerHTML="Helsingfors - Finland"
});
kopenhamn.addEventListener("click", function() {
    kopenhamn.innerHTML="Köpenhamn - Danmark"
});
reykjavik.addEventListener("click", function() {
    reykjavik.innerHTML="Reykjavik - Island"
});
