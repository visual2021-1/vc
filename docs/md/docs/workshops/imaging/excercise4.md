# Conversión de la imagen a un foto-mosaico.

## Problem statement

Creación de un foto-mosaico de una imagen determinada a partir de una lista de imagenes definida
## Background

En el campo de las imágenes y la fotografía, un fotomosaico es una imagen usualmente una fotografía que ha sido dividida en secciones rectangulares (usualmente del mismo tamaño), tal como es compuesto un mosaico tradicional, con la característica de que cada elemento del mosaico es reemplazado por otra fotografía con colores promedios apropiados al elemento de la imagen original. Cuando es vista en detalle, los píxeles individuales se ven como la imagen principal, sin embargo al verla como un todo, es posible apreciar que la imagen está compuesta por cientos de miles de imágenes.

### Historia 

Relacionado con la Micrografía, arte manual del siglo IX, el cual utiliza letras y símbolos para crear imágenes más grandes. Leon Harmon de los Laboratorios Bell creó imágenes a partir de símbolos y letras en 1972, lo cual llevó a la popularidad del arte ASCII en los años 1970 y 1980.

Robert Silvers: Demostrando un gran ingenio y brincando la brecha entre el arte y ciencia, Robert Silvers es el pionero de los fotomosaicos a nivel mundial, los cuales retratan ideas que abarcan en si historias familiares y forman parte de la cultura contemporánea; ha realizado diversas clases de retratos de personalidades conocidas, monedas del mundo o ejecuciones fascinantes de pinturas clásicas convertidas en obras maestras.

Silvers inventó su arte mientras todavía era un estudiante en el MIT (1995). Sus obras intrincadas brindan una perspectiva óptica única y han ganado en el mundo gran aceptación y aclamación, ha creado grandes obras que ya forman parte de famosas colecciones como lo son: Courtage de Axa, Coca Cola, CNN, Disney, Fortune Magazine, IBM, Lucasfilm Ltd.., MasterCard International, National Geographic, y Newsweek. Uno de sus últimos proyectos fue en el 2007 con la muestra retrospectiva en Washington , D.C. en la Biblioteca del Congreso. Así mismo ha realizado diversas exposiciones en diversos países del mundo.

### Modelo de color HSB (Hue, Saturation, Brightness – Tonalidad, Saturación, Brillo)

El modelo HSB (o HSV, como se prefiera) deriva del espacio RGB y representa los colores combinando tres valores: el tono en sí (H), la saturación o cantidad de color (S) y el brillo del mismo (B). Estos valores suelen representarse en un diagrama circular (principal uso de este modelo).

Estas tres magnitudes pueden tener los siguientes valores:

<ul>
  <li><b>H</b> (color en concreto). Valores de 0-360º. La gama cromática se representa en una rueda circular y este valor expresa su posición.</li>
  <li><b>S</b> (Saturación). Valores de 0-100%. De menos a más cantidad de color.</li>
  <li><b>B</b> (Brillo). Valores de 0-100%. De totalmente oscuro a la máxima luminosidad.</li>
</ul>

De esta forma, siguiendo con el ejemplo de antes, el color R164 G25 B25 se expresaría como H0 S85 B64 según el modelo HSB.

## Code (solution) & results

Para la solución propuesta se utilizo como imagen desde la cual se crea el mosaico una obra "Puente en Villeneuve-la-Garenne" (1872) del artista Alfred Sisley. Asimismo la lista de imagenes a partir de las cuales se crea el mosaico tambien corresponden a obras del artista Alfred Sisley.

A efectos tecnicos la imagen desde la cual se crea el mosaico es de 720 x 538 pixeles y la lista de imagenes consta de 200 diferentes obras.

Inicialmente se cargan tanto la imagen principal asi como cada una de las 200 imagenes con lsa cuales se va a crear el mosaico. 

Posteriormente en la funcion setup se crea el selector que permite escoger el alto y ancho (en pixeles) de cada imagen del mosaico.

En la funcion setupMosaic se obtienen los valores HSB de cada pixel de la imagen principal y luego se realiza un promedio por cada una de las secciones cuyo alto y ancho corresponde al alto y ancho de cada imagen del mosaico (configurada desde el select explicado anteriormente). Luego, para cada uno de los valores promedio HSB de cada seccion se encuentra la imagen mas adecuada para ubicarla en la seccion especifica.

A continuación en la funcion draw se pintan cada una de las imagenes seleccionadas previamente en el orden determinado para formar el mosaico.

Finalmente se definen las funciones para el listener del selector de alto y ancho de las imagenes del mosaico y del keypress que permite visualizar la imagen original.

### Foto-mosaico

<ul>
  <li><b>Presione 1 </b>para ver imagen original </li>
  <li><b>Presione 2 </b>para ver foto-mosaico generado  </li>
</ul>

<b>*NOTA: </b> la selección del valor del valor para el scl puede tardar unos segundos mientras se recalcula el <br> foto-mosaico para la imagen


