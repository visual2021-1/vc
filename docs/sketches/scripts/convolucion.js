// An example to visualize convolution steps in CNN

// Source image
let img;
// Processed pixels
let dest;

// Size of processed pixels
let w = 200;

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

let relu;
let maxpooling;

function preload() {
  img = loadImage("/vc/docs/sketches/assets/selva.jpg");
}

function setup() {
  createCanvas(720, 500);
  pixelDensity(1);
  dest = createImage(width, height);
}

function draw() {
	img.resize(width,0)


  image(img, 0, 0);

  let kernelsize = 3;
  dest.loadPixels();
  img.loadPixels();

  let section = dest.height / 4
  for (let x = 0; x < dest.width ; x++) {
    for (let y = 0; y <  section; y++) {
      let result = convolution(img, x , y , identity, kernelsize);
      let index = (x + y * dest.width) * 4;
      dest.pixels[index + 0] = result[0];
      dest.pixels[index + 1] = result[1];
      dest.pixels[index + 2] = result[2];
      dest.pixels[index + 3] = 255;
    }
  }

  for (let x = 0; x < dest.width ; x++) {
    for (let y = section + 1; y < section * 2; y++) {
      let result = convolution(img, x + xstart, y + ystart, kernel, kernelsize);
      let index = (x + y * dest.width) * 4;
      dest.pixels[index + 0] = result[0];
      dest.pixels[index + 1] = result[1];
      dest.pixels[index + 2] = result[2];
      dest.pixels[index + 3] = 255;
    }
  }

  for (let x = 0; x < dest.width ; x++) {
    for (let y = (section * 2) + 1 ; y < section * 3; y++) {
      let result = convolution(img, x + xstart, y + ystart, kernel_blur, kernelsize);
      let index = (x + y * dest.width) * 4;
      dest.pixels[index + 0] = result[0];
      dest.pixels[index + 1] = result[1];
      dest.pixels[index + 2] = result[2];
      dest.pixels[index + 3] = 255;
    }
  }
  for (let x = 0; x < dest.width ; x++) {
    for (let y = (section * 3) + 1 ; y < height; y++) {
      let result = convolution(img, x + xstart, y + ystart, alternative_edge, kernelsize);
      let index = (x + y * dest.width) * 4;
      dest.pixels[index + 0] = result[0];
      dest.pixels[index + 1] = result[1];
      dest.pixels[index + 2] = result[2];
      dest.pixels[index + 3] = 255;
    }
  }


  dest.updatePixels();

  // Draw the convolved feature map
  image(dest, xstart, ystart);
  if (maxpooling.checked()) {
    maxpool(dest, 5, xstart, ystart);
  }

}

function convolution(img, x, y, kernel, kernelsize) {

  let rsum = 0.0;
  let gsum = 0.0;
  let bsum = 0.0;

  let offset = floor(kernelsize / 2);

  for (let i = 0; i < kernelsize; i++) {
    for (let j = 0; j < kernelsize; j++) {
      let xpos = x + i - offset;
      let ypos = y + j - offset;
      let index = (xpos + img.width * ypos) * 4;

      index = constrain(index, 0, img.pixels.length - 1);

      rsum += img.pixels[index + 0] * kernel[i][j];
      gsum += img.pixels[index + 1] * kernel[i][j];
      bsum += img.pixels[index + 2] * kernel[i][j];
    }
  }
  return [rsum, gsum, bsum];
}


// This maxpooling function will iterate over all the
// "pooled" areas and draw a rectangle showing the
// brightest pixel
function maxpool(img, skip, xoff, yoff) {
  // Check all the pixels
  for (let x = 0; x < img.width; x += skip) {
    for (let y = 0; y < img.height; y += skip) {
      // Find the brightest pixel
      let brightest = findMax(img, x, y, skip);
      // Draw the rectangle
      fill(brightest[0], brightest[1], brightest[2]);
      noStroke();
      rectMode(CORNER);
      rect(x + xoff, y + yoff, skip, skip);
    }
  }
}

// This function finds the brightest pixel in a smaller area
function findMax(img, xstart, ystart, skip) {
  // Brightest so far
  let record = 0;
  let brightest = [0, 0, 0];
  for (let x = 0; x < skip; x++) {
    for (let y = 0; y < skip; y++) {
      // Find the 1D location in the array
      let index = ((x + xstart) + (y + ystart) * img.width) * 4;
      // Look at RGB
      let r = img.pixels[index + 0];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      // Add it up
      let sum = r + g + b;
      // Is this the new brightest pixel?
      if (sum > record) {
        record = sum;
        brightest = [r, g, b];
      }
    }
  }
  // Return the result
  return brightest;
}
