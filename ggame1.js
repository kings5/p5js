var bgImage;
var bgImage2;
var streetlight;
var streetlight2;
var streetlightY = 50;
var streetlight2Y = 250;
var movingobject;
var carY= 500;
var carX =100;
var object1;
var object3;
var object3Y=200;
var object1Y=300;
var object5;
var object5Y = 100;
var object2;
var object2Y=400;

function setup(){
     createCanvas(700,600);
     bgImage=loadImage("Road.png");
     bgImage2=loadImage("GAMEOVER.png");
     streetlight=loadImage("streetlight.png");
     streetlight2=loadImage("streetlight2.png");
    movingobject=loadImage("movingobject.png");
    object1=loadImage("object1.png");
    object5=loadImage("obstacle5.png");
   object3=loadImage("obstacle3.png");
   object2=loadImage("obstacle2.png");
  ob=loadImage("ob.png")
}
function draw(){
     background(bgImage);
     image(streetlight,650,streetlightY,40,70);
     image(streetlight2,10,streetlight2Y,40,70);
     image(movingobject,carX,carY,100,150);
     image(object1,50,object1Y,500,500);
     image(object5,400,object5Y,150,150);
     image(object3,80,object3Y,100,100);
     image(object2,470,object2Y,200,200);

   
  streetlightY+=10;
 streetlight2Y+=10;
 object1Y+=5;
 object5Y+=7;
 object3Y+=5;
 object2Y+=7;
 
 
 if (streetlightY > height){
     streetlightY = -10
 }
 if (streetlight2Y > height){
     streetlight2Y = -10
 }
  if (object1Y > height){
     object1Y = -5
 }
  if (object5Y > height){
     object5Y = -5
 }
 if (object3Y > height){
     object3Y = -5
 }
 if (object2Y > height){
     object2Y = -7
 }
 

 if(keyIsDown(RIGHT_ARROW)){
     carX +=5;
 }
  if(keyIsDown(LEFT_ARROW)){
     carX -=5;
 }
 if(keyIsDown(UP_ARROW)){
     carY -=5;
     
 }
 if(keyIsDown(DOWN_ARROW)){
     carY +=5;
 }
 var ob;
 var ob="GAME OVER";
 
 var restrict = get(carX-20, carY-50);
 ellipse(carX+30, carY+40, 4, 4);
 if (restrict[0] == 255 && restrict[1] == 0 && restrict[2]== 0){
   background(bgImage2);
 }
 /*
 var restrict = get(carX - 10, carY - 40);
 console.log(restrict)
 var obj3restrict = get(100, object3Y - 40);
 console.log(obj3restrict);
 if (restrict == obj3restrict) {
   background(bgImage);
 }
 */
     
}
