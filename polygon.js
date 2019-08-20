var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext('2d');

function polygon(side, size_, x, y, deg_){
var numberOfSides = side,
    size = size_,
    xCenter = x,
    yCenter = y,
    deg = deg_;


ctx.translate(xCenter,yCenter); //Rotate
ctx.rotate(Math.PI/deg);
ctx.translate(-xCenter,-yCenter);

ctx.beginPath();
ctx.moveTo (xCenter +  size * Math.cos(0), yCenter +  size *  Math.sin(0));

for (var i = 1; i <= numberOfSides;i++) {
  ctx.lineTo (xCenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), yCenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
}

ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;
ctx.stroke();

return;
}

polygon(6,50,150,150,0)
