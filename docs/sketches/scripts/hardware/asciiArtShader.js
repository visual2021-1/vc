window.onload = function() {
    var gui = new dat.GUI()
  
    gui.add(params, 'pixelSize', 3, 100,1)
    gui.add(params, 'textSize', 1, 50,1)
    gui.add(params, 'characters')
    gui.add(params, 'textStyle', ['NORMAL', 'ITALIC', 'BOLD'])
    gui.addColor(params, 'colour')
    gui.addColor(params, 'background')
  }
  
  let params = {
    pixelSize: 8,
    colour: [0, 0, 0],
    background: [255, 255, 255],
    characters: ' .:-=+*#%@',



    textSize: 13,
    textStyle: 'BOLD'
  }
  
  let capture
  let capturing = false
  let canvasWidth
  let canvasHeight
  
  function setup() {
    // canvasWidth = windowWidth / 1.5
    // canvasHeight = windowHeight / 1.5
    canvasWidth = 730 
    canvasHeight = 550 
    createCanvas(canvasWidth, canvasHeight)
    
    var constraints = {
      video: {
        mandatory: {
          minWidth: 720,
          minHeight: 560
        },
        optional: [{ maxFrameRate: 10 }]
      },
      audio: false
    };
  
    capture = createCapture(constraints,function(){
        capturing = true
      console.log('capturing')
    })
    // capture.elt.setAttribute('playsinline', '');
  
  
    capture.size(canvasWidth , canvasHeight )
    capture.hide()
   
  }
  
  function draw() {
    background(params.background)
  
    textSize(params.textSize)
    fill(params.colour)
    // image(capture,0,0)
  
    if (params.textStyle === 'NORMAL') textStyle(NORMAL)
    else if (params.textStyle === 'ITALIC') textStyle(ITALIC)
    else textStyle(BOLD)
  
    const characters = params.characters.split('')
  
    if (capturing) {
      capture.loadPixels()
  
      if (capture.pixels) {     
          for (y = 0; y < capture.height; y+=params.pixelSize) {
             for (x = 0; x < capture.width; x+=params.pixelSize) {
            // *4 is for each rgba value
            const index = (x + y * capture.width) * 4
            
            const r = capture.pixels[index]
            const g = capture.pixels[index + 1]
            const b = capture.pixels[index + 2]
            const a = capture.pixels[index + 3]
  
            const bright = Math.round((r + g + b) / 3)          
            
            const letter = characters[Math.round(map(bright, 0, 255, characters.length - 1, 0))]
  
            text(letter, x, y )
          }
        }
      }
    }
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight )
    // resizeCanvas(windowWidth / 1.5, windowHeight / 1.5)
     capture = createCapture(VIDEO, () => {
      capturing = true
    })
    // capture.size(windowWidth / 1.5, windowHeight / 1.5)
    capture.size(windowWidth, windowHeight)
    capture.hide()
  }
  