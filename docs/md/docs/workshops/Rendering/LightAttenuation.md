# Atenuación de luz

Una de las propiedades básicas de la luz es que pierde su intensidad cuanto más se aleja de su fuente, esto se conoce como atenuación de Luz.
Este es el caso por el cual la temperatura en la Tierra es menor que la de Venus y Mercurio pero mayor que la de Marte. La intensidad de la luz del sol cambia en proporción a la distancia del sol. <br>

En física , la atenuación es la pérdida gradual de la intensidad del flujo a través de un medio . Por ejemplo, las gafas oscuras atenúan la luz solar , el plomo atenúa los rayos X y el agua y el aire atenúan tanto la luz como el sonido a tasas de atenuación variables.
Un caso de uso común para esto es replicar la luz emitida por una bombilla desnuda.<br>

Adicional a esto en la computación visual algunas luces admiten la atenuación de su intensidad en función de la distancia. Esto le permite modular la intensidad de la luz de acuerdo con la distancia del punto sombreado. De forma predeterminada, la intensidad de una luz es inversamente proporcional al cuadrado de la distancia desde la fuente de luz también llamado foco (Distancia inversa ^ 2).<br>
 
Sin embargo, dos cuestiones pueden surgir de esta ley física:<br>
 
Los objetos ubicados cerca de la fuente de luz reciben una intensidad cercana al valor de la fuente.<br>

Las luces continúan contribuyendo a la iluminación de objetos muy lejanos. Hay que tener en cuenta que las intensidades de luz cercanas a un épsilon muy pequeño se consideran automáticamente como no contribuyentes.<br>
 
La información anterior se basó  en la investigación expuesta en threejsfundamentals en su artículo <a href="https://threejsfundamentals.org/threejs/lessons/threejs-lights.html">Three.js Lights</a> y el siguiente <a href="https://clarissewiki.com/3.6/light_attenuation.html">artículo</a>  de clarisse Isotropix.<br>


<canvas id="c" style="height: 500px; width: 100%;"></canvas>
<script type="module" src="../../../docs/sketches/scripts/light.js"></script>
