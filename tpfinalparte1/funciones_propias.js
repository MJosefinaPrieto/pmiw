function obtenerEscena(id) {
  return ESCENAS.find(e => e.id === id) || null; // recorre el arreglo de escenas elemento por elemento buscando cual es el id pedido
}

function dibujarFondo(id) {
  if (imagenes[id]) { // si la imagen esta carga, la dibuja en el ancho y alto
    image(imagenes[id], 0, 0, width, height);
  } else {
    background(20, 20, 30); // si no, pinta el fondo de oscuro
  }
}

function dibujarPanel() {
  push();
  noStroke();
  fill(0, 0, 0, 180);
  rect(0, PANEL_Y, width, height - PANEL_Y);
  pop();
}

function dibujarTexto(txt) {
  push();
  fill(255);
  noStroke();
  textAlign(LEFT, TOP);
  textSize(14.5);
  textLeading(19);
  text(txt, TEXTO_X, TEXTO_Y, TEXTO_ANCHO, TEXTO_ALTO);
  pop();
}

function calcularBotones(opciones) {
  let botones = [];

  if (opciones.length === 1) {
    let ancho = 220;
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

  let anchoTotal = width - BOTONES_MARGEN * 2;
  let ancho = (anchoTotal - BOTONES_ESPACIO * (opciones.length - 1)) / opciones.length;

  for (let i = 0; i < opciones.length; i++) {
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

function dibujarBoton(b) {
  let hover = mouseX >= b.x && mouseX <= b.x + b.w && mouseY >= b.y && mouseY <= b.y + b.h;

  push();
  noStroke();
  fill(hover ? COLOR_BOTON_HOVER : COLOR_BOTON);
  rect(b.x, b.y, b.w, b.h, 6);

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(b.w < 260 ? 12.5 : 13.5);
  text(b.etiqueta, b.x, b.y, b.w, b.h);
  pop();

  if (hover) cursor(HAND);
}
