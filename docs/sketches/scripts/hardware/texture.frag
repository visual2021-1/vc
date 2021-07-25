// Estas son definiciones necesarias que le permiten a la tarjeta gráfica saber cómo representar el sombreador
#ifdef GL_ES
precision mediump float;
#endif
  
  varying vec2 vTexCoord;
  // Valores que se pasan desde p5
  uniform sampler2D u_img;
  uniform int u_key;

// Funcion para convertir un color a escala de grises
float grayscale(vec3 color) {
  float lightness;
  // Si la tecla de control es 1 se calcula el promedio RGB
  if (u_key==1){
		float I=(color.r + color.g + color.b) / 3.0; // Promedio de los tres componentes
		lightness = I;
	} else if (u_key==2){ 
	// Si la tecla de control es 2 se calcula el valor luma
	// Promedio ponderado de RGB con correccion gamma (Luma)
		float Y= dot(color, vec3(0.299, 0.587, 0.114)); // SDTV
		lightness = Y;
	}
  return lightness;
}

void main() {
  vec2 uv = vTexCoord;

  //Invierte la posicion de la cordenada  para que la imagen no quede alrreves
  uv.y = 1.0 - uv.y;

  vec4 tex = texture2D(u_img, uv);
  // Calculo de escala de grises
  float gray =grayscale(tex.rgb);
  
  float threshR = gray ;
  float threshG = gray ;
  float threshB = gray ;
  // Si la tecla de control es 0 se muestra la imagen original
  if (u_key==0){
    threshR = tex.r ;
    threshG = tex.g ;
    threshB = tex.b ;
  }
  vec3 thresh = vec3(threshR, threshG, threshB);

  // Se renderiza la salida
  gl_FragColor = vec4(thresh, 1.0);
}