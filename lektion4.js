var kvadrat = document.getElementById("ruta");
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

window.addEventListener("keydown", function(){
  var key = event.keyCode;
  if(key == 32) {
      document.body.style.backgroundColor="black";
  }
  if (key == 38) {
      document.body.style.backgroundColor="white";
  }
});