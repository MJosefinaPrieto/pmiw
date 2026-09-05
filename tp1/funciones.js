function dibujarParallax(imagenFondo, velocidad) {
  let escalaFondo = height / imagenFondo.height;
  ancho_fondo = imagenFondo.width * escalaFondo;
  image(imagenFondo, fondo_parallax, height / 2, ancho_fondo, height);
  image(imagenFondo, fondo_parallax + ancho_fondo, height / 2, ancho_fondo, height);
  fondo_parallax -= velocidad;
  if (fondo_parallax <= -ancho_fondo) {
    fondo_parallax = 0;
  }
}

function elegirFrame(frames, velocidadAnimacion) {
  let indice = floor(frameCount / velocidadAnimacion) % frames.length;
  return frames[indice];
}
function dibujarAnimacion(frames, velocidadAnimacion, posX, posY, esc) {
  let frame = elegirFrame(frames, velocidadAnimacion);
  image(frame, posX, posY, frame.width * esc, frame.height * esc);
}
