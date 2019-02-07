var canvas = document.getElementById("canvas");
canvas.width = 500;
canvas.height = 500;
canvas.style.border = "solid 2px #000";
var ctx = canvas.getContext("2d");

for (var i = 0; i < 500; i+10) {
    ctx.beginPath();
    ctx.moveTo(500-i,500);
    ctx.lineTo(0,500-i);
    ctx.strokeStyle = "blue";
    ctx.closePath();
    ctx.stroke();
}

for (var e = 0; e < 21 ; e++) {
    ctx.beginPath();
    ctx.ellipse(250,250,a,b,0,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    a += 10 
    b -= 10;
}