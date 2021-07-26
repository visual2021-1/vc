# Elsa Johanna Arias M.


<img src="https://3.bp.blogspot.com/-TxQ4BqN8uWk/WmYubM514aI/AAAAAAAACbQ/mLSaKatSoz8ipYNEnq2srgFPO6RWxE0SQCLcBGAs/s320/bt213.gif" alt="this slowpoke moves"  width=250/>


<b>Correo:</b> <a href="mailto:ejariasm@unal.edu.co">ejariasm@unal.edu.co</a> <br>
<b>Github:</b> <a href="https://github.com/ejariasm">ejariasm</a><br>

## Bio

Estudiante de ingeniería de sistemas y computación de la Universidad Nacional de Colombia. Con experiencia en manejo de sistemas de información, desarrollo e implementación web, soporte técnico y automatización de procesos. 

Durante mis estudios tuve la oportunidad de practicar diversos tópicos como diseño y desarrollo de software, redes, diseño de bases de datos, algoritmos, inteligencia artificial, y gerencia de proyectos. Habilidades de análisis, resolución de problemas y auto aprendizaje

## Interests

<ul>
  <li>Inteligencia artificial y conductual </li>
  <li>Criptografia</li>
  <li>Diseño de bases de datos</li>
</ul>


## Hobbies

<ul>
  <li>Aprendizaje de lenguas. </li>
  <li>Aprendizaje sobre música.  </li>
  <li>Aprender a tocar guitarra.</li>
  <li>Dibujar.</li>
  <li>Lectura .</li>
  <li>Videojuegos.</li>
</ul>


# Contributions

Colaboración articulo de Wikipedia : <a href="https://es.wikipedia.org/wiki/Anshel_Anshel_Goldfeld">Anshel Anshel Goldfeld</a> <br>


# Ilusión visual 
## Stepping feet

La ilusión de pasos es un fenómeno de percepción de movimiento que involucra dos "ladrillos", uno azul y otro amarillo, que se mueven horizontalmente a través de una "calle" que consta de rayas blancas y negras. Aunque ambos ladrillos se mueven a una velocidad constante, su velocidad percibida varía drásticamente.<br>

Cuando el ladrillo azul se encuentra sobre las franjas blancas, el contraste es alto (azul oscuro frente a blanco) y fácilmente visible, por lo que parece moverse más rápido que su velocidad real.<br>

Por el contrario, cuando el ladrillo azul está contra las rayas negras, el contraste es bajo (azul oscuro vs. negro) y más difícil de ver, por lo que el movimiento parece más lento. Los efectos opuestos ocurren para el ladrillo amarillo. Como se puede observar en la siguiente imagen <br>

<center><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Fast_slow.jpg/500px-Fast_slow.jpg" alt="this slowpoke moves"  width=450/></center>

Stuart Anstis demostró por primera vez esta ilusión en 2003. <br>

Propuso que el efecto de contraste lo experimentaban los conductores en condiciones de niebla en las que la diferencia de brillo entre el automóvil y sus alrededores son generalmente menos que un día soleado. Como resultado, la gente tendía a juzgar mal que la velocidad de sus autos se movía más lenta que la velocidad real y sentían que otros autos se volvían menos visibles. Mientras que, en condiciones de niebla, otros autos se redujeron en contraste, por lo que parecían más lentos de lo que realmente eran.<br>

<center><img src="https://static2.abc.es/media/motor/2016/02/16/1-niebla--620x349.jpg"  width=450/></center>



La ilusión de los pasos es un experimento psicológico muy famoso. Ambos bloques parecen moverse a velocidades diferentes, pero en realidad se mueven a la misma velocidad. <br>

Haz clic con el ratón dentro del lienzo para confirmar que se mueven a la misma velocidad. <br>

> :P5 sketch=/docs/sketches/scripts/ilussionElsa.js width=750, height=560

Código de la ilusión anterior 

