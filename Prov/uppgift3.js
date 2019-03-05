var canvas = document.getElementById("minCanvas");
var context = canvas.getContext("2d");
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

function draw(e) {
    var pos = getMousePos(canvas, e);
    posx = pos.x;
    posy = pos.y;
    context.fillStyle = "#000000";
    context.beginPath();
    context.arc(posx, posy, 50, 0, 2*Math.PI);
    context.fill();
}

