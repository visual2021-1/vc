// Definimos variables
let exteriorColor = 255;
let radio = 40;

function setup() {
    var myCanvas = createCanvas(720, 560);
}

function draw() {
    background(255);
    illusion();
}

function illusion() {
    push();
    translate((width / 4) + 50, height / 2);
    figureOne();
    pop();
    push();
    translate((width / 4) * 3 + 50, height / 2);
    figureTwo();
    pop();
}

// Posicionamos los circulos interiores e inferiores de la primer figura
function figureOne() {
    principalCircle();
    var an = (PI / 3);
    var i;
    for (i = 0; i < 6; i++) {
        push();
        translate(p5.Vector.fromAngle(i * an, 3.5 * radio));
        exteriorCircleOne();
        pop();
    }
}

// Posicionamos los circulos interiores e inferiores de la segunda figura
function figureTwo() {
    principalCircle();
    var an = (2 * PI / 8);
    var i;
    for (i = 0; i < 8; i++) {
        push();
        translate(p5.Vector.fromAngle(i * an, 1.8 * radio));
        exteriorCircleTwo();
        pop();
    }
}
// Creacion de circulo interior
function principalCircle() {
    ellipseMode(RADIUS);
    noStroke();
    fill(34, 94, 201);
    ellipse(0, 0, radio, radio);
}

// Creacion de cirulo exterior grande
function exteriorCircleOne() {
    ellipseMode(RADIUS);
    noStroke();
    fill(30, 178, 166, exteriorColor);
    ellipse(0, 0, 1.6 * radio, 1.7 * radio);
}

// Creacion de cirulo exterior pequeño
function exteriorCircleTwo() {
    ellipseMode(RADIUS);
    noStroke();
    fill(30, 178, 166, exteriorColor);
    ellipse(0, 0, 0.5 * radio, 0.5 * radio);
}
// Definimos los eventos al opimir teclas, cambiaran el color de los circulos exteriores
// igualandolo al del fondo
function keyPressed() {
    if (key === '1') {
        exteriorColor = 255;
    } else if (key === '2') {
        exteriorColor = 0;
    }
}