```md
// Describe la estructura y los movimientos
class Ladrillo{
	constructor(lc, y){
	  this.ladrilloColor = lc;
	  this.yPos = y;
	  this.xPos = 0;
	}
  
	// Crea los ladrillos
	crearLadrillo(){
	  fill(this.ladrilloColor);
	  rect(this.xPos, this.yPos, 150, 50);
	  noStroke() 
	}
  
	// Establece la velocidad de los ladrillos a 0.5
	setVelocidad(){
	  this.xSpeed = 0.8;
	}
  
	// Los ladrillos se mueven por el lienzo
	moveLadrillo(){
	  this.xPos+=this.xSpeed;
	  if(this.xPos+100 >= width || this.xPos <= 0){
		this.xSpeed*=-1;
	  }
	}
  }
  
  function setup() {
	createCanvas(800, 560);
  }
  
  // Se realiza la creacion de los ladrillos
  let ladrillo1 = new Ladrillo("yellow",150);
  let ladrillo2 = new Ladrillo("blue",350);
  
  //
  ladrillo1.setVelocidad();
  ladrillo2.setVelocidad();
  
  function draw () {

	background(0);
	if(mouseIsPressed){
	  background(100);
	}
	if(!mouseIsPressed){
		createBars();
	  }
	ladrillo1.crearLadrillo();
	ladrillo1.moveLadrillo();
	ladrillo2.crearLadrillo();
	ladrillo2.moveLadrillo();
  }
  
  // Esta funcion creal las lineas blancas y negras
  function createBars() {
	let len = 12;
	for(let i = 0;i<width/len;i++){
	  fill("white");
	  if(i%2 == 0)
	  rect(i*len,height,len,-height);
	}
  }
```

En general, los movimientos de mayor contraste se ven más rápido que los de menor contraste.<br>

 El efecto desaparece cuando se quita la textura rayada de la calle porque no queda contraste, mostrando cómo el fondo de un objeto puede tener un efecto significativo en su velocidad percibida.<br>

<b>Causas</b>

<ul>
  <li><b>Efecto de contraste</b> </li>
  Contraste se refiere a la propiedad de estímulo medida de las diferencias de luminancia.  Si bien el fondo tiene rayas blancas y negras, el contraste cambia de una línea a la siguiente. <br>
  <center><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Simultaneous_Contrast.svg/200px-Simultaneous_Contrast.png"  width=250/></center>
  
  <li><b>Movimiento de amplitud </b> </li>
  El contraste modifica las amplitudes de movimiento percibidas de cada lado antes del movimiento del borde junto con las intersecciones de los límites.<br>

   <center><img src="  https://arvo.silverchair-cdn.com/arvo/content_public/journal/jov/933537/jov-6-12-5-fig001.jpeg?Expires=1620454800&Signature=piaLl3IPfMC1tvuz72-DMpeY7ud6ZiOH1CpRdfB1WObEwlZabMrtCCbUTXpjN-vK8YBBEBebK2oES42NRF6s1rltmZ8MSsxrqQjnM5GFpcjrzy2YXDXlqSi-LcbGXS8UwMlaTMA2ty3RhjeCMsfzkywRBuaCtCq3BZ3XrGBug1~Z6LwJFfRK25yATtogNVzD1m7VDL-AZ-AoEPGOYOiP3pX5ho04fwbehr7icf1N1LyEKzxV2I0kUo1ByxzHmM-1-KKzZ7oK5xJtC4Sh0tirhp4GqPm4iTzU0EkrEYfbu15bQ-Vk871Z7dkFditSeJc7hTf4hMWOECN1Gw7kUGyPTg__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA"  width=250/></center>


</ul>

<b>Bibliografia</b>
<blockquote>
<ul>
  <li>Bertamini, M (2018). Programming Visual Illusions for Everyone. Cham: Springer International Publishing. </li>
  <li>Anstis, S (2003). "Moving Objects Appear to Slow Down at Low Contrasts". Neural Networks  </li>
  <li>Anstis SM (2004) Factors affecting footsteps: contrast can change the apparent speed, amplitude and direction of motion. Vision Res 44:2171–2178</li>
  <li>Howe PDL, Thompson PG, Anstis SM, Sagreiya H, Livingstone MJ (2006) Explaining the footsteps, belly dancer, Wenceslas, and kickback illusions. Journal of Vision 6, 1396–1405</li>
  <li>Wikipedia. (16 de Abril de 2020). Wikipedia. Obtenido de Stepping feet illusion: https://en.wikipedia.org/wiki/Stepping_feet_illusion</li>
</ul>
</blockquote>




> :ToCPrevNext