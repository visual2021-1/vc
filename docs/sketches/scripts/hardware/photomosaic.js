let mosaico;
let mosaicDatasetImg;
let originalImage;
let showMosaico;
let imagesMainPath = "/vc/docs/sketches/assets/image_mosaic/";
let imgsPerRow = 100;
const numImagenes = 70;

function preload() {
  originalImage = loadImage(imagesMainPath + "art-shaders.jpg");
  mosaicDatasetImg = loadImage(imagesMainPath + "mosaicDataset.jpg");
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
  sel.option(10);
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
  sel.selected(imgsPerRow);
  sel.changed(mySelectEvent);
}

function mySelectEvent() {
  imgsPerRow = sel.value();
  mosaico.setUniform("imgsPerRow", imgsPerRow);
}

function setupMosaic() {
  createCanvas(718, 900, WEBGL);
  textureMode(NORMAL);
  noStroke();
  shader(mosaico);
  mosaico.setUniform("originalImage", originalImage);
  mosaico.setUniform("imgsPerRow", imgsPerRow);
  mosaico.setUniform("numImagenes", numImagenes);
  showMosaico = true;
  mosaico.setUniform("showMosaico", showMosaico);
  mosaico.setUniform("mosaicDatasetImg", mosaicDatasetImg);
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
    mosaico.setUniform("showMosaico", showMosaico);

    if (showMosaico) {
      setupSelect();
    } else {
      sel.remove();
    }
  }
}