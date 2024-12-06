let scene2Bubbles = [];

function scene2(){
  startButton.hide();
  resetButton.hide();
  nextButton.hide();
  background(grass);
  image(path, 0, 160);
  
  image(mailbox, 42, 100, 50, 45);
  
  push();
  fill('#795548');
  rect(width/5, 30+10, 450, 340);
  pop();
  
  push();
  noStroke();
  fill('#3D2A23')
  rect(width/5, 30+10, 20, 340);
  rect(width/5, 30+10, 450, 20);
  rect(width/5, 350+10, 450, 20);
  rect(550, 30+10, 20, 340);
  pop();
  
  push();
  fill('#B8A68D');
  rect(width/5, 170, 20, 70);
  rect(550, 170, 20, 70);
  pop();
  
  push();
  fill('rgb(185,185,185)');
  //rect(width/3+20, 70, 110, 40);
  image(familyphoto, width/3-20, 70, 170, 80);
  
  /*
  rect(150, 250, 40, 90);
  rect(190, 300, 90, 40);
  circle(240, 260, 40);
  */
  image(sofa, 150, 220, 130, 130);
  image(food, 225, 245, 40, 40);
  
  //circle(400, 200, 120);
  image(rug, 340, 140, 120, 120);
  
  //rect(470, 260, 40, 50);
  image(dog, 470, 260, 50, 60);
  pop();
}

class scene2Bubble {
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
      /*
      push();
      fill('rgb(255,207,207)');
      rect(this.x, this.y, this.w, this.w);
      pop();
      */
      image(exclamation, this.x, this.y);
    }
  }
  
  render_corresponding_rect(i){
    if(this.corresponding_rect_visible == true){
      if(i==0){
        push();
        let c = color('white');
        c.setAlpha(240);
        fill(c);
        rect(160, 80, 370, 240);
        pop();

        push();
        fill('red');
        text("press 'x' to close", width/2, 300);
        pop();

        push();
        fill('black');
        text("From mom & dad,", width/2-8, 120);
        text("Exciting News!", width/2, 170);
        text("We're going to move to the US right now!", width/2-70, 190);
        text("Go around the house and ", width/2-100, 210);
        pop();
        push();
        fill('red');
        text("find 3 items", width/2+40, 210);
        pop();
        push();
        fill('black');
        text(" to bring with you.", width/2+100, 210);
        text("When you're done, come outside through the backyard.", width/2-100, 230);
        pop();
      } else if(i==1){
        push();
        let c = color('white');
        c.setAlpha(240);
        fill(c);
        rect(160, 80, 370, 240);
        pop();
        
        push();
        fill('red');
        text("press 'x' to close", width/2, 300);
        text("You found: the family photo!", width/2-30, 120);
        pop();
        
        push();
        fill('black');
        textAlign(CENTER);
        text("A family of three. As an only child, my parents were really special to me more than I even ever knew. I had no other siblings, so I relied on them a lot. I look at pictures of myself with my parents when I was younger and I wish I could go back and enjoy that time even more.", width/2-110, 160, 310);
        pop();
      } else if(i==2){
        push();
        let c = color('white');
        c.setAlpha(240);
        fill(c);
        rect(160, 80, 370, 240);
        pop();
        
        push();
        fill('red');
        text("press 'x' to close", width/2, 300);
        text("You found: korean food!", width/2-25, 120);
        pop();
        
        push();
        fill('black');
        textAlign(CENTER);
        text("Korean food is my favorite, perhaps because I am Korean, but I love all the ingredients that goes into Korean food. I love noodles, rice, the sauces, spice, and Korean desserts. Thinking that I can't enjoy these foods everyday when I'm in the US makes me extremely sad and worried.", width/2-110, 160, 310);
        pop();
      } else if(i==3){
        push();
        let c = color('white');
        c.setAlpha(240);
        fill(c);
        rect(160, 80, 370, 240);
        pop();
        
       push();
        fill('red');
        text("press 'x' to close", width/2, 300);
        text("You found: Toto!", width/2, 120);
        pop();
        
        push();
        fill('black');
        textAlign(CENTER);
        text("Toto is my schnauzer dog that was in the family even before I was born, so I grew up with him since day 1. He was my closest companion and best friend. I hate that I have to leave him behind, although my dad's friend is going to take good care of him. I wish someone had invented teleportation, so we could go to the US together... I'm so sorry Toto.", width/2-110, 150, 310);
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

function textBoxScene2(i){
  if(scene2Bubbles[i].above == true){
    char_bubble_d = dist(scene2Bubbles[i].x - 40,scene2Bubbles[i].y+35, myCharacter.x, myCharacter.y)
  } else {
    char_bubble_d = dist(scene2Bubbles[i].x - 30,scene2Bubbles[i].y-35, myCharacter.x, myCharacter.y)
  }
        
  if(char_bubble_d<50){
     scene2Bubbles[i].visible = true
  }
  else{
     scene2Bubbles[i].visible =false
  }
}