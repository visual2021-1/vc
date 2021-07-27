# Harold Nicolás Saavedra

<b>Correo:</b> <a href="mailto:hnsaavedraa@unal.edu.co">hnsaavedraa@unal.edu.co</a> <br>
<b>Github:</b> <a href="https://github.com/hnsaavedraa">hnsaavedraa</a><br>

## Bio

Estudiante de Ingeniería de Sistemas y Computación, enfocado en desarrollo de software y especialmente interesado en el área de diseño de UI y UX. Actualmente desempeñando el cargo desarrollador Fullstack adquiriendo experiencia en el area del Cloud Computing con la plataforma Amazon Web Services (AWS).

Tengo habilidades verbales, matemáticas y analíticas enfocadas en la resolución de problemas de manera algorítmica, persona proactiva, en aprendizaje continuo, con facilidad para establecer relaciones interpersonales y trabajar en equipo. Amplia capacidad de automotivación, orientada al desarrollo de sinergias positivas y resolución de problemas.



## Interests

<ul>
  <li>Diseño de UI y UX </li>
  <li>Cloud Computing</li>
  <li>Desarrollo de Videojuegos</li>
</ul>


# Contributions

Sin contribuciones destacables hasta el momento.

## Hobbies

<ul>
  <li>Lectura. </li>
  <li>Narración Oral. </li>
  <li>Series y Peliculas.</li>
  <li>Videojuegos.</li>
</ul>

 
# Ilusión visual 
## Ilusión de Ebbinghaus

La ilusión de Ebbinghaus es una ilusión óptica que altera la percepción de las dimensiones relativas. En la versión más conocida de la ilusión, dos círculos de la misma medida son colocados cercanos uno a otro y son circundados, uno por círculos de un tamaño mayor y el otro por círculos de menor tamaño; el primer círculo central parecerá más pequeño que el otro.

Es denominada así en honor a su descubridor, el psícólogo alemán Hermann Ebbinghaus(1850-1909) fue popularizada en el mundo de habla inglesa por Titchener en un libro de texto sobre psicología experimental de año 1901, de ahí que su nombre alternativo sea "Círculos de Titchener".

Para apreciar la ilusión correctamente podemos aplicar los siguientes comandos despues de hacer click sobre el canvas:

<ul>
  <li><b>Tecla 1:</b> Activar Circunferencia. </li>
  <li><b>Tecla 2:</b> Desactivar Circunferencia.  </li>

</ul>



> :P5 sketch=/docs/sketches/scripts/ilussionNicolas.js width=720, height=560

Código de la ilusión anterior 

```js
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
    if (key === '0') {
        exteriorColor = 255;
    } else if (key === '1') {
        exteriorColor = 0;
    }
}
```

Aunque comúnmente se le ha asimilado como una ilusión de tamaño, trabajos recientes, sugieren que el factor crítico en la ilusión es la distancia de los círculos circundantes y la continuidad del anillo, lo que lo convierten en una variación de la Ilusión de Delboeuf, que veremos a continuación:

 <center><img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Delboeuf_illusion_.png"  width=450/></center>


Si los círculos que rodean están cerca del círculo central, éste aparentará ser más grande, mientras que si se alejan la percepción será contraria. Obviamente, el tamaño de los círculos circundantes dictan cuan cerca pueden estar del círculo central, resultando en muchos estudios que confunden las 2 variables.


La ilusión de Ebbinghaus ha jugado un papel crucial en el reciente debate sobre la existencia de sendas separadas en el cerebro para la percepción y la acción . Se ha argumentado que la Ilusión de Ebbinghaus distorsiona la percepción del tamaño, pero cuando a un sujeto se le pide responder con una acción tal como agarrar con la mano, ninguna distorsión de tamaño ocurre.​ Sin embargo trabajos recientes,​ sugieren que los experimentos no estaban correctos. Los estímulos originales limitaban la posibilidad de error en la acción de coger con la mano, por otro lado, al hacer más exacta la acción de agarrar con la mano, y presentados en versiones de grande y pequeño del estímulo aislado -lo que resulta en una "no ilusión", ya que no hay segundo círculo central que actúe como referencia-, Franz et al, concluye que ambos sistemas tanto de percepción como de acción son igualmente engañados por la ilusión de Ebbinghaus.

<b>Bibliografia</b>
<blockquote>
<ul>
  <li>Roberts B, Harris MG, Yates TA. (2005). The roles of inducer size and distance in the Ebbinghaus illusion (Titchener circles). </li>
  <li>V. H. Franz, F. Scharnowski and K. R. Gegenfurtner (2005). "Illusion Effects on Grasping Are Temporally Constant Not Dynamic".  </li>
   <li>Wikipedia. (2 de Abril de 2021). Wikipedia. Obtenido de Delboeuf illusion: https://en.wikipedia.org/wiki/Delboeuf_illusion</li>
  <li>Wikipedia. (10 de Enero de 2021). Wikipedia. Obtenido de Ebbinghaus illusion: https://en.wikipedia.org/wiki/Ebbinghaus_illusion</li>
</ul>
</blockquote>

> :ToCPrevNext