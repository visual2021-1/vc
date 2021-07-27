let aShader;

//Precarga el shader y el video
function preload() {
  video = createVideo(['/vc/docs/sketches/assets/oso.mp4']);
  aShader = loadShader('/vc/docs/sketches/scripts/hardware/textureAscii.vert', '/vc/docs/sketches/scripts/hardware/textureAscii.frag');
  video.hide();
}

function setup() {
        // shaders require WEBGL mode to work
  createCanvas(768, 520, WEBGL);
  noStroke();
  video.loop();
  
}

function draw() {
    // shader() Activación del Shader con nuestro Shader
    shader(aShader);

    // Se pasa el video como textura
    aShader.setUniform('tex', video);

    // rect gives us some geometry on the screen
    rect(0, 0, width, height);
}
