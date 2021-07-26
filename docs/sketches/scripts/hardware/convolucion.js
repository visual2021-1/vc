let theShader;
let img;
const Blur_Kernel= [ 0.11, 0.11, 0.11 ,0.11, 0.11, 0.11, 0.11, 0.11, 0.11]; 
let Border_Detection= [ -1.0, -1.0, -1.0 , -1.0,  8.0, -1.0 , -1.0, -1.0, -1.0  ];
const Emboss= [ 1,  1,  0, 1,  0, -1 , 0,  -1,  -1]; 
const Sharpe= [ 0, -1, 0 , -1,  5, -1, 0, -1, 0 ]; 

let contador=0;
let kernelsList= [Blur_Kernel,Border_Detection,Emboss,Sharpe];
let kernel = kernelsList[0] ;

function preload() {
  theShader = loadShader('/vc/docs/sketches/scripts/hardware/shader.vert', '/vc/docs/sketches/scripts/hardware/edge.frag');
  img = loadImage('/vc/docs/sketches/assets/selva.jpg');
}

function setup() {
  createCanvas(640, 400, WEBGL);
  noStroke();
  textureMode(NORMAL); 
  shader(theShader);
  theShader.setUniform('texture', img);
  theShader.setUniform('texOffset',[1/img.width,1/img.height]);
  
  blurButton = createButton('Kernel Blur');
  blurButton.position(70,420);
  blurButton.mousePressed(function() { setKernel(0) });

  borderButton = createButton('Kernel Borders');
  borderButton.position(170,420);
  borderButton.mousePressed(function() { setKernel(1) });

  embossButton = createButton('Kernel Emboss');
  embossButton.position(290,420);
  embossButton.mousePressed(function() { setKernel(2) });

  sharpeButton = createButton('Kernel Sharpe');
  sharpeButton.position(410,420);
  sharpeButton.mousePressed(function() { setKernel(3) });
}
function draw() {
  background(0);
  beginShape() 
  vertex(-width / 2, height / 2, 0, 0, 1);
  vertex(width / 2, height / 2, 0, 1, 1);
  vertex(width / 2, -height / 2, 0, 1, 0);
  vertex(-width / 2, -height / 2, 0, 0, 0);
  theShader.setUniform('kernel', kernel);
  endShape(CLOSE)
  
}
function setKernel(id){
  kernel=kernelsList[id];
}
