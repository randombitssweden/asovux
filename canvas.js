var rityta = document.getElementById("myCanvas");
var c = rityta.getContext("2d");
rityta.width=500;
rityta.height=500;
rityta.style.border="solid 1px #1E90FF";
c.beginPath();
for (var i = 0; i < 10 ; i++) {
    console.log(0+i)
    c.moveTo(0+i,0+i);
    c.lineTo(500+i,500+i);
    c.stroke();    
}
