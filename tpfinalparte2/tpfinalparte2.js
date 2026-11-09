let objJuego;

let fondo;
let personajeQuieto = [];
let personajeCorriendoD = [];
let personajeCorriendoI = [];
let personajeSaltando = [];

let enemigoQuieto = [];
let enemigoCaminandoI = [];
let enemigoCaminandoD = [];

let pantallaPerdedor;
let pantallaGanador;

let imagenFragmento;
let imagenPlataforma1;
let imagenPlataforma2;
let imagenPlataforma3;

function preload() {
  for (let i = 1; i <= 4; i++) {
    personajeQuieto[i - 1] = loadImage('data/quieto-' + i + '.png');
  }

  for (let i = 1; i <= 8; i++) {
    personajeCorriendoD[i - 1] = loadImage('data/corriendoderecha-' + i + '.png');
  }
for (let i = 1; i <= 8; i++) {
    personajeCorriendoI[i - 1] = loadImage('data/corriendoizq-' + i + '.png');
  }
  
  for (let i = 1; i <= 9; i++) {
    personajeSaltando[i - 1] = loadImage('data/saltando-' + i + '.png');
  }

  fondo = loadImage('data/mazmorra.jpg');
  pantallaPerdedor = loadImage('data/perdedor.jpg');
  pantallaGanador = loadImage('data/ganador.jpg');
  
enemigoQuieto.push(loadImage('data/enemigo-1.png'));

for (let i = 10; i <= 14; i++) {
  enemigoQuieto.push(loadImage('data/enemigo-' + i + '.png'));
}

for (let i = 6; i <= 7; i++) {
  enemigoCaminandoI.push(loadImage('data/enemigo-' + i + '.png'));
}

for (let i = 8; i <= 9; i++) {
  enemigoCaminandoD.push(loadImage('data/enemigo-' + i + '.png'));
}
  imagenFragmento = loadImage('data/fragmento.png');
  imagenPlataforma1 = loadImage('data/plataforma-1.png');
imagenPlataforma2 = loadImage('data/plataforma-2.png');
imagenPlataforma3 = loadImage('data/plataforma-3.png');
}

function setup() {
  createCanvas(800, 400);
  objJuego = new Juego();
}

function draw() {
  objJuego.dibujar();

  if (objJuego.estado == "jugando") {
    if (keyIsDown(RIGHT_ARROW)) {
      objJuego.personaje.moverDerecha();
    }

    if (keyIsDown(LEFT_ARROW)) {
      objJuego.personaje.moverIzquierda();
    }
  }
}

function keyPressed() {
  if ((objJuego.estado == "perdiste" || objJuego.estado == "ganaste") &&  
  (key == "r" || key == "R"))
{
  objJuego = new Juego ();
  return;
}
  if (objJuego.estado == "jugando" && key == " ") {
    objJuego.personaje.saltar();
  }
}
