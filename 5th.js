var xSpeedBalls=[10,20,12];
var xPosBalls=[10,15,17];
var yPosBalls=[10,30,35];
var ySpeedBalls=[20,25,20];
var bgImage;
var ball;
var someGuy;
function setup(){
	createCanvas(1000,100)
	bgImage=loadImage("abc.jpn")
	ball=loadImage("ball.jpn")
	someGuy=loadImage("guy.png")
}
function draw(){
	background(bgImage);
	image(someGuy,100,100,50,90);
	image(ball,xPosBalls[0],yPosBalls[0]20,20);
	image(ball,xPosBalls[1],yPosBalls[1]20,20);
	image(ball,xPosBalls[2],yPosBalls[2]20,20);
	
	xPosBalls[0]+=xSpeedBalls[0];
	yPosBalls[0]+=ySpeedBalls[0];
	
	xPosBalls[1]+=xSpeedBalls[1];
	yPosBalls[1]+=ySpeedBalls[1];
	
	xPosBalls[2]+=xSpeedBalls[2];
	yPosBalls[2]+=ySpeedBalls[2];
	
	if(xPosBalls[0]>=width||xPosBalls[0<=0){
	xSpeedBalls[0]=xSpeedBalls[0]*-1;
	}
	if(xPosBalls[1]>=width||xPosBalls[1]<=0){
	xSpeedBalls[1]=xSpeedBalls[1]*-1;
	}
	if(xPosBalls[2]>=width||xPosBalls[2]<=0){
	xSpeedBalls[2]=xSpeedBalls[2]*-1;
	}
	if(yPosBalls[0]>=height||yPosBalls[0]<=0){
	ySpeedBalls[0]=ySpeedBalls[0]*-1;
	}
	if(yPosBalls[1]>=height||yPosBalls[1]<=0){
	ySpeedBalls[1]=ySpeedBalls[1]*-1;
	}
	if(yPosBalls[2]>=height||yPosBalls[2]<=0){
	ySpeedBalls[2]=ySpeedBalls[2]*-1;
	}
}	

