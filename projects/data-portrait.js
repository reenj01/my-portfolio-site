let numberPressed = false;
let locationPressed = false;
let appPressed = false;
let keyPressed = true;

function preload() {
  bereal = loadImage('data-portrait-img/bereal.jpg');
  canvas_ = loadImage('data-portrait-img/canvas.jpg');
  chrome = loadImage('data-portrait-img/chrome.jpg');
  email = loadImage('data-portrait-img/email.jpg');
  insta = loadImage('data-portrait-img/insta.jpg');
  kakaotalk = loadImage('data-portrait-img/kakaotalk.jpg');
  maps = loadImage('data-portrait-img/maps.jpg');
  messages = loadImage('data-portrait-img/messages.jpg');
  photos = loadImage('data-portrait-img/photos.jpg');
  spotify = loadImage('data-portrait-img/spotify.jpg');
  weather = loadImage('data-portrait-img/weather.jpg');
  webtoon = loadImage('data-portrait-img/webtoon.jpg');
  youtube = loadImage('data-portrait-img/youtube.jpg');
}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  
  let number_button = createButton('1. number');
  number_button.position(1150, 400);
  number_button.mousePressed(number); 
  
  let location_button = createButton('2. location');
  location_button.position(1250, 400);
  location_button.mousePressed(location_);
  
  let app_button = createButton('3. application');
  app_button.position(1350, 400);
  app_button.mousePressed(app);

}

