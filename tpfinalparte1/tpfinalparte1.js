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
    textoPantallas ("En la fría noche, Link llega justo a tiempo: dos soldados de Ganon acorralan a Impa, la niñera de la princesa Zelda. Con un golpe certero, los ahuyenta y se arrodilla junto a ella, malherida pero viva.");
    boton(290, 395, 220, 40, "Comenzar");
  }


  // PANTALLA 2 - Tres opciones
  if (pantalla == 2) {
    image(imagenes[2], 0, 0, width, height);
    textoPantallas ("—La princesa fue capturada —dice Impa con voz temblorosa—. Antes de caer presa, escondió ocho fragmentos de la Trifuerza por todo Hyrule. Reunilos todos para poder enfrentar a Ganon. ¿Cómo empezás tu búsqueda?");
    boton(80, 395, 190, 40, "Explorar las mazmorras");
    boton(305, 395, 190, 40, "Recorrer el mundo");
    boton(530, 395, 190, 40, "Ir directo hacia Ganon");
  }

  // PANTALLA 4 - Dos opciones
  if (pantalla == 4) {
    image(imagenes[3], 0, 0, width, height);
    
textoPantallas ("Link desciende a unas mazmorras olvidadas bajo las montañas de Hyrule. Los pasillos de piedra están cubiertos de musgo y trampas antiguas duermen bajo el polvo de siglos. En algún rincón brillan los fragmentos que busca.");
    boton(130, 390, 240, 50, "Revisar cada sala con calma");
    boton(430, 390, 240, 50, "Avanzar rápido, sin revisar todo");
  }


  // PANTALLA 5
  if (pantalla == 5) {
    image(imagenes[5], 0, 0, width, height);
    textoPantallas ("Con los fragmentos guardados junto a su corazón, Link marcha hacia el norte, donde una montaña de picos negros escupe humo rojizo hacia el cielo. Ahí, en las profundidades de la roca, lo espera Ganon.");
    boton(290, 395, 220, 40, "Entrar a la guarida");
  }


  // PANTALLA 6
  if (pantalla == 6) {
    image(imagenes[6], 0, 0, width, height);
    textoPantallas ("El calor de la lava golpea el rostro de Link cuando por fin encuentra a Ganon, gigante y cubierto de armadura oscura. El monstruo levanta su tridente, seguro de su victoria. Es el momento decisivo.");
    boton(290, 395, 220, 40, "Continuar");
  }


  // PANTALLA 7
  if (pantalla == 7) {
    image(imagenes[7], 0, 0, width, height);
    textoPantallas ("Con un grito de determinación, Link reúne los ocho fragmentos frente a él. Una luz dorada envuelve la caverna: Ganon retrocede, vencido. La Trifuerza vuelve a brillar completa en las manos del héroe.");
    boton(290, 395, 220, 40, "Continuar");
  }


  // PANTALLA 8
  if (pantalla == 8) {
    image(imagenes[8], 0, 0, width, height);
    textoPantallas ("Las antorchas se apagan una a una. Link revisó cada sala que pudo encontrar, pero algunos fragmentos siguen ocultos en rincones que nunca llegó a ver. Sin el poder completo, la misión termina aquí, por ahora.");
    boton(250, 390, 300, 50, "Retirarte a pensar una nueva estrategia");
  }


  // PANTALLA 9
  if (pantalla == 9) {
    image(imagenes[9], 0, 0, width, height);
    textoPantallas ("En lugar de las mazmorras, Link recorre los caminos abiertos de Hyrule. Pronto se enfrenta a jaurías de monstruos, puentes derrumbados y desiertos hostiles. Cada fragmento que encuentra tiene un precio alto.");
    boton(290, 395, 220, 40, "Continuar");
  }


  // PANTALLA 10
  if (pantalla == 10) {
    image(imagenes[10], 0, 0, width, height);
    textoPantallas ("Agotado tras la travesía, Link cuenta lo que consiguió: apenas la mitad de los fragmentos. No alcanza para enfrentar a Ganon. Respira hondo, sabiendo que deberá reunir fuerzas y volver a intentarlo.");
    boton(290, 395, 220, 40, "Retirarte a recuperar fuerzas");
  }


  // PANTALLA 11
  if (pantalla == 11) {
    image(imagenes[11], 0, 0, width, height);
    textoPantallas ("Impaciente por rescatar a la princesa, Link decide no perder tiempo buscando fragmentos. Con la espada en la mano y el coraje como única arma, se dirige directo hacia la montaña de Ganon.");
    boton(290, 395, 220, 40, "Pelear contra Ganon");
  }


  // PANTALLA 12
  if (pantalla == 12) {
    image(imagenes[12], 0, 0, width, height);
    textoPantallas ("Sin el poder de la Trifuerza, Link enfrenta a Ganon completamente solo. El monstruo es demasiado fuerte, y cada golpe del héroe no parece hacer ninguna diferencia. La batalla está perdida.");
    boton(290, 395, 220, 40, "Continuar");
  }


  // PANTALLA 13 - final clasico
  if (pantalla == 13) {
    image(imagenes[13], 0, 0, width, height);
    textoPantallas ("Con Ganon derrotado, Link corre hasta lo alto de la torre donde Zelda estaba prisionera. Ella sonríe al verlo, libre por fin. Hyrule respira tranquilo: el héroe cumplió su destino.");
 boton(290, 395, 220, 40, "Volver a empezar");  
}


  // PANTALLA 14 - final tragico
  if (pantalla == 14) {
    image(imagenes[14], 0, 0, width, height);
    textoPantallas ("La oscuridad de Ganon se extiende sobre Hyrule. Link ha caído, y en lo alto de la montaña, Zelda sigue prisionera, esperando a un héroe que esta vez no llegó a tiempo.");
    boton(290, 395, 220, 40, "Volver a empezar");
  }


  // PANTALLA 15 - final reincio
  if (pantalla == 15) {
    image(imagenes[15], 0, 0, width, height);
    textoPantallas ("El viaje termina antes de tiempo, pero no todo está perdido. Link mira hacia el horizonte, decidido a intentarlo de nuevo, con lo aprendido en el camino.");
 boton(290, 395, 220, 40, "Volver a empezar");  
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
      pantalla = 4;
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
    if (clickBoton(130, 390, 240, 50)) {
      pantalla = 5;
    }

    // Opción 2 → Pantalla 8
    else if (clickBoton(430, 390, 240, 50)) {
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

    if (clickBoton(250, 390, 300, 50)) {
      pantalla = 15;
    }
  }


  // PANTALLA 11 → PANTALLA 12
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


// PANTALLA 14 → VOLVER A EMPEZAR
else if (pantalla == 14) {
  if (clickBoton(290, 395, 220, 40)) {
    pantalla = 1;
  }
}


// PANTALLA 15 → VOLVER A EMPEZAR
else if (pantalla == 15) {
  if (clickBoton(290, 395, 220, 40)) {
    pantalla = 1;
  }
}

  // PANTALLA 12 → PANTALLA 14
  else if (pantalla == 12) {

    if (clickBoton(290, 395, 220, 40)) {
      pantalla = 14;
    }
  }
}
