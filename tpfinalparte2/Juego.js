class Juego {

  constructor() {
    this.crearPersonaje();

    this.fragmentos = [];
    this.crearFragmentos();
    this.plataformas = [];
    this.crearPlataformas ();
    this.enemigos = [];
    this.crearEnemigos();
    this.estado = "jugando";
    this.posXFondo = 0;
    this.camaraX= 0;
  }

  crearPersonaje() {
    this.personaje = new Personaje(0, 300);
  }

  crearFragmentos() {
    this.fragmentos = [];
    this.fragmentos.push(new Fragmento(115, 330));
    this.fragmentos.push(new Fragmento(255, 240));
    this.fragmentos.push(new Fragmento(556, 215));
    this.fragmentos.push(new Fragmento(760, 330));
    this.fragmentos.push(new Fragmento(870, 240));
    this.fragmentos.push(new Fragmento(1220, 215));
    this.fragmentos.push(new Fragmento(1430, 330));
    this.fragmentos.push(new Fragmento(1580, 240));
  }

  crearEnemigos() {
    this.enemigos = [];
    this.enemigos.push(new Enemigo(350));
  this.enemigos.push(new Enemigo(1000));
  this.enemigos.push(new Enemigo(1540));

}
 

  detectarEnemigos() {

  for (let i = 0; i < this.enemigos.length; i++) {

    let enemigo = this.enemigos[i];

    // Centros de los personajes
    let centroLinkX = this.personaje.posX + this.personaje.ancho / 2;
    let centroLinkY = this.personaje.posY + this.personaje.alto / 2;

    let centroEnemigoX = enemigo.posX + enemigo.ancho / 2;
    let centroEnemigoY = enemigo.posY + enemigo.alto / 2;

    // Distancia entre Link y el enemigo
    let distancia = dist( centroLinkX, centroLinkY, centroEnemigoX, centroEnemigoY);

    if (distancia < 30) {
      this.estado = "perdiste";
    }
  }
}

  dibujar() {

    if (this.estado == "perdiste") {
      image(pantallaPerdedor, 0, 0, width, height);
      return;
    }
    if (this.estado == "ganaste") {
      image(pantallaGanador, 0, 0, width, height);
      return;
    }

    // La cámara sigue al personaje
    this.camaraX = constrain(this.personaje.posX - 250, 0, 1000);

    // Fondo
    background(0);
    image(fondo, -this.camaraX, -130, 1800, 614);

    // Desplazar todos los elementos del escenario
    push();
    translate(-this.camaraX, 0);

    // Plataformas
    for (let i = 0; i < this.plataformas.length; i++) {
      this.plataformas[i].dibujar();
    }

    // Fragmentos
    for (let i = 0; i < this.fragmentos.length; i++) {
      this.fragmentos[i].dibujar();
    }

    // Personaje
    this.personaje.aplicarGravedad(this.plataformas);
    this.personaje.actualizarEstado();
    this.personaje.dibujar();

    // Recolección
    this.detectarFragmentos();
    this.detectarEnemigos ();
    // Enemigos
    for (let i = 0; i < this.enemigos.length; i++) {
      this.enemigos[i].actualizar();
      this.enemigos[i].dibujar();
    }
    pop();

    this.mostrarContador();
  }

  detectarFragmentos() {
    for (let i = 0; i < this.fragmentos.length; i++) {
      let fragmento = this.fragmentos[i];

      if (!fragmento.recolectado) {
        let distancia = dist(this.personaje.posX + this.personaje.ancho / 2, this.personaje.posY + this.personaje.alto / 2, fragmento.posX, fragmento.posY);

        if (distancia < 50) {
          fragmento.recolectado = true;
        }
      }
    }
    let cantidad = 0;

    for (let i = 0; i < this.fragmentos.length; i++) {
      if (this.fragmentos[i].recolectado) {
        cantidad++;
      }
    }

    if (cantidad === 8) {
      this.estado = "ganaste";
    }
  }


  mostrarContador() {
    let cantidad = 0;

    for (let i = 0; i < this.fragmentos.length; i++) {
      if (this.fragmentos[i].recolectado) {
        cantidad++;
      }
    }

    fill(255);
    textSize(20);
    textAlign(LEFT);
    text("Fragmentos: " + cantidad + " / 8", 20, 30);
  }
  crearPlataformas() {
    this.plataformas = [];

    this.plataformas.push(new Plataforma(220, 275, 1));
    this.plataformas.push(new Plataforma(500, 250, 2));
    this.plataformas.push(new Plataforma(850, 275, 1));
    this.plataformas.push(new Plataforma(1150, 250, 3));
    this.plataformas.push(new Plataforma(1500, 275, 2));
  }
}
