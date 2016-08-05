/*These are the global variables 
named according to what they affect
They stand in for the position of the
ellipse or so called circle*/
var xPos=10
var xSpeed=5
var yPos=20
var ySpeed=5

/*This function creates the 
environment we are going to work in*/
function setup() {
	createCanvas(400,300);
}

/*All the other operations happen 
in the environment.
It starts from background looks to making 
the spire, ellipse, not move out the 
canvas*/
function draw(){
	//makes the background black since it is 0
	background(0);
	/*draws the ellipse which the positions are
	variables to make them easy to change*/
    ellipse(xPos,yPos,50,50);
	/*The y and x position always change but 
	according to y or xspeed respectively*/
	xPos=xPos+xSpeed;
	yPos=yPos+ySpeed;

	/*In this while loop the direction of the circle
	changes horizontally while it reaches the furthest in the right hand
	side which is the width meaning 400,,, checkout function setup()
	in createCanvas*/
	if(xPos>=width){
		xSpeed=xSpeed *-1;
	}

	/*In this while loop the direction of the circle
	changes horizontally while it reaches the furthest in the left hand
	side which is the width meaning 0,,, checkout function setup()
	in createCanvas*/
	if(xPos<=0){
		xSpeed*=-1;
	}

	/*In this while loop the direction of the circle
	changes vertically while it reaches the furthest in the up
	side which is the height meaning 0,,, checkout function setup()
	in createCanvas*/
	if(yPos<=0){
		ySpeed*=-1;
	}

\	/*In this while loop the direction of the circle
	changes horizontally while it reaches the furthest in the right hand
	side which is the height meaning 300,,, checkout function setup()
	in createCanvas*/
	if (yPos>=height){
		ySpeed*=-1;
	}

}
