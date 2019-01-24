var rityta = document.getElementById("rityta");
rityta.width = 500;
rityta.height=400;
rityta.style.border = "solid 1px #000";
var ctx = rityta.getContext("2d");

for(var x = 0; x <= 1000; x+=20)
{
    ctx.beginPath();
    ctx.moveTo(x,0);
    ctx.lineTo(x-500,rityta.height);
    ctx.closePath();
    ctx.stroke();
}