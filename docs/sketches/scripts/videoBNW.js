var widthI= 429;   // Anchura del lienzo
var heightI = 322;  // Altura del lienzo


let img, img2, img3, img4;



function setup() {
    img = createVideo(['/vc/docs/sketches/assets/sample.mp4']);
    img.hide();
    createCanvas(804, 644);



    img2 = createImage(429, 322);
    img3 = createImage(429, 322);
    img4 = createImage(429, 322);

    // img.loop();
    img.volume(0);
}



function draw() {

    background(0);



    img.loadPixels();
    img2.loadPixels();
    img3.loadPixels();
    img4.loadPixels();

    for (let x = 0; x < img.width; x++) {
        for (let y = 0; y < img.height; y++) {

            let index = (x + y * img.width) * 4;


            let r = img.pixels[index + 0];
            let g = img.pixels[index + 1];
            let b = img.pixels[index + 2];

            let bw = (r + g + b) / 3; // Promedio 


            img2.pixels[index + 0] = bw;
            img2.pixels[index + 1] = bw;
            img2.pixels[index + 2] = bw;
            img2.pixels[index + 3] = 255;



            let luma = r * .299 + g * .587 + b * .114; //SDTV

            img3.pixels[index + 0] = luma;
            img3.pixels[index + 1] = luma;
            img3.pixels[index + 2] = luma;
            img3.pixels[index + 3] = 255;


            let luma2 = r * .263 + g * .678 + b * .059; //UHDTV HDR

            img4.pixels[index + 0] = luma2;
            img4.pixels[index + 1] = luma2;
            img4.pixels[index + 2] = luma2;
            img4.pixels[index + 3] = 255;



        }
    }
    img2.updatePixels();
    img3.updatePixels();
    img4.updatePixels();


    textSize(10);
    stroke(0);
    fill(30, 178, 166)
    textStyle(BOLDITALIC);


    image(img, 0, 0);
    text('IMAGEN ORIGINAL', 20, 20);
    image(img2, widthI, 0);
    text('PROMEDIO RGB', widthI + 20, 20);
    image(img3, 0, heightI);
    text('LUMA (SDTV)', 20, heightI + 20);
    image(img4, widthI, heightI);
    text('LUMA (UHDTV)', widthI + 20, heightI + 20);


}

function mousePressed() {
    img.loop();
}