function scene11(){
  background(grass3);
  startButton.hide();
  resetButton.hide();
  
  push();
  translate(40,120);
  rotate(-30);
  image(frame, 0, 0, 400, 400);
  image(grad, 22, 35, 130, 180);
  image(mb, 199, 35, 170, 180);
  image(ajussi, 120, 35, 160, 190);
  image(ck, 180, 208, 190, 130);
  image(seoul, 23, 207, 180, 130);
  textSize(15);
  text("Grateful Memories", 140, 370);
  pop();
  
  push();
  textAlign(CENTER,CENTER);
  textSize(13);
  fill('white');
  text("press SPACE", 80, 380);
  pop();

  push();
  let c = color('white');
  c.setAlpha(240);
  fill(c);
  rect(0, 150, 600, 100);
  pop();

  push();
  textAlign(CENTER,CENTER);
  textSize(13);
  text("I would've never believed to me with the friends I have and make such memories back when I first came here.", 90, height/2, 400);
  pop();
  
   
  if(keyIsDown('32')){
    currentScene++;
  }
}