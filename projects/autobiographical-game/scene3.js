function scene3(){
  startButton.hide();
  resetButton.hide();
  nextButton.hide();

  background(grass);
  image(path, 0, 160);
  
  //plane
  push();
  strokeWeight(2);
  rect(399, -10, 210, 400);
  pop();
  
  push();
  noStroke();
  fill('rgb(179,179,179)');
  rect(400, 0, 18);
  pop();
  
  image(departure, width/2-50, 44, 120, 120);
  
  image(plane1, 200, 10, 400, 400);
}