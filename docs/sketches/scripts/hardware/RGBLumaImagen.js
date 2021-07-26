let imgShader;
let shaderTexture;
let img;

let angle=0;
let gray = 0;

function preload(){
	// cargamos imagen y shader
  img = loadImage('/vc/docs/sketches/assets/exampleImage.jpg');
  imgShader = loadShader('/vc/docs/sketches/scripts/hardware/texture.vert','/vc/docs/sketches/scripts/hardware/texture.frag');
}

function setup() {

  pixelDensity(1);
  createCanvas(windowWidth, 400, WEBGL);
  noStroke();

  // inicializar la capa del createGraphics y Quitar bordes 
  shaderTexture = createGraphics(512, 512, WEBGL);
  shaderTexture.noStroke();
}

function draw() {
  shaderTexture.shader(imgShader);

  //Se defomem valores uniformes para el fragment shader
  imgShader.setUniform("u_img", img);
  imgShader.setUniform("u_key", gray);

  
  // Se Renderiza el shader
  shaderTexture.rect(0,0,width,height);

  background(0);

  // Efecto de bombilla 
  pointLight(255, 255, 255, 0, 0, 500);
  let dx= mouseX-width/2;
  let dy= mouseY-height/2;
  pointLight(100,250,255,dx,dy,100);

  translate(0, 0, 0);
  
  push();
  //Se pasa el shader de la imagen como textura
  texture(shaderTexture);
  translate(0, 0, 0);
  rotateZ(angle);
  rotateX(angle);
  rotateY(angle*2); 
  box(200);
  pop();
  
  // Rotacion de la caja
  angle += 0.001;
  
  
}

// declaramos los eventos 

function keyPressed() {
	if (key === '4') {
	gray = 0;
	} else if (key === '1') { 
	gray = 1;
	} else if (key === '2') {
	gray = 2;
	} else if (key === '3') {
	gray = 3;
	} 
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
