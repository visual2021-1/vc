var widthI= 429;   // Anchura del lienzo
var heightI = 322;  // Altura del lienzo

let videoOriginal, videoPromedio, videoLuma, videoLuma2;

function setup() {
    videoOriginal = createVideo(['/vc/docs/sketches/assets/sample.mp4']);
    videoOriginal.hide();
    createCanvas(804, 644);

    videoPromedio = createImage(429, 322);
    videoLuma = createImage(429, 322);
    videoLuma2 = createImage(429, 322);
    videoOriginal.volume(0);
}

function draw() {

    background(0);
    videoOriginal.loadPixels();
    videoPromedio.loadPixels();
    videoLuma.loadPixels();
    videoLuma2.loadPixels();

    for (let x = 0; x < videoOriginal.width; x++) {
        for (let y = 0; y < videoOriginal.height; y++) {

            let index = (x + y * videoOriginal.width) * 4;

            let r = videoOriginal.pixels[index + 0];
            let g = videoOriginal.pixels[index + 1];
            let b = videoOriginal.pixels[index + 2];

            let bw = (r + g + b) / 3; // Promedio 

            videoPromedio.pixels[index + 0] = bw;
            videoPromedio.pixels[index + 1] = bw;
            videoPromedio.pixels[index + 2] = bw;
            videoPromedio.pixels[index + 3] = 255;

            let luma = r * .299 + g * .587 + b * .114; //SDTV

            videoLuma.pixels[index + 0] = luma;
            videoLuma.pixels[index + 1] = luma;
            videoLuma.pixels[index + 2] = luma;
            videoLuma.pixels[index + 3] = 255;

            let luma2 = r * .263 + g * .678 + b * .059; //UHDTV HDR

            videoLuma2.pixels[index + 0] = luma2;
            videoLuma2.pixels[index + 1] = luma2;
            videoLuma2.pixels[index + 2] = luma2;
            videoLuma2.pixels[index + 3] = 255;
        }
    }
    videoPromedio.updatePixels();
    videoLuma.updatePixels();
    videoLuma2.updatePixels();


    textSize(10);
    stroke(0);
    fill(30, 178, 166)
    textStyle(BOLDITALIC);

    image(videoOriginal, 0, 0);
    text('IMAGEN ORIGINAL', 20, 20);
    image(videoPromedio, widthI, 0);
    text('PROMEDIO RGB', widthI + 20, 20);
    image(videoLuma, 0, heightI);
    text('LUMA (SDTV)', 20, heightI + 20);
    image(videoLuma2, widthI, heightI);
    text('LUMA (UHDTV)', widthI + 20, heightI + 20);

}

function mousePressed() {
    videoOriginal.loop();
}