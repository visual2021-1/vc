let mosaico;
let symbol1;
let bigPicture;
let showMosaico;
let imagesMainPath = "/vc/docs/sketches/assets/image_mosaic/";
let resolution = 100;
const pixelSize = 64;
const numImagenes = 70;

function preload() {
  bigPicture = loadImage(imagesMainPath + "art-shaders.jpg");
  symbol1 = loadImage(imagesMainPath + "mosaicDataset.jpg");
  mosaico = loadShader(
    "/vc/docs/sketches/scripts/hardware/shader.vert",
    "/vc/docs/sketches/scripts/hardware/photomosaic.frag"
  );
}

function setup() {
  setupSelect();
  setupMosaic();
}

function setupSelect(){
  sel = createSelect();
  sel.position(15, 15);
  sel.option(5);
  sel.option(50);
  sel.option(100);
  sel.option(150);
  sel.option(200);
  sel.option(500);
  sel.option(2000);
  sel.option(10000);
  sel.option(100000);
  sel.option(1000000);
  sel.option(10000000);
  sel.option(100000000);
  sel.selected(resolution);
  sel.changed(mySelectEvent);
}

function mySelectEvent() {
  resolution = sel.value();
  mosaico.setUniform("resolution", resolution);
}

function setupMosaic() {
  createCanvas(500, 670, WEBGL);
  textureMode(NORMAL);
  noStroke();
  shader(mosaico);
  mosaico.setUniform("image", bigPicture);
  mosaico.setUniform("resolution", resolution);
  mosaico.setUniform("WIDTH_PIXEL", pixelSize);
  mosaico.setUniform("NUM_IMAGES", numImagenes);
  mosaico.setUniform("HEIGHT_PIXEL", pixelSize);
  showMosaico = true;
  mosaico.setUniform("debug", showMosaico);
  mosaico.setUniform("symbol1", symbol1);
}

function draw() {
  background(33);
  cover();
}

function cover() {
  beginShape();
  vertex(-width / 2, -height / 2, 0, 0, 0);
  vertex(width / 2, -height / 2, 0, 1, 0);
  vertex(width / 2, height / 2, 0, 1, 1);
  vertex(-width / 2, height / 2, 0, 0, 1);
  endShape(CLOSE);
}

function keyPressed() {
  if (key === "1") {
    showMosaico = !showMosaico;
    mosaico.setUniform("debug", showMosaico);

    if (showMosaico) {
      setupSelect();
    } else {
      sel.remove();
    }
  }
}