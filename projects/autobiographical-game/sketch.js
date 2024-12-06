let myCharacter;
let myLocation;
let startButton;
let resetButton;
let nextButton;
let currentScene = 0;

function setup() {
  createCanvas(600, 400);
   
  angleMode(DEGREES);
  
  startButton = createButton('Start');
  startButton.position(1250, 570);
  startButton.style('font-size', '20px');
  startButton.style('padding-top', '10px');
  startButton.style('padding-bottom', '10px');
  startButton.style('padding-left', '20px');
  startButton.style('padding-right', '20px');
  startButton.style('color', 'white');
  startButton.style('background-color', 'black');
  
  resetButton = createButton('Play Again!');
  resetButton.position(width/2-73, height/2 +105);
  resetButton.style('font-size', '20px');
  resetButton.style('padding-top', '10px');
  resetButton.style('padding-bottom', '10px');
  resetButton.style('padding-left', '20px');
  resetButton.style('padding-right', '20px');
  resetButton.style('color', 'white');
  resetButton.style('background-color', 'black');
  
  nextButton = createButton('click to land');
  nextButton.position(width/2-50, height/2 +145);
  nextButton.style('font-size', '15px');
  nextButton.style('padding-top', '5px');
  nextButton.style('padding-bottom', '5px');
  nextButton.style('padding-left', '10px');
  nextButton.style('padding-right', '10px');
  nextButton.style('color', 'black');
  nextButton.style('background-color', 'white');
  
  myCharacter = new MainCharacter(20, 163);
  myLocation = new Location();
  
  scene5Bubbles = new scene5Bubble(400, 180);
  
  for(let i = 0; i < 4; i++){
    if(i == 0){
      scene1Exclamations[i] = new scene1Exclamation(210, 80, true);
      scene2Bubbles[i] = new scene2Bubble(52, 60, true);
      scene6Bubbles[i] = new scene6Bubble(280, 80, true);
      scene8Bubbles[i] = new scene8Bubble(118, 130);
    } else if(i == 1){
      scene1Exclamations[i] = new scene1Exclamation(140, 250, false);
      scene2Bubbles[i] = new scene2Bubble(340, 90, true);
      scene6Bubbles[i] = new scene6Bubble(340, 260, false);
      scene8Bubbles[i] = new scene8Bubble(235, 50);
    } else if(i == 2){
      scene1Exclamations[i] = new scene1Exclamation(440, 80, true);
      scene2Bubbles[i] = new scene2Bubble(280, 240, false);
      scene6Bubbles[i] = new scene6Bubble(470, 90, false);
      scene8Bubbles[i] = new scene8Bubble(325, 210);
    } else if(i == 3){
      scene1Exclamations[i] = new scene1Exclamation(390, 250, false);
      scene2Bubbles[i] = new scene2Bubble(485, 220, true);
      scene8Bubbles[i] = new scene8Bubble(455, 130);
    }
  }
}

function draw() {
  
  switch(currentScene) {
    case 0:
      mainScreen();
      break;
    case 1:
      directions();
      break;
    case 2:
      scene1();
      myLocation.render();
      myCharacter.render();
      myCharacter.move();

      for(let i = 0; i < scene1Exclamations.length; i++){
        scene1Exclamations[i].render();
        scene1Exclamations[i].render_corresponding_rect(i);
        scene1Exclamations[i].key_listener();
        textBoxScene1(i);
      }
      break;
    
    case 3:
      scene2();
        myLocation.render();
        myCharacter.render();
        myCharacter.move();
        for(let i = 0; i < scene2Bubbles.length; i++){
          scene2Bubbles[i].render();
          scene2Bubbles[i].render_corresponding_rect(i);
          scene2Bubbles[i].key_listener();
          textBoxScene2(i);
        }
      break;
      
    case 4:
      scene3();
        myLocation.render();
        myCharacter.render();
        myCharacter.move();
      break;
      
    case 5:
      scene4();
        myLocation.render();
      break;
      
    case 6:
      scene5();
        myLocation.render();
        myCharacter.render();
        myCharacter.move();
        scene5Bubbles.render();
        scene5Bubbles.render_corresponding_rect();
        scene5Bubbles.key_listener();
        textBoxScene5();
      break;
    
    case 7:
      scene6();
        myLocation.render();
        myCharacter.render();
        myCharacter.move();
        for(let i = 0; i < scene6Bubbles.length; i++){
          scene6Bubbles[i].render();
          scene6Bubbles[i].render_corresponding_rect(i);
          scene6Bubbles[i].key_listener();
          textBoxScene6(i);
        }
      break;
      
    case 8:
      scene7();
        myLocation.render();
        myCharacter.render();
        myCharacter.move();
      break;
      
    case 9:
      scene8();
        myLocation.render();
        myCharacter.render();
        myCharacter.move();
        for(let i = 0; i < scene8Bubbles.length; i++){
          scene8Bubbles[i].render();
          scene8Bubbles[i].render_corresponding_rect(i);
          scene8Bubbles[i].key_listener();
          textBoxScene8(i);
        }
      break;
      
    case 10:
      scene9();
        myLocation.render();
        myCharacter.render();
        myCharacter.move();
      break;
  
    case 11:
      scene10();
        myLocation.render();
        myCharacter.render();
        myCharacter.move();
      break;
      
    case 12:
      scene11();
        myLocation.render();
        myCharacter.render();
        myCharacter.move();
      break;
      
    case 13:
      scene12();
        myLocation.render();
        myCharacter.render();
        myCharacter.move();
      break;
  }
}

class Location{
  constructor(){
    this.x = 10; 
    this.y = 24;
  }
  
  render(){
    if(currentScene == 2 || currentScene == 3){
      push();
      textSize(13);
      fill('black');
      text('Current location: Suwon, South Korea', this.x, this.y);
      pop();
    } else if(currentScene == 4){
      push();
      textSize(13);
      fill('black');
      text('Current location: Incheon, South Korea', this.x, this.y);
      pop();
    } else if(currentScene == 5){
      push();
      textSize(13);
      fill('black');
      text('Current location: In Transit', this.x, this.y);
      pop();
    } else if(currentScene == 6){
      push();
      textSize(13);
      fill('black');
      text('Current location: San Francisco, California', this.x, this.y);
      pop();
    } else if(currentScene == 7){
      push();
      textSize(13);
      fill('white');
      text('Current location: Campbell, California', this.x, this.y);
      pop();
    } else if(currentScene == 9){
      if(myCharacter.x >= 220){
        push();
        textSize(13);
        fill('black');
        text('Current location: Campbell, California', this.x, this.y);
        pop();
      } else {
        push();
        textSize(13);
        fill('white');
        text('Current location: Campbell, California', this.x, this.y);
        pop();
      }
    } else if(currentScene == 10){
      if(myCharacter.x <= 300){
        push();
        textSize(13);
        fill('black');
        text('Current location: Time Traveling', this.x, this.y);
        pop();
      } else {
        push();
        textSize(13);
        fill('white');
        text('Current location: Time Traveling', this.x, this.y);
        pop();
      }
    } else if(currentScene == 11 || currentScene == 12 || currentScene == 13){
      push();
      textSize(13);
      fill('white');
      text('Current location: New York, New York', this.x, this.y);
      pop();
    }
  }
}