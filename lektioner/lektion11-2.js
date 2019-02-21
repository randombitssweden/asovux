var canvas = document.getElementById("canvas");
canvas.width = 600;
canvas.height = 400;
var ctx = canvas.getContext("2d");
canvas.style.border = "solid 1px black";

ctx.lineWidth = 3;
ctx.lineJoin = "round";
ctx.lineCap = "round";



function getMousePos(canvas, evt) {
    var rityta = canvas.getBoundingClientRect();
    return {
    x: evt.clientX - rityta.left,
    y: evt.clientY - rityta.top
    };
}

