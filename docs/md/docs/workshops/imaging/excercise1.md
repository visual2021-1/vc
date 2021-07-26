 
# Conversión a escala de grises.
 
## Problem statement
Aplicar conversión a escala de grises en una imagen y un video usando el promediado RGB y Luma.
 
## Background
 
Para ahondar un poco en el tema se explicara antes conceptos fundamentales.
 
#### RGB
RGB (red, green, blue) es la composición del color en términos de la intensidad de los colores primarios de la luz, con el se realiza el  tratamiento de la señal de vídeo que trata por separado las señales de los tres colores rojo, verde y azul. Al usarlo independientemente, proporciona mayor calidad y reproducción más fiel del color.
 
El modelo RGB está formado por los tres componentes de colores primarios aditivos y como mínimo un componente de sincronismo. Los componentes de color son las señales rojo, verde y azul; siendo transmitidos cada uno independiente y aislado del resto.
 
De esta forma no hay pérdidas en el tratamiento de la imagen puesto que los colores primarios siguen existiendo como tal en su transmisión. Por el contrario, mediante este sistema hay mucha información redundante, con el consiguiente aumento del ancho de banda necesario respecto a otros métodos de transmisión. Por ejemplo, cada color lleva el valor de brillo de toda la imagen, de forma que esta información está por triplicado.
 
<center><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Synthese%2B.svg/800px-Synthese%2B.svg.png"  width=250/></center>
 
#### Escala de Grises
 
En computación una escala de grises es la representación de una imagen en la que cada pixel se dibuja usando un valor numérico individual que representa su luminancia, en una escala que se extiende entre blanco y negro.
 
Algunas formas de transformar una imagen a escala de grises:
 
### Promedio RGB
 
Es sin duda la solución trivial donde por medio del promedio de los 3 canales (rojo,verde y azul) para cada pixel de la imagen obtendremos un valor que sobreescribirá el valor de cada canal para este píxel, de esta manera la imagen que obtenemos tendrá un gris bastante razonable.
 
Dando una definición un poco más formal esta es simplemente la proyección de un punto sobre el eje neutral, la altura vertical de un punto en nuestro cubo inclinado. La ventaja es que, junto con los cálculos de tonalidad y crominancia de la distancia euclidiana, esta representación conserva las distancias y los ángulos de la geometría del cubo RGB.
 
<center><img src="/docs/sketches/assets/promedioRGB.jpeg"  width=250/></center>
 
Dicho esto se podría calcular con la siguiente fórmula:
 
> :Formula align=center
>
> ```
> I = avg(R,G,B) = \frac{1}{3} (R +  G +  B)
> ```
 
### Luma
 
En una transmisión de señal de vídeo, luma es el componente que codifica la información de luminosidad de la imagen. En términos generales, es algo muy similar a la versión en blanco y negro de la imagen original. Luma y crominancia combinadas proporcionan la señal denominada señal de vídeo compuesto, utilizada en multitud de aplicaciones; pueden enviarse conjuntamente o transmitirse independientemente. Forman parte de la codificación de vídeo en los estándares de TV NTSC y PAL, entre otros.
 
Es un término comúnmente utilizado en el procesamiento digital de imágenes para caracterizar a cada píxel.
 
En los formatos digitales que siguen el estándar CCIR_601 que sería equivalente a SDTV , la luma de un píxel se calcula con la fórmula
 
> :Formula align=center
>
> ```
>  Y'=0,299 * R + 0,587 * G + 0,114 * B.
> ```
 
Adicionalmente se incluyó la conversión usada por los sistemas UHDTV y HDR modernos que corresponde a:
 
> :Formula align=center
>
> ```
>  Y'=0,2627 * R + 0,6780 * G + 0,0593 * B.
> ```
 
 
## Code (solution) & results
 
### Escala de grises en imágenes
 
