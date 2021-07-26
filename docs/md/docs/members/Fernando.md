# José Fernando Morantes Florez

<b>Correo:</b> <a href="mailto:jfmorantesf@unal.edu.co">jfmorantesf@unal.edu.co</a> <br>
<b>Github:</b> <a href="https://github.com/FernandoMorantes">FernandoMorantes</a><br>

## Bio

Estudiante de Ingeniería de Sistemas y Computación de la Universidad Nacional de Colombia, enfocado principalmente en desarrollo de software a nivel full-stack e infraestructura en la nube. Actualmente desempeñado labores de desarrollador full-stack en la empresa de desarrollo de software Nuvu y aprendiendo acerca de infraestructura utilizando AWS (Amazon Web Services)

Poseo fuertes bases y habilidades en matemáticas y lógica enfocadas a la resolución de problemas mediante algoritmos computacionales. Persona en aprendizaje continuo, y con la creencia de que la mejor forma de desarrollar software de alta calidad a gran escala es mediante el trabajo en equipo. Amplia capacidad de automotivación.

## Interests

<ul>
  <li>Diseño de UI y UX </li>
  <li>Desarrollo de interfaces gráficas</li>
  <li>Diseño y Desarrollo de Videojuegos</li>
  <li>Infraestructura en la nube (AWS)</li>
  <li>Machine Learning</li>
</ul>

# Contributions

Exmiembro del grupo de investigacion en ciencia, ingeniería y salud (SICIS) de la Universidad Nacional de Colombia. Participación de un proyecto cuyo objetivo principal fue el desarrollo de una incubadora para neonatos de bajo costo que fuese capaz de monitorial los signos vitales basicos del bebe e hiciera un analisis mediante machine learning para la prediccion oportuna de posibles patologias.

## Hobbies

<ul>
  <li>Videojuegos.</li>
  <li>Musica.</li>
  <li>Senderismo.</li>
  <li>Deportes extremos.</li>
</ul>

# Ilusión visual 
## Ilusión de la Rejilla de Hermann y de la rejilla centelleante (scintillating grid illusion)

La ilusión de cuadrícula de Hermann es una ilusión óptica descrita por Ludimar Hermann en 1870. La ilusión se caracteriza por manchas “fantasmales” grises percibidas en las intersecciones de color blanco (o de color claro) en la rejilla sobre un fondo negro (como la foto del del ejemplo de los números de un teclado). Las manchas grises desaparecen cuando se mira directamente en una intersección.

La ilusión de centelleo de la rejilla es una ilusión óptica, descubierta por E. Lingelbach en 1994, que por lo general se considera una variación de la ilusión de la cuadrícula de Hermann.

Se construye mediante la superposición de discos blancos en las intersecciones de barras grises ortogonales en un fondo negro. Puntos oscuros parecen aparecer y desaparecer rápidamente en las intersecciones aleatorias, de ahí la etiqueta “centelleante”. Cuando una persona mantiene sus ojos directamente en una sola intersección, no aparece el punto oscuro. Los puntos oscuros desaparecen si uno está demasiado cerca o demasiado lejos de la imagen.

### Diferencias entre las ilusiones de centelleo de la rejilla y Hermann

La diferencia entre la ilusión rejilla Hermann y la ilusión de centelleo es que en esta ultima las ilusiones brillantes tienen puntos en el lugar en el cruce, mientras que no hay puntos existentes en las intersecciones de las ilusiones de la red Hermann. Ya que son tan similares, los dos nombres son comúnmente utilizados indistintamente. Pero la ilusión de centelleo no se produce con una intersección aislada, como en el caso de la rejilla de Hermann; observaciones sugieren que se requiere un mínimo de 3 × 3 intersecciones espaciados uniformemente con discos superpuestos para producir el efecto. Este requisito sugiere la participación de los procesos globales del tipo propuesto para la vinculación y agrupación de características de una imagen, además de los procesos locales.

<ul>
  <li><b>Presione 1 </b>para activar Rejilla de Bergen (rejilla centelleante) </li>
  <li><b>Presione 2 </b>para activar Rejilla de Hermann  </li>
</ul>

> :P5 sketch=/docs/sketches/scripts/ilussionFernando.js width=720, height=600

Código de la ilusión anterior 

```js
let radio = 10;
let ancho = 10;
let gris = 150;
let opa = 255;

function setup() {
    var myCanvas = createCanvas(720, 600);
}


function draw() {
    background(0);
    illusion();
}

function illusion() {
    push();
    lineas();
    pop();
    push();
    puntos();
    pop();
}

function lineas() {
    var i;
    for (i = 0; i < width; i += 50) {
        push();
        translate(i, 0);
        vertical();
        pop();
    }
    for (i = 0; i < height; i += 50) {
        push();
        translate(0, i);
        horizontal();
        pop();
    }
}

function puntos() {
    var m;
    var n;
    for (m = 0; m <= width; m += 50) {
        for (n = 0; n <= height; n += 50) {
            push();
            translate(m, n);
            center();
            pop();
        }
    }
}

function center() {
    ellipseMode(RADIUS);
    noStroke();
    fill(255, 255, 255, opa);
    ellipse(0, 0, radio, radio);
}

function vertical() {
    stroke(gris);
    strokeWeight(ancho);
    line(0, 0, 0, height);
}

function horizontal() {
    stroke(gris);
    strokeWeight(ancho);
    line(0, 0, width, 0);
}

function keyPressed() {
    if (key === '1') {
        opa = 255;
        gris = 150;
    } else if (key === '2') {
        opa = 0;
        gris = 255;
    }
}
```

El efecto de ambas ilusiones ópticas a menudo se explica por un proceso llamado inhibición neural lateral. La intensidad en un punto en el sistema visual no es simplemente el resultado de un único receptor o célula, sino el resultado de un grupo de receptores o células que responden a la presentación de los estímulos en lo que se llama un campo receptivo.

Las células ganglionares de la retina están en íntimo contacto con los fotorreceptores en un área de la retina, el área en el espacio físico al que responden los fotorreceptores es el “campo receptor” de la célula ganglionar. En el centro del campo receptivo los fotorreceptores individuales excitan la célula ganglionar cuando detectan el aumento de la luminancia. Los fotorreceptores en los alrededores inhiben las células ganglionares. Por lo tanto, desde un punto en una intersección está rodeado de más intensidad que un punto en el medio de una línea, la intersección aparece más oscura debido a la mayor inhibición.

Hay fuertes indicios de que la teoría de las células ganglionares de la retina es insostenible. Por ejemplo, haciendo que las líneas de la rejilla onduladas en lugar de rectas elimina tanto la rejilla de Hermann y ilusiones centelleo de la rejilla.

<b>Bibliografia</b>
<blockquote>
<ul>
  <li>F. Dacarett. Ilusión Óptica de Hermann o ilusión de cuadrícula (2016). "https://dacarett.com/ilusion-optica-de-hermann-o-ilusion-de-cuadricula/".  </li>
  <li>Wikipedia. (16 de Mayo de 2020). Wikipedia. Obtenido de Grid illusion: https://psychology.wikia.org/wiki/Grid_illusion#:~: text=The%20Scintillating%20grid%20illusion%20is,the%20dot%20does%20not%20appear.</li>
  <li>Wikipedia. (8 de Enero de 2021). Wikipedia. Obtenido de Grid illusion: https://en.wikipedia.org/wiki/Grid_illusion</li>
</ul>
</blockquote>

> :ToCPrevNext