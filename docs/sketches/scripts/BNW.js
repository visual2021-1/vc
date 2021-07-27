
let imagenOriginal, imagenPromedio, imagenLuma, imagenLuma2;

function preload() {
	imagenOriginal = loadImage('/vc/docs/sketches/assets/exampleImage.jpg');
	imagenPromedio = createImage(402, 322);
	imagenLuma = createImage(402, 322);
	imagenLuma2 = createImage(402, 322);
}

function setup() {
	createCanvas(804, 644);
	imagenOriginal.resize(402, 322);
}

function draw() {

	imagenOriginal.loadPixels();
	imagenPromedio.loadPixels();
	imagenLuma.loadPixels();
	imagenLuma2.loadPixels();

	for (let y = 0; y < imagenOriginal.height; y++) {
		for (let x = 0; x < imagenOriginal.width; x++) {

			let index = (x + y * imagenOriginal.width) * 4;

			let r = imagenOriginal.pixels[index + 0];
			let g = imagenOriginal.pixels[index + 1];
			let b = imagenOriginal.pixels[index + 2];

			let bw = (r + g + b) / 3; // Promedio 

			imagenPromedio.pixels[index + 0] = bw;
			imagenPromedio.pixels[index + 1] = bw;
			imagenPromedio.pixels[index + 2] = bw;
			imagenPromedio.pixels[index + 3] = 255;


			let luma = r * .299 + g * .587 + b * .114; //SDTV

			imagenLuma.pixels[index + 0] = luma;
			imagenLuma.pixels[index + 1] = luma;
			imagenLuma.pixels[index + 2] = luma;
			imagenLuma.pixels[index + 3] = 255;


			let luma2 = r * .263 + g * .678 + b * .059; //UHDTV HDR

			imagenLuma2.pixels[index + 0] = luma2;
			imagenLuma2.pixels[index + 1] = luma2;
			imagenLuma2.pixels[index + 2] = luma2;
			imagenLuma2.pixels[index + 3] = 255;

		}
	}
	imagenPromedio.updatePixels();
	imagenLuma.updatePixels();
	imagenLuma2.updatePixels();

	textSize(10);
	stroke(0);
	fill(30, 178, 166)
	textStyle(BOLDITALIC);


	image(imagenOriginal, 0, 0);
	text('IMAGEN ORIGINAL', 20, 20);
	image(imagenPromedio, imagenOriginal.width, 0);
	text('PROMEDIO RGB', imagenOriginal.width + 20, 20);
	image(imagenLuma, 0, imagenOriginal.height);
	text('LUMA (SDTV)', 20, imagenOriginal.height + 20);
	image(imagenLuma2, imagenOriginal.width, imagenOriginal.height);
	text('LUMA (UHDTV)', imagenOriginal.width + 20, imagenOriginal.height + 20);
}
