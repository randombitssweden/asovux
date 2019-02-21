var canvas = document.getElementById("canvas");
canvas.width = 600;
canvas.height = 400;
var ctx = canvas.getContext("2d");
canvas.style.border = "solid 1px black";

function kvadrat(color) {
    ctx.rect(250,150,100,100);
    ctx.fillStyle = color;
    ctx.fill();
}

kvadrat("red");

function getMousePos(canvas, evt) {
    var rityta = canvas.getBoundingClientRect();
    return {
    x: evt.clientX - rityta.left,
    y: evt.clientY - rityta.top
    };
}

canvas.addEventListener("mousemove", function() {
    //var x = event.clientX;
    //var y = event.clientY;
    var pos = getMousePos(canvas,event)
    //document.getElementById("pos").innerHTML += "X: "+x+" och Y: "+y;
    //document.getElementById("pos").innerHTML += "<br>pos.x " +pos.x+ "pos.y "+pos.y;
    if(pos.x >= 250 && pos.x <= 350 && pos.y >= 150 && pos.y <= 350) {
        kvadrat("green");
    } else {
        kvadrat("red")
    }
});
