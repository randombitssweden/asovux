var canvas = document.getElementById("canvas");
canvas.width = 600;
canvas.height = 400;
var ctx = canvas.getContext("2d");
canvas.style.border = "solid 1px black";

function kvadrat(color) {
    ctx.rect(100,100,20,20);
    ctx.fillStyle = color;
    ctx.fill();
}

kvadrat("red");

canvas.addEventListener("click", function() {
    var x = event.clientX;
    var y = event.clientY;
    if(x >= 100 && x <= 120 && y >= 100 && y <= 120) {
        kvadrat("green");
    }
});
