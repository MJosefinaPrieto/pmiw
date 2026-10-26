class Personaje {
  constructor(posX, posY) {
    // inicializadores
    this.posX= posX;
    this.posY= posY;
    this.miColor= color(255, 0, 0);
    this.vida=1;
   this.velocidadSalto=0;
   this.saltando= false;
  }


  dibujar () {
    fill (this.miColor);
    rect (this.posX, this.posY, 50, 50);
  }

  moverDerecha () {
    this.posX = this.posX + 2;
  }

  moverIzquierda () {
    this.posX = this.posX - 2;
  }

   saltar() {
    if (!this.saltando) {
      this.velocidadSalto = -12;
      this.saltando = true;
    }
  }

  aplicarGravedad() {
    this.posY = this.posY + this.velocidadSalto;
    this.velocidadSalto = this.velocidadSalto + 0.6;

    if (this.posY >= 300) {
      this.posY = 300;
      this.velocidadSalto = 0;
      this.saltando = false;
    }
  }
}
