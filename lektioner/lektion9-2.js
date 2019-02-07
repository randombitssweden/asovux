var canvas = document.getElementById("canvas");
canvas.width = 500;
canvas.height = 500;
canvas.style.border = "solid 2px #000";
var ctx = canvas.getContext("2d");

for (var i = 0; i < 500; i+10) {
    ctx.beginPath();
    ctx.moveTo(500-i,500);
    ctx.lineTo(0.500-i);
    ctx.strokeStyle = "blue";
    ctx.closePath();
    ctx.stroke();
}