let xCircle = 120;
let forward = true;
let speed = 1.5;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  strokeWeight(2);
  
  let k = 0;
  
  for(let k = 0; k < 300; k+=2){
    noFill()
    stroke('white');
    circle(xCircle, 300, k*5);
  }
  

  if (forward) {
    xCircle += speed;
  } else {
    xCircle -= speed; 
  }

  if (xCircle == width-120) {
    forward = false;
  }
  
  if (xCircle == 120){
    forward = true;
  }

  
   for(let i = 10; i < mouseX; i += 10){
     push()
     noFill();
     
     if(mouseX <= 200){
       stroke('green');
     } else if(mouseX > 200 && mouseX <= 400){
       stroke('orange');
     } else {
       stroke('blue');
     }
     
     circle(300, 300, i);
      pop()
     
     for(let j = 10; j < mouseY; j += 10){
       push()
       noFill();
       
       if(mouseY <= 200){
         stroke('red');
       } else if(mouseY > 200 && mouseY <= 400){
         stroke('purple');
       } else {
          stroke('yellow');
       }
       
       rectMode(CENTER);
       rect(300, 300, j, j);
       pop()
       
     }
   }
}