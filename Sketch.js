function setup() {
  createCanvas(400, 400);
}

function draw() {
    if(mouseIsPressed) {
  fill(0) 
    }
  else{ 
  fill(255);
  }
  ellipse( mouseX, mouseY, 120,120)
  ellipse( mouseX, mouseY,100,100)
  ellipse( mouseX, mouseY, 80, 80)
}
