var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var toRads = Math.PI / 180;

window.addEventListener('resize', resizeCanvas, false);
resizeCanvas();

setInterval(draw, 1/60);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // drawBackground();

  ctx.fillStyle = "#A3C4BC";
  drawTriangle(new Vector2(100, 100), new Vector2(200, 100), new Vector2(150, 200));
  // ctx.fillStyle = "#F2DDA4";
  drawTriangle(new Vector2(150, 50), new Vector2(200, 150), new Vector2(100, 150));

  var origin = new Vector2(canvas.width / 2, canvas.height / 2);
  var splits = 48;
  var scaler = 300;
  var degreesPerSplit = 360 / splits;
  for (var d = 0; d < splits; d++) {
    var deg = d * degreesPerSplit;
    var deg2 = (d + 1) * degreesPerSplit;

    // console.log(deg, deg2);
    drawTriangle(
      origin,
      new Vector2(origin.x + Math.sin(deg * toRads) * scaler, origin.y + Math.cos(deg * toRads) * scaler),
      new Vector2(origin.x + Math.sin(deg2 * toRads) * scaler, origin.y + Math.cos(deg2 * toRads) * scaler)
    );
  }

}

function drawBackground() {
  ctx.fillStyle = "#413C58";
  // ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function Vector2(x, y) {
  this.x = x;
  this.y = y;
}

function drawTriangle(a, b, c) {
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  ctx.lineTo(c.x, c.y);
  ctx.fill();
  ctx.closePath();
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
