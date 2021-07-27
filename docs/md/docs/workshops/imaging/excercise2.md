## Aplicación de algunas máscaras de convolución.


Se quería aplicar diferentes máscaras de convolución a imágenes y videos para ver su efecto y analizar la eficacia y el resultado de cada una de estas.


primero cargamos la imagen original y creamos el canvas sobre el que vamos a trabajar, definiendo también una nueva imagen que será el destino donde quedará la imagen con los efectos de las máscaras de convolución

![Fragmento de codigo](/docs/sketches/assets/codigo1.png)


Luego de esto calculamos el tamaño del alto de la imagen dividido en 4 para una máscara de convolución a cada sección

![Fragmento de codigo](/docs/sketches/assets/codigo2.png)


se recorre el ancho de la imagen y el tamaño de la sección que se está trabajando, es este caso desde el inicio hasta ¼ del alto .
Se hace uso de la función auxiliar convolución la cual recibe la imagen original el índice de los píxeles la matriz que corresponde a la máscara de convolución y el tamaño de esta, en este caso se utilizaron 4 kernels que se pueden ver [aca](https://en.wikipedia.org/wiki/Kernel_(image_processing)) y son, el identidad que debe darnos como resultado la misma imagen, un kernel de deteccion de bordes, un kernel para hacer blur de tamano 3x3 y una version alternativa al kernel de deteccion de bordes 


![Fragmento de codigo](/docs/sketches/assets/codigo3.png)
 

Se usa una función de convolución habitual donde a partir del kernel y los píxeles de la imagen se calcula el resultado de los nuevos píxeles y estos se retornan


El proceso anterior se realiza  para cada uno de los kernels mencionados


Luego se actualizan los píxeles de la imagen y se obtiene el siguiente resultado

### Imagen original

![Selva](/docs/sketches/assets/selva.jpg)

### Con máscaras de convolución

> :P5 sketch=/docs/sketches/scripts/convolucion.js width=720, height=510

### Video 

Después de realizar este proceso para una única imagen se aplicó a un video, donde se aplicaron las mismas máscara de convolución pero en videos individuales

![Fragmento de codigo](/docs/sketches/assets/codigo4.png)

Aca se creó una función para cada efecto donde pasamos los mismos parámetros y hacemos la actualización de los pixeles al finalizar y en la función draw se hace el respectivo llamado

![Fragmento de codigo](/docs/sketches/assets/codigo5.png)


Dar click en el sketch para cargar

> :P5 sketch=/docs/sketches/scripts/video_convolucion.js width=800, height=580

Como conclusión podemos ver que el proceso de aplicar máscaras de convolución se puede aplicar de manera muy fácil y casi idéntico tanto para imágenes como para videos y que su resultado es similar y que su efecto depende estrictamente del kernel que se está usando, como en el caso de la detección de bordes, donde un kernel captura mayor detalle de la imagen que el otro y donde el efecto blur del kernel de 3*3 no es muy notorio.


Dicho lo anterior una posibilidad a futuro podría ser el implementar todo el proceso con kernels de distintos tamaños para observar las variaciones y el efecto que esto tendría sobre las imágenes o videos.




> :ToCPrevNext