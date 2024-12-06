let bgColorRed = 255;
let bgColorGreen = 255;
let bgColorBlue = 255;
let min = 0;
let max = 255;

function setup() {
  createCanvas(400, 400);
}

function mousePressed() {
  stroke(random(min, max), random(min, max), random(min, max));
}

function keyPressed() {
  bgColorRed = random(min, max);
  bgColorGreen = random(min, max);
  bgColorBlue = random(min, max);
}

function draw() {
  background(0);
  
  fill(bgColorRed, bgColorGreen, bgColorBlue);
  rect(70 - mouseX/17, 100 - mouseY/17, mouseX/8 + 250, mouseY/8 + 200, 20);
  
  frameRate(6);
  fill(random(min, max), random(min, max), random(min, max));
  
  strokeWeight(8);
  line(100, 150, 150, 150);
  square(mouseX/15 + 90, 150, 20); 
  line(250, 150, 300, 150);
  square(mouseX/15 + 230, 150, 20);
  
  square(mouseX/15 + 150, 200, mouseY/15);
}