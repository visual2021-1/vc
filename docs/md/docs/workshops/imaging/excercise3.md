# Image and video processing

# Conversión de la imagen a ascii art

Es un medio artístico que utiliza recursos computarizados fundamentados en los caracteres de definidos por el ASCII es un conjunto de 95 caracteres basado en el alfabeto latino. 

## Planteamiento del problema
Crear una imagen compuesta únicamente por caracteres ASCII que simule la imagen original.

## Antecedentes

En 1898 Flora F.F. Stacey se sentó frente a su máquina de escribir. No para escribir una página normal, sino para crear una pequeña obra de arte que es considerado como uno de los primeros ejemplos del ASCII Art. <br>

Aquella práctica renació en los años 1960, y lo hizo más por razones prácticas que artísticas. Las primeras impresoras no eran capaces de imprimir gráficos, así que los usuarios se las ingeniaron para crear imágenes impresas a base de caracteres de texto. Aquello se convirtió en una disciplina por mérito propio, y hoy en día, aunque algo más en segundo plano, el ASCII Art sigue muy vivo.<br>


### De la máquina de escribir a las BBSes

Entre los pioneros de este campo estuvo Kenneth C. Knowlton, que trabajó en Bell Labs y creó algunos de los primeros ejemplos "clásicos" de este arte. Lo hizo, eso sí, con una variante algo distinta, el llamado EBCDIC, creado con una codificación de caracteres algo distinta y que se usaba por ejemplo en los mainframes de IBM.<br>

La proliferación a finales de los años 1970 y principios de los 1980 de las BBSes acabó por convertir este tipo de imágenes en una práctica habitual por parte de muchos usuarios. Enviar imágenes era inviable con las limitaciones de los ordenadores y las líneas de conexión de la época, así que convertirlas en ASCII Art se convirtió en la norma no escrita.<br>

Aunque en la década previa al computador personal de escritorio, algunos artistas lo utilizaban de manera experimental y como medio alternativo de arte gráfico, utilizando tarjetas perforadas de 80 y 96 columnas, así como diversos programas compiladores o utilitarios (COBOL, RPG, IBM DITTO), combinado a impresoras de matriciales de alta velocidad para fines de presentación.<br>

  <center><img src="https://i.blogs.es/65659d/mrbean/1366_2000.jpg"  width=250/></center>


Aquella práctica se hizo vital para todos esos escenarios en los que la transmisión de imágenes no era posible, e incluía por ejemplo a las citadas máquinas de escribir, pero también a terminales de ordenador en modo texto o las citadas BBSes.<br>

Su mayor aplicación se concentra en la operación de equipos computarizados y de comunicación para representar caracteres de texto o identificar dispositivos de control computarizado que trabajan exclusivamente con texto y no tienen capacidad de procesamiento de imágenes.<br>

El arte ASCII ha servido como lenguaje fuente para representar logos de compañías y productos, para crear diagramas procedimentales de flujo de operaciones y también en el diseño de los primeros videojuegos. Programas editores de texto especializados tal como IMG2TXT o JPG2TXT, están diseñados para dibujar figuras geométricas y rellenar áreas de luz y sombra con una combinación de caracteres basándose en algoritmos matemáticos.<br>

Desde el punto de vista de evolución de la gráfica computarizada, el Arte ASCII replantea la observación tradicional de una imagen en base al conjunto de elementos pictóricos que la conforman, un efecto óptico similar al del puntillismo. <br>

## Codigo & resultados 

### Conversión de imagen a texto
Un método consiste en muestrear la imagen en escala de grises con una precisión de menos de 8 bits y luego asignar un carácter para cada valor.<br>
Estos generadores de arte ASCII a menudo permiten a los usuarios elegir la intensidad y el contraste de la imagen generada.<br>

