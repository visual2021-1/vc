# Image and video processing

# Conversión de la imagen a ascii art

Es un medio artístico que utiliza recursos computarizados fundamentados en los caracteres de definidos por el ASCII es un conjunto de 95 caracteres basado en el alfabeto latino. 

## Planteamiento del problema

En la implementación realizada basada en el . <a href="https://www.shadertoy.com/view/lssGDj?ref=dtf.ru">codigo de shadowrtoy</a> 
del shader se particiona la imagen en bloques de 8x8 pixeles y se procede a hacer el cálculo del LUMA para cada uno de ellos. Posteriormente, teniendo el cuanta el LUMA obtenido en cada bloque se determina que caracter ASCII se debe usar de acuerdo a la codificación realizada previamente de algunos caracteres ASCII. Posterior mente, el shader hace un barrido bloque a bloque y de acuerdo si es un bloque con brillo 1 es reemplazado por el caracter asignado, si el brillo de este bloque es 0, se deja el espacio.

A medida que el sombreador itera píxel por píxel, enviamos la coordenada (x, y), el bloque y el número que codifica el carácter del bloque a una función que comprueba si la posición del píxel está codificada como 1 en el número de carácter y devuelve el valor correspondiente para que la textura esperada se cree píxel a píxel en el vector gl_FragColor. El resultado del sombreador de fragmentos se usa luego como una textura de un plano 2D, generando así el resultado deseado.

Si bien, esta herramienta de mapeo de los caracteres facilita el proceso de la implementación del Ascii Art, limita el uso de caracteres a los que sean representables en la matriz de 5 x 5, es decir que caracteres de otros lenguajes que utilicen caracteres curvos o figuras abstractas no podrían ser utilizados en esta implementación.

## Antecedentes

En 1898 Flora F.F. Stacey se sentó frente a su máquina de escribir. No para escribir una página normal, sino para crear una pequeña obra de arte que es considerado como uno de los primeros ejemplos del ASCII Art. <br>

Aquella práctica renació en los años 1960, y lo hizo más por razones prácticas que artísticas. Las primeras impresoras no eran capaces de imprimir gráficos, así que los usuarios se las ingeniaron para crear imágenes impresas a base de caracteres de texto. Aquello se convirtió en una disciplina por mérito propio, y hoy en día, aunque algo más en segundo plano, el ASCII Art sigue muy vivo.<br>


### De la máquina de escribir a las BBSes

Entre los pioneros de este campo estuvo Kenneth C. Knowlton, que trabajó en Bell Labs y creó algunos de los primeros ejemplos "clásicos" de este arte. Lo hizo, eso sí, con una variante algo distinta, el llamado EBCDIC, creado con una codificación de caracteres algo distinta y que se usaba por ejemplo en los mainframes de IBM.<br>

La proliferación a finales de los años 1970 y principios de los 1980 de las BBSes acabó por convertir este tipo de imágenes en una práctica habitual por parte de muchos usuarios. Enviar imágenes era inviable con las limitaciones de los ordenadores y las líneas de conexión de la época, así que convertirlas en ASCII Art se convirtió en la norma no escrita.<br>

Aunque en la década previa al computador personal de escritorio, algunos artistas lo utilizaban de manera experimental y como medio alternativo de arte gráfico, utilizando tarjetas perforadas de 80 y 96 columnas, así como diversos programas compiladores o utilitarios (COBOL, RPG, IBM DITTO), combinado a impresoras de matriciales de alta velocidad para fines de presentación.<br>

Aquella práctica se hizo vital para todos esos escenarios en los que la transmisión de imágenes no era posible, e incluía por ejemplo a las citadas máquinas de escribir, pero también a terminales de ordenador en modo texto o las citadas BBSes.<br>

Su mayor aplicación se concentra en la operación de equipos computarizados y de comunicación para representar caracteres de texto o identificar dispositivos de control computarizado que trabajan exclusivamente con texto y no tienen capacidad de procesamiento de imágenes.<br>

