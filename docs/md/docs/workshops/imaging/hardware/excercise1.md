 
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
 
Adicionalmente se incluyó una conversión usada en multiples aplicaciones, corresponde al componente mas grande entre los canales :
 
> :Formula align=center
>
> ```
>  Y'=max(R,G,B) = M.
> ```
 
 
## Code (solution) & results
 
### Escala de grises en imágenes
 
Para lograr la conversión de las imágenes a escala de grises (promedio RGB, Luma) en esta ocasión se trabajara con WebGL, la idea será mostrar en el canvas un cubo en 3D con la imagen a la que se le hará la transformación posicionada en cada una de sus caras y con la ayuda del Fragment Shader se realizaran dichas transformaciones dependiendo de la entrada que suministre el usuario.

Podremos observar cada uno de los filtros mencionados al dar click sobre el canvas y oprimir una de las teclas mencionadas a continuación:



| Tecla |         Resultado         |
|:-----:|:-------------------------:|
|   1   |       Promedio RGB        |      
|   2   |     Componente más grande |
|   3   |       Luma (SDTV)         |
|   4   |      Imagen Original      |
 

### Resultados
 
Se presentan los resultados obtenidos:
 
> :Tabs
> > :Tab title= Imagen RGB y Luma
> > 
> > > :P5 sketch=/docs/sketches/scripts/hardware/RGBLumaImagen.js, width=1000, height=410
>
> > :Tab title= C&oacute;digo p5
> >
> > ```js | RGBImagen.js
> >   let imgShader;
> >   let shaderTexture;
> >   let img;
> >
> >   let angle=0;
> >   let gray = 0;
> >
> >   function preload(){
> >      // cargamos imagen y shader
> >   img = loadImage('/vc/docs/sketches/assets/exampleImage.jpg');
> >   imgShader = loadShader('/vc/docs/sketches/scripts/hardware/texture.vert','/vc/docs/sketches/scripts/hardware/texture.frag');
> >   }
> >
> >   function setup() {
> >
> >   pixelDensity(1);
> >   createCanvas(windowWidth, 400, WEBGL);
> >   noStroke();
> >
> >   // inicializar la capa del createGraphics y Quitar bordes 
> >   shaderTexture = createGraphics(512, 512, WEBGL);
> >   shaderTexture.noStroke();
> >   }
> >
> >   function draw() {
> >   shaderTexture.shader(imgShader);
> >
> >   //Se defomem valores uniformes para el fragment shader
> >   imgShader.setUniform("u_img", img);
> >   imgShader.setUniform("u_key", gray);
> >
> >   
> >   // Se Renderiza el shader
> >   shaderTexture.rect(0,0,width,height);
> >
> >   background(0);
> >
> >   // Efecto de bombilla 
> >   pointLight(255, 255, 255, 0, 0, 500);
> >   let dx= mouseX-width/2;
> >   let dy= mouseY-height/2;
> >   pointLight(100,250,255,dx,dy,100);
> >
> >   translate(0, 0, 0);
> >   
> >   push();
> >   //Se pasa el shader de la imagen como textura
> >   texture(shaderTexture);
> >   translate(0, 0, 0);
> >   rotateZ(angle);
> >   rotateX(angle);
> >   rotateY(angle*2); 
> >   box(200);
> >   pop();
> >   
> >   // Rotacion de la caja
> >   angle += 0.001;
> >   
> >   
> >   }
> >
> >   // declaramos los eventos 
> >
> >   function keyPressed() {
> >      if (key === '4') {
> >      gray = 0;
> >      } else if (key === '1') { 
> >      gray = 1;
> >      } else if (key === '2') {
> >      gray = 2;
> >      } else if (key === '3') {
> >      gray = 3;
> >      } 
> >   }
> >
> >   function windowResized(){
> >   residzeCanvas(windowWidth, windowHeight);
> >   }
>
> > :Tab title= C&oacute;digo Fragment
> >
> > ```glsl | texture.frag
> >   #ifdef GL_ES
> >   precision mediump float;
> >   #endif
> >   
> >   varying vec2 vTexCoord;
> >   uniform sampler2D u_img;
> >   uniform int u_key;
> >
> >   float grayscale(vec3 color) {
> >   float lightness;
> >   
> >   if (u_key==1){
> >         float I=(color.r + color.g + color.b) / 3.0; // Promedio RGB
> >         lightness = I;
> >      } else if (u_key==2){
> >         float V= max(max(color.r,color.g),color.b);  // Componente mayot
> >         lightness = V;
> >      } else if (u_key==3){ // Luma
> >         float Y= dot(color, vec3(0.299, 0.587, 0.114)); // SDTV
> >         lightness = Y;
> >      }
> >   return lightness;
> >   }
> >
> >   void main() {
> >   vec2 uv = vTexCoord;
> >
> >   uv.y = 1.0 - uv.y;
> >   vec4 tex = texture2D(u_img, uv);
> >   float gray =grayscale(tex.rgb);
> >   
> >   float threshR = gray ;
> >   float threshG = gray ;
> >   float threshB = gray ;
> >   
> >   if (u_key==0){
> >      threshR = tex.r ;
> >      threshG = tex.g ;
> >      threshB = tex.b ;
> >   }
> >   vec3 thresh = vec3(threshR, threshG, threshB);
> >   gl_FragColor = vec4(thresh, 1.0);
> >   }
>
> > :Tab title= C&oacute;digo Vertex
> >
> > ```glsl | texture.vert
> >   // vert file and comments from adam ferriss
> >   // https://github.com/aferriss/p5jsShaderExamples
> >   
> >   attribute vec3 aPosition;
> >   attribute vec2 aTexCoord;
> >   // lets get texcoords just for fun! 
> >   varying vec2 vTexCoord;
> >   
> >   void main() {
> >   
> >     // copy the texcoords
> >     vTexCoord = aTexCoord;
> >     // copy the position data into a vec4, using 1.0 as the w component
> >     vec4 positionVec4 = vec4(aPosition, 1.0);
> >   
> >     // scale the rect by two, and move it to the center of the screen
> >     // if we don't do this, it will appear with its bottom left corner in the center of the sketch
> >     // try commenting this line out to see what happens
> >     positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
> >   
> >     // send the vertex information on to the fragment shader
> >     gl_Position = positionVec4;
> >   }
>
 
### Escala de grises en Videos
 
Para el caso de conversión a escala de grises en videos podemos pensar que será bastante similar al procedimiento aplicado anteriormente en imágenes y es totalmente acertado, con la diferencia de que en este caso lo mostraremos en una superficie 2Dy que debemos tener la consideración de obtener la información del video con los métodos correspondientes de P5, como lo veremos a continuación en la pestaña de código.

Podremos observar cada uno de los filtros mencionados al dar click sobre el canvas y oprimir una de las teclas mencionadas a continuación:


| Tecla |         Resultado         |
|:-----:|:-------------------------:|
|   1   |       Promedio RGB        |      
|   2   |     Componente más grande |
|   3   |       Luma (SDTV)         |
|   4   |      Imagen Original      |

### Resultados
 
Se presentan los resultados obtenidos, para visualizarlos por favor dar click en el canvas:
 
 
> :Tabs
> > :Tab title= Video RGB y Luma
> > 
> > > :P5 sketch=/docs/sketches/scripts/hardware/RGBLumaVideo.js, width=1000, height=410
>
> > :Tab title= C&oacute;digo p5
> >
> > ```js | RGBVideo.js
> >   let theShaderVideo;
> >   let shaderVideo;
> >   let video;
> >
> >   let gray = 0;
> >
> >   function preload(){
> >      // cargamos video y shader
> >   video = createVideo(['/vc/docs/sketches/assets/sample.mp4']);
> >   video.hide();
> >
> >   theShaderVideo = loadShader('/vc/docs/sketches/scripts/hardware/texture.vert','/vc/docs/sketches/scripts/hardware/texture.frag');  
> >   }
> >
> >   function setup() {
> >   pixelDensity(1);
> >   createCanvas(windowWidth, 400, WEBGL);
> >   noStroke();
> >
> >   // inicializar la capa del createGraphics y Quitar bordes
> >   shaderVideo = createGraphics(windowWidth, windowHeight, WEBGL);
> >   shaderVideo.noStroke();  
> >   
> >   video.volume(0);
> >   }
> >
> >   function draw() {
> >   shaderVideo.shader(theShaderVideo);
> >
> >   //Se defomem valores uniformes para el fragment shader
> >
> >   theShaderVideo.setUniform('u_img', video);
> >   theShaderVideo.setUniform('u_key', gray);
> >   
> >   // Se Renderiza el shader
> >   shaderVideo.rect(0,0,width,height);
> >
> >   background(0);
> >
> >   //Se pasa el shader del video como textura
> >   push();
> >   texture(shaderVideo);
> >   translate(0, 0, -100);
> >   plane(width,height);
> >   pop();  
> >   }
> >
> >   // declaramos los eventos 
> >   function keyPressed() {
> >      if (key === '4') {
> >      gray = 0;
> >      } else if (key === '1') { 
> >      gray = 1;
> >      } else if (key === '2') {
> >      gray = 2;
> >      } else if (key === '3') {
> >      gray = 3;
> >      } 
> >   }
> >
> >   function windowResized(){
> >   resizeCanvas(windowWidth, windowHeight);
> >   }
> >
> >   function mousePressed() {
> >      video.loop();
> >      
> >   }
>
> > :Tab title= C&oacute;digo Fragment
> >
> > ```glsl | texture.frag
> >   #ifdef GL_ES
> >   precision mediump float;
> >   #endif
> >   
> >   varying vec2 vTexCoord;
> >   uniform sampler2D u_img;
> >   uniform int u_key;
> >
> >   float grayscale(vec3 color) {
> >   float lightness;
> >   
> >   if (u_key==1){
> >         float I=(color.r + color.g + color.b) / 3.0; // Promedio RGB
> >         lightness = I;
> >      } else if (u_key==2){
> >         float V= max(max(color.r,color.g),color.b);  // Componente mayot
> >         lightness = V;
> >      } else if (u_key==3){ // Luma
> >         float Y= dot(color, vec3(0.299, 0.587, 0.114)); // SDTV
> >         lightness = Y;
> >      }
> >   return lightness;
> >   }
> >
> >   void main() {
> >   vec2 uv = vTexCoord;
> >
> >   uv.y = 1.0 - uv.y;
> >   vec4 tex = texture2D(u_img, uv);
> >   float gray =grayscale(tex.rgb);
> >   
> >   float threshR = gray ;
> >   float threshG = gray ;
> >   float threshB = gray ;
> >   
> >   if (u_key==0){
> >      threshR = tex.r ;
> >      threshG = tex.g ;
> >      threshB = tex.b ;
> >   }
> >   vec3 thresh = vec3(threshR, threshG, threshB);
> >   gl_FragColor = vec4(thresh, 1.0);
> >   }
>
> > :Tab title= C&oacute;digo Vertex
> >
> > ```glsl | texture.vert
> >   // vert file and comments from adam ferriss
> >   // https://github.com/aferriss/p5jsShaderExamples
> >   
> >   attribute vec3 aPosition;
> >   attribute vec2 aTexCoord;
> >   // lets get texcoords just for fun! 
> >   varying vec2 vTexCoord;
> >   
> >   void main() {
> >   
> >     // copy the texcoords
> >     vTexCoord = aTexCoord;
> >     // copy the position data into a vec4, using 1.0 as the w component
> >     vec4 positionVec4 = vec4(aPosition, 1.0);
> >   
> >     // scale the rect by two, and move it to the center of the screen
> >     // if we don't do this, it will appear with its bottom left corner in the center of the sketch
> >     // try commenting this line out to see what happens
> >     positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
> >   
> >     // send the vertex information on to the fragment shader
> >     gl_Position = positionVec4;
> >   }
>
 
## Conclusions & future work
<ul>
 <li>Es necesario explorar otros métodos e implementaciones para mejorar los resultados presentados. </li>
 <li> Es importante considerar el costo computacional de métodos como Luma, especialmente al aplicarlo en videos de larga duración </li>
 
</ul>
 
Se espera continuar con la investigación aplicando distintos algoritmos y evaluando los resultados obtenidos.

<b>Bibliografia</b>
<blockquote>
<ul>
   <li>Wikipedia. Obtenido de HSL and HSV: https://en.wikipedia.org/wiki/HSL_and_HSV#Disadvantages</li>
  <li> Wikipedia. Obtenido de Luma (video): https://en.wikipedia.org/wiki/Luma_(video)</li>
   <li>Processing. Shaders: https://processing.org/tutorials/pshader/</li>
   <li>Welcome to p5.js shaders: https://itp-xstory.github.io/p5js-shaders/#/</li>


</ul>
</blockquote>
 
> :ToCPrevNext
 


 





 

