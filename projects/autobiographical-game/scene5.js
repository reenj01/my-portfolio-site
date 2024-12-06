let scene5Bubbles;

function scene5(){
  startButton.hide();
  resetButton.hide();
  nextButton.hide();

  background(grass2);
  image(path, 0, 160);
  
  push();
  strokeWeight(2);
  fill('white');
  rect(-10, -10, 211, 100);
  pop();
  
  push();
  noStroke();
  fill('rgb(179,179,179)');
  rect(182, 0, 18);
  pop();
  
  image(arrival, width/2-50, 44, 120, 120);
  image(plane2, 0, 10, 400, 400);
}

class scene5Bubble {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.w = 40;
    this.visible = false;
    this.corresponding_rect_visible = false;
  }
  
  render(){
    if(this.visible == true){
      image(exclamation, this.x, this.y);
    }
  }
  
  render_corresponding_rect(){
    if(this.corresponding_rect_visible == true){
      push();
      let c = color('white');
      c.setAlpha(240);
      fill(c);
      rect(100, 80, 400, 240);
      pop();

      push();
      fill('red');
      textAlign(CENTER,CENTER);
      text("press 'x' to close", width/2, 300);
      text("you have school tomorrow!", width/2+70, 210);
      pop();
      
      push();
      fill('black');
      textAlign(CENTER,CENTER);
      text("Welcome to California!", width/2, 110);
      text("This is now your new home.", width/2, 150);
      text("Everything around you is new and unfamiliar.", width/2, 170);
      text("You don't speak English, so you can't understand anything.", width/2, 190);
      text("But it's fall meaning that", width/2-70, 210);
      text("You have no choice but to go to school, scared and nervous.", width/2, 230);
      text("You wonder what awaits you...", width/2, 250);
      pop(); 
    }
  }
  
  key_listener(){
    if(this.visible){
      if(keyIsPressed == true && keyCode == '69' ){
        this.corresponding_rect_visible = true
      }
      else if (keyIsPressed == true && keyCode == '88'){
        this.corresponding_rect_visible = false
        this.visible=false
      }
    }
  }
}


function textBoxScene5(){
    char_bubble_d = dist(scene5Bubbles.x-150,scene5Bubbles.y, myCharacter.x, myCharacter.y);
        
  if(char_bubble_d<50){
     scene5Bubbles.visible = true
  }
  else{
     scene5Bubbles.visible =false
  }
}