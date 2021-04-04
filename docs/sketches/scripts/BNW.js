
let img, img2, img3, img4;

function applyFilter() {
	for (let y = 0; y < img2.height; y++) {
		for (let x = 0; x < img2.width; x++) {
			let index = (x + y * img2.width) * 4;
			let r = img2.pixels[index + 0];
			let g = img2.pixels[index + 1];
			let b = img2.pixels[index + 2];

			let bw = (r + g + b) / 3; // Promedio 

			img2.pixels[index + 0] = bw;
			img2.pixels[index + 1] = bw;
			img2.pixels[index + 2] = bw;
		}
	}
	img2.updatePixels();

	for (let y = 0; y < img3.height; y++) {
		for (let x = 0; x < img3.width; x++) {
			let index = (x + y * img3.width) * 4;
			let r = img3.pixels[index + 0];
			let g = img3.pixels[index + 1];
			let b = img3.pixels[index + 2];

			let luma = r * .299 + g * .587 + b * .114; //SDTV

			img3.pixels[index + 0] = luma;
			img3.pixels[index + 1] = luma;
			img3.pixels[index + 2] = luma;
		}
	}
	img3.updatePixels();

	for (let y = 0; y < img4.height; y++) {
		for (let x = 0; x < img4.width; x++) {
			let index = (x + y * img4.width) * 4;
			let r = img4.pixels[index + 0];
			let g = img4.pixels[index + 1];
			let b = img4.pixels[index + 2];

			let luma = r * .263 + g * .678 + b * .059; //UHDTV HDR
			// luma = constrain(luma + value, 0, 255);

			img4.pixels[index + 0] = luma;
			img4.pixels[index + 1] = luma;
			img4.pixels[index + 2] = luma;
		}
	}
	img4.updatePixels();
}

function preload() {
	img = loadImage('/vc/docs/sketches/assets/exampleImage.jpg');
	img2 = loadImage('/vc/docs/sketches/assets/exampleImage.jpg');
	img3 = loadImage('/vc/docs/sketches/assets/exampleImage.jpg');
	img4 = loadImage('/vc/docs/sketches/assets/exampleImage.jpg');


}

function setup() {
	createCanvas(804, 644);
	img.resize(402, 322);
	img2.resize(402, 322);
	img3.resize(402, 322);
	img4.resize(402, 322);

	img.loadPixels();
	img2.loadPixels();
	img3.loadPixels();
	img4.loadPixels();
}


function draw() {
	applyFilter();

	textSize(10);
	stroke(0);
	fill(30, 178, 166)
	textStyle(BOLDITALIC);


	image(img, 0, 0);
	text('IMAGEN ORIGINAL', 20, 20);
	image(img2, img.width, 0);
	text('PROMEDIO RGB', img.width + 20, 20);
	image(img3, 0, img.height);
	text('LUMA (SDTV)', 20, img.height + 20);
	image(img4, img.width, img.height);
	text('LUMA (UHDTV)', img.width + 20, img.height + 20);
}
