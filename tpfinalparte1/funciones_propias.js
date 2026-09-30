function boton (x, y, ancho, alto) {
  fill (40, 65, 42);
  rect (x, y, ancho, alto, 20);
}

function clickBoton (x, y, ancho, alto){
    return mouseX > x &&
         mouseX < x + ancho &&
         mouseY > y &&
         mouseY < y + alto;
}