Para lograr la conversión de las imágenes a escala de grises (promedio RGB, Luma) basta con acceder al componente RGB de cada pixel de la imagen, posteriormente realizar el cálculo ya sea del promedio o del coeficiente Luma (fórmulas expuestas anteriormente) para finalmente crear nuevas imágenes que contendrán el valor obtenido en cada uno de los canales del pixel. De esta manera se obtendrán los resultados mostrados continuos al código fuente de la solución.
 
### Codigo
 
Se presenta el código fuente:
 
```js
 
let imagenOriginal, imagenPromedio, imagenLuma, imagenLuma2;
 
function preload() {
   imagenOriginal = loadImage('/vc/docs/sketches/assets/exampleImage.jpg');
   imagenPromedio = createImage(402, 322);
   imagenLuma = createImage(402, 322);
   imagenLuma2 = createImage(402, 322);
}
 
function setup() {
   createCanvas(804, 644);
   imagenOriginal.resize(402, 322);
}
 
function draw() {
 
   imagenOriginal.loadPixels();
   imagenPromedio.loadPixels();
   imagenLuma.loadPixels();
   imagenLuma2.loadPixels();
 
   for (let y = 0; y < imagenOriginal.height; y++) {
       for (let x = 0; x < imagenOriginal.width; x++) {
 
           let index = (x + y * imagenOriginal.width) * 4;
 
           let r = imagenOriginal.pixels[index + 0];
           let g = imagenOriginal.pixels[index + 1];
           let b = imagenOriginal.pixels[index + 2];
 
           let bw = (r + g + b) / 3; // Promedio
 
           imagenPromedio.pixels[index + 0] = bw;
           imagenPromedio.pixels[index + 1] = bw;
           imagenPromedio.pixels[index + 2] = bw;
           imagenPromedio.pixels[index + 3] = 255;
 
 
           let luma = r * .299 + g * .587 + b * .114; //SDTV
 
           imagenLuma.pixels[index + 0] = luma;
           imagenLuma.pixels[index + 1] = luma;
           imagenLuma.pixels[index + 2] = luma;
           imagenLuma.pixels[index + 3] = 255;
 
 
           let luma2 = r * .263 + g * .678 + b * .059; //UHDTV HDR
 
           imagenLuma2.pixels[index + 0] = luma2;
           imagenLuma2.pixels[index + 1] = luma2;
           imagenLuma2.pixels[index + 2] = luma2;
           imagenLuma2.pixels[index + 3] = 255;
 
       }
   }
   imagenPromedio.updatePixels();
   imagenLuma.updatePixels();
   imagenLuma2.updatePixels();
 
   textSize(10);
   stroke(0);
   fill(30, 178, 166)
   textStyle(BOLDITALIC);
 
 
   image(imagenOriginal, 0, 0);
   text('IMAGEN ORIGINAL', 20, 20);
   image(imagenPromedio, imagenOriginal.width, 0);
   text('PROMEDIO RGB', imagenOriginal.width + 20, 20);
   image(imagenLuma, 0, imagenOriginal.height);
   text('LUMA (SDTV)', 20, imagenOriginal.height + 20);
   image(imagenLuma2, imagenOriginal.width, imagenOriginal.height);
   text('LUMA (UHDTV)', imagenOriginal.width + 20, imagenOriginal.height + 20);
}
 
```
 
### Resultados
 
Se presentan los resultados obtenidos:
 
> :P5 sketch=/docs/sketches/scripts/BNW.js width=804, height=644
 
### Escala de grises en Videos
 
Para el caso de conversión a escala de grises en videos podemos pensar que será bastante similar al procedimiento con imágenes y es totalmente acertado, el tratamiento sobre los píxeles del video es exactamente el mismo que el empleado al procesar imágenes, solo debemos tener la consideración de obtener la información del video con los métodos correspondientes de P5, como lo veremos a continuación.
 
### Codigo
 
Se presenta el código fuente:
 
