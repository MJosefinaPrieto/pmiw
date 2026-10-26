class Juego {
  constructor() {
    this.crearPersonaje();
    this.fragmentos = [];
    this.crearFragmentos();
  }

  dibujar() {
    background(135, 206, 235);
    fill(80, 160, 60);
    rect(0, 350, 800, 50);


    for (let i = 0; i < 8; i++) {
      this.fragmentos[i].dibujar();
    }
this.personaje.aplicarGravedad();
    this.personaje.dibujar();
  }

  crearPersonaje() {
    this.personaje = new Personaje(0, 300);
  }

  crearFragmentos() {
    for (let i = 0; i < 8; i++) {
      this.fragmentos[i] = new Fragmentos(100 + i * 80, 325);
    }
  }
}
