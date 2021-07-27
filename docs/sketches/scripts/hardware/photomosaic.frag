precision mediump float;
uniform sampler2D originalImage;
uniform sampler2D mosaicDatasetImg;
uniform bool showMosaico;
uniform float imgsPerRow;
uniform float numImagenes;

// interpolated texcoord (same name and type as in vertex shader)
varying vec2 vTexCoord;
varying vec4 vVertexColor;

void main() {
    vec2 mosaicDatasetImgCoord = vTexCoord*imgsPerRow;
    vec2 originalImageCoord = floor(mosaicDatasetImgCoord);
    mosaicDatasetImgCoord = mosaicDatasetImgCoord-originalImageCoord;
    originalImageCoord = originalImageCoord*vec2(1.0)/vec2(imgsPerRow);
    vec4 col = texture2D(originalImage,originalImageCoord);
    float brightnessValue  =  dot(col.xyz, vec3(0.35, 0.35, 0.35));
    
    float temp = brightnessValue*(numImagenes);
    float level = floor(temp);
    
    float scalingfactor = 1.0/numImagenes;

    float y0 = 0.0;
    float x0 = (level-(numImagenes*(floor(level/numImagenes))))*scalingfactor;

    vec2 finalCord = (mosaicDatasetImgCoord*vec2(1.0)/vec2(numImagenes,1))+vec2(x0,y0);
    vec4 finalColor = texture2D(mosaicDatasetImg,finalCord);

    gl_FragColor  =  showMosaico?finalColor:col;
}