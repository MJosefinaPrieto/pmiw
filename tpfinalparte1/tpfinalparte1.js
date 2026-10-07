let imagenes = [];
let cantidadEscenas = 15;


let portada;

let framesCascada= [];
let N_FRAMES=5;
let frameCascada= 0;
let ultimoCambio = 0;
let velocidadCascada = 80;

let pantalla=0; //intro

let tiempoIntro;
let textoIntro= "Hace muchísimo tiempo, el mundo vivía en una era de caos. En un pequeño reino de la tierra de Hyrule, se transmitía de generación en generación la leyenda de la Trifuerza, unos triángulos dorados con poderes místico. Un ejército malvado atacó el reino y robó la Trifuerza del Poder. Estaba liderado por Ganon, el poderoso Príncipe de las Tinieblas. Temiendo su gobierno, la princesa Zelda dividió la Trifuerza de la Sabiduría en ocho fragmentos y los escondió por todo el reino antes de ser capturada.  El joven Link debe encontrar los ocho fragmentos para derrotar a Ganon y rescatar a la princesa";
let posTextoIntro;
let velocidadTexto = 0.8;

let textoIntro2 = "Maria Agustina Saldaño";
let textoIntro3 = "María Josefina Prieto";

function preload() {
  // animacion
  portada = loadImage('assets/portada.jpg');

  
  for (let i = 1; i <= N_FRAMES; i++) {
    framesCascada.push(loadImage('assets/sprite-' + i + '.png'));
  }
  
  
  // imagenes
  for (let i = 1; i <= cantidadEscenas; i++) {
    imagenes[i] = loadImage(`assets/escena-${i}.jpg`);
  }
}
function setup() {
  createCanvas(800, 450);
  tiempoIntro =millis ();
  posTextoIntro = height + 50;
}

function draw() {
   if (pantalla == 0) {
    intro();
  }
 else if (pantalla == 16) {
    textoIntroPantalla();
  }
  if (pantalla == 1) {
    pantalla1();
}
  
  if (pantalla == 2) {
    pantalla2();
  }

  // 
  if (pantalla == 4) {
    pantalla4(); 
  }

  // 
  if (pantalla == 5) {
    pantalla5 ();
  }

  // 
  if (pantalla == 6) {
    pantalla6 () ;
  }

  // PANTALLA 7
  if (pantalla == 7) {
    pantalla7 ();
  }

  //
  if (pantalla == 8) {
    pantalla8 () ;
  }

  // 
  if (pantalla == 9) {
    pantalla9 () ;
  }

  // 
  if (pantalla == 10) {
    pantalla10 ();
  }

  // 
  if (pantalla == 11) {
    pantalla11 () ;
  }

  // 
  if (pantalla == 12) {
    pantalla12 ();
  }
  //  final clasico
  if (pantalla == 13) {
    pantalla13 (); 
}
  // final tragico
  if (pantalla == 14) {
    pantalla14 (); 
  }

  //  final reincio
  if (pantalla == 15) {
    pantalla15 (); 
}
}

function mousePressed() {
  if (pantalla == 0) {
  intro ();
}
if (pantalla == 16) {
  textoIntroPantalla();
}

else if (pantalla == 1) {
}
  // PANTALLA 1 → PANTALLA 2
  if (pantalla == 1) {

    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 2;
    }
  }

  // PANTALLA 2 → PANTALLA 3, 9 U 11
  else if (pantalla == 2) {

  
    if (clickBoton(80, 395, 190, 40)) {
      pantalla = 4;
    }


    else if (clickBoton(305, 395, 190, 40)) {
      pantalla = 9;
    }

  
    else if (clickBoton(530, 395, 190, 40)) {
      pantalla = 11;
    }
  }

  else if (pantalla == 3) {

    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 4;
    }
  }
 
  else if (pantalla == 4) {


    if (clickBoton(130, 390, 240, 50)) {
      pantalla = 5;
    }

  
    else if (clickBoton(430, 390, 240, 50)) {
      pantalla = 8;
    }
  }

  else if (pantalla == 5) {

    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 6;
    }
  }

  else if (pantalla == 6) {

    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 7;
    }
  }
 
  else if (pantalla == 7) {

    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 13;
    }
  }
 
  else if (pantalla == 8) {

    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 15;
    }
  }

  else if (pantalla == 9) {

    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 10;
    }
  }

  else if (pantalla == 10) {

    if (clickBoton(250, 390, 300, 50)) {
      pantalla = 15;
    }
  }


  else if (pantalla == 11) {

    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 12;
    }
  }
// PANTALLA 13 → VOLVER A EMPEZAR
else if (pantalla == 13) {
  if (clickBoton(290, 395, 220, 40)) {
    pantalla = 1;
  }
}

else if (pantalla == 14) {
  if (clickBoton(290, 395, 220, 40)) {
    pantalla = 1;
  }
}


else if (pantalla == 15) {
  if (clickBoton(290, 395, 220, 40)) {
    pantalla = 1;
  }
}

  else if (pantalla == 12) {

    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 14;
    }
  }
}
