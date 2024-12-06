function scene4(){
  startButton.hide();
  resetButton.hide();
  nextButton.show();

  background('rgb(213,213,213)');
  
  image(window_, 165, 40, 270, 270);
  
  push();
  textAlign(CENTER,CENTER);
  textSize(20);
  fill('black');
  text('12 hours later...', width/2, height-80);
  pop();
  
  nextButton.mousePressed(nextScene);
}

function nextScene(){
  currentScene++;
}

