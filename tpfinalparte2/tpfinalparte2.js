let objJuego;


function setup() {
  createCanvas (800,400);

  objJuego = new Juego ();

}


function draw() {
objJuego.dibujar(); // se invoca al metodo constructor de la clase Juego
 if (keyIsDown(RIGHT_ARROW)) {
    objJuego.personaje.moverDerecha();
  }
   if (keyIsDown(LEFT_ARROW)) {
    objJuego.personaje.moverIzquierda();
  }
}

function keyPressed() {
  if (key === " ") {
    objJuego.personaje.saltar();
  }
}
