let value; // Permite escoger que filtro se va a realizar
let matrixsize = 3; // Tamaño de la matriz
var matrix = [[-1, -1, -1],
              [-1, 8, -1],
              [-1, -1, -1]]; // Matriz de convoluciones     

let canvas_01;
let canvas_02;
let start = false;

var widthI = 500;   // Anchura del lienzo
var heightI = 500;  // Altura del lienzo

// Where to process the pixels
let xstart = 00;
let ystart = 0;

// The convolution kernel for a "sharpen" effect
// stored as a 3 x 3 two-dimensional array.
let kernel = [
  [-1, -1, -1],
  [-1, 8, -1],
  [-1, -1, -1]
];

let alternative_edge = [
  [1, 0, -1],
  [0, 0, 0],
  [-1, 0, 1]
];

let identity = [
  [ 0, 0, 0],
  [ 0, 1, 0],
  [ 0, 0, 0]
];

let kernel_blur = [
  [ 1/9, 1/9, 1/9 ],
  [ 1/9, 1/9, 1/9 ],
  [ 1/9, 1/9, 1/9 ]
];

function preload() {
    img_01 = createVideo("/vc/docs/sketches/assets/oso.mp4");
    img_02 = createVideo("/vc/docs/sketches/assets/oso.mp4");
    img_03 = createVideo("/vc/docs/sketches/assets/oso.mp4");
    img_04 = createVideo("/vc/docs/sketches/assets/oso.mp4");
    img_01.hide();
    img_02.hide();
    img_03.hide();
    img_04.hide();

}

function setup() {
    var myCanvas = createCanvas(800, 550);
    //myCanvas.parent('maskGrayVideo'); 

    canvas_01 = createGraphics(400, 250);
    canvas_02 = createGraphics(400, 250);
    canvas_03 = createGraphics(400, 250);
    canvas_04 = createGraphics(400, 250);
    // setTimeout(startAnimation(), 4000);

}

function draw() {
    // drawCanvas_01();
    // drawCanvas_02();

    // setTimeout(startAnimation(), 4000);

    drawAllCanvas();

    if (start) {
      bordes();
      desenfoque();
      bordes_alternativo();
    }

    image(canvas_01, 0, 0);
    text('Video original', 20, 260)
    image(canvas_02, 400, 0);
    text('Kernel para detecion de bordes', 420, 260)
    image(canvas_03, 0 , 270);
    text('Kernel para efecto blur de 3x3', 20, 530)
    image(canvas_04, 400, 270);
    text('Kernel para efecto blur de 3x3', 420, 530)

}

function mousePressed() {
  // if(!start) {
  img_01.loop();
  img_02.loop();
  img_03.loop();
  img_04.loop();
  start = true;
  // }
}

function drawAllCanvas() {
  canvas_01.image(img_01, 0, 0);
  canvas_02.image(img_02, 0, 0);
  canvas_03.image(img_03, 0, 0);
  canvas_04.image(img_04, 0, 0);
}

// Funciones Disenadas
// const drawCanvas_01 = () => { // Pone el primer video en el lienzo 1
// }

// const drawCanvas_02 = () => { // Pone el segundo video en el lienzo 2
// }

function bordes() { // Mascara de convoluciones
  img_02.loadPixels();


  for (let x = 0; x < img_02.width; x++) {
      for (let y = 0; y < img_02.height; y++) {
          let c = convolutionAux(x, y, matrix, matrixsize, img_02);
          let loc = (x + y * img_02.width) * 4;

          img_02.pixels[loc] = red(c);
          img_02.pixels[loc + 1] = green(c);
          img_02.pixels[loc + 2] = blue(c);
          img_02.pixels[loc + 3] = alpha(c);
      }
  }
  img_02.updatePixels();
}

function desenfoque() {
  img_03.loadPixels();


  for (let x = 0; x < img_03.width; x++) {
      for (let y = 0; y < img_03.height; y++) {
          let c = convolutionAux(x, y, kernel_blur, matrixsize, img_03);
          let loc = (x + y * img_03.width) * 4;

          img_03.pixels[loc] = red(c);
          img_03.pixels[loc + 1] = green(c);
          img_03.pixels[loc + 2] = blue(c);
          img_03.pixels[loc + 3] = alpha(c);
      }
  }
  img_03.updatePixels();
}

function bordes_alternativo() {
  img_04.loadPixels();


  for (let x = 0; x < img_04.width; x++) {
      for (let y = 0; y < img_04.height; y++) {
          let c = convolutionAux(x, y, alternative_edge, matrixsize, img_04);
          let loc = (x + y * img_04.width) * 4;

          img_04.pixels[loc] = red(c);
          img_04.pixels[loc + 1] = green(c);
          img_04.pixels[loc + 2] = blue(c);
          img_04.pixels[loc + 3] = alpha(c);
      }
  }
  img_04.updatePixels();
}

const convolutionAux = (x, y, matrix, matrixsize, img) => {
    var rtotal = 0;
    var gtotal = 0
    var btotal = 0;
    var atotal = 0;

    for (let i = 0; i < matrixsize; i++) {
        for (let j = 0; j < matrixsize; j++) {
            var xloc = x + i;
            var yloc = y + j;
            var loc = (xloc + img.width * yloc) * 4;

            loc = constrain(loc, 0, img.pixels.length - 1);
            rtotal += ((img.pixels[loc + 0]) * matrix[i][j]);
            gtotal += ((img.pixels[loc + 1]) * matrix[i][j]);
            btotal += ((img.pixels[loc + 2]) * matrix[i][j]);
            atotal += ((img.pixels[loc + 3]) * matrix[i][j]);
        }
    }
    // Restringir el rango de los valores RGBA
    rtotal = constrain(rtotal, 0, 255);
    gtotal = constrain(gtotal, 0, 255);
    btotal = constrain(btotal, 0, 255);
    atotal = constrain(atotal, 0, 255);
    // Retorna el color resultante
    return color(rtotal, gtotal, btotal);
}