// Describe la estructura y los movimientos
class Brick{
	constructor(bc, y){
	  this.brickColor = bc;
	  this.yPos = y;
	  this.xPos = 0;
	}
  
	// Crea los ladrillos
	createBrick(){
	  fill(this.brickColor);
	  rect(this.xPos, this.yPos, 150, 50);
	  noStroke() 
	}
  
	// Establece la velocidad de los ladrillos a 0.5
	setSpeed(){
	  this.xSpeed = 0.8;
	}
  
	// Los ladrillos se mueven por el lienzo
	moveBrick(){
	  this.xPos+=this.xSpeed;
	  if(this.xPos+100 >= width || this.xPos <= 0){
		this.xSpeed*=-1;
	  }
	}
  }
  
  function setup() {
	createCanvas(800, 560);
  }
  
  // Se realiza la creacion de los ladrillos
  let brick1 = new Brick("yellow",150);
  let brick2 = new Brick("blue",350);
  
  //
  brick1.setSpeed();
  brick2.setSpeed();
  
  function draw () {

	background(0);
	if(mouseIsPressed){
	  background(100);
	}
	if(!mouseIsPressed){
		createBars();
	  }
	brick1.createBrick();
	brick1.moveBrick();
	brick2.createBrick();
	brick2.moveBrick();
  }
  
  // Esta funcion creal las lineas blancas y negras
  function createBars() {
	let len = 12;
	for(let i = 0;i<width/len;i++){
	  fill("white");
	  if(i%2 == 0)
	  rect(i*len,height,len,-height);
	}
  }