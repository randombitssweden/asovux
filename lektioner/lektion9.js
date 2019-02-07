var canvas = document.getElementById("canvas");
canvas.width = 500;
canvas.height = 500;
canvas.style.border = "solid 1px purple";
var ctx = canvas.getContext("2d");

/* 
ctx.moveTo(0,0);
ctx.lineTo(100,100);
ctx.lineTo(200,50);
ctx.lineTo(300,408);
ctx.lineTo(500,500);
*/

// Triangle
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(400,400);
ctx.lineTo(100,400)
ctx.lineWidth = 2
ctx.strokeStyle = "blue";

//ctx.fillStyle = "yellow";
//ctx.fill();
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.rect(200,300,70,50);
ctx.lineWidth = 5;
ctx.fillStyle = "blue";
ctx.fill();
ctx.strokeStyle = "red";
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(350,250,30,0,2*Math.PI, true);
ctx.strokeStyle = "green";
ctx.fillStyle = "purple";
ctx.fill();
ctx.stroke();
ctx.closePath();