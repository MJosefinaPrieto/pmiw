let imagenes = [];
let cantidadEscenas = 15;

let portada;

let framesCascada= [];
let N_FRAMES=5;
let frameCascada= 0;
let ultimoCambio = 0;
let velocidadCascada = 80;

let spritesLink = [];
let frameLink = 0;
let ultimoCambioLink = 0;
let velocidadLink = 150;
let posYLink = 450;
let posYFondo = -800;
let bajandoLink = false;
let fondoIntro;

let musica;
let musicaIniciada = false;

let pantalla=0; 

let tiempoIntro;
let textoIntro= "Hace muchísimo tiempo, el mundo vivía en una era de caos. En un pequeño reino de la tierra de Hyrule, se transmitía de generación en generación la leyenda de la Trifuerza, unos triángulos dorados con poderes místico. Un ejército malvado atacó el reino y robó la Trifuerza del Poder. Estaba liderado por Ganon, el poderoso Príncipe de las Tinieblas. Temiendo su gobierno, la princesa Zelda dividió la Trifuerza de la Sabiduría en ocho fragmentos y los escondió por todo el reino antes de ser capturada.  El joven Link debe encontrar los ocho fragmentos para derrotar a Ganon y rescatar a la princesa";
let posTextoIntro;
let velocidadTexto = 0.8;

let textoIntro2 = "Maria Agustina Saldaño";
let textoIntro3 = "María Josefina Prieto";

function preload() {
  // animacion
  portada = loadImage('assets/portada.jpg');
  spritesLink[0] = loadImage('assets/sprite-1-3.png');
  spritesLink[1] = loadImage('assets/sprite-2-3.png');
  spritesLink[2] = loadImage('assets/sprite-3-3.png');
  spritesLink[3] = loadImage('assets/sprite-4-3.png');
  fondoIntro = loadImage('assets/fondointro.png');
  
   musica = loadSound("assets/LOZTheme.mp3");
  
  for (let i = 1; i <= N_FRAMES; i++) {
    framesCascada.push(loadImage('assets/sprite-' + i + '.png'));
  }
  

  for (let i = 1; i <= cantidadEscenas; i++) {
    imagenes[i] = loadImage(`assets/escena-${i}.jpg`);
  }
}
function setup() {
  createCanvas(800, 450);
  tiempoIntro = millis();
  posTextoIntro = height + 50;
}

function draw() {
  if (pantalla == 0) {
    intro();
  } else if (pantalla == 16) {
    textoIntroPantalla();
  } else {
    dibujarPantallas();
  }
}

function mousePressed() {
  // Iniciar la música con el primer clic
  if (!musicaIniciada && musica && musica.isLoaded()) {
    musica.setVolume(0.3);
    musica.loop();
    musicaIniciada = true;
  }

  // Mantener el funcionamiento original
  if (pantalla == 0) {
    intro();
  }
  else if (pantalla == 16) {
    textoIntroPantalla();
  }
  else {
    clickPantallas();
  }
}
