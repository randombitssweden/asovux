var rityta = document.getElementById("rityta");
rityta.width = 600;
rityta.height=400;
rityta.style.border = "solid 1px #000";
var ctx = rityta.getContext("2d");
var nr = 0;
for(var y = 0; y< 400; y+=50)
{
    for(var x = 0; x<600; x+=60)
    {
        ctx.beginPath();
        if(nr%2==0) ctx.fillStyle="#FFF";
        else ctx.fillStyle="#000";
        ctx.fillRect(x,y,60,50);
        ctx.fill();
        nr++;
    }
    nr++;   
}