function intro() {

  let escala = max(width / portada.width, height / portada.height);

  let anchoPortada = portada.width * escala;
  let altoPortada = portada.height * escala;

  image(portada,(width - anchoPortada) / 2,(height - altoPortada) / 2, anchoPortada, altoPortada);

  // Cambiar frame de la cascada
  if (millis() - ultimoCambio > velocidadCascada) {
    frameCascada++;

    if (frameCascada >= N_FRAMES) {
      frameCascada = 0;
    }

    ultimoCambio = millis();
  }

  // Cascada
  image(framesCascada[frameCascada], 270, 332, 90, 90);
}
