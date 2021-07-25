let theShader;
let shaderTexture;
let img;
let angle = 0;
let gray = 0;

function preload() {
	img = loadImage('/vc/docs/sketches/assets/exampleImage.jpg');
	// Cargar los shaders
	theShader = loadShader('/vc/docs/sketches/scripts/hardware/texture.vert', '/vc/docs/sketches/scripts/hardware/texture.frag');

}
function setup() {
	pixelDensity(1);

	// Se requiere trabajar con WEBGL
	canvas = createCanvas(1000, 400, WEBGL);
	canvas.parent();
	noStroke();

	//Crear buffer grafico
	shaderTexture = createGraphics(512, 512, WEBGL);
	// Quitar bordes en el createGraphics
	shaderTexture.noStroke();


}

function draw() {
	// Se pasa el shader a la capa del createGraphics
	shaderTexture.shader(theShader);

	// Valores uniform para el fragment shader
	theShader.setUniform("u_img", img);
	theShader.setUniform("u_key", gray);


	// Renderizar el shader
	shaderTexture.rect(0, 0, width, height);

	pointLight(255, 255, 255, 0, 0, 500);
	// Efecto linterna
	let dx = mouseX - width / 2;
	let dy = mouseY - height / 2;
	pointLight(255, 255, 255, dx, dy, 100);
	//Fondo negro
	background(0);
	//Guardar el dibujo actual
	push();
	//Se pasa el shader como textura
	texture(shaderTexture);
	//Creaci�n de cubo rotando
	translate(200, 0, 0);
	rotateZ(angle);
	rotateX(angle);
	rotateY(angle * 2);
	box(200);
	//Volver al dibujo anterior (Mostrar ambas configuraciones)
	pop();

	// Rotacion de la caja
	angle += 0.002;

	// Se pasa la imagen original como textura
	texture(shaderTexture);
	ellipse(-250, 0, 350, 350, 100);
	push();


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

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}