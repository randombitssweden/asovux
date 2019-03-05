var canvas = document.getElementById("canvas");
canvas.width = 600;
canvas.height = 400;
var ctx = canvas.getContext("2d");
canvas.style.border = "solid 1px black";

ctx.lineWidth = 3;
ctx.lineJoin = "round";
ctx.lineCap = "round";
//ctx.strokeStyle="red";

function getMousePos(canvas, evt) {
    var rityta = canvas.getBoundingClientRect()
    return {
    x: evt.clientX - rityta.left,
    y: evt.clientY - rityta.top
    };
   }
   

function randomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};

function randomColor() {
    var colorint = randomInt(10,60);
    if (colorint < 20) return "blue";
    if (colorint < 30 && colorint > 19) return "green";
    if (colorint < 40 && colorint > 29) return "pink";
    if (colorint < 50 && colorint > 39) return "purple";
    if (colorint < 60 && colorint > 49) return "red";
}
canvas.addEventListener("click",function(evt){
    var pos = getMousePos(canvas, evt);
    var size = randomInt(10,30);
    var color = randomColor();
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, size, 0, 2 * Math.PI);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
   },true);

