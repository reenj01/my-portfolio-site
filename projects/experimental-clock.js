//Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=95792">Pixabay</a>

let sound;
let inputNum;
let enteredCount = 0;
let countText = '';
let currentCount = 0;
let time = 0;
let count = 0;
let topR = 70;
let topG = 78;
let topB = 130;
let rightR = 153;
let rightG = 160;
let rightB = 208;
let leftR = 0;
let leftG = 0;
let leftB = 0;

function setup() {
  createCanvas(600, 600);
  sound = loadSound('alarmSound.mp3');
  
  inputNum = createInput();
  inputNum.position(1300, 215);
  inputNum.size(60, 30);
  
  let button = createButton('enter');
  button.position(1400, 215);
  button.size(50, 36);
  button.style('background', '#f8ebff');
  enteredCount = inputNum.value();
  
  button.mousePressed(storeInput);
  inputNum.changed(storeInput);
  
  countText = createElement('h4', 'Your selected count: ');
  countText.position(1100, 240);
    
}

function draw() {
  background('#f8ebff');
  text('Enter a number between 1 and 10', 100, 70);

  //time bar
  noStroke()
  rect(100, 500, 400, 40)
  
  if(enteredCount != 0){
    startTimer();
  }
  
  push()
  fill(topR, topG, topB);
  quad(200, 240, 300, 190, 400, 240, 300, 290);
  pop()

  push()
  fill(rightR, rightG, rightB);
  quad(200, 240, 300, 290, 300, 430, 205, 365);
  pop()

  push()
  fill(leftR, leftG, leftB);
  quad(300, 290, 400, 240, 400, 370, 300, 430);
  pop()

  
}

function startTimer(){
  let s = second();
  console.log('currentCount: ' + currentCount)
  console.log('enteredCount: ' + enteredCount)
  
  if(currentCount == enteredCount){
    endScreen()
  }
  
  time += 0.223;
  if(time > 400){
    time = 0;
    currentCount++;
    topR = random(255);
    topG = random(255);
    topB = random(255);
    rightR = random(255);
    rightG = random(255);
    rightB = random(255);
    leftR = random(255);
    leftG = random(255);
    leftB = random(255);
  }
      
  //timer  
  if(time <= 400){
    push()
    fill('#464e82')
    rect(100, 500, time, 40)
    pop()
  }
}

function storeInput(){
  enteredCount = inputNum.value();
  inputNum.value('');
  countText.html(`Your selected count: ${enteredCount}`);
}

function endScreen(){
  background('black')
  sound.play()
  noLoop();
  fill('black')
  rect(0, 0, 600, 600)
  
  push()
  fill('white')
  textAlign(CENTER)
  textSize(50)
  text('End of Alarm!', 300, 160)
  pop()
  
  push()
  fill('white')
  textAlign(CENTER)
  textSize(15)
  text('Please press "reset" to set a new timer', 300, 500)
  pop()
}