function draw() {
  background(255);
  createCircle(140, 140, 'T');
  createCircle(300, 90, 'W');
  createCircle(460, 140, 'Th');
  createCircle(500, 300, 'F');
  createCircle(460, 460, 'S');
  createCircle(300, 500, 'U');
  createCircle(140, 460, 'M');
  createCircle(100, 300, 'T');
  
  push();
  textSize(13);
  text('see KEY img for key', 240, 320);
  pop();
  
  //line(300, 0, 300, 600);
  //line(0, 300, 600, 300);
  
  if(numberPressed == true){
    //Tuesday
      //2 inside
      push();
      rotate(17);
      rect(125, 85, 5, 15);
      pop();

      push();
      rotate(17);
      rect(132, 85, 5, 15);
      pop();

      //4 inside
      push();
      translate(202, -33);
      rotate(80);
      rect(110, 85, 5, 15);
      pop();

      push();
      translate(203, -26);
      rotate(80);
      rect(110, 85, 5, 15);
      pop();

      push();
      translate(204, -19);
      rotate(80);
      rect(110, 85, 5, 15);
      pop();

      push();
      translate(205, -12);
      rotate(80);
      rect(110, 85, 5, 15);
      pop();

      //1 outside
      push();
      translate(-85, 112);
      rotate(-40)
      rect(100, 160, 5, 15);
      pop();

      //1 outside
      push();
      translate(-69, 228);
      rotate(-70)
      rect(100, 160, 5, 15);
      pop();
    //
    
    //Wednesday
      //1 inside
      push();
      translate(225, -255);
      rotate(70);
      rect(300, 40, 5, 15);
      pop();
      
      //3 inside
      push();
      translate(32, -80)
      rotate(20);
      rect(260, 60, 5, 15);
      pop();
    
      push();
      translate(39, -77)
      rotate(20);
      rect(260, 60, 5, 15);
      pop();
    
      push();
      translate(46, -74)
      rotate(20);
      rect(260, 60, 5, 15);
      pop();
    
      //5 outside
      push();
      translate(133, -160);
      rotate(45);
      rect(240, 50, 5, 15);
      pop();
    
      push();
      translate(128, -165);
      rotate(45);
      rect(240, 50, 5, 15);
      pop();
    
      push();
      translate(123, -170);
      rotate(45);
      rect(240, 50, 5, 15);
      pop();
    
      push();
      translate(118, -175);
      rotate(45);
      rect(240, 50, 5, 15);
      pop();
    
      push();
      translate(113, -180);
      rotate(45);
      rect(240, 50, 5, 15);
      pop();
    
      //10 outside
      push();
      translate(18, 252);
      rotate(-55);
      rect(240, 130, 5, 15);
      pop();
    
      push();
      translate(14, 258);
      rotate(-55);
      rect(240, 130, 5, 15);
      pop();
    
      push();
      translate(10, 264);
      rotate(-55);
      rect(240, 130, 5, 15);
      pop();
    
      push();
      translate(6, 270);
      rotate(-55);
      rect(240, 130, 5, 15);
      pop();
    
      push();
      translate(2, 276);
      rotate(-55);
      rect(240, 130, 5, 15);
      pop();
    
      push();
      translate(-2, 282);
      rotate(-55);
      rect(240, 130, 5, 15);
      pop();
    
      push();
      translate(-6, 288);
      rotate(-55);
      rect(240, 130, 5, 15);
      pop();
    
      push();
      translate(-10, 294);
      rotate(-55);
      rect(240, 130, 5, 15);
      pop();
    
      push();
      translate(-14, 300);
      rotate(-55);
      rect(240, 130, 5, 15);
      pop();
    
      push();
      translate(-18, 306);
      rotate(-55);
      rect(240, 130, 5, 15);
      pop();
    //
    
    //Thursday
      //4 inside
      push();
      translate(68, -127);
      rotate(20)
      rect(410, 110, 5, 15);
      pop();
    
      push();
      translate(75, -124);
      rotate(20)
      rect(410, 110, 5, 15);
      pop();
    
      push();
      translate(82, -121);
      rotate(20)
      rect(410, 110, 5, 15);
      pop();
    
      push();
      translate(89, -118);
      rotate(20)
      rect(410, 110, 5, 15);
      pop();
      
      //5 outside
      push();
      translate(200, -257);
      rotate(45)
      rect(410, 90, 5, 15);
      pop();
    
      push();
      translate(195, -262);
      rotate(45)
      rect(410, 90, 5, 15);
      pop();
    
      push();
      translate(190, -267);
      rotate(45)
      rect(410, 90, 5, 15);
      pop();
    
      push();
      translate(185, -272);
      rotate(45)
      rect(410, 90, 5, 15);
      pop();
    
      push();
      translate(180, -277);
      rotate(45)
      rect(410, 90, 5, 15);
      pop();
      
      //3 orange outside
      push();
      translate(495, -373);
      rotate(83);
      rect(450, 90, 5, 15);
      pop();
    
      push();
      translate(494, -380);
      rotate(83);
      rect(450, 90, 5, 15);
      pop();
    
      push();
      translate(493, -387);
      rotate(83);
      rect(450, 90, 5, 15);
      pop();
    
      //1 orange outside
      push();
      translate(17, 273);
      rotate(-30);
      rect(500, 100, 5, 15);
      pop();
    
      //1 blue outside
      push();
      translate(35, -45);
      rotate(10);
      rect(500, 100, 5, 15);
      pop();
    
      //6 purple outside
      push();
      translate(8, 354);
      rotate(-50);
      rect(400, 200, 5, 15);
      pop();
    
      push();
      translate(3.5, 360);
      rotate(-50);
      rect(400, 200, 5, 15);
      pop();
    
      push();
      translate(-1, 366);
      rotate(-50);
      rect(400, 200, 5, 15);
      pop();
    
      push();
      translate(-5.5, 372);
      rotate(-50);
      rect(400, 200, 5, 15);
      pop();
    
      push();
      translate(-10, 378);
      rotate(-50);
      rect(400, 200, 5, 15);
      pop();
    
      push();
      translate(-14.5, 384);
      rotate(-50);
      rect(400, 200, 5, 15);
      pop();
    //
    
    //Friday
      //4 red inside
      push();
      translate(606, -297);
      rotate(75);
      rect(500, 250, 5, 15);
      pop();
    
      push();
      translate(608, -290);
      rotate(75);
      rect(500, 250, 5, 15);
      pop();
    
      push();
      translate(610, -283);
      rotate(75);
      rect(500, 250, 5, 15);
      pop();
    
      push();
      translate(612, -276);
      rotate(75);
      rect(500, 250, 5, 15);
      pop();
    
      //9 pink outside
      push();
      translate(24, -48);
      rotate(5)
      rect(450, 300, 5, 15);
      pop();
    
      push();
      translate(16.5, -48.5);
      rotate(5)
      rect(450, 300, 5, 15);
      pop();
    
      push();
      translate(8.5, -49);
      rotate(5)
      rect(450, 300, 5, 15);
      pop();
    
      push();
      translate(0.5, -49.5);
      rotate(5)
      rect(450, 300, 5, 15);
      pop();
    
      push();
      translate(-7.5, -50);
      rotate(5)
      rect(450, 300, 5, 15);
      pop();
    
      push();
      translate(-16, -50.5);
      rotate(5)
      rect(450, 300, 5, 15);
      pop();
    
      push();
      translate(-24, -51);
      rotate(5)
      rect(450, 300, 5, 15);
      pop();
    
      push();
      translate(-32, -51.5);
      rotate(5)
      rect(450, 300, 5, 15);
      pop();
    
      push();
      translate(-40, -52);
      rotate(5)
      rect(450, 300, 5, 15);
      pop();
    
      //5 blue outside
      push();
      translate(202, -193);
      rotate(30);
      rect(450, 270, 5, 15);
      pop();
    
      push();
      translate(196, -197);
      rotate(30);
      rect(450, 270, 5, 15);
      pop();
    
      push();
      translate(190, -201);
      rotate(30);
      rect(450, 270, 5, 15);
      pop();
      
      push();
      translate(184, -205);
      rotate(30);
      rect(450, 270, 5, 15);
      pop();
    
      push();
      translate(178, -209);
      rotate(30);
      rect(450, 270, 5, 15);
      pop();
    
      //3 orange outside
      push();
      translate(769, -255)
      rotate(90);
      rect(500, 260, 5, 15);
      pop();
      
      push();
      translate(769, -262)
      rotate(90);
      rect(500, 260, 5, 15);
      pop();
      
      push();
      translate(769, -269)
      rotate(90);
      rect(500, 260, 5, 15);
      pop();
    
      //3 pink outside
      push();  
      translate(576, -264);
      rotate(60)
      rect(500, 340, 5, 15);
      pop();
      
      push();  
      translate(580, -257);
      rotate(60)
      rect(500, 340, 5, 15);
      pop();
      
      push();  
      translate(584, -250);
      rotate(60)
      rect(500, 340, 5, 15);
      pop();
    //
    
    //Saturday
      //1 blue inside
      push();
      translate(299, -160);
      rotate(30);
      rect(400, 450, 5, 15);
      pop();
      
      //1 lightgreen outside
      push();
      translate(-20, 782);
      rotate(-80);
      rect(450, 410, 5, 15);
      pop();
    
      //1 green outside
      push();
      translate(298, -160);
      rotate(30);
      rect(500, 450, 5, 15);
      pop();
    //
    
    //Sunday
      //5 pink inside
      push();
      translate(610, 15);
      rotate(70)
      rect(300, 450, 5, 15);
      pop();
      
      push();
      translate(613, 22);
      rotate(70)
      rect(300, 450, 5, 15);
      pop();
    
      push();
      translate(616, 29);
      rotate(70)
      rect(300, 450, 5, 15);
      pop();
    
      push();
      translate(619, 36);
      rotate(70)
      rect(300, 450, 5, 15);
      pop();
    
      push();
      translate(622, 43);
      rotate(70)
      rect(300, 450, 5, 15);
      pop();
    
      //3 blue outside
      push();
      translate(-190, 253);
      rotate(-30);
      rect(350, 450, 5, 15);
      pop();
      
      push();
      translate(-183, 249);
      rotate(-30);
      rect(350, 450, 5, 15);
      pop();
      
      push();
      translate(-176, 245);
      rotate(-30);
      rect(350, 450, 5, 15);
      pop();
    
      //1 purple outside
      push();
      translate(346, -90);
      rotate(35)
      rect(350, 500, 5, 15);
      pop();
    //
    
    //Monday
      //4 red inside
      push();
      translate(264, -55)
      rotate(30);
      rect(100, 500, 5, 15);
      pop();
    
      push();
      translate(271, -51)
      rotate(30);
      rect(100, 500, 5, 15);
      pop();
    
      push();
      translate(278, -47)
      rotate(30);
      rect(100, 500, 5, 15);
      pop();
      
      push();
      translate(285, -43)
      rotate(30);
      rect(100, 500, 5, 15);
      pop();
      
      //3 red inside
      push();
      translate(520, 211);
      rotate(80)
      rect(130, 410, 5, 15);
      pop();
    
      push();
      translate(521, 219);
      rotate(80)
      rect(130, 410, 5, 15);
      pop();
      
      push();
      translate(522, 227);
      rotate(80)
      rect(130, 410, 5, 15);
      pop();
    
      //1 blue outside
      push();
      translate(617, 406);
      rotate(110)
      rect(160, 420, 5, 15);
      pop();
    
      //2 red outside
      push();
      translate(-382, 320);
      rotate(-55)
      rect(130, 500, 5, 15);
      pop();
    
      push();
      translate(-387, 327);
      rotate(-55)
      rect(130, 500, 5, 15);
      pop();
    //
    
    //Tuesday
      //1 red inside
      push();
      translate(104, -3);
      rotate(20);
      rect(50, 280, 5, 15);
      pop();
    
      //1 blue outside
      push();
      translate(-148, 215);
      rotate(-60);
      rect(100, 250, 5, 15);
      pop();
  }

  if(locationPressed == true){
    //Tuesday
      //2 blue inside
      push();
      fill('blue');
      rotate(17);
      rect(125, 85, 5, 15);
      pop();

      push();
      fill('blue');
      rotate(17);
      rect(132, 85, 5, 15);
      pop();

      //4 red inside
      push();
      fill('red');
      translate(202, -33);
      rotate(80);
      rect(110, 85, 5, 15);
      pop();

      push();
      fill('red');
      translate(203, -26);
      rotate(80);
      rect(110, 85, 5, 15);
      pop();

      push();
      fill('red');
      translate(204, -19);
      rotate(80);
      rect(110, 85, 5, 15);
      pop();

      push();
      fill('red');
      translate(205, -12);
      rotate(80);
      rect(110, 85, 5, 15);
      pop();

      //1 green outside
      push();
      fill('green');
      translate(-85, 112);
      rotate(-40)
      rect(100, 160, 5, 15);
      pop();

      //1 navy outside
      push();
      fill('navy');
      translate(-69, 228);
      rotate(-70)
      rect(100, 160, 5, 15);
      pop();
    //
    
    //Wednesday
      //1 blue inside
      push();
      fill('blue');
      translate(225, -255);
      rotate(70);
      rect(300, 40, 5, 15);
      pop();
      
      //3 red inside
      push();
      fill('red');
      translate(32, -80)
      rotate(20);
      rect(260, 60, 5, 15);
      pop();
    
      push();
      fill('red');
      translate(39, -77)
      rotate(20);
      rect(260, 60, 5, 15);
      pop();
    
      push();
      fill('red');
      translate(46, -74)
      rotate(20);
      rect(260, 60, 5, 15);
      pop();
    
      //5 navy outside
      push();
      fill('navy');
      translate(133, -160);
      rotate(45);
      rect(240, 50, 5, 15);
      pop();
    
      push();
      fill('navy');
      translate(128, -165);
      rotate(45);
      rect(240, 50, 5, 15);
      pop();
    
      push();
      fill('navy');
      translate(123, -170);
      rotate(45);
      rect(240, 50, 5, 15);
      pop();
    
      push();
      fill('navy');
      translate(118, -175);
      rotate(45);
      rect(240, 50, 5, 15);
      pop();
    
      push();
      fill('navy');
      translate(113, -180);
      rotate(45);
      rect(240, 50, 5, 15);
      pop();
    
      //10 light blue outside
      push();
      fill('lightblue');
      translate(18, 252);
      rotate(-55);
      rect(240, 130, 5, 15);
      pop();
    
      push();
      fill('lightblue');
      translate(14, 258);
      rotate(-55);
      rect(240, 130, 5, 15);
      pop();
    
      push();
      fill('lightblue');
      translate(10, 264);
      rotate(-55);
      rect(240, 130, 5, 15);
      pop();
    
      push();
      fill('lightblue');
      translate(6, 270);
      rotate(-55);
      rect(240, 130, 5, 15);
      pop();
    
      push();
      fill('lightblue');
      translate(2, 276);
      rotate(-55);
      rect(240, 130, 5, 15);
      pop();
    
      push();
      fill('lightblue');
      translate(-2, 282);
      rotate(-55);
      rect(240, 130, 5, 15);
      pop();
    
      push();
      fill('lightblue');
      translate(-6, 288);
      rotate(-55);
      rect(240, 130, 5, 15);
      pop();
    
      push();
      fill('lightblue');
      translate(-10, 294);
      rotate(-55);
      rect(240, 130, 5, 15);
      pop();
    
      push();
      fill('lightblue');
      translate(-14, 300);
      rotate(-55);
      rect(240, 130, 5, 15);
      pop();
    
      push();
      fill('lightblue');
      translate(-18, 306);
      rotate(-55);
      rect(240, 130, 5, 15);
      pop();
    //
    
    //Thursday
      //4 red inside
      push();
      fill('red');
      translate(68, -127);
      rotate(20)
      rect(410, 110, 5, 15);
      pop();
    
      push();
      fill('red');
      translate(75, -124);
      rotate(20)
      rect(410, 110, 5, 15);
      pop();
    
      push();
      fill('red');
      translate(82, -121);
      rotate(20)
      rect(410, 110, 5, 15);
      pop();
    
      push();
      fill('red');
      translate(89, -118);
      rotate(20)
      rect(410, 110, 5, 15);
      pop();
      
      //5 navy outside
      push();
      fill('navy');
      translate(200, -257);
      rotate(45)
      rect(410, 90, 5, 15);
      pop();
    
      push();
      fill('navy');
      translate(195, -262);
      rotate(45)
      rect(410, 90, 5, 15);
      pop();
    
      push();
      fill('navy');
      translate(190, -267);
      rotate(45)
      rect(410, 90, 5, 15);
      pop();
    
      push();
      fill('navy');
      translate(185, -272);
      rotate(45)
      rect(410, 90, 5, 15);
      pop();
    
      push();
      fill('navy');
      translate(180, -277);
      rotate(45)
      rect(410, 90, 5, 15);
      pop();
      
      //3 orange outside
      push();
      fill('orange');
      translate(495, -373);
      rotate(83);
      rect(450, 90, 5, 15);
      pop();
    
      push();
      fill('orange');
      translate(494, -380);
      rotate(83);
      rect(450, 90, 5, 15);
      pop();
    
      push();
      fill('orange');
      translate(493, -387);
      rotate(83);
      rect(450, 90, 5, 15);
      pop();
    
      //1 orange outside
      push();
      fill('orange');
      translate(17, 273);
      rotate(-30);
      rect(500, 100, 5, 15);
      pop();
    
      //1 blue outside
      push();
      fill('blue');
      translate(35, -45);
      rotate(10);
      rect(500, 100, 5, 15);
      pop();
    
      //6 purple outside
      push();
      fill('purple');
      translate(8, 354);
      rotate(-50);
      rect(400, 200, 5, 15);
      pop();
    
      push();
      fill('purple');
      translate(3.5, 360);
      rotate(-50);
      rect(400, 200, 5, 15);
      pop();
    
      push();
      fill('purple');
      translate(-1, 366);
      rotate(-50);
      rect(400, 200, 5, 15);
      pop();
    
      push();
      fill('purple');
      translate(-5.5, 372);
      rotate(-50);
      rect(400, 200, 5, 15);
      pop();
    
      push();
      fill('purple');
      translate(-10, 378);
      rotate(-50);
      rect(400, 200, 5, 15);
      pop();
    
      push();
      fill('purple');
      translate(-14.5, 384);
      rotate(-50);
      rect(400, 200, 5, 15);
      pop();
    //
    
    //Friday
      //4 red inside
      push();
      fill('red');
      translate(606, -297);
      rotate(75);
      rect(500, 250, 5, 15);
      pop();
    
      push();
      fill('red');
      translate(608, -290);
      rotate(75);
      rect(500, 250, 5, 15);
      pop();
    
      push();
      fill('red');
      translate(610, -283);
      rotate(75);
      rect(500, 250, 5, 15);
      pop();
    
      push();
      fill('red');
      translate(612, -276);
      rotate(75);
      rect(500, 250, 5, 15);
      pop();
    
      //9 pink outside
      push();
      fill('pink');
      translate(24, -48);
      rotate(5)
      rect(450, 300, 5, 15);
      pop();
    
      push();
      fill('pink');
      translate(16.5, -48.5);
      rotate(5)
      rect(450, 300, 5, 15);
      pop();
    
      push();
      fill('pink');
      translate(8.5, -49);
      rotate(5)
      rect(450, 300, 5, 15);
      pop();
    
      push();
      fill('pink');
      translate(0.5, -49.5);
      rotate(5)
      rect(450, 300, 5, 15);
      pop();
    
      push();
      fill('pink');
      translate(-7.5, -50);
      rotate(5)
      rect(450, 300, 5, 15);
      pop();
    
      push();
      fill('pink');
      translate(-16, -50.5);
      rotate(5)
      rect(450, 300, 5, 15);
      pop();
    
      push();
      fill('pink');
      translate(-24, -51);
      rotate(5)
      rect(450, 300, 5, 15);
      pop();
    
      push();
      fill('pink');
      translate(-32, -51.5);
      rotate(5)
      rect(450, 300, 5, 15);
      pop();
    
      push();
      fill('pink');
      translate(-40, -52);
      rotate(5)
      rect(450, 300, 5, 15);
      pop();
    
      //5 navy outside
      push();
      fill('navy');
      translate(202, -193);
      rotate(30);
      rect(450, 270, 5, 15);
      pop();
    
      push();
      fill('navy');
      translate(196, -197);
      rotate(30);
      rect(450, 270, 5, 15);
      pop();
    
      push();
      fill('navy');
      translate(190, -201);
      rotate(30);
      rect(450, 270, 5, 15);
      pop();
      
      push();
      fill('navy');
      translate(184, -205);
      rotate(30);
      rect(450, 270, 5, 15);
      pop();
    
      push();
      fill('navy');
      translate(178, -209);
      rotate(30);
      rect(450, 270, 5, 15);
      pop();
    
      //3 orange outside
      push();
      fill('orange');
      translate(769, -255)
      rotate(90);
      rect(500, 260, 5, 15);
      pop();
      
      push();
      fill('orange');
      translate(769, -262)
      rotate(90);
      rect(500, 260, 5, 15);
      pop();
      
      push();
      fill('orange');
      translate(769, -269)
      rotate(90);
      rect(500, 260, 5, 15);
      pop();
    
      //3 pink outside
      push();
      fill('pink');
      translate(576, -264);
      rotate(60)
      rect(500, 340, 5, 15);
      pop();
      
      push();  
      fill('pink');
      translate(580, -257);
      rotate(60)
      rect(500, 340, 5, 15);
      pop();
      
      push();  
      fill('pink');
      translate(584, -250);
      rotate(60)
      rect(500, 340, 5, 15);
      pop();
    //
    
    //Saturday
      //1 blue inside
      push();
      fill('blue');
      translate(299, -160);
      rotate(30);
      rect(400, 450, 5, 15);
      pop();
      
      //1 lightgreen outside
      push();
      fill('lightgreen')
      translate(-20, 782);
      rotate(-80);
      rect(450, 410, 5, 15);
      pop();
    
      //1 green outside
      push();
      fill('green');
      translate(298, -160);
      rotate(30);
      rect(500, 450, 5, 15);
      pop();
    //
    
    //Sunday
      //5 pink inside
      push();
      fill('pink');
      translate(610, 15);
      rotate(70)
      rect(300, 450, 5, 15);
      pop();
      
      push();
      fill('pink');
      translate(613, 22);
      rotate(70)
      rect(300, 450, 5, 15);
      pop();
    
      push();
      fill('pink');
      translate(616, 29);
      rotate(70)
      rect(300, 450, 5, 15);
      pop();
    
      push();
      fill('pink');
      translate(619, 36);
      rotate(70)
      rect(300, 450, 5, 15);
      pop();
    
      push();
      fill('pink');
      translate(622, 43);
      rotate(70)
      rect(300, 450, 5, 15);
      pop();
    
      //3 navy outside
      push();
      fill('navy');
      translate(-190, 253);
      rotate(-30);
      rect(350, 450, 5, 15);
      pop();
      
      push();
      fill('navy');
      translate(-183, 249);
      rotate(-30);
      rect(350, 450, 5, 15);
      pop();
      
      push();
      fill('navy');
      translate(-176, 245);
      rotate(-30);
      rect(350, 450, 5, 15);
      pop();
    
      //1 purple outside
      push();
      fill('purple');
      translate(346, -90);
      rotate(35)
      rect(350, 500, 5, 15);
      pop();
    //
    
    //Monday
      //4 red inside
      push();
      fill('red');
      translate(264, -55)
      rotate(30);
      rect(100, 500, 5, 15);
      pop();
    
      push();
      fill('red');
      translate(271, -51)
      rotate(30);
      rect(100, 500, 5, 15);
      pop();
    
      push();
      fill('red');
      translate(278, -47)
      rotate(30);
      rect(100, 500, 5, 15);
      pop();
      
      push();
      fill('red');
      translate(285, -43)
      rotate(30);
      rect(100, 500, 5, 15);
      pop();
      
      //3 red inside
      push();
      fill('red');
      translate(520, 211);
      rotate(80)
      rect(130, 410, 5, 15);
      pop();
    
      push();
      fill('red');
      translate(521, 219);
      rotate(80)
      rect(130, 410, 5, 15);
      pop();
      
      push();
      fill('red');
      translate(522, 227);
      rotate(80)
      rect(130, 410, 5, 15);
      pop();
    
      //1 blue outside
      push();
      fill('blue');
      translate(617, 406);
      rotate(110)
      rect(160, 420, 5, 15);
      pop();
    
      //2 red outside
      push();
      fill('red');
      translate(-382, 320);
      rotate(-55)
      rect(130, 500, 5, 15);
      pop();
    
      push();
      fill('red');
      translate(-387, 327);
      rotate(-55)
      rect(130, 500, 5, 15);
      pop();
    //
    
    //Tuesday
      //1 red inside
      push();
      fill('red');
      translate(104, -3);
      rotate(20);
      rect(50, 280, 5, 15);
      pop();
    
      //1 blue outside
      push();
      fill('blue');
      translate(-148, 215);
      rotate(-60);
      rect(100, 250, 5, 15);
      pop();
}
  
  if(appPressed == true){
    //tuesday
    image(spotify, 75, 115, 15, 15);
    image(email, 60, 112, 15, 15);
    
    image(spotify, 121, 72, 15, 15);
    image(messages, 120, 55, 15, 15);
    image(weather, 119, 40, 15, 15);
    
    image(bereal, 104, 159, 15, 15);
    image(insta, 115, 148, 15, 15);
    
    image(insta, 120, 170, 15, 15);
    image(messages, 129, 155, 15, 15);
    
    //wednesday
    image(spotify, 235, 62, 15, 15);
    image(photos, 219, 57, 15, 15);
    
    image(insta, 266, 53, 15, 15);
    image(bereal, 277, 60, 15, 15);
    image(canvas_, 289, 69, 15, 15);
    
    image(messages, 273, 25, 15, 15);
    
    image(spotify, 269, 113, 15, 15);
    image(webtoon, 276, 100, 15, 15);
    image(maps, 284, 87, 15, 15);
    
    //thursday
    image(spotify, 396, 112, 15, 15);
    image(kakaotalk, 385, 108, 15, 15);
    image(insta, 370, 105, 15, 15);
    
    image(insta, 425, 105, 15, 15);
    image(bereal, 435, 110, 15, 15);
    image(weather, 447, 118, 15, 15);
    
    image(youtube, 448, 95, 15, 15);
    image(messages, 449, 109, 15, 15);
    
    image(insta, 486, 114, 15, 15);
    image(webtoon, 472, 119, 15, 15);
    
    image(spotify, 490, 138, 15, 15);
    image(photos, 473, 136, 15, 15);
    
    image(insta, 425, 162, 15, 15);
    image(canvas_, 430, 150, 15, 15);
    image(weather, 442, 135, 15, 15);
    image(photos, 446, 130, 15, 15);
    
    //friday
    image(insta, 452, 292, 15, 15);
    image(chrome, 465, 293, 15, 15);
    image(messages, 478, 294, 15, 15);
    
    image(weather, 457, 273, 15, 15);
    image(insta, 468, 278, 15, 15);
    image(bereal, 480, 284, 15, 15);
    
    image(spotify, 474, 233, 15, 15);
    image(photos, 472, 217, 15, 15);
    image(insta, 470, 200, 15, 15);
    
    image(youtube, 498, 252, 15, 15);
    
    image(insta, 513, 325, 15, 15);
    image(youtube, 506, 312, 15, 15);
    image(messages, 497, 300, 15, 15);
    
    //saturday
    image(spotify, 400, 423, 15, 15);
    image(maps, 386, 418, 15, 15);
    
    image(canvas_, 458, 415, 15, 15);
    image(email, 456, 428, 15, 15);
    
    image(messages, 486, 474, 15, 15);
    image(email, 474, 468, 15, 15);
    image(photos, 462, 462, 15, 15);
    image(weather, 450, 456, 15, 15);
    image(canvas_, 438, 450, 15, 15);
    
    //sunday
    image(kakaotalk, 273, 436, 15, 15);
    image(insta, 269, 421, 15, 15);
    image(weather, 265, 405, 15, 15);
    
    image(messages, 325, 470, 15, 15);
    
    image(messages, 326, 514, 15, 15);
    image(email, 313, 507, 15, 15);
    image(photos, 302, 495, 15, 15);
    image(weather, 293, 486, 15, 15);
    
    //monday
    image(spotify, 80, 423, 15, 15);
    image(kakaotalk, 67, 415, 15, 15);
    image(email, 53, 409, 15, 15);
    
    image(spotify, 122, 393, 15, 15);
    image(maps, 121, 377, 15, 15);
    
    image(photos, 147, 418, 15, 15);
    
    image(photos, 109, 484, 15, 15);
    image(spotify, 116, 470, 15, 15);
    image(insta, 123, 458, 15, 15);
    
    //tuesday
    image(spotify, 34, 272, 15, 15);
    
    image(email, 113, 260, 15, 15);
  }
}

function createCircle(xpos, ypos, word) {
  push();
  noFill();
  circle(xpos, ypos, 100);
  pop();
  
  textSize(8);
  text(word, xpos-5, ypos+5);
}

function number() {
  numberPressed = !numberPressed;
}

function location_() {
  locationPressed = !locationPressed;
}

function app() {
  appPressed = !appPressed;
}

function key_() {
  keyPressed = !keyPressed;
}