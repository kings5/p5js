var xSpeed=10;
var xPos=10;
var yPos=10;
var ySpeed=20;
function setup(){
    createCanvas(600,400)
}
function draw(){
    background(20,200,100);
    rect(15,15,20,20);
    ellipse(xPos,yPos,50,50);
    xPos+=xSpeed;
    yPos+=ySpeed;
  if(xPos>=width||xPos<=0){
  xSpeed*=-1;
  }
  if(yPos>=height||yPos<=0){
  ySpeed*=-1;
  }
}
