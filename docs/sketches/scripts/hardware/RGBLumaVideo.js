let theShaderVideo;
let shaderVideo;
let video;

let gray = 0;

function preload(){
    // cargamos video y shader
  video = createVideo(['/vc/docs/sketches/assets/sample.mp4']);
  video.hide();

  theShaderVideo = loadShader('/vc/docs/sketches/scripts/hardware/texture.vert','/vc/docs/sketches/scripts/hardware/texture.frag');  
}

function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, 400, WEBGL);
  noStroke();

  // inicializar la capa del createGraphics y Quitar bordes
  shaderVideo = createGraphics(windowWidth, windowHeight, WEBGL);
  shaderVideo.noStroke();  
  
  video.volume(0);
}

function draw() {
  shaderVideo.shader(theShaderVideo);

  //Se defomem valores uniformes para el fragment shader

  theShaderVideo.setUniform('u_img', video);
  theShaderVideo.setUniform('u_key', gray);
  
  // Se Renderiza el shader
  shaderVideo.rect(0,0,width,height);

  background(0);

  //Se pasa el shader del video como textura
  push();
  texture(shaderVideo);
  translate(0, 0, -100);
  plane(width,height);
  pop();  
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

function mousePressed() {
   video.loop();
   
}