El arte ASCII ha servido como lenguaje fuente para representar logos de compañías y productos, para crear diagramas procedimentales de flujo de operaciones y también en el diseño de los primeros videojuegos. Programas editores de texto especializados tal como IMG2TXT o JPG2TXT, están diseñados para dibujar figuras geométricas y rellenar áreas de luz y sombra con una combinación de caracteres basándose en algoritmos matemáticos.<br>

Desde el punto de vista de evolución de la gráfica computarizada, el Arte ASCII replantea la observación tradicional de una imagen en base al conjunto de elementos pictóricos que la conforman, un efecto óptico similar al del puntillismo. <br>

## Codigo & resultados 

### Resultados


> :Tabs
> > :Tab title=Ascii Art Video
> > 
> > > :P5 sketch=/docs/sketches/scripts/hardware/asciiArtVideo.js width=720, height=560, lib1=https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.5/dat.gui.min.js
>
> > :Tab title= Camara 
> > 
> > > :P5 sketch=/docs/sketches/scripts/hardware/asciiArtShader.js width=720, height=560, lib1=https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.5/dat.gui.min.js
> > 
> >
>
> > :Tab title= Ascii Art
> > 
> > ```js | Ascii art hardware
> > let aShader;
> > 
> > 
> > //Precarga el shader y el video
> > function preload() {
> >   video = createVideo(['/vc/docs/sketches/assets/oso.mp4']);
> >     aShader = loadShader('/vc/docs/sketches/scripts/hardware/textureAscii.vert', '/vc/docs/sketches/scripts/hardware/textureAscii.frag');
> >   asciiShader = loadShader('/vc/docs/sketches/ascii.vert', '/vc/docs/sketches/ascii.frag');
> >   video.hide();
> > }
> > 
> > function setup() {
> >   // shaders require WEBGL mode to work
> >   createCanvas(768, 520, WEBGL);
> >   noStroke();
> >   video.loop();
> > 
> > }
> > 
> > function draw() {
> >   // shader() Activación del Shader con nuestro Shader
> >   shader(aShader);
> >   // Se pasa el video como textura
> >   aShader.setUniform('tex', video);
> >   // rect gives us some geometry on the screen
> >  rect(0, 0, width, height);
> > }
> > 
> > ```
>
> > :Tab title= Vertex Shader Code
> >
> > 
> > ```glsl | ascii.vert
> > #ifdef GL_ES
> > precision mediump float;
> > #endif
> > 
> > attribute vec3 aPosition;
> > attribute vec2 aTexCoord;
> > 
> > varying vec2 vTexCoord;
> > 
> > void main() {
> >   vTexCoord = aTexCoord;
> > 
> >   vec4 positionVec4 = vec4(aPosition, 1.0);
> >   positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
> > 
> >   gl_Position = positionVec4;
> > }
> > ```
>
> > :Tab title=Fragment Shader Code
> >
> > 
> > ```glsl | ascii.frag
> > #ifdef GL_ES
> > precision mediump float;
> > #endif
> > 
> > uniform sampler2D tex;
> > 
> > int getBit(int n, int a) {
> >   float value = float(n);
> >   for(float i = 27.0; i >= 0.0; i -= 1.0) {
> >     float val = pow(2.0,i*1.0);
> >     
> >     if (val <= value) {
> >       value -= val;
> >       if(i == float(a)) return 1;
> >     }
> >   }
> >   return 0;
> > }
> > 
> > float character(int n, vec2 p)
> > {
> > 	p = floor(p*vec2(4.0, -4.0) + 2.5);
> >     if (clamp(p.x, 0.0, 4.0) == p.x)
> > 	{
> >         if (clamp(p.y, 0.0, 4.0) == p.y)	
> > 		{
> >         	int a = int(floor(p.x+0.5) + 5.0 * floor(p.y+0.5));
> > 			if (getBit(n,a) == 1) return 1.0;
> > 		}	
> >     }
> > 	return 0.0;
> > }
> > 
> > void main() {
> >   vec2 pix = gl_FragCoord.xy;
> >   pix.y = 393.0*2.0 - pix.y;
> >   vec2 resol = vec2(393.0*2.0, 393.0*2.0);
> > 	vec3 col = texture2D(tex, floor(pix/8.0)*8.0/resol).rgb;	
> > 	
> > 	float gray = 0.3 * col.r + 0.59 * col.g + 0.11 * col.b;
> > 	
> > 	int n =  4096;                // .
> > 	if (gray > 0.2) n = 65600;    // :
> > 	if (gray > 0.3) n = 332772;   // *
> > 	if (gray > 0.4) n = 15255086; // o 
> > 	if (gray > 0.5) n = 23385164; // &
> > 	if (gray > 0.6) n = 15252014; // 8
> > 	if (gray > 0.7) n = 13199452; // @
> > 	if (gray > 0.8) n = 11512810; // #
> > 	
> > 	vec2 p = mod(pix/4.0, 2.0) - vec2(1.0);
> >     
> > 	col = vec3(character(n, p));
> > 
> > 	gl_FragColor = vec4(col, 1.0);
> > }
> > ```



