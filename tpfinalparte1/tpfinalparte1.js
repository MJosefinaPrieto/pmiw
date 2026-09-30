let imagenes = [];
let cantidadEscenas = 15;
let pantalla =1;

function preload() {
  for (let i = 1; i <= cantidadEscenas; i++) {
    imagenes[i] = loadImage(`assets/escena-${i}.jpg`);
  }
}

function setup() {
  createCanvas(800, 450);
}

function draw() {
  
  //pantalla 1
  if (pantalla ==1) {
    image (imagenes[1], 0, 0, width, height);
  }
  //pantalla 2
  if (pantalla ==2) {
    image(imagenes[2], 0, 0, width, height);
    }
    if (pantalla ==3) {
    image(imagenes[3], 0, 0, width, height);
  }
}

function mousePressed() {
  pantalla++;
  
  if (pantalla > 15) {
    pantalla = 15;
  }
}
