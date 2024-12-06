function scene9(){

  if(myCharacter.x <= 300){
    background('white');
    push();
    textAlign(CENTER,CENTER);
    textSize(20);
    fill('black');
    text('12 years later..', width/2, 200);
    pop();
  } else {
    background(grass3);
    push();
    textAlign(CENTER,CENTER);
    textSize(20);
    fill('white');
    text('12 years later..', width/2, 200);
    pop();
  }
  startButton.hide();
  resetButton.hide();

}