```js
var widthI= 429;   // Anchura del lienzo
var heightI = 322;  // Altura del lienzo
 
let videoOriginal, videoPromedio, videoLuma, videoLuma2;
 
function setup() {
   videoOriginal = createVideo(['/vc/docs/sketches/assets/sample.mp4']);
   videoOriginal.hide();
   createCanvas(804, 644);
 
   videoPromedio = createImage(429, 322);
   videoLuma = createImage(429, 322);
   videoLuma2 = createImage(429, 322);
   videoOriginal.volume(0);
}
 
function draw() {
 
   background(0);
   videoOriginal.loadPixels();
   videoPromedio.loadPixels();
   videoLuma.loadPixels();
   videoLuma2.loadPixels();
 
   for (let x = 0; x < videoOriginal.width; x++) {
       for (let y = 0; y < videoOriginal.height; y++) {
 
           let index = (x + y * videoOriginal.width) * 4;
 
           let r = videoOriginal.pixels[index + 0];
           let g = videoOriginal.pixels[index + 1];
           let b = videoOriginal.pixels[index + 2];
 
           let bw = (r + g + b) / 3; // Promedio
 
           videoPromedio.pixels[index + 0] = bw;
           videoPromedio.pixels[index + 1] = bw;
           videoPromedio.pixels[index + 2] = bw;
           videoPromedio.pixels[index + 3] = 255;
 
           let luma = r * .299 + g * .587 + b * .114; //SDTV
 
           videoLuma.pixels[index + 0] = luma;
           videoLuma.pixels[index + 1] = luma;
           videoLuma.pixels[index + 2] = luma;
           videoLuma.pixels[index + 3] = 255;
 
           let luma2 = r * .263 + g * .678 + b * .059; //UHDTV HDR
 
           videoLuma2.pixels[index + 0] = luma2;
           videoLuma2.pixels[index + 1] = luma2;
           videoLuma2.pixels[index + 2] = luma2;
           videoLuma2.pixels[index + 3] = 255;
       }
   }
   videoPromedio.updatePixels();
   videoLuma.updatePixels();
   videoLuma2.updatePixels();
 
 
   textSize(10);
   stroke(0);
   fill(30, 178, 166)
   textStyle(BOLDITALIC);
 
   image(videoOriginal, 0, 0);
   text('IMAGEN ORIGINAL', 20, 20);
   image(videoPromedio, widthI, 0);
   text('PROMEDIO RGB', widthI + 20, 20);
   image(videoLuma, 0, heightI);
   text('LUMA (SDTV)', 20, heightI + 20);
   image(videoLuma2, widthI, heightI);
   text('LUMA (UHDTV)', widthI + 20, heightI + 20);
 
}
 
function mousePressed() {
   videoOriginal.loop();
}
```
 
### Resultados
 
Se presentan los resultados obtenidos, para visualizarlos por favor dar click en el canvas:
 
 
> :P5 sketch=/docs/sketches/scripts/videoBNW.js width=804, height=644
 
## Conclusions & future work
<ul>
 <li>Es necesario explorar otros métodos e implementaciones para mejorar los resultados presentados. </li>
 <li> Es importante considerar el costo computacional de métodos como Luma, especialmente al aplicarlo en videos de larga duración </li>
 
</ul>
 
Se espera continuar con la investigación aplicando distintos algoritmos y evaluando los resultados obtenidos.

<b>Bibliografia</b>
<blockquote>
<ul>
   <li>Wikipedia. (23 de Marzo de 2021). Wikipedia. Obtenido de HSL and HSV: https://en.wikipedia.org/wiki/HSL_and_HSV#Disadvantages</li>
  <li>Wikipedia. (16 de Septiembre de 2020). Wikipedia. Obtenido de Luma (video): https://en.wikipedia.org/wiki/Luma_(video)</li>
<li>Developer Mozilla. (11 de Marzo de 2021). MDN Web Docs. Obtenido de Digital video concepts: https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_concepts</li>

</ul>
</blockquote>
 
> :ToCPrevNext
 

