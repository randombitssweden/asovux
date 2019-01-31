var pageDraw = document.getElementById("animation");
pageDraw.width=800;
pageDraw.height=500;
pageDraw.style.border="solid 1px #1E90FF";
var ctx = pageDraw.getContext("2d");

//var brick = pageDraw.getContext("2d");
/* var backgroundImg = new Image();
backgroundImg.src="img/backgr1.png";

backgroundImg.onload = function() {
    pageDraw.drawImage(backgroundImg,0,0);
} */ 
var x = pageDraw.width/2;
var y = pageDraw.height/2;

var bollTone = ctx.createRadialGradient(x-6,y-5,2,x,y,30);
var brick1Tone = ctx.createLinearGradient(x,y,10,50);
var brick2Tone = ctx.createLinearGradient(x,y,10,50);
bollTone.addColorStop(0,'rgb(255,204,204)');
bollTone.addColorStop(.5,'rgb(204,0,0)');
//bollTone.addColorStop(.8,'rgb(153,0,0)');
bollTone.addColorStop(1,'rgb(153,0,0)');
brick1Tone.addColorStop(0, 'rgb(0,0,255)');
brick1Tone.addColorStop(.5, 'rgb(0,50,250)');
brick1Tone.addColorStop(1, 'rgb(200,100,100)');
brick2Tone.addColorStop(0, 'rgb(0,50,155)');
brick2Tone.addColorStop(.5, 'rgb(0,50,250)');
brick2Tone.addColorStop(1, 'rgb(255,150,75)');
ctx.beginPath();
ctx.arc(x,y, 20, 0,2*Math.PI,false);
//ctx.strokeStyle = "red";
ctx.fillStyle = bollTone; 
ctx.fill();
ctx.closePath();

var brick = ["brick","show"];
brick[0] = function()
{ 
    ctx.beginPath();
    ctx.fillStyle = brick1Tone; // Gradient working
    ctx.strokeRect(5+i,j,80,30);
    ctx.fillRect(5+i,j,80,30); 
    ctx.closePath();
}
brick[1] = true;
//ctx.stroke();
/*
var j = 20;
//for ( var j = 20 ; j < 200 ; j+=40) {
    for (var i = 0 ; i < pageDraw.width; i+=90) {
        ctx.beginPath();
        ctx.fillStyle = brick1Tone; // Gradient working
        ctx.strokeRect(5+i,j,80,30);
        ctx.fillRect(5+i,j,80,30); 
        ctx.closePath();
    }
//}
*/
/*
ctx.beginPath();
ctx.strokeStyle = "blue"; // Not working. Inherit from .addColorStop ? 
ctx.fill(); 
ctx.closePath();
ctx.beginPath();
ctx.strokeRect(110,50,80, 30);
ctx.fillRect(110,50,80, 30);
ctx.closePath();

*/
