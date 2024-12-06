function setup() {
  createCanvas(400, 600);
  angleMode(DEGREES);
}

function draw() {
  background(30);
  createHead();
  createBody();
  createLegs();
  createPatches();
}

function createLegs(){
  push()
  strokeWeight(2);
  translate(-10, 0)
  fill('rgb(241,223,190)')
  rect(120, 410, 50, 96);
  rect(250, 410, 50, 96);
  curve(170, 100, 120, 500, 170, 500, 100, 100);
  curve(240, 100, 300, 500, 250, 500, 300, 100);
  pop();
}

function createHead() {
  push()
  strokeWeight(2);
  fill('rgb(46,185,46)');
  triangle(160, 130.3, 240, 130.3, 200, 170);
  circle(200, 100, 100);
  pop()
  
  push()
  rotate(-15);
  fill('black');
  ellipse(140, 150, 30, 40);
  pop()
  
  push()
  rotate(15);
  fill('black');
  ellipse(245, 46, 30, 40);
  pop()
}

function createBody() {
  
  push()
  strokeWeight(2);
  fill('rgb(179,179,179)');
  rect(10, 190, 100, 20);
  rect(290, 190, 100, 20);
  rect(190, 160, 20, 30);
  rect(124, 390, 20, 20);
  rect(254, 390, 20, 20);
  pop()
  
  push()
  strokeWeight(2);
  fill('#FFEA95');
  rect(110, 190, 180, 200);
  quad(40, 190, 110, 190, 110, 240, 40, 250);
  quad(290, 190, 360, 190, 360, 250, 290, 240);
  pop()
}

function createPatches() {
  push()
  strokeWeight(2);
  fill('rgb(138,87,44)');
  rect(200, 300, 50, 50);
  pop()
  
  push()
  strokeWeight(2);
  fill('rgb(107,125,223)');
  rect(110, 200, 40, 100);
  pop()
  
  push()
  strokeWeight(2);
  fill('rgb(173,62,123)');
  rect(110, 350, 60, 20);
  pop()
}