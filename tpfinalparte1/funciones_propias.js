
function dibujarEscenaDeHistoria(escena) {
  dibujarFondo(escena.id);
  dibujarPanelInferior();
  dibujarTexto(escena.texto, TEXTO_X, TEXTO_Y, TEXTO_ANCHO, TEXTO_ALTO);

  var botones = calcularBotones(escena.opciones);
  for (var i = 0; i < botones.length; i++) {
    var boton = botones[i];
    dibujarBoton(boton.etiqueta, boton.x, boton.y, boton.w, boton.h);
  }
}

function obtenerEscenaPorId(id) {
  for (var i = 0; i < ESCENAS.length; i++) {
    if (ESCENAS[i].id === id) {
      return ESCENAS[i];
    }
  }
  return null;
}

function dibujarFondo(idEscena) {
  var img = imagenesCargadas[idEscena];
  if (img && img.width > 0) {
    image(img, 0, 0, width, height);
  } else {
    background(20, 20, 30);
    push();
    fill(255, 160);
    textAlign(CENTER, CENTER);
    textSize(14);
    text('(Falta la imagen de "' + idEscena + '")', width / 2, height / 2 - 40);
    pop();
  }
}

function dibujarPanelInferior() {
  push();
  noStroke();
  fill(0, 0, 0, 175);
  rect(0, PANEL_Y, width, height - PANEL_Y);
  pop();
}

function dibujarTexto(texto, x, y, w, h) {
  push();
  fill(255);
  noStroke();
  textAlign(LEFT, TOP);
  textSize(15);
  textLeading(19);
  text(texto, x, y, w, h);
  pop();
}

function calcularBotones(opciones) {
  var botones = [];

  if (opciones.length === 1) {
    var ancho = 220;
    botones.push({
      etiqueta: opciones[0].etiqueta,
      destino: opciones[0].destino,
      x: (width - ancho) / 2,
      y: BOTONES_Y,
      w: ancho,
      h: BOTON_ALTO
    });
    return botones;
  }

  var anchoTotal = width - BOTONES_MARGEN * 2;
  var ancho = (anchoTotal - BOTONES_ESPACIO * (opciones.length - 1)) / opciones.length;

  for (var i = 0; i < opciones.length; i++) {
    botones.push({
      etiqueta: opciones[i].etiqueta,
      destino: opciones[i].destino,
      x: BOTONES_MARGEN + i * (ancho + BOTONES_ESPACIO),
      y: BOTONES_Y,
      w: ancho,
      h: BOTON_ALTO
    });
  }
  return botones;
}

function dibujarBoton(etiqueta, x, y, w, h) {
  var sobreElBoton = estaElMouseDentro(x, y, w, h);

  push();
  noStroke();
  if (sobreElBoton) {
    fill(COLOR_BOTON_HOVER[0], COLOR_BOTON_HOVER[1], COLOR_BOTON_HOVER[2]);
  } else {
    fill(COLOR_BOTON[0], COLOR_BOTON[1], COLOR_BOTON[2]);
  }
  rect(x, y, w, h, 8);

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(w < 260 ? 12.5 : 14);
  text(etiqueta, x + w / 2, y + h / 2, w - 14, h - 4);
  pop();

  if (sobreElBoton) cursor(HAND);
}

function estaElMouseDentro(x, y, w, h) {
  return mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h;
}
function irAEscena(id) {
  pantallaActualId = id;
}
