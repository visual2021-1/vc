
// this variable will hold our shader object
let theShader;
// this variable will hold our webcam video
let cam;
let gray = 0;
function preload() {
    // load the shader
    theShader = loadShader('/vc/docs/sketches/workshop2/webcam.vert', '/vc/docs/sketches/workshop2/webcam.frag');
}

function setup() {
    // shaders require WEBGL mode to work
    createCanvas(710, 400, WEBGL);
    noStroke();
    //Crea una aptura de video instantanea 
    cam = createCapture(VIDEO);
    cam.size(710, 400);
    //Esconde la captura para solo mostrar el renderizado final
    cam.hide();
}

function draw() {
    // shader() sets the active shader with our shader
    shader(theShader);

    // passing cam as a texture
    theShader.setUniform('tex0', cam);
    theShader.setUniform("u_key", gray);

    // rect gives us some geometry on the screen
    rect(0, 0, width, height);
}
// Se ejecuta cuando se presiona cualquier tecla
function keyPressed() {
    if (key === '0') {
        gray = 0;
    } else if (key === '1') {
        gray = 1;
    } else if (key === '2') {
        gray = 2;
    }
}