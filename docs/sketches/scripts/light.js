function setup() {
    createCanvas(700, 560, WEBGL);
    setAttributes('antialias', true);
    fill(237, 34, 93);
    strokeWeight(0);
}

function draw() {
    background(200);

    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;

    ambientLight(60, 60, 60);
    pointLight(255, 255, 255, locX, locY, 100);

    //ambientMaterial(250);
    specularMaterial(123);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    //rotateZ(frameCount * 0.01);
    lights();
    apple();
}


function apple() {
    size = 20;
    increment = 0.1;
    for (let u = 0; u < TWO_PI; u += increment) {
        beginShape(TRIANGLE_STRIP);
        for (let v = -PI; v < PI; v += increment) {
            x = cos(u) * (4 + 3.8 * cos(v))
            y = sin(u) * (4 + 3.8 * cos(v))
            z = (cos(v) + sin(v) - 1) * (1 + sin(v)) * log(1 - PI * v / 10) + 7.5 * sin(v)
            vertex(size * x, size * y, size * z);

            x = cos(u + 0.1) * (4 + 3.8 * cos(v))
            y = sin(u + 0.1) * (4 + 3.8 * cos(v))
            vertex(size * x, size * y, size * z);
        }
        endShape(CLOSE);
    }
}