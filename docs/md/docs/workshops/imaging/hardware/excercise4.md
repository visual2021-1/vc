# Conversión de la imagen a un foto-mosaico utilizando shaders.

## Problem statement

Creación de un foto-mosaico de una imagen determinada a partir de una lista de imagenes definida mediante la utilización de shaders

## Background

En el campo de las imágenes y la fotografía, un fotomosaico es una imagen usualmente una fotografía que ha sido dividida en secciones rectangulares (usualmente del mismo tamaño), tal como es compuesto un mosaico tradicional, con la característica de que cada elemento del mosaico es reemplazado por otra fotografía con colores promedios apropiados al elemento de la imagen original. Cuando es vista en detalle, los píxeles individuales se ven como la imagen principal, sin embargo al verla como un todo, es posible apreciar que la imagen está compuesta por cientos de miles o incluso millones de imágenes.

### Foto-mosaico

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
  <li>La producción de un Foto-mosaico es una tarea ardua y que puede solucionarse facil y eficientemente mediante algoritmos computacionales</li>
  <li>A medida de que se aumenta el tamaño de cada imagen del mosaico se puede apreciar mejor cada una de estas imagenes pero el resultado final al observar la imagen general en forma de mosaico se obtiene un resultado final menos homomgeneo (caotico) e incluso se la imagen inicial puede ser practicamente irreconocible</li>
  <li>Al momento de escoger la lista de imagenes con las cuales se va a crear el mosaico es importante tener un dataset amplio y variado ya que de esto depende el resultado a nivel general del mosaico final</li>
  <li>A mayor numero de imagenes para generar el mosaico se reduce la posibilidad de tener imagenes repetidas en el mosaico final</li>
</ul>