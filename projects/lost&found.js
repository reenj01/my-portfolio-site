function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(255);
    
  strokeWeight(1);
  fill('pink');
  quad(200, 140, 210, 120, 200, 20, 190, 120);//bottom & counterclock
  
  push();
    translate(400, 280);
    rotate(180);
    quad(200, 140, 210, 120, 200, 20, 190, 120);
  pop();
  
  quad(200, 140, 220, 150, 300, 140, 220, 130);
  
  push();
    translate(400, 280);
    rotate(180);
    quad(200, 140, 220, 150, 300, 140, 220, 130);
  pop();
  
  quad(200, 140, 210, 160, 260, 200, 220, 150);
  
  push();
    translate(400, 280);
    rotate(180);
    quad(200, 140, 210, 160, 260, 200, 220, 150);
  pop();
  
  quad(200, 140, 190, 160, 130, 200, 180, 150);
  
  push();
    translate(400, 280);
    rotate(180);
    quad(200, 140, 190, 160, 130, 200, 180, 150);
  pop();
  
  
  fill('#AC437D');
  triangle(200, 140, 190, 120, 200, 20);
  triangle(200, 140, 210, 160, 200, 250);
  
  triangle(200, 140, 220, 130, 300, 140);
  triangle(200, 140, 180, 150, 100, 140);
  
  triangle(200, 140, 210, 120, 270, 80);
  triangle(200, 140, 220, 150, 260, 200);
  
  triangle(200, 140, 190, 160, 130, 200);
  triangle(200, 140, 180, 130, 140, 80);
  
  strokeWeight(2);
  line(200, 260, 300, 370);
  line(300, 370, 100, 370);
  line(100, 370, 200, 285);
  line(200, 285, 260, 350);
  line(260, 350, 150, 350);
  line(150, 350, 200, 310);
  line(200, 310, 230, 340);
  line(230, 340, 180, 340);
  line(180, 340, 200, 325);
    
  /*I commented my experimentation with blendMode() because it didn't exactly match the description. So, I decided to experiment how different modes of blendMode() can affect my image.
  blendMode(BURN);
    this mode turns the image black and red!
  
  blendMode(OVERLAY);
    this mode removes most of the colors and leaves thin outlines of the           shapes!
  
  blendMode(DARKEST);
    this mode keeps almost all the colors, but seems to make the outline more     pixelated?
  */
}