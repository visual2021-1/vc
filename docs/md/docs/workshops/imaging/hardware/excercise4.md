# Conversión de la imagen a un foto-mosaico utilizando shaders.

## Problem statement

Creación de un foto-mosaico de una imagen determinada a partir de una lista de imagenes definida mediante la utilización de shaders

## Background

En el campo de las imágenes y la fotografía, un fotomosaico es una imagen usualmente una fotografía que ha sido dividida en secciones rectangulares (usualmente del mismo tamaño), tal como es compuesto un mosaico tradicional, con la característica de que cada elemento del mosaico es reemplazado por otra fotografía con colores promedios apropiados al elemento de la imagen original. Cuando es vista en detalle, los píxeles individuales se ven como la imagen principal, sin embargo al verla como un todo, es posible apreciar que la imagen está compuesta por cientos de miles o incluso millones de imágenes.

Para la realizacion de este algoritmo de computacion visual se hizo uso de shaders desarrollados en GLSL el cual es un lenguaje de alto nivel de shader con una sintaxis basada en el lenguaje de programación C y diseñado específicamente para su uso dentro del entorno de OpenGL.

El algoritmo parte de un dataset de imagenes concatenadas de manera horizontal en un solo archivo .JPG ordenadas por su nivel de brillo percibido el cual fue calculado utilizando la libreria ``` pillow  ``` en python.

```python
from PIL import Image
from PIL import ImageStat
import math

def brightness( im_file ):
   im = Image.open(im_file)
   stat = ImageStat.Stat(im)
   r,g,b = stat.rms
   return math.sqrt(0.241*(r**2) + 0.691*(g**2) + 0.068*(b**2))
```

Posteriormente la imagen original se recrea apartir de texturas 2D cuadradas de un color plano dependiendo del valor de la resolucion, el cual puede ser modificado interactivamente (ej. si la resolucion tiene un valor de 50 la imagen se divide en filas de 50 texturas 2D cuadradas). 

Luego, se realiza el calculo del brillo de dichas texturas 2D y se encuentra la posicion aproximada dentro del dataset concatenado de las imagenes que conformarán el mosaico correspondiendo con dicho nivel de brillo para extraer la imagen especifica que ira ubicada en esa seccion del mosaico. Este proceso se repite con todos los cuadrados generados previamente hasta construir la imagen completa. 
### Code (solution) & results

<ul>
  <li><b>Presione 1 </b>para intercalar entre la imagen original y el mosaico generado</li>
</ul>

<b>*NOTA: </b> la resolucion de la imagen, que se refiere al numero de imagenes por fila que conforman el mosaico, puede ser modificada con el selector en la esquina superior izquierda

