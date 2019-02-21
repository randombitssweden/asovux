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

function getColorPos(yta, evt) {
    var rityta = yta.getBoundingClientRect();
    return {
    x: evt.clientX - rityta.left,
    y: evt.clientY - rityta.top
    };
}

var farg = document.getElementsByClassName("color");

for (var n = 0 ; n < 20 ; n++) {
    farg[n].style.backgroundColor = "hsl("+n*18+",100%,50%";
}
var c = document.getElementById("color");

c.addEventListener("client", function(){
    var pos = getColorPos(canvas, event);
    if (pos.x < 30 ) ctx.strokeStyle = "hsl(18,100%,50%";
    else if (pos.x < 60 ) ctx.strokeStyle = "hsl(36,100%,50%";
    else if (pos.x < 90 ) ctx.strokeStyle = "hsl(54,100%,50%";
    else if (pos.x < 120 ) ctx.strokeStyle = "hsl(72,100%,50%";
    else if (pos.x < 150 ) ctx.strokeStyle = "hsl(90,100%,50%";
    else if (pos.x < 180 ) ctx.strokeStyle = "hsl(108,100%,50%";
    else if (pos.x < 210 ) ctx.strokeStyle = "hsl(126,100%,50%";
    else if (pos.x < 240 ) ctx.strokeStyle = "hsl(144,100%,50%";
    else if (pos.x < 270 ) ctx.strokeStyle = "hsl(162,100%,50%";
    else if (pos.x < 310 ) ctx.strokeStyle = "hsl(180,100%,50%";
    else if (pos.x < 360 ) ctx.strokeStyle = "hsl(198,100%,50%";
    else if (pos.x < 390 ) ctx.strokeStyle = "hsl(216,100%,50%";
    else if (pos.x < 420 ) ctx.strokeStyle = "hsl(234,100%,50%";
    else if (pos.x < 450 ) ctx.strokeStyle = "hsl(252,100%,50%";
    else if (pos.x < 480 ) ctx.strokeStyle = "hsl(270,100%,50%";
    else if (pos.x < 510 ) ctx.strokeStyle = "hsl(288,100%,50%";
    else if (pos.x < 540 ) ctx.strokeStyle = "hsl(306,100%,50%";
    else if (pos.x < 570 ) ctx.strokeStyle = "hsl(324,100%,50%";
    else if (pos.x < 600 ) ctx.strokeStyle = "hsl(342,100%,50%";
    
});


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