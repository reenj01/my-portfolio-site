let scene1Exclamations = [];

function scene1(){
  background(grass);
  startButton.hide();
  resetButton.hide();
  nextButton.hide();
  image(path, 0, 160);

  image(pojangmatcha, 40, 0, 200, 190);
  image(bunsik, 140, 230, 210, 200);
  image(apt, 290, 10, 170, 160);
  image(kyungpalace, 400, 240, 180, 170);
}

class scene1Exclamation {
  constructor(x, y, above){
    this.x = x;
    this.y = y;
    this.w = 50;
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
        rect(60, 60, 480, 290);
        pop();
        
        push();
        fill('red');
        textAlign(CENTER,CENTER);
        text("press 'x' to close", width/2, 330);
        pop();
        
        push();
        fill('black');
        textAlign(CENTER,CENTER);
        text("'Pojangmacha 포장마차'", width/2, 120);
        text("Also abbreviated as pocha (포차), the direction translation means 'covered-wagaon'", width/2, 160);
        text("It's an outdoor cart restaurant that sells street food like odeng 오댕 (fishcake skewer), ddukbokki (spicy rice cake) 떡볶이, and gimbap 김밥 (korean seaweed rice roll).", width/2-250, 185, 500);
        text("This is my favorite place to go with my friends for an afterschool snack!", width/2, 230);
        text("Sitting down on the blue plastic stools and taking a bite out of the freshly made food always make me so happy.", width/2-210, 255, 410);
        pop();
      } else if(i==1){
        push();
        let c = color('white');
        c.setAlpha(240);
        fill(c);
        rect(60, 60, 480, 290);
        pop();
        
        push();
        fill('red');
        textAlign(CENTER,CENTER);
        text("press 'x' to close", width/2, 330);
        pop();
        
        push();
        fill('black');
        textAlign(CENTER,CENTER);
        text("'Bunsik 분식'", width/2, 130);
        text("Bunsik is a category of fast, convenient Korean street food that has a wide variety of choices. They are mostly found in the pojangmachas and are good late night snack options.", width/2-220, 190, 430);
        text("There is that one bunsik store right next our house that I go to everyday after my art lesson. I've probably been there a hundred times!", width/2-220, 240, 430);
        pop();
        
      } else if(i==2){
        push();
        let c = color('white');
        c.setAlpha(240);
        fill(c);
        rect(60, 60, 480, 290);
        pop();
        
        push();
        fill('red');
        textAlign(CENTER,CENTER);
        text("press 'x' to close", width/2, 330);
        pop();
        
        push();
        fill('black');
        textAlign(CENTER,CENTER);
        text("'APT 아파트'", width/2, 130);
        text("Pronounced as ah-pa-teu, as a Korean, I would say this is one of the biggest symbols that represent Korea,  because it is everywhere. Unlike the US, apt in Korea symbolize success and wealth, so everyone has the unversal goal of affording and moving into an apt in their adulthood.", width/2-220, 180, 430);
        text("Inside the apt I live in, I love running around the living room chasing and playing with my dog Toto. Cuddling him is my favorite past time activity!", width/2-220, 250, 430);
        pop();
      } else if(i==3){
        push();
        let c = color('white');
        c.setAlpha(240);
        fill(c);
        rect(60, 60, 480, 290);
        pop();
        
        push();
        fill('red');
        textAlign(CENTER,CENTER);
        text("press 'x' to close", width/2, 330);
        pop();
        
        push();
        fill('black');
        textAlign(CENTER,CENTER);
        text("'Gyeongbokgung Palace 경복궁'", width/2, 150);
        text("Built in 1395 during the Josan dynasty, the Gyeongbokgung Palace is one of the five largest Grand Palaces in Korea. I really love the design of the Korean traditional tile roofs kiwa 기와. This palace is built with the same tile roofs in blue green and red colors and have intrique Korean traditional patterns. Korean traditional buildings and architectures always make in awe of its beauty.", width/2-220, 220, 430);
        pop();
      }
    }
  }
  
  key_listener(){
    if(this.visible){
       //listens for key presses and turns on or off the text rect
      if(keyIsPressed == true && keyCode == '69' ){
        this.corresponding_rect_visible = true;
      }
      else if (keyIsPressed == true && keyCode == '88'){
        this.corresponding_rect_visible = false;
        this.visible = false;
      }
    }
  }
}

function textBoxScene1(i){
  if(scene1Exclamations[i].above == true){
    char_bubble_d = dist(scene1Exclamations[i].x - 40,scene1Exclamations[i].y+30, myCharacter.x, myCharacter.y)
  } else {
    char_bubble_d = dist(scene1Exclamations[i].x + 40,scene1Exclamations[i].y-30, myCharacter.x, myCharacter.y)
  }
        
  if(char_bubble_d<50){
     scene1Exclamations[i].visible = true
  }
  else{
     scene1Exclamations[i].visible =false
  }
}