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
  // PANTALLA 1
  if (pantalla == 1) {
    image(imagenes[1], 0, 0, width, height);
    boton(290, 395, 220, 40);
  }


  // PANTALLA 2 - Tres opciones
  if (pantalla == 2) {
    image(imagenes[2], 0, 0, width, height);

    boton(80, 395, 190, 40);
    boton(305, 395, 190, 40);
    boton(530, 395, 190, 40);
  }


  // PANTALLA 3
  if (pantalla == 3) {
    image(imagenes[3], 0, 0, width, height);
    boton(290, 395, 220, 40);
  }


  // PANTALLA 4 - Dos opciones
  if (pantalla == 4) {
    image(imagenes[4], 0, 0, width, height);

    boton(170, 395, 200, 40);
    boton(430, 395, 200, 40);
  }


  // PANTALLA 5
  if (pantalla == 5) {
    image(imagenes[5], 0, 0, width, height);
    boton(290, 395, 220, 40);
  }


  // PANTALLA 6
  if (pantalla == 6) {
    image(imagenes[6], 0, 0, width, height);
    boton(290, 395, 220, 40);
  }


  // PANTALLA 7
  if (pantalla == 7) {
    image(imagenes[7], 0, 0, width, height);
    boton(290, 395, 220, 40);
  }


  // PANTALLA 8
  if (pantalla == 8) {
    image(imagenes[8], 0, 0, width, height);
    boton(290, 395, 220, 40);
  }


  // PANTALLA 9
  if (pantalla == 9) {
    image(imagenes[9], 0, 0, width, height);
    boton(290, 395, 220, 40);
  }


  // PANTALLA 10
  if (pantalla == 10) {
    image(imagenes[10], 0, 0, width, height);
    boton(290, 395, 220, 40);
  }


  // PANTALLA 11
  if (pantalla == 11) {
    image(imagenes[11], 0, 0, width, height);
    boton(290, 395, 220, 40);
  }


  // PANTALLA 12
  if (pantalla == 12) {
    image(imagenes[12], 0, 0, width, height);
    boton(290, 395, 220, 40);
  }


  // PANTALLA 13 - FINAL
  if (pantalla == 13) {
    image(imagenes[13], 0, 0, width, height);
  }


  // PANTALLA 14 - FINAL
  if (pantalla == 14) {
    image(imagenes[14], 0, 0, width, height);
  }


  // PANTALLA 15 - FINAL
  if (pantalla == 15) {
    image(imagenes[15], 0, 0, width, height);
  }
}



function mousePressed() {

  // PANTALLA 1 → PANTALLA 2
  if (pantalla == 1) {

    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 2;
    }
  }


  // PANTALLA 2 → PANTALLA 3, 9 U 11
  else if (pantalla == 2) {

    // Opción 1 → Pantalla 3
    if (clickBoton(80, 395, 190, 40)) {
      pantalla = 3;
    }

    // Opción 2 → Pantalla 9
    else if (clickBoton(305, 395, 190, 40)) {
      pantalla = 9;
    }

    // Opción 3 → Pantalla 11
    else if (clickBoton(530, 395, 190, 40)) {
      pantalla = 11;
    }
  }


  // PANTALLA 3 → PANTALLA 4
  else if (pantalla == 3) {

    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 4;
    }
  }


  // PANTALLA 4 → PANTALLA 5 U 8
  else if (pantalla == 4) {

    // Opción 1 → Pantalla 5
    if (clickBoton(170, 395, 200, 40)) {
      pantalla = 5;
    }

    // Opción 2 → Pantalla 8
    else if (clickBoton(430, 395, 200, 40)) {
      pantalla = 8;
    }
  }


  // PANTALLA 5 → PANTALLA 6
  else if (pantalla == 5) {

    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 6;
    }
  }


  // PANTALLA 6 → PANTALLA 7
  else if (pantalla == 6) {

    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 7;
    }
  }


  // PANTALLA 7 → PANTALLA 13
  else if (pantalla == 7) {

    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 13;
    }
  }


  // PANTALLA 8 → PANTALLA 15
  else if (pantalla == 8) {

    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 15;
    }
  }


  // PANTALLA 9 → PANTALLA 10
  else if (pantalla == 9) {

    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 10;
    }
  }


  // PANTALLA 10 → PANTALLA 15
  else if (pantalla == 10) {

    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 15;
    }
  }


  // PANTALLA 11 → PANTALLA 12
  else if (pantalla == 11) {

    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 12;
    }
  }


  // PANTALLA 12 → PANTALLA 14
  else if (pantalla == 12) {

    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 14;
    }
  }
}
