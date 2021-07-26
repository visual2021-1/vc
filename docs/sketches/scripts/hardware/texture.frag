#ifdef GL_ES
precision mediump float;
#endif
  
  varying vec2 vTexCoord;
  uniform sampler2D u_img;
  uniform int u_key;

float grayscale(vec3 color) {
  float lightness;
  
  if (u_key==1){
		float I=(color.r + color.g + color.b) / 3.0; // Promedio RGB
		lightness = I;
	} else if (u_key==2){
		float V= max(max(color.r,color.g),color.b);  // Componente mayot
		lightness = V;
	} else if (u_key==3){ // Luma
		float Y= dot(color, vec3(0.299, 0.587, 0.114)); // SDTV
		lightness = Y;
	}
  return lightness;
}

void main() {
  vec2 uv = vTexCoord;

  uv.y = 1.0 - uv.y;
  vec4 tex = texture2D(u_img, uv);
  float gray =grayscale(tex.rgb);
  
  float threshR = gray ;
  float threshG = gray ;
  float threshB = gray ;
  
  if (u_key==0){
    threshR = tex.r ;
    threshG = tex.g ;
    threshB = tex.b ;
  }
  vec3 thresh = vec3(threshR, threshG, threshB);
  gl_FragColor = vec4(thresh, 1.0);
}