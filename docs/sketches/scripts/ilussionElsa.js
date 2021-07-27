// Describe la estructura y los movimientos
class Ladrillo{
	constructor(lc, y){
	  this.ladrilloColor = lc;
	  this.yPos = y;
	  this.xPos = 0;
	}
  
	// Crea los ladrillos
	crearLadrillo(){
	  fill(this.ladrilloColor);
	  rect(this.xPos, this.yPos, 150, 50);
	  noStroke() 
	}
  
	// Establece la velocidad de los ladrillos a 0.5
	setVelocidad(){
	  this.xSpeed = 0.8;
	}
  
	// Los ladrillos se mueven por el lienzo
	moveLadrillo(){
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
  let ladrillo1 = new Ladrillo("yellow",150);
  let ladrillo2 = new Ladrillo("blue",350);
  
  //
  ladrillo1.setVelocidad();
  ladrillo2.setVelocidad();
  
  function draw () {

	background(0);
	if(mouseIsPressed){
	  background(100);
	}
	if(!mouseIsPressed){
		createBars();
	  }
	ladrillo1.crearLadrillo();
	ladrillo1.moveLadrillo();
	ladrillo2.crearLadrillo();
	ladrillo2.moveLadrillo();
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