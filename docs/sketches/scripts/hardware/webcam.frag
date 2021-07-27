precision mediump float;

// obtener texcoords del vertex shader
varying vec2 vTexCoord;

// textura de p5
uniform sampler2D tex0;
uniform int u_key;

// Funcion para calculo de valor Luma de un color
float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}
// Funcion para calculo del promedio RGB
float grayRGB(vec3 color) {
  float lightness=(color.r + color.g + color.b) / 3.0; // Promedio de los tres componentes
  return lightness;
}
void main() {

  vec2 uv = vTexCoord;
  // voltear la textura para mostrarse al derecho
  uv = 1.0 - uv;

  vec4 tex = texture2D(tex0, uv);

   float gray;
   
   //Dejar valores de color originales desde el inicio

   float threshR = tex.r ;
   float threshG = tex.g ;
   float threshB = tex.b ;
  // Si la tecla de control es 1 se calcula el promedio RGB
  if (u_key==1){

    gray =grayRGB(tex.rgb);

    threshR = gray ;
    threshG = gray ;
    threshB = gray ;
  }else if (u_key==2){
    // Si la tecla de control es 2 se calcula el valor luma 
    gray = luma(tex.rgb);

    threshR = gray ;
    threshG = gray ;
    threshB = gray ;
  }


  vec3 thresh = vec3(threshR, threshG, threshB);

  // Se renderiza la salida
  gl_FragColor = vec4(thresh, 1.0);
}