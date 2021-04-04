var quadrille;
var img;
var chars = ["@","M","B","H","E","N","R","#","K","W",
             "X","D","F","P","Q","A","S","U","Z","b",
             "d","e","h","x","*","8","G","m","&","0",
             "4","L","O","V","Y","k","p","q","5","T",
             "a","g","n","s","6","9","o","w","z","$",
             "C","I","u","2","3","J","c","f","r","y",
             "%","1","v","7","l","+","i","t","[","]",
             "{","}","?","j","|","(",")","=","~","!",
             "-","/","<",">","\"","'","^","_",";",",",
             ":","`",".", " "]; 

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
        value = Math.floor(value / 3);    
        quadrille.fill(i, j, chars[value]);
      }
    }
    drawQuadrille(quadrille, 0, 0, 40 / scl, 1.6 / scl, color(255));
    const start = new Date().getTime();
    let elapsed = new Date().getTime() - start;
    console.log("Elapsed time " + elapsed);

  }
}