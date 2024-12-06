let scene8Bubbles = [];

function scene8(){
  
  if(myCharacter.x < 100){
    background('black');
  } else if(myCharacter.x >=100 && myCharacter.x < 220){
    background('rgb(85,84,84)');
    push();
    fill('white');
    text("2 months later", 220, 190);
    pop();
  } else if(myCharacter.x >=220 && myCharacter.x < 310){
    background('rgb(165,162,162)');
    push();
    fill('black');
    text("4 months later", 310, 340);
    pop();
  } else if(myCharacter.x >= 310 && myCharacter.x < 440){
    background('rgb(206,203,203)');
    push();
    fill('black');
    text("6 months later", 440, 260);
    pop();
  } else { 
    background('white');
    push();
    textAlign(CENTER,CENTER);
    textSize(15);
    fill('black');
    text("Thank you everyone..", width/2, height/2);
    pop();
  }
  
  startButton.hide();
  resetButton.hide();
  nextButton.hide();
  
  image(teacher, 100, 170, 68,68);
  image(minh, 220, 90, 65, 65);
  image(teacher, 310, 250, 68,68);
  image(minh, 440, 170, 65, 65);
} 

class scene8Bubble {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.w = 40;
    this.visible = false;
    this.corresponding_rect_visible = false;
    this.decode = false;
  }
  
  render(){
    if(this.visible == true){
      image(exclamation, this.x, this.y);
    }
  }
  
  render_corresponding_rect(i){
    if(this.corresponding_rect_visible == true){
      if(i==0){
        if(this.decode == false){
          push();
          let c = color('white');
          c.setAlpha(240);
          fill(c);
          rect(120, 90, 370, 240);
          pop();

          push();
          fill('blue');
          textAlign(CENTER,CENTER);
          text("press 'd' to DECODE", width/2, 300);
          pop();

          push();
          fill('red');
          textAlign(CENTER,CENTER);
          text("bwiu vwugoia wuaof huow!", width/2, 240);
          pop();

          push();
          fill('black');
          textAlign(CENTER,CENTER);
          text("waouf ihbaube!", width/2, 140);
          text("wuoehf oin ubarw jb waurf ow absdf basjdk", width/2, 160);
          text("bwaou s oae oi no awubi kbo awrb owaieh oaiwr b oeu.", width/2, 180);
          text("anhcef ne ksbdf sd abd aiuwency oi acuney odisfmjg.", width/2, 200);
          pop(); 
        } else {
          push();
          let c = color('white');
          c.setAlpha(240);
          fill(c);
          rect(120, 90, 370, 240);
          pop();

          push();
          fill('red');
          textAlign(CENTER,CENTER);
          text("I believe in you!", width/2, 240);
          text("press 'x' to close", width/2, 300);
          pop();

          push();
          fill('black');
          textAlign(CENTER,CENTER);
          text("Hey Ireen!", width/2, 140);
          text("You're doing great adjusting to a new environment.", width/2, 160);
          text("I know it can be hard, but I see the potential in you.", width/2, 180);
          text("I'll be happy to tutor you after class everyday.", width/2, 200);
          pop(); 
        }
      } else if(i == 1){
        if(this.decode == false){
          push();
          let c = color('white');
          c.setAlpha(240);
          fill(c);
          rect(120, 90, 370, 240);
          pop();

          push();
          fill('blue');
          textAlign(CENTER,CENTER);
          text("press 'd' to DECODE", width/2, 300);
          pop();

          push();
          fill('black');
          textAlign(CENTER,CENTER);
          text("aipwhflk Ireen!", width/2, 160);
          text("I'm Minhy oabwfir I'm iwubon your core awubap!", width/2, 180);
          text("ncaoin you uwb8 if I aswe you for lunch today?", width/2, 200);
          text("I aitnvr become oinantc with you!", width/2, 220);
          pop();
        } else {
          push();
          let c = color('white');
          c.setAlpha(240);
          fill(c);
          rect(120, 90, 370, 240);
          pop();

          push();
          fill('red');
          textAlign(CENTER,CENTER);
          text("press 'x' to close", width/2, 300);

          pop();

          push();
          fill('black');
          textAlign(CENTER,CENTER);
          text("Hey Ireen!", width/2, 160);
          text("I'm Minhy and I'm also your core class!", width/2, 180);
          text("Do you mind if I join you for lunch today?", width/2, 200);
          text("I wanna become friends with you!", width/2, 220);
          pop();
        }
      } else if(i == 2){
        if(this.decode == false){
          push();
          let c = color('white');
          c.setAlpha(240);
          fill(c);
          rect(120, 90, 370, 240);
          pop();

          push();
          fill('blue');
          textAlign(CENTER,CENTER);
          text("press 'd' to DECODE", width/2, 300);
          pop();

          push();
          fill('black');
          textAlign(CENTER,CENTER);
          text("You're learning so lenwl!", width/2, 160);
          text("I'm eoirac amazed at how much oeur grow each day.", width/2, 180);
          text("You should sign ubro for the ubwoa GATE opinemo!", width/2, 200);
          text("I know anawe do amazing gubewk too.", width/2, 220);
          text("I'm extremely proud of you.", width/2, 240);
          pop();
        } else {
          push();
          let c = color('white');
          c.setAlpha(240);
          fill(c);
          rect(120, 90, 370, 240);
          pop();

          push();
          fill('red');
          textAlign(CENTER,CENTER);
          text("press 'x' to close", width/2, 300);
          pop();

          push();
          fill('black');
          textAlign(CENTER,CENTER);
          text("You're learning so fast!", width/2, 160);
          text("I'm always amazed at how much you grow each day.", width/2, 180);
          text("You should sign up for the CA GATE program!", width/2, 200);
          text("I know you'll do amazing there too.", width/2, 220);
          text("I'm extremely proud of you.", width/2, 240);
          pop();
        }
      } else if(i == 3){
          push();
          let c = color('white');
          c.setAlpha(240);
          fill(c);
          rect(120, 90, 370, 240);
          pop();

          push();
          fill('blue');
          textAlign(CENTER,CENTER);
          text("Congrats! There is nothing to decode!", width/2, 280);
          pop();
        
          push();
          fill('red');
          textAlign(CENTER,CENTER);
          text("press 'x' to close", width/2, 300);
          pop();

          push();
          fill('black');
          textAlign(CENTER,CENTER);
          text("Yesterday's cafe hangout was so fun!", width/2, 160);
          text("We should definitely do that again.", width/2, 180);
          text("OMG! I completely forgot to do my writing homework.", width/2, 200);
          text("Let's go study at the library together!", width/2, 220);
          pop();
      }
    }
  }
  
  key_listener(){
    if(this.visible){
      if(keyIsPressed == true && keyCode == '69' ){
        this.corresponding_rect_visible = true;
        this.decode = false;
      } else if (keyIsPressed == true && keyCode == '88'){
        this.corresponding_rect_visible = false;
        this.visible = false;
      } else if(keyIsDown('68')){
        this.decode = true;
      }
    }
  }
}


function textBoxScene8(i){
    char_bubble_d = dist(scene8Bubbles[i].x-50,scene8Bubbles[i].y+20, myCharacter.x, myCharacter.y);
        
  if(char_bubble_d<50){
     scene8Bubbles[i].visible = true
  }
  else{
     scene8Bubbles[i].visible =false
  }
}