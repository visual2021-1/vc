precision mediump float;

// obtener texcoords del vertex shader
varying vec2 vTexCoord;

// textura de p5
uniform sampler2D tex0;
//valor de la tecla presionada por el usuario
uniform int u_key;
//Tamaño de pixel en la pantalla
uniform vec2 texelSize;

//Arreglo de 9 valores, cada uno representa un valor alrederor de un pixel (vecinos) y el pixel mismo
vec2 offset[9];

// Arreglo con los valores de la matriz de convolucion a usar
float kernel[9];

// valor de convolucion que sera renderizado en la pantalla
vec4 conv = vec4(0.0);

void main() {

  vec2 uv = vTexCoord;
  // voltear la textura para mostrarse al derecho
  uv = 1.0 - uv;

  vec4 tex = texture2D(tex0, uv);
  
  //Dejar valores de color originales desde el inicio

   float threshR = tex.r ;
   float threshG = tex.g ;
   float threshB = tex.b ;

   vec4 thresh = vec4(threshR, threshG, threshB, 1.0);

  //Si la tecla es 0 se muestra el video original
  if (u_key==0){
  
  float threshR = tex.r ;
   float threshG = tex.g ;
   float threshB = tex.b ;

   vec4 thresh = vec4(threshR, threshG, threshB, 1.0);

  }else if (u_key==1){

  //Si la tecla es 1 se muestra la mascara correspondiente

   float gray = (tex.r + tex.g + tex.b) / 3.0;
    
    float res = 20.0;
    float scl = res / (10.0);
    
    float threshR = (fract(floor(tex.r*res)/scl)*scl) * gray ;
    float threshG = (fract(floor(tex.g*res)/scl)*scl) * gray ;
    float threshB = (fract(floor(tex.b*res)/scl)*scl) * gray ;
    

  thresh = vec4(threshR, threshG, threshB, 1.0);
  }else if (u_key==2){

  //Si la tecla es 2 se muestra la mascara inversa

  tex.rgb = 1.0 - tex.rgb;
  thresh = tex;

  }else if (u_key==3){

  //Si la tecla es 3 se muestra la mascara single pass blur
  //consiste en promediar todos los pixeles vecinos del mismo, incluyendo el propio pixel
  
  // creacion de valor del paso a dar para calcular vecinos de un pixel
  vec2 step =  texelSize * 4.0;

  // obtener los pixeles vecinos y sumarlos en el vector tex
  
  vec4 tex = texture2D(tex0, uv); // middle middle -- el pixel actual
  
  tex += texture2D(tex0, uv + vec2(-step.x, -step.y)); // top left
  tex += texture2D(tex0, uv + vec2(0.0, -step.y)); // top middle
  tex += texture2D(tex0, uv + vec2(step.x, -step.y)); // top right

  tex += texture2D(tex0, uv + vec2(-step.x, 0.0)); //middle left
  tex += texture2D(tex0, uv + vec2(step.x, 0.0)); //middle right

  tex += texture2D(tex0, uv + vec2(-step.x, step.y)); // bottom left
  tex += texture2D(tex0, uv + vec2(0.0, step.y)); // bottom middle
  tex += texture2D(tex0, uv + vec2(step.x, step.y)); // bottom right
  
  // se toma el promedio de los valores sumados
  tex /= 9.0;

  thresh = tex;

  }else if (u_key==4 || u_key==5){

  //Si la tecla es 4 o 5 se aplica la mascara edge detection (outline) o emboss
	vec4 conv = vec4(0.0);
	if(u_key==4){
  // edge detection kernel
   kernel[0] = -1.0; kernel[1] = -1.0; kernel[2] = -1.0;
   kernel[3] = -1.0; kernel[4] = 8.0; kernel[5] = -1.0;
   kernel[6] = -1.0; kernel[7] = -1.0; kernel[8] = -1.0;

   } if (u_key==5){
   
   // emboss kernel values
  kernel[0] = -2.0; kernel[1] = -1.0; kernel[2] = 0.0;
  kernel[3] = -1.0; kernel[4] = 1.0; kernel[5] = 1.0;
  kernel[6] = 0.0; kernel[7] = 1.0; kernel[8] = 2.0;
   }

   //Guardar la ubicación de los pixeles vecinos
	offset[0] = vec2(-texelSize.x, -texelSize.y); // top left
	offset[1] = vec2(0.0, -texelSize.y); // top middle
	offset[2] = vec2(texelSize.x, -texelSize.y); // top right
	offset[3] = vec2(-texelSize.x, 0.0); // middle left
	offset[4] = vec2(0.0, 0.0); //middle
	offset[5] = vec2(texelSize.x, 0.0); //middle right
	offset[6] = vec2(-texelSize.x, texelSize.y); //bottom left
	offset[7] = vec2(0.0, texelSize.y); //bottom middle
	offset[8] = vec2(texelSize.x, texelSize.y); //bottom right
	
	//Por cada pixel vecino
	for(int i = 0; i<9; i++){
		//sample a 3x3 grid of pixels
		vec4 color = texture2D(tex0, uv + offset[i]);

		//multiplicar el color del pixel por el valor correspondiente del kernel y añadirlo al valor total de la convolucion
		conv += color * kernel[i];
		
	}//for end
	thresh =  vec4(conv.rgb, 1.0);
  }else{
  
  //Dejar valores de color originales 

   float threshR = tex.r ;
   float threshG = tex.g ;
   float threshB = tex.b ;

   vec4 thresh = vec4(threshR, threshG, threshB, 1.0);
  }
  
  // Se renderiza la salida con el valor de la convolucion
  gl_FragColor = thresh;
}