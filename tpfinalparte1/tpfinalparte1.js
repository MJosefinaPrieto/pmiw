const ESCENAS = [
  {
    id: "escena00",
    texto: "Mientras deambulaba por Hyrule, Impa, la niñera de la princesa Zelda es custodiada por un secuaz de Ganon para intentar detener el plan de la princesa; sin embargo, un joven adolescente llamado Link aparece de repente y la rescata.",
    imagen: "assets/escena-1.jpg",
    opciones: [{ etiqueta: "Continuar", destino: "escena1" }]
  },
  {
    id: "escena1",
    texto: "—La princesa fue capturada —dice Impa con voz temblorosa—. Antes de caer presa, escondió ocho fragmentos de la Trifuerza por todo Hyrule. Reunilos todos para poder enfrentar a Ganon. ¿Cómo empezás tu búsqueda?",
    imagen: "assets/escena-2.jpg",
    opciones: [
      { etiqueta: "Explorar las mazmorras", destino: "escena2" },
      { etiqueta: "Aventurarse", destino: "escena8" },
      { etiqueta: "Ir directo hacia Ganon", destino: "escena10" }
    ]
  },
  {
    id: "escena2",
    texto: "Link desciende a unas mazmorras olvidadas bajo las montañas de Hyrule. Los pasillos de piedra están cubiertos de musgo y trampas antiguas duermen bajo el polvo de siglos. En algún rincón brillan los fragmentos que busca.",
    imagen: "assets/escena-3.jpg",
    opciones: [
      { etiqueta: "Revisar cada sala con calma", destino: "escena3" },
      { etiqueta: "Avanzar rápido, sin revisar todo", destino: "escena7" }
    ]
  },
  {
    id: "escena3",
    texto: "Sala por sala, Link no deja nada sin revisar. Uno a uno, los ocho fragmentos dorados caen en sus manos hasta formar un brillo completo. Ya tiene lo que necesita: ahora debe enfrentar a quien los separó.",
    imagen: "assets/escena-4.jpg",
    opciones: [{ etiqueta: "Continuar", destino: "escena4" }]
  },
  {
    id: "escena4",
    texto: "Con los fragmentos guardados junto a su corazón, Link marcha hacia el norte, donde una montaña de picos negros escupe humo rojizo hacia el cielo. Ahí, en las profundidades de la roca, lo espera Ganon.",
    imagen: "assets/escena-5.jpg",
    opciones: [{ etiqueta: "Entrar a la guarida", destino: "escena5" }]
  },
  {
    id: "escena5",
    texto: "El calor de la lava golpea el rostro de Link cuando por fin encuentra a Ganon, gigante y cubierto de armadura oscura. El monstruo levanta su tridente, seguro de su victoria. Es el momento decisivo.",
    imagen: "assets/escena-6.jpg",
    opciones: [
      { etiqueta: "Atacar con todo el poder reunido", destino: "escena6" },
      { etiqueta: "Dudar en el último instante", destino: "escena14" }
    ]
  },
  {
    id: "escena6",
    texto: "Con un grito de determinación, Link reúne los ocho fragmentos frente a él. Una luz dorada envuelve la caverna: Ganon retrocede, vencido. La Trifuerza vuelve a brillar completa en las manos del héroe.",
    imagen: "assets/escena-7.jpg",
    opciones: [{ etiqueta: "Continuar", destino: "escena13" }]
  },
  {
    id: "escena7",
    texto: "Las antorchas se apagan una a una. Link revisó cada sala que pudo encontrar, pero algunos fragmentos siguen ocultos en rincones que nunca llegó a ver. Sin el poder completo, la misión termina aquí, por ahora.",
    imagen: "assets/escena-8.jpg",
    opciones: [{ etiqueta: "Retirarte a pensar una nueva estrategia", destino: "escena15" }]
  },
  {
    id: "escena8",
    texto: "En lugar de las mazmorras, Link recorre los caminos abiertos de Hyrule. Pronto se enfrenta a jaurías de monstruos, puentes derrumbados y desiertos hostiles. Cada fragmento que encuentra tiene un precio alto.",
    imagen: "assets/escena-9.jpg",
    opciones: [{ etiqueta: "Continuar", destino: "escena9" }]
  },
  {
    id: "escena9",
    texto: "Agotado tras la travesía, Link cuenta lo que consiguió: apenas la mitad de los fragmentos. No alcanza para enfrentar a Ganon. Respira hondo, sabiendo que deberá reunir fuerzas y volver a intentarlo.",
    imagen: "assets/escena-10.jpg",
    opciones: [{ etiqueta: "Retirarte a recuperar fuerzas", destino: "escena15" }]
  },
  {
    id: "escena10",
    texto: "Impaciente por rescatar a la princesa, Link decide no perder tiempo buscando fragmentos. Con la espada en la mano y el coraje como única arma, se dirige directo hacia la montaña de Ganon.",
    imagen: "assets/escena-11.jpg",
    opciones: [{ etiqueta: "Continuar", destino: "escena11" }]
  },
  {
    id: "escena11",
    texto: "Sin el poder de la Trifuerza, Link enfrenta a Ganon completamente solo. El monstruo es demasiado fuerte, y cada golpe del héroe no parece hacer ninguna diferencia. La batalla está perdida.",
    imagen: "assets/escena-12.jpg",
    opciones: [{ etiqueta: "Continuar", destino: "escena14" }]
  },
  {
    id: "escena13",
    texto: "Con Ganon derrotado, Link corre hasta lo alto de la torre donde Zelda estaba prisionera. Ella sonríe al verlo, libre por fin. Hyrule respira tranquilo: el héroe cumplió su destino.",
    imagen: "assets/escena-13.jpg",
    opciones: [{ etiqueta: "Jugar de nuevo", destino: "escena00" }]
  },
  {
    id: "escena14",
    texto: "La oscuridad de Ganon se extiende sobre Hyrule. Link ha caído, y en lo alto de la montaña, Zelda sigue prisionera, esperando a un héroe que esta vez no llegó a tiempo.",
    imagen: "assets/escena-14.jpg",
    opciones: [{ etiqueta: "Jugar de nuevo", destino: "escena00" }]
  },
  {
    id: "escena15",
    texto: "El viaje termina antes de tiempo, pero no todo está perdido. Link mira hacia el horizonte, decidido a intentarlo de nuevo, con lo aprendido en el camino.",
    imagen: "assets/escena-15.jpg",
    opciones: [{ etiqueta: "Jugar de nuevo", destino: "escena00" }]
  }
];

