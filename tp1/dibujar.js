 function dibujar (){
 background(0);
  dibujarParallax(fondo, velocidad_parallax);
// maquina de estados del personaje corriendo
  if (estado === "correr1") {
    x += velocidad;
    dibujarAnimacion(framesCorrer, velocidad_correr, x, height / 2 + 60, escala);
    if (x >= width / 2) {
      estado = "rodar";
    }
  } else if (estado === "rodar") {
    x += velocidad;
    dibujarAnimacion(framesRodar, velocidad_rodar, x, height / 2 + 60, escala);
    if (x >= width / 2 + ancho_rodar) {
      estado = "correr2";
    }
  } else if (estado === "correr2") {
    x += velocidad;
    dibujarAnimacion(framesCorrer, velocidad_correr, x, height / 2 + 60, escala);
 
    if (x >= 900) { // se llama ready pq antes tenía una animacion con ese nombre pero la borre y quedo el nombre
      estado = "ready";
    }
  } else if (estado === "ready") {
   
  }


  if (xTitulo < width / 2) {
    xTitulo += velocidadTitulo;
    if (xTitulo > width / 2) {
      xTitulo = width / 2;
    }
  }
  image(titulo, xTitulo, 100, titulo.width * 2, titulo.height * 2);
}