## Conclusiones & trabajo futuro

<ul>
  <li>Así pues, a una mayor distancia del observador, la imagen hecha en Arte ASCII adquiere mayor definición; exactamente lo opuesto a lo que sucede cuando, al observar con lupa una imagen impresa en un diario, la distancia entre los píxeles que la conforman se hace evidente y la imagen se desvirtúa. </li>

  <center><img src="/docs/sketches/assets/asciiCapture.PNG"  width=550/></center>
  
  <li>Hay herramientas que por ejemplo convierten diagramas hechos con ASCII Art en ilustraciones de buena calidad, pero sobre todo lo que vemos en internet son servicios como este que permiten convertir imágenes en sus equivalentes gráficos de ASCII Art. </li>
 

   <center><img src=" https://i.blogs.es/2842a3/ascii3/1366_2000.jpg"  width=550/></center>

 <li>VLC tiene un filtro para ver vídeos en formato ASCII Art, por ejemplo—, y sin duda una de las más famosas es esa versión de 'Star Wars Episodio IV: Una nueva esperanza' .  </li>
 

   <center><img src=" https://i.blogs.es/eb9504/starascii/1366_2000.jpg"  width=550/></center>

</ul>


<b>Bibliografia</b>
<blockquote>
<ul>
<li>Bourke, P. (21 de Diciembre de 2019). paulbourke. Obtenido de Character representation of grey scale images: http://paulbourke.net/dataformats/asciiart/</li>
<li>Charalambos, J. P. (5 de Febrero de 2021). p5.quadrille.js. Obtenido de p5.quadrille: https://objetos.github.io/p5.quadrille.js/</li>
<li>Pastor, J. (18 de Marzo de 2018). xataka. Obtenido de Cuando el ASCII Art conquistó nuestras pantallas: https://www.xataka.com.co/historia-tecnologica/cuando-el-ascii-art-conquisto-nuestras-pantallas</li>
<li>Pitaluga, P. (27 de Junio de 2020). dev.to. Obtenido de ASCII art/Pixel art in js: https://dev.to/patopitaluga/ascii-art-pixel-art-in-js-2oij</li>
<li>pouet. (15 de Abril de 2011). pouet.net. Obtenido de ASCII representing gray scale: http://www.pouet.net/topic.php?which=8056&page=1</li>
<li>Wikipedia. (15 de Junio de 2020). Wikipedia - Enciclopedia libre. Obtenido de Arte ASCII: https://es.wikipedia.org/wiki/Arte_ASCII</li>

  
</ul>
</blockquote>
 

> :ToCPrevNext