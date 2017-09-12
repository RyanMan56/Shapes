var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var toRads = Math.PI / 180;
var currentSplits = 1;

window.addEventListener('resize', resizeCanvas, false);
resizeCanvas();

draw();
setInterval(draw, 1/60);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#A3C4BC";
  filledCircle();
  currentSplits += 0.01;
}

function filledCircle() {
  var origin = new Vector2(canvas.width / 2, canvas.height / 2);
  var splits = currentSplits;
  var scaler = 400;
  var degreesPerSplit = 360 / splits;

  ctx.beginPath();
  for (var d = 0; d < splits; d++) {
    var deg = d * degreesPerSplit;
    ctx.lineTo(origin.x + Math.sin(deg * toRads) * scaler, origin.y + Math.cos(deg * toRads) * scaler);
  }
  ctx.fill();
  ctx.closePath();
}

function pythagoreanCircle() {
  var origin = new Vector2(canvas.width / 2, canvas.height / 2);
  var splits = currentSplits;
  var scaler = 400;
  var degreesPerSplit = 360 / splits;
  for (var d = 0; d < splits; d++) {
    var deg = Math.ceil(d * degreesPerSplit);
    var deg2 = Math.ceil((d + 1) * degreesPerSplit);

    drawTriangle(
      origin,
      new Vector2(origin.x + Math.sin(deg * toRads) * scaler, origin.y + Math.cos(deg * toRads) * scaler),
      new Vector2(origin.x + Math.sin(deg2 * toRads) * scaler, origin.y + Math.cos(deg2 * toRads) * scaler)
    );
  }
}

function drawBackground() {
  ctx.fillStyle = "#413C58";
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
