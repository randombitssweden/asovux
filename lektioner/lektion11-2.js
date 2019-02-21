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

function paint() {
    var pos = getMousePos(canvas, event);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
}
canvas.addEventListener("mousedown", function(e) {
    ctx.beginPath();
    var pos = getMousePos(canvas, event);
    ctx.moveTo(pos.x, pos.y);
    canvas.addEventListener("mousemove", paint);

});

canvas.addEventListener("mouseup", function(){
    canvas.removeEventListener("mousemove", paint);
});