Tres factores limitan la fidelidad de la conversión, especialmente de fotografías:<br>
<ul>
  <li>Profundidad (soluciones: espaciado de línea reducido; estilo en negrita; elementos de bloque; fondo de color; buen sombreado ) </li>
  <li>Nitidez (soluciones: un texto más largo, con una fuente más pequeña; un mayor conjunto de caracteres; fuentes de ancho variable )  </li>
  <li>Ratio (soluciones con problemas de compatibilidad: fuente con cuadrícula cuadrada; estilizada sin interlineado adicional ).</li>
</ul>


### Libreria p5.quadrille.js

En geometría, el mosaico cuadrado o la cuadrícula cuadrada es un mosaico regular del plano euclidiano. John Horton Conway lo llamó cuadrilla.<br>

El ángulo interno del cuadrado es π/2, por lo que cuatro cuadrados en un punto forman un ángulo completo de 2π. Es uno de los tres mosaicos regulares del plano. Los otros dos son el Teselado triangular  y Teselado hexagonal .<br>

La biblioteca comprende una Quadrille class y proporciona las funciones createQuadrille y drawQuadrille p5. La Quadrille class implementa la transformación geométrica y los operadores lógicos constructivos de geometría sólida. También implementa varios métodos de administración de memoria, como borrar , clonar , llenar , insertar y reemplazar. Se puede utilizar como una interfaz para convertir hacia/desde otras representaciones como matrices , imágenes y bitboards.<br>

<b>createQuadrille() </b>

Crea un quadrille que puede llenarse con cualquier combinación de ceros (para celdas vacías), en este caso integrariamos una imagen de instancia p5.Image 

```md

quadrille = createQuadrille(20 * scl, img);

```
<b>drawQuadrille() </b>

Y la uncion que dibuja a quadrille 

```md

drawQuadrille(quadrille, 0, 0, 40 / scl, 1.6 / scl, color(255));

```

Por lo tanto obtenemos la siguiente imagen. 
 

<center><img src="/docs/sketches/assets/Quadrille.PNG"  width=550/></center>

### Uso de los distintos caracteres ASCII

Una vez obtenido la division de pixeles procedemos a realizar la caracterizacion de 
<blockquote>
<ul>
<li><b>!</b> este carácter es muy delgado en algunas tipografías y muy grueso en otras.</li><br>
<li><b># $ % 8 @ C D H M N S W X Y </b> un excelente relleno para sólido</li><br>
<li><b>&</b>no se usa mucho debido a su forma problemática.</li><br>
<li><b>'</b> usado en todos los estilos </li><br>
<li><b>( ) -" </b> Su grosor varía un poco dependiendo de la fuente.</li><br>
<li><b>* </b> el tamaño y posición de este carácter varía mucho, por lo que no suele ser un buen relleno.</li><br>
<li><b>+ </b>  único carácter mediano que no alcanza la base de la línea.</li><br>
<li><b>, </b> usado en todos los estilos, a veces es más alto que el punto, a veces no.</li><br>
<li><b>- . </b> usado en todos los estilos</li><br>
<li><b>/ </b> la inclinación varía (especialmente entre DOS y Windows)</li><br>
<li><b>0 1 2 3 4 5 B E F G Q R Z g i z</b> no se usa con frecuencia.</li><br>
<li><b>6 7 9 </b> útil para escala de grises.</li><br>
<li><b>: ;</b> útil para bordes en sólido.</li><br>
<li><b>< = > ? O T U r t u a v x</b> se usa sobre todo en lineal.</li><br>
<li><b>A </b> útil para ángulos</li><br>
<li><b>I J K L </b> se usa para ángulos, y a veces para líneas verticales.</li><br>
<li><b>P a b c a d e h l m n o p s w </b> arácter de antialiasing sólido muy común.</li><br>
<li><b>V </b> se usa para conectar dos líneas diagonales, no se ve bien en todas las tipografías.</li><br>
<li><b>f </b> a veces se usa para líneas verticales inclinadas.</li><br>
<li><b>j k </b> útil para líneas verticales inclinadas en algunos estilos.</li><br>

