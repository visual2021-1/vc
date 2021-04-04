// let img; // Declarar variable 'img'
// let lightness = 0; // Variable de ligereza
// let gray = 0;

// function setup() {
// 	var myCanvas = createCanvas(720, 560);
// 	// myCanvas.parent('filterGray');
// 	background(210);
// 	pixelDensity();
// 	img0 = loadImage('/vc/docs/sketches/assets/exampleImage.jpg');
// 	img1 = loadImage('/vc/docs/sketches/assets/exampleImage.jpg');
// 	img2 = loadImage('/vc/docs/sketches/assets/exampleImage.jpg');
// 	img3 = loadImage('/vc/docs/sketches/assets/exampleImage.jpg');

// 	var title = 'IMAGEN ORIGINAL';
// 	textSize(18);
// 	stroke(128, 255, 255);
// 	textStyle(BOLDITALIC);
// 	textAlign(CENTER);
// }

// function draw() {

// 	img.resize(width, 0)
// 	loadPixels();
// 	img.loadPixels();

// 	for (let y = 0; y < height; y++) {
// 		for (let x = 0; x < width; x++) {
// 			let index = (x + y * width) * 4; // Posicion del pixel
// 			let r = img.pixels[index + 0]; // Componente Red
// 			let g = img.pixels[index + 1]; // Componente Green
// 			let b = img.pixels[index + 2]; // Componente Blue
// 			let a = img.pixels[index + 3]; // Componente Alpha

// 			if (gray === 1) {
// 				let I = (r + g + b) / 3; // Promedio de los tres componentes
// 				lightness = I;
// 				title = 'MEDIA ARITMÉTICA';
// 			}
// 			// else if (gray === 2) {
// 			// 	let V = max(r, g, b); // Componente mas grande de un color
// 			// 	lightness = V;
// 			// 	title = 'COMPONENTE MÁS GRANDE';
// 			// }
// 			// else if (gray === 3) {
// 			// 	let L = (max(r, g, b) + min(r, g, b)) / 2; // Promedio entre el componente mas grande y el mas pequeño
// 			// 	lightness = L;
// 			// 	title = 'RANGO MEDIO';
// 			// }
// 			else if (gray === 4) { // Promedio ponderado de RGB con corrección gamma (Luma)
// 				let Y601 = 0.2989 * r + 0.5870 * g + 0.1140 * b; // SDTV
// 				lightness = Y601;
// 				title = 'LUMA (SDTV)';
// 			}
// 			// else if (gray === 5) {
// 			// 	let Y240 = 0.212 * r + 0.701 * g + 0.087 * b; // Adobe
// 			// 	lightness = Y240;
// 			// 	title = 'LUMA (ADOBE)';
// 			// }
// 			// else if (gray === 6) {
// 			// 	let Y709 = 0.2126 * r + 0.7152 * g + 0.0722 * b; // HDTV
// 			// 	lightness = Y709;
// 			// 	title = 'LUMA (HDTV)';
// 			// }
// 			else if (gray === 7) {
// 				let Y2020 = 0.2627 * r + 0.6780 * g + 0.0593 * b; // UHDTV,HDR
// 				lightness = Y2020;
// 				title = 'LUMA (UHDTV, HDR)';
// 			}
// 			// else if (gray === 11) {
// 			// 	let V = 10 * sqrt(r); // Munsell Rojo
// 			// 	lightness = V;
// 			// 	title = 'MUNSELL (ROJO)'
// 			// }
// 			// else if (gray === 12) {
// 			// 	let V = 10 * sqrt(g); // Munsell Verde
// 			// 	lightness = V;
// 			// 	title = 'MUNSELL (VERDE)'
// 			// }
// 			// else if (gray === 13) {
// 			// 	let V = 10 * sqrt(b); // Munsell Azul
// 			// 	lightness = V;
// 			// 	title = 'MUNSELL (AZUL)'
// 			// }

// 			pixels[index + 0] = lightness;
// 			pixels[index + 1] = lightness;
// 			pixels[index + 2] = lightness;
// 			pixels[index + 3] = a;

// 			if (gray === 0) { // Imagen original
// 				pixels[index + 0] = r;
// 				pixels[index + 1] = g;
// 				pixels[index + 2] = b;
// 				pixels[index + 3] = a;
// 				title = 'IMAGEN ORIGINAL';
// 			}
// 		}
// 	}
// 	updatePixels();
// 	image(img, 12, 12, img.width * (250 / img.width), img.height * (250 / img.width));
// 	text(title, width / 2, 20);
// }

// // Se ejecuta cuando se presiona cualquier tecla
// function keyPressed() {
// 	if (key === '0') {
// 		gray = 0;
// 	} else if (key === '1') {
// 		gray = 1;
// 	} else if (key === '2') {
// 		gray = 2;
// 	} else if (key === '3') {
// 		gray = 3;
// 	} else if (key === '4') {
// 		gray = 4;
// 	} else if (key === '5') {
// 		gray = 5;
// 	} else if (key === '6') {
// 		gray = 6;
// 	} else if (key === '7') {
// 		gray = 7;
// 	} else if (key === 'r') {
// 		gray = 11;
// 	} else if (key === 'g') {
// 		gray = 12;
// 	} else if (key === 'b') {
// 		gray = 13;
// 	}
// }




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
