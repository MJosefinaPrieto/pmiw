function intro() {

  if (millis() - tiempoIntro < 2500) {

    image(
      fondoIntro,
      -400, posYFondo,
      width + 800, height + 800
    );

    if (millis() - ultimoCambioLink > velocidadLink) {
      frameLink = 1 - frameLink;
      ultimoCambioLink = millis();
    }


    if (posYLink > 100) {
      posYLink -= 2;
    }

    image(
      spritesLink[frameLink],
      350, posYLink,
      spritesLink[frameLink].width * 2,
      spritesLink[frameLink].height * 2
    );

  } else {

    image(portada, 0, 0, width, height);

    if (millis() - ultimoCambio > velocidadCascada) {
      frameCascada++;

      if (frameCascada >= N_FRAMES) {
        frameCascada = 0;
      }

      ultimoCambio = millis();
    }

    image(
      framesCascada[frameCascada],
      317, 345, 55, 105
    );

    if (millis() - tiempoIntro > 4000) {
      pantalla = 16;
    }
  }
}