</ul>
</blockquote>

Se presenta una grafica que representa el equilibrio de los pixeles y la densidad de los mismos

<center><img src="http://sol.gfxile.net/textfx/balancepic_asc_dyn.png"  width=550/></center>

Aunque existe un mapa de caracteres estándares para imágenes en escala de grises, negro -> blanco.
<blockquote>
   "$ @ B% 8 & WM # * oahkbdpqwmZO0QLCJUYXzcvunxrjft / \ | () 1 {} []? -_ + ~ <> i! LI;:," ^ `'. " 
</blockquote>

### Función que convierte el pixel a un ASCII definido

Por lo tanto, de acuerdo a lo anterior se definio una lista de 67 caracteres que definirar el tono de gris para el ASCII art<br>

```md
 var chars = ["$", "@", "B", "%", "8", "&", "W", "M", "#", "*", 
             "o", "a", "h", "k", "b", "d", "p", "q", "w","m",
             "Z", "O", "0", "Q", "L", "C", "J", "U", "Y", "X", 
             "z", "c", "v", "u", "n", "x", "r", "j", "f", "t", 
             "/", "|", "(", ")", "1", "{", "}", "[", "]", "?",
             "-", "_", "+", "~", "<", ">", "i", "!", "l", "I", 
             ";", ":", ",", "^", "`", "'", "." ];
```

La funcion que convierte los pixeles en un caracter se encuentra definida de la sigiente manera <br>

```md
  for( let i =0; i < quadrille.height; i++)
    {
      for( let j =0; j < quadrille.width; j++){
        let value = (quadrille.read(i, j)[0] + quadrille.read(i, j)[1] + quadrille.read(i, j)[2]) / 3;
        value = Math.floor(value / 4);    
        quadrille.fill(i, j, chars[value]);
      }
    }
```

En donde se convierte usando la media aritmética la imagen a escala de grises, y luego se divide por 4 para que pueda ser reemplazado por un caracter del arreglo previamente definido.  <br>

### Resultados

> :P5 sketch=/docs/sketches/scripts/asciiArt.js width=720, height=560, lib1=https://cdn.jsdelivr.net/gh/objetos/p5.quadrille.js/p5.quadrille.js

El codigo completo se ve representado de la siguiente manera<br>

```md
  var quadrille;
var img;
var chars = ["$", "@", "B", "%", "8", "&", "W", "M", "#", "*", 
             "o", "a", "h", "k", "b", "d", "p", "q", "w","m",
             "Z", "O", "0", "Q", "L", "C", "J", "U", "Y", "X", 
             "z", "c", "v", "u", "n", "x", "r", "j", "f", "t", 
             "/", "|", "(", ")", "1", "{", "}", "[", "]", "?",
             "-", "_", "+", "~", "<", ">", "i", "!", "l", "I", 
             ";", ":", ",", "^", "`", "'", "." ];

function preload() {
  img = loadImage('/vc/docs/sketches/assets/cat.jpg');
}

function setup() {
  createCanvas(770, 550);
}

function draw() {
  image(img, 0, height / 2, img.width /2, img.height / 2);
  
  if (frameCount % 200 === 0) {
    let scl = 7;
    quadrille = createQuadrille(20 * scl, img);
   
    for( let i =0; i < quadrille.height; i++)
    {
      for( let j =0; j < quadrille.width; j++){
        let value = (quadrille.read(i, j)[0] + quadrille.read(i, j)[1] + quadrille.read(i, j)[2]) / 3;
        value = Math.floor(value / 4);    
        quadrille.fill(i, j, chars[value]);
      }
    }
    drawQuadrille(quadrille, 0, 0, 40 / scl, 1.6 / scl, color(255));
    const start = new Date().getTime();
    let elapsed = new Date().getTime() - start;
    console.log("Elapsed time " + elapsed);

  }
}
```


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