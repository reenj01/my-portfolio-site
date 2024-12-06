class MainCharacter {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.w = 80;
    this.h = 80;
    this.direction = 'right';
    this.up = false;
    this.down = false;
    this.counter = 0;
    
    this.happyRight_images = [happyRight1, happyRight2, happyRight3, happyRight4, happyRight5];
    
    this.happyLeft_images = [happyLeft1, happyLeft2, happyLeft3, happyLeft4, happyLeft5];
    
    this.neutralRight_images = [neutralRight1, neutralRight2, neutralRight3, neutralRight4, neutralRight5];
    
    this.neutralLeft_images = [neutralLeft1, neutralLeft2, neutralLeft3, neutralLeft4, neutralLeft5];
    
    this.sadRight_images = [sadRight1, sadRight2, sadRight3, sadRight4, sadRight5];
    
    this.sadLeft_images = [sadLeft1, sadLeft2, sadLeft3, sadLeft4, sadLeft5];

  }
  
  render(){    
    if(currentScene <= 2){
      if(this.direction == 'right' || this.up || this.down){
       image(this.happyRight_images[this.counter], this.x, this.y, 60,70)
      }
      if(this.direction == 'left'){
       image(this.happyLeft_images[this.counter], this.x, this.y, 60,70)
      }
    } else if(currentScene == 3){
      if(this.x < 100){
        if(this.direction == 'right' || this.up || this.down){
         image(this.happyRight_images[this.counter], this.x, this.y, 60,70)
        }
        if(this.direction == 'left'){
         image(this.happyLeft_images[this.counter], this.x, this.y, 60,70)
        }
      } else if(this.x >= 400){
        if(this.direction == 'right' || this.up || this.down){
         image(this.sadRight_images[this.counter], this.x, this.y, 60,70)
        }
        if(this.direction == 'left'){
         image(this.sadLeft_images[this.counter], this.x, this.y, 60,70)
        }
       } else{
        if(this.direction == 'right' || this.up || this.down){
         image(this.neutralRight_images[this.counter], this.x, this.y, 60,70)
        }
        if(this.direction == 'left'){
         image(this.neutralLeft_images[this.counter], this.x, this.y, 60,70)
        }
      }
    } else if(currentScene > 3 && currentScene < 6){
      if(this.direction == 'right' || this.up || this.down){
       image(this.sadRight_images[this.counter], this.x, this.y, 60,70)
      }
      if(this.direction == 'left'){
       image(this.sadLeft_images[this.counter], this.x, this.y, 60,70)
      }
    } else if(currentScene == 6){
      if(this.direction == 'right' || this.up || this.down){
       image(this.sadRight_images[this.counter], this.x+60, this.y, 60,70)
      }
      if(this.direction == 'left'){
       image(this.sadLeft_images[this.counter], this.x+60, this.y, 60,70)
      }
    } else if(currentScene == 7) {
      if(this.direction == 'right' || this.up || this.down){
         image(this.neutralRight_images[this.counter], this.x, this.y, 60,70)
        }
        if(this.direction == 'left'){
         image(this.neutralLeft_images[this.counter], this.x, this.y, 60,70)
        }
    } else if(currentScene == 8){
      if(this.direction == 'right' || this.up || this.down){
       image(this.sadRight_images[this.counter], this.x, this.y, 60,70)
      }
      if(this.direction == 'left'){
       image(this.sadLeft_images[this.counter], this.x, this.y, 60,70)
      }
      
      if(this.x >= 100){
        push();
        fill('white');
        textAlign(CENTER,CENTER);
        text("I can't understand anything that they are saying.", width/4+50, 50);
        pop();
      } 
      
      if(this.x >= 200){
        push();
        fill('white');
        textAlign(CENTER,CENTER);
        text("I have no idea what is going on.", width/2+150, 350);
        pop();
      }
      
      if(this.x >= 300){
        push();
        fill('white');
        textAlign(CENTER,CENTER);
        text("I don't have anyone to talk to.", width/4, 350);
        pop();
      }
      
      if(this.x >= 400){
        push();
        fill('white');
        textAlign(CENTER,CENTER);
        text("I want to go home...", width/2+170, 50);
        pop();
      }
    } else if(currentScene == 9){
      
      if(this.x <= 220){
       if(this.direction == 'right' || this.up || this.down){
         image(this.sadRight_images[this.counter], this.x, this.y, 60,70)
        }
        if(this.direction == 'left'){
         image(this.sadLeft_images[this.counter], this.x, this.y, 60,70)
        }
      } else if(this.x > 220 && this.x <= 440){
        if(this.direction == 'right' || this.up || this.down){
         image(this.neutralRight_images[this.counter], this.x, this.y, 60,70)
        }
        if(this.direction == 'left'){
         image(this.neutralLeft_images[this.counter], this.x, this.y, 60,70)
        }
      } else {
        if(this.direction == 'right' || this.up || this.down){
         image(this.happyRight_images[this.counter], this.x, this.y, 60,70)
        }
        if(this.direction == 'left'){
         image(this.happyLeft_images[this.counter], this.x, this.y, 60,70)
        }
      }
    } else if(currentScene == 10){
      
      if(this.direction == 'right' || this.up || this.down){
       image(this.neutralRight_images[this.counter], this.x, this.y, 60,70)
      }
      if(this.direction == 'left'){
       image(this.neutralLeft_images[this.counter], this.x, this.y, 60,70)
      }
    }
  } 
  
  move(){
    if(keyIsDown(RIGHT_ARROW)){
      this.x +=2;
      this.direction = 'right'
      this.up = false
      this.down = false
      if(frameCount % 5 == 0){
        this.counter++;
      }
      
    }
    if(keyIsDown(LEFT_ARROW)){
      this.x -= 2;
      this.direction = 'left'
      this.up = false
      this.down = false
      if(frameCount % 5 == 0){
        this.counter++;
      }
    }
    if(keyIsDown(UP_ARROW)){
      this.y -=2;
      this.up = true
      this.down = false
      if(frameCount % 5 == 0){
        this.counter++;
      }
    }
    if(keyIsDown(DOWN_ARROW)){
      this.y +=2;
      this.up = false
      this.down = true
      if(frameCount % 5 == 0){
        this.counter++;
      }
    }
    
    if(this.x > 600 && currentScene != 6){
      currentScene++;
      this.x = 0;
    } else if (currentScene == 6 && this.x > 550){
      currentScene++;
      this.x = 0;
    }
    
    if(currentScene > 2 && this.x < 0){
      currentScene--;
      this.x = 600;
    }
    
    if(currentScene == 4 && this.x > 410){
      currentScene++;
      this.x = 0;
    }
    
    if(this.counter>=5){
      this.counter = 0
    }
    
  } 
}