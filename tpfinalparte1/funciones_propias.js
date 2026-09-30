function boton (x, y, ancho, alto, texto) {
  fill (40, 65, 42);
  rect (x, y, ancho, alto, 20);
  
  fill(255);
  textFont("Georgia");
  textAlign(CENTER, CENTER);
  
  let tamaño =16;
  
  while (textWidth(texto) > ancho - 20 && tamaño > 10) {
    tamaño = tamaño - 1;
    textSize(tamaño);
  }

  textSize(tamaño);
  text(texto, x + ancho / 2, y + alto / 2);
}


function clickBoton (x, y, ancho, alto){
    return mouseX > x &&
         mouseX < x + ancho &&
         mouseY > y &&
         mouseY < y + alto;
}
function textoPantallas (texto){
  fill(0, 0, 0, 170);
  rect(0, 300, 800, 165);

  fill(255);
  textFont("Georgia");
  textSize(17);
  textAlign(LEFT, CENTER);

 text(texto, 60, 315, 680, 70);
}