> :Tabs
> >:Tab title= Código P5.js
> > ```js
> > let mosaico;
> > let mosaicDatasetImg;
> > let originalImage;
> > let showMosaico;
> > let imagesMainPath = "/vc/docs/sketches/assets/image_mosaic/";
> > let imgsPerRow = 100;
> > const numImagenes = 70;
> > 
> > function preload() {
> >   originalImage = loadImage(imagesMainPath + "art-shaders.jpg");
> >   mosaicDatasetImg = loadImage(imagesMainPath + "mosaicDataset.jpg");
> >   mosaico = loadShader(
> >     "/vc/docs/sketches/scripts/hardware/shader.vert",
> >     "/vc/docs/sketches/scripts/hardware/photomosaic.frag"
> >   );
> > }
> > 
> > function setup() {
> >   setupSelect();
> >   setupMosaic();
> > }
> > 
> > function setupSelect(){
> >   sel = createSelect();
> >   sel.position(15, 15);
> >   sel.option(10);
> >   sel.option(50);
> >   sel.option(100);
> >   sel.option(150);
> >   sel.option(200);
> >   sel.option(500);
> >   sel.option(2000);
> >   sel.option(10000);
> >   sel.option(100000);
> >   sel.option(1000000);
> >   sel.option(10000000);
> >   sel.option(100000000);
> >   sel.selected(imgsPerRow);
> >   sel.changed(mySelectEvent);
> > }
> > 
> > function mySelectEvent() {
> >   imgsPerRow = sel.value();
> >   mosaico.setUniform("imgsPerRow", imgsPerRow);
> > }
> > 
> > function setupMosaic() {
> >   createCanvas(718, 900, WEBGL);
> >   textureMode(NORMAL);
> >   noStroke();
> >   shader(mosaico);
> >   mosaico.setUniform("originalImage", originalImage);
> >   mosaico.setUniform("imgsPerRow", imgsPerRow);
> >   mosaico.setUniform("numImagenes", numImagenes);
> >   showMosaico = true;
> >   mosaico.setUniform("showMosaico", showMosaico);
> >   mosaico.setUniform("mosaicDatasetImg", mosaicDatasetImg);
> > }
> > 
> > function draw() {
> >   background(33);
> >   cover();
> > }
> > 
> > function cover() {
> >   beginShape();
> >   vertex(-width / 2, -height / 2, 0, 0, 0);
> >   vertex(width / 2, -height / 2, 0, 1, 0);
> >   vertex(width / 2, height / 2, 0, 1, 1);
> >   vertex(-width / 2, height / 2, 0, 0, 1);
> >   endShape(CLOSE);
> > }
> > 
> > function keyPressed() {
> >   if (key === "1") {
> >     showMosaico = !showMosaico;
> >     mosaico.setUniform("showMosaico", showMosaico);
> > 
> >     if (showMosaico) {
> >       setupSelect();
> >     } else {
> >       sel.remove();
> >     }
> >   }
> > }
> > ```
>
> >:Tab title= Código Fragment Shader
> > ```glsl
> > precision mediump float;
> > uniform sampler2D originalImage;
> > uniform sampler2D mosaicDatasetImg;
> > uniform bool showMosaico;
> > uniform float imgsPerRow;
> > uniform float numImagenes;
> > 
> > // interpolated texcoord (same name and type as in vertex shader)
> > varying vec2 vTexCoord;
> > varying vec4 vVertexColor;
> > 
> > void main() {
> >     vec2 mosaicDatasetImgCoord = vTexCoord*imgsPerRow;
> >     vec2 originalImageCoord = floor(mosaicDatasetImgCoord);
> >     mosaicDatasetImgCoord = mosaicDatasetImgCoord-originalImageCoord;
> >     originalImageCoord = originalImageCoord*vec2(1.0)/vec2(imgsPerRow);
> >     vec4 col = texture2D(originalImage,originalImageCoord);
> >     float brightnessValue  =  dot(col.xyz, vec3(0.35, 0.35, 0.35));
> >     
> >     float temp = brightnessValue*(numImagenes);
> >     float level = floor(temp);
> >     
> >     float scalingfactor  =  1.0/numImagenes;
> > 
> >     float y0 = 0.0;
> >     float x0 = (level-(numImagenes*(floor(level/numImagenes))))*scalingfactor;
> > 
> >     vec2 finalCord = (mosaicDatasetImgCoord*vec2(1.0)/vec2(numImagenes,1))+vec2(x0,y0);
> >     vec4 finalColor = texture2D(mosaicDatasetImg,finalCord);
> > 
> >     gl_FragColor  =  showMosaico?finalColor:col;
> > }
> > ```
>
> >:Tab title= Resultado
> > > :P5 sketch=/docs/sketches/scripts/hardware/photomosaic.js width=718, height=900

## Conclusions & Future Work

<ul>
  <li>Se nota una clara y enorme mejora en el tiempo de procesamiento para el calculo general del mosaico con la utilizacion de shaders en contraste con el codigo realizado unicamente con P5.js pasando de un tiempo de aproximadamente 5 segundos para la construccion de un mosaico de 60x40 imagenes a un tiempo menor a 0.5 segundos para la construccion de un mosaico de 100 millones x 100 millones de imagenes.</li>
  <li>A medida de que se aumenta el tamaño de cada imagen del mosaico se puede apreciar mejor cada una de estas imagenes pero el resultado final al observar la imagen general en forma de mosaico se obtiene un resultado final menos homomgeneo (caotico) e incluso se la imagen inicial puede ser practicamente irreconocible</li>
  <li>Al momento de escoger la lista de imagenes con las cuales se va a crear el mosaico es importante tener un dataset amplio y variado ya que de esto depende el resultadodel mosaico final</li>
  <li>A mayor numero de imagenes para generar el mosaico se reduce la posibilidad de tener imagenes repetidas en el mosaico final</li>
</ul>