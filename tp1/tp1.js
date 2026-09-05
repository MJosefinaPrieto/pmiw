let fondo;
let escala = 2.5;
let fondo_parallax = 0;
const velocidad_parallax = 2;
let ancho_fondo;
let titulo;
let xTitulo = -200;
const velocidadTitulo = 5;
let framesRodar = []; // variables barbie rodando
const N_FRAMES = 9;
let x = -60;
const velocidad = 4;
let velocidad_correr = 6;
let velocidad_rodar = 8;
const ancho_rodar = 150;
let framesCorrer = []; // variable barbie caminando
const num_frames = 14;
let estado = "correr1";


function preload() {
  fondo = loadImage('assets/casa.png');
  titulo = loadImage('assets/Secret_Agent_Barbie_cover.png');
  for (let i = 1; i <= N_FRAMES; i++) {
    framesRodar.push(loadImage('assets/rodar-' + i + '.png'));
  }
  for (let i = 1; i <= num_frames; i++) {
    framesCorrer.push(loadImage('assets/correr-' + i + '.png'));
  }
  print(framesRodar);
  print(framesCorrer);
}

function setup() {
  createCanvas(800, 600);
  imageMode(CENTER);
  fill(255);
}


function draw() {
 dibujar();
}

function keyPressed() {
  if (key == 'r' || key == 'R') {
    x = -60;
    xTitulo = -200;
    fondo_parallax = 0;
    estado = "correr1";
  }
}
