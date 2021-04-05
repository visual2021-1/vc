var quadrille;
var img;
var chars = ["$", "@", "B", "%", "8", "&", "W", "M", "#", "*", 
             "o", "a", "h", "k", "b", "d", "p", "q", "w","m",
             "Z", "O", "0", "Q", "L", "C", "J", "U", "Y", "X", 
             "z", "c", "v", "u", "n", "x", "r", "j", "f", "t", 
             "/", "|", "(", ")", "1", "{", "}", "[", "]", "?",
             "-", "_", "+", "~", "<", ">", "i", "!", "l", "I", 
             ";", ":", ",", "^", "`", "'", "." ];

function preload() {
  img = loadImage('/vc/docs/sketches/assets/cat.jpg');
}

function setup() {
  createCanvas(770, 550);
}

function draw() {
  image(img, 0, height / 2, img.width /2, img.height / 2);
  
  if (frameCount % 200 === 0) {
    let scl = 7;
    quadrille = createQuadrille(20 * scl, img);
   
    for( let i =0; i < quadrille.height; i++)
    {
      for( let j =0; j < quadrille.width; j++){
        let value = (quadrille.read(i, j)[0] + quadrille.read(i, j)[1] + quadrille.read(i, j)[2]) / 3;
        value = Math.floor(value / 4);    
        quadrille.fill(i, j, chars[value]);
      }
    }
    drawQuadrille(quadrille, 0, 0, 40 / scl, 1.6 / scl, color(255));
    const start = new Date().getTime();
    let elapsed = new Date().getTime() - start;
    console.log("Elapsed time " + elapsed);

  }
}