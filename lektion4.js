/*var kvadrat = document.getElementById("ruta");
var antal = 1;
kvadrat.addEventListener("click",function() {
    if (antal %4 == 1) {
        kvadrat.style.backgroundColor="green";
    }
    if (antal %4 == 2) {
        kvadrat.style.backgroundColor="blue";
    }
    if (antal %4 == 3) {
        kvadrat.style.backgroundColor="yellow";
    }
    else {
        kvadrat.style.backgroundColor="red"
    }
    antal++;
});
*/
window.addEventListener("keydown", function(){
  var key = event.keyCode;
  if(key == 32) {
      document.body.style.backgroundColor="black";
  }
  if (key == 38) {
      document.body.style.backgroundColor="white";
  }
});
var bird = document.getElementById("bird");
bird.addEventListener("mouseover", function() {
    bird.style.width = "300px";
    bird.style.height = "180px";
});
bird.addEventListener("mouseout", function(){
    bird.style.width = "180px";
    bird.style.height = "90px";

});
console.log("Error här")

var text = document.getElementsByTagName("p");

text[0].addEventListener("click", function() {
    text[0].style.backgroundColor="yellow";
    text[1].style.backgroundColor="white";
    text[2].style.backgroundColor="white";
});
console.log("Kommer vi hit?")
text[1].addEventListener("click", function() {
    text[0].style.backgroundColor="white";
    text[1].style.backgroundColor="yellow";
    text[2].style.backgroundColor="white";
});
text[2].addEventListener("click", function() {
    text[0].style.backgroundColor="white";
    text[1].style.backgroundColor="white";
    text[2].style.backgroundColor="yellow";
});