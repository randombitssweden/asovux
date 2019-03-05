var canvas = document.getElementById("minCanvas");
canvas.width = 600;
canvas.height = 400;
var context = canvas.getContext("2d");
canvas.style.border = "solid 1px black";

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}
function drawCircle(size, x, y, colour) { //draw circle
    var size = Math.floor(Math.random() * 100);
    //var colour = '#' + Math.random().toString(16).substr(2,6); // random colour;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = colour;
    ctx.fill();
}
