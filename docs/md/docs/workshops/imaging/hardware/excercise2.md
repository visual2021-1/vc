## Aplicación de algunas máscaras de convolución.


Se quería ajustar el ejercicio anterior para diferentes máscaras de convolución a imágenes y videos para ver su efecto y analizar la eficacia y el resultado de cada una de estas pero en este caso haciendo uso de aceleración por hardware.

Para hacer esto se hicieron algunos cambios al ejercicio anterior para permitir especificar el kernel que se va a usar y poder calcular la eficacia de este.

A continuación podemos ver el funcionamiento de la implementación de máscaras de convolución en video e imagen por hardware.

En este caso solo comparamos el rendimiento de los métodos en la aplicación de convoluciones del video ya que la comparativa se realiza sobre el número de cuadros mostrados por segundo o el frameRate.

> :P5 sketch=/docs/sketches/scripts/hardware/convolucion.js width=640, height=450

Video con hardware

> :P5 sketch=/docs/sketches/scripts/hardware/video_convolucion.js width=640, height=450
