var rityta = document.getElementById("myCanvas");
var c = rityta.getContext("2d");
rityta.width=500;
rityta.height=500;
rityta.style.border="solid 1px #1E90FF";
c.beginPath();
for (var i = -500; i < 500 ; i+=20) {
    c.moveTo(i,0);
    c.lineTo(i+500,rityta.height);
    c.closePath();
    c.stroke();    
}
for(var j = 0; j < 1000; j+=20)
{
    c.beginPath();
    c.moveTo(j,0);
    c.lineTo(j-500,rityta.height);
    c.closePath();
    c.stroke();
}


