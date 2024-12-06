let scene6Bubbles = [];

function scene6(){
  background(dirt);
  resetButton.hide();
  startButton.hide();
  nextButton.hide();
  
  image(path, 0, 160);
  
  push();
  fill('#999999');
  rect(width/7, 30+10, 485, 340);
  pop();
  
  push();
  noStroke();
  fill('#2F3258')
  rect(width/7, 30+10, 20, 340);
  rect(width/7, 30+10, 480, 20);
  rect(width/7, 350+10, 480, 20);
  rect(550, 30+10, 20, 340);
  pop();
  
  push();
  fill('#B8A68D');
  rect(width/7, 170, 20, 70);
  rect(550, 170, 20, 70);
  pop();

  image(schooldesk, 120, 70, 170, 70);
  image(bookshelf, 110, 210, 150, 150);
  image(desks, 380, 60, 150, 150);
  image(rug2, 300, 200, 150, 150);
  
  image(npc1, 360, 240, 65, 65);
  image(npc2, 280, 240, 65, 65);
  image(npc3, 460, 130, 62, 62);
  
  image(teacher, 300, 70, 68, 68);
}

class scene6Bubble {
  constructor(x, y, above){
    this.x = x;
    this.y = y;
    this.w = 40;
    this.visible = false;
    this.above = above;
    this.corresponding_rect_visible = false;
  }
  
  render(){
    if(this.visible == true){
      image(exclamation, this.x, this.y);
    }
  }
  
  render_corresponding_rect(i){
    if(this.corresponding_rect_visible == true){
      if(i==0){
        push();
        let c = color('white');
        c.setAlpha(200);
        fill(c);
        rect(290, 110, 90, 60);
        pop();
        
        push();
        fill('black');
        text("gyriawuhofjjn", 300, 130);
        text("lxjiuhfbwawe", 300, 145);
        text("yiwguohesj!!", 300, 160);
        pop();
                
      } else if(i==1){
        push();
        let c = color('white');
        c.setAlpha(200);
        fill(c);
        rect(260, 250, 90, 60);
        pop();
        
        push();
        fill('black');
        text("auwoefjnsdl", 270, 270);
        text("ygwifruhods", 270, 285);
        text("uwfohboa??", 270, 300);
        pop();
        
      } else if(i==2){
        push();
        let c = color('white');
        c.setAlpha(200);
        fill(c);
        rect(430, 140, 90, 60);
        pop();
        
        push();
        fill('black');
        text("wuohejfkiur", 440, 160);
        text("uorhenjuiwf", 440, 175);
        text("uhrfsbvhi..", 440, 190);
        pop();
      }
    }
  }
  
  key_listener(){
    if(this.visible){
       //listens for key presses and turns on or off the text rect
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

function textBoxScene6(i){
  if(scene6Bubbles[i].above == true){
    char_bubble_d = dist(scene6Bubbles[i].x - 40,scene6Bubbles[i].y+25, myCharacter.x, myCharacter.y)
  } else {
    char_bubble_d = dist(scene6Bubbles[i].x - 30,scene6Bubbles[i].y, myCharacter.x, myCharacter.y)
  }
        
  if(char_bubble_d<50){
     scene6Bubbles[i].visible = true
  }
  else{
     scene6Bubbles[i].visible =false
  }
}