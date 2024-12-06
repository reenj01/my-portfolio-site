function directions(){
  background('black');
  startButton.hide();
  resetButton.hide();
  nextButton.hide();
  
  push();
  rect(80, 50, 440, 300);
  pop();
  
  push();
  textAlign(CENTER);
  textSize(13);
  text('This is an autobiographical game that maps the physical and emotional journey I faced when moving to a foreign country at age 7.', 100, 80, 400);
  pop();

  push();
  textAlign(CENTER, CENTER);
  textSize(15);
  text("1. Use the ARROW keys to move", width/2, height/2.5);
  text("2. press 'E' to interact with ! signs", width/2, height/2.15);
  text("3. press 'X' to close popups", width/2, height/1.9);
  text("4. Walk around and explore!", width/2, height/1.67);
  pop();
  
  push();
  textAlign(CENTER, CENTER);
  textSize(15);
  text("Hope you enjoy my autobiographical game!", width/2, height/2+80);
  pop();
  
  push();
  textAlign(CENTER, CENTER);
  textSize(15);
  fill('red');
  text("Press 'E' to start!", width/2, height/2+120);
  pop();
  
  if(keyIsPressed && keyCode == '69'){
    currentScene = 2;
  }
}