const PANEL_Y = 280;
const TEXTO_X = 40;
const TEXTO_Y = 308;
const TEXTO_ANCHO = 720;
const TEXTO_ALTO = 66;

const BOTONES_Y = 395;
const BOTON_ALTO = 34;
const BOTONES_MARGEN = 40;
const BOTONES_ESPACIO = 12;

const COLOR_BOTON = [40, 65, 42];
const COLOR_BOTON_HOVER = [76, 122, 58];

let pantallaActual = "escena00";
const imagenes = [];

function preload() {
  for (let escena of ESCENAS) {
    imagenes[escena.id] = loadImage(escena.imagen);
  }
}
function setup() {
  createCanvas(800, 450);
  textFont("Georgia");
}

function draw() {
  cursor(ARROW);

 let escena = obtenerEscena(pantallaActual);
  if (!escena) return;

  dibujarFondo(escena.id);
  dibujarPanel();
  dibujarTexto(escena.texto);

  let botones = calcularBotones(escena.opciones);
  for (let boton of botones) {
    dibujarBoton(boton);
  }
}
function mousePressed() {
  let escena = obtenerEscena(pantallaActual);
  if (!escena) return;

  let botones = calcularBotones(escena.opciones);
  for (let b of botones) {
    if (mouseX >= b.x && mouseX <= b.x + b.w && mouseY >= b.y && mouseY <= b.y + b.h) {
      pantallaActual = b.destino;
      return;
    }
  }
}
