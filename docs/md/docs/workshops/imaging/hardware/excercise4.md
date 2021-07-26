# Conversión de la imagen a un foto-mosaico utilizando shaders.

## Problem statement

Creación de un foto-mosaico de una imagen determinada a partir de una lista de imagenes definida mediante la utilización de shaders

## Background

En el campo de las imágenes y la fotografía, un fotomosaico es una imagen usualmente una fotografía que ha sido dividida en secciones rectangulares (usualmente del mismo tamaño), tal como es compuesto un mosaico tradicional, con la característica de que cada elemento del mosaico es reemplazado por otra fotografía con colores promedios apropiados al elemento de la imagen original. Cuando es vista en detalle, los píxeles individuales se ven como la imagen principal, sin embargo al verla como un todo, es posible apreciar que la imagen está compuesta por cientos de miles de imágenes.

### Foto-mosaico

<ul>
  <li><b>Presione 1 </b>para intercalar entre la imagen original y el mosaico generado</li>
</ul>

<b>*NOTA: </b> la resolucion de la imagen, que se refiere al numero de imagenes por fila que conforman el mosaico, puede ser modificada con el selector en la esquina superior izquierda

> :Tabs
> >:Tab title= Código
> > ```js
> > let mosaico;
> > let symbol1;
> > let bigPicture;
> > let showMosaico;
> > let imagesMainPath = "/vc/docs/sketches/assets/image_mosaic/";
> > let resolution = 100;
> > const pixelSize = 64;
> > const numImagenes = 70;
> > 
> > function preload() {
> >   bigPicture = loadImage(imagesMainPath + "art-shaders.jpg");
> >   symbol1 = loadImage(imagesMainPath + "mosaicDataset.jpg");
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
> >   sel.option(5);
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
> >   sel.selected(resolution);
> >   sel.changed(mySelectEvent);
> > }
> > 
> > function mySelectEvent() {
> >   resolution = sel.value();
> >   mosaico.setUniform("resolution", resolution);
> > }
> > 
> > function setupMosaic() {
> >   createCanvas(500, 670, WEBGL);
> >   textureMode(NORMAL);
> >   noStroke();
> >   shader(mosaico);
> >   mosaico.setUniform("image", bigPicture);
> >   mosaico.setUniform("resolution", resolution);
> >   mosaico.setUniform("WIDTH_PIXEL", pixelSize);
> >   mosaico.setUniform("NUM_IMAGES", numImagenes);
> >   mosaico.setUniform("HEIGHT_PIXEL", pixelSize);
> >   showMosaico = true;
> >   mosaico.setUniform("debug", showMosaico);
> >   mosaico.setUniform("symbol1", symbol1);
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
> >     mosaico.setUniform("debug", showMosaico);
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
> >:Tab title= Resultado
> > > :P5 sketch=/docs/sketches/scripts/hardware/photomosaic.js width=500, height=670

## Conclusions & Future Work

<ul>
  <li>La producción de un Foto-mosaico es una tarea ardua y que puede solucionarse facil y eficientemente mediante algoritmos computacionales</li>
  <li>A medida de que se aumenta el tamaño de cada imagen del mosaico se puede apreciar mejor cada una de estas imagenes pero el resultado final al observar la imagen general en forma de mosaico se obtiene un resultado final menos homomgeneo (caotico) e incluso se la imagen inicial puede ser practicamente irreconocible</li>
  <li>Al momento de escoger la lista de imagenes con las cuales se va a crear el mosaico es importante tener un dataset amplio y variado ya que de esto depende el resultado a nivel general del mosaico final</li>
  <li>A mayor numero de imagenes para generar el mosaico se reduce la posibilidad de tener imagenes repetidas en el mosaico final</li>
</ul>