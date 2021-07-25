 
<script src="/docs/sketches/scripts/p5.min.js" /></script>

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
 

 
### Resultados
 
Se presentan los resultados obtenidos:
 
> :P5 sketch=/docs/sketches/scripts/hardware/RGBLumaImagen.js width=1000, height=410
 

 
> :ToCPrevNext
 

