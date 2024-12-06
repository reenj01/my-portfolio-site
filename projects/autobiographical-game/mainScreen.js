function mainScreen(){
  background('white');
  push();
  textSize(50);
  textAlign(CENTER,CENTER);
  image(title, 0, 0, 600, 400);
  pop();
    
  startButton.show();
  startButton.mousePressed(startGame);
  resetButton.hide();
  nextButton.hide();
}

function startGame(){
  currentScene = 1;
}