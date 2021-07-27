// size of each cell
let imgAmount = 200;
let smaller;
let allImages = [];
let brightImages = new Array(256);
let bigPicture;
let brightnessValues = [];
let scl = 5;
let sel;
let imagesMainPath = "/vc/docs/sketches/assets/image_mosaic/";

function preload() {
    bigPicture = loadImage(imagesMainPath + "art.jpg");
    for (i = 0; i < imgAmount; i++) {
        now = i + '.jpg';
        allImages[i] = loadImage(imagesMainPath + "photos/" + now);
    }
}

function setup() {
    sel = createSelect();
    sel.position(165, 15);
    sel.option(5);
    sel.option(10);
    sel.option(15);
    sel.option(25);
    sel.selected(scl);
    sel.changed(mySelectEvent);

    setupMosaic();
}

function setupMosaic(){
    createCanvas(bigPicture.width, bigPicture.height);
    for (let i = 0; i < allImages.length; i++) {
        allImages[i].resize(64, 64);
        avg = 0;

        for (let j = 0; j < allImages[i].width; j++) {
            for (let k = 0; k < allImages[i].height; k++) {
                avg += brightness(allImages[i].get(j, k));
            }
        }

        brightnessValues[i] = avg / (allImages[i].width * allImages[i].height);
    }

    for (let i = 0; i < brightImages.length; i++) {
        minDiff = 256;

        for (let j = 0; j < brightnessValues.length; j++) {
            diff = abs(i - brightnessValues[j]);

            if (diff < minDiff) {
                minDiff = diff;
                brightImages[i] = allImages[j];
            }
        }
    }

    smaller = createImage(bigPicture.width / scl, bigPicture.height);
    smaller.copy(bigPicture, 0, 0, bigPicture.width, bigPicture.height, 0, 0, bigPicture.width / scl, bigPicture.height / scl);

    noLoop();
}

function draw() {
    background(0);

    for (let i = 0; i < (bigPicture.width / scl); i++) {
        for (let j = 0; j < (bigPicture.width / scl); j++) {
            index = int(brightness(smaller.get(i, j)));
            image(brightImages[index], i * scl, j * scl, scl, scl);
        }
    }

    textStyle(BOLD);
    stroke(128, 255, 255);
    textAlign(CENTER);
    textSize(18);
    text("Seleccione un valor para el scl: ", 17, 22);
}

function mySelectEvent() {
    scl = sel.value();
    setupMosaic();
    draw();
}

// Definimos los eventos al opimir teclas, cambiaran el color de los circulos exteriores
// igualandolo al del fondo
function keyPressed() {
    if (key === '1') {
        sel.remove();
        image(bigPicture, 0, 0);
    } else if (key === '2') {
        sel = createSelect();
        sel.position(165, 15);
        sel.option(5);
        sel.option(10);
        sel.option(15);
        sel.option(25);
        sel.selected(scl);
        sel.changed(mySelectEvent);
        draw();
    }
}