> :P5 sketch=/docs/sketches/scripts/photomosaic.js width=720, height=560

### Código

```js
// size of each cell
let imgAmount = 200;
let smaller;
let allImages = [];
let brightImages = new Array(256);
let bigPicture;
let brightnessValues = [];
let scl = 5;
let sel; 
let imagesMainPath = "/vc/docs/sketches/assets/image_mosaic/";

function preload() {
    bigPicture = loadImage(imagesMainPath + "art.jpg");
    for (i = 0; i < imgAmount; i++) {
        now = i + '.jpg';
        allImages[i] = loadImage(imagesMainPath + "photos/" + now);
    }
}

function setup() {
    sel = createSelect();
    sel.position(165, 15);
    sel.option(5);
    sel.option(10);
    sel.option(15);
    sel.option(25);
    sel.selected(scl);
    sel.changed(mySelectEvent);

    setupMosaic();
}

function setupMosaic(){
    createCanvas(bigPicture.width, bigPicture.height);
    for (let i = 0; i < allImages.length; i++) {
        allImages[i].resize(64, 64);
        avg = 0;

        for (let j = 0; j < allImages[i].width; j++) {
            for (let k = 0; k < allImages[i].height; k++) {
                avg += brightness(allImages[i].get(j, k));
            }
        }

        brightnessValues[i] = avg / (allImages[i].width * allImages[i].height);
    }

    for (let i = 0; i < brightImages.length; i++) {
        minDiff = 256;

        for (let j = 0; j < brightnessValues.length; j++) {
            diff = abs(i - brightnessValues[j]);

            if (diff < minDiff) {
                minDiff = diff;
                brightImages[i] = allImages[j];
            }
        }
    }

    smaller = createImage(bigPicture.width / scl, bigPicture.height);
    smaller.copy(bigPicture, 0, 0, bigPicture.width, bigPicture.height, 
                    0, 0, bigPicture.width / scl, bigPicture.height / scl);

    noLoop();
}

function draw() {
    background(0);

    for (let i = 0; i < (bigPicture.width / scl); i++) {
        for (let j = 0; j < (bigPicture.width / scl); j++) {
            index = int(brightness(smaller.get(i, j)));
            image(brightImages[index], i * scl, j * scl, scl, scl);
        }
    }

    textStyle(BOLD);
    stroke(128, 255, 255);
    textAlign(CENTER);
    textSize(18);
    text("Seleccione un valor para el scl: ", 17, 22);
}

function mySelectEvent() {
    scl = sel.value();
    setupMosaic();
    draw();
}

// Definimos los eventos al opimir teclas, cambiaran el color de los circulos exteriores
// igualandolo al del fondo
function keyPressed() {
    if (key === '1') {
        sel.remove();
        image(bigPicture, 0, 0);
    } else if (key === '2') {
        sel = createSelect();
        sel.position(165, 15);
        sel.option(5);
        sel.option(10);
        sel.option(15);
        sel.option(25);
        sel.selected(scl);
        sel.changed(mySelectEvent);
        draw();
    }
}
```

## Conclusions & Future Work

<ul>
  <li>La producción de un Foto-mosaico es una tarea ardua y que puede solucionarse facil y eficientemente mediante algoritmos computacionales</li>
  <li>A medida de que se aumenta el tamaño de cada imagen del mosaico se puede apreciar mejor cada una de estas imagenes pero el resultado final al observar la imagen general en forma de mosaico se obtiene un resultado final menos homomgeneo (caotico) e incluso se la imagen inicial puede ser practicamente irreconocible</li>
  <li>Al momento de escoger la lista de imagenes con las cuales se va a crear el mosaico es importante tener un dataset amplio y variado ya que de esto depende el resultado a nivel general del mosaico final</li>
  <li>A mayor numero de imagenes para generar el mosaico se reduce la posibilidad de tener imagenes repetidas en el mosaico final</li>
</ul>

## References

<blockquote>
<ul>
  <li>Wikipedia. (5 de Julio de 2019). Wikipedia. Obtenido de Grid illusion: "https://es.wikipedia.org/wiki/Fotomosaico".  </li>
  <li>S. Folch. Modos o modelos de color HSB (o HSV) y códigos hexadecimales: qué son y usos específicos (27 de Mayo de 2010).
         Wikipedia. Obtenido de Grid illusion: https://www.comunicacion-multimedia.info/2010/05/
        modos-o-modelos-de-color-hsb-o-hsv-y.html#:~:text=El%20modelo%20HSB%20(o%20HSV,brillo%20del%20mismo%20(B).&text=
        Valores%20de%200%2D360%C2%BA.,S%20(Saturaci%C3%B3n).</li>
  <li>The coding train. (6 de Enero de 2017). Wikipedia. Obtenido de Coding Challenge #49: Photo Mosaic with White House Social 
        Media Images: https://editor.p5js.org/jnsjknn/sketches/HJU0bQ_fN</li>
</ul>
</blockquote>

> :ToCPrevNext