let video;
function setup() {
  //createCanvas(400, 400);
  video=createCapture(VIDEO);
  
  noCanvas();
}

function draw() {
  background(220);
  filter(INVERT);
}
