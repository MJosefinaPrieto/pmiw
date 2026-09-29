var ESCENAS = [
  {
    id: "escena00",
    texto: "En la fría noche, Link llega justo a tiempo: dos soldados de Ganon acorralan a Impa, la niñera de la princesa Zelda. Con un golpe certero, los ahuyenta y se arrodilla junto a ella, malherida pero viva.",
    imagen: "imagenes/escena-1.jpg",
    opciones: [{ etiqueta: "Continuar", destino: "escena01" }]
  },
  {
    id: "escena01",
    texto: "—La princesa fue capturada —dice Impa con voz temblorosa—. Antes de caer presa, escondió ocho fragmentos de la Trifuerza por todo Hyrule. Reunilos todos para poder enfrentar a Ganon. ¿Cómo empezás tu búsqueda?",
    imagen: "imagenes/escena-2.jpg",
    opciones: [
      { etiqueta: "Explorar las mazmorras", destino: "escena02" },
      { etiqueta: "Recorrer el mundo abierto", destino: "escena08" },
      { etiqueta: "Ir directo hacia Ganon", destino: "escena10" }
    ]
  },
  {
    id: "escena02",
    texto: "Link desciende a unas mazmorras olvidadas bajo las montañas de Hyrule. Los pasillos de piedra están cubiertos de musgo y trampas antiguas duermen bajo el polvo de siglos. En algún rincón brillan los fragmentos que busca.",
    imagen: "imagenes/escena-3.jpg",
    opciones: [
      { etiqueta: "Revisar cada sala con calma", destino: "escena03" },
      { etiqueta: "Avanzar rápido, sin revisar todo", destino: "escena07" }
    ]
  },
  {
    id: "escena03",
    texto: "Sala por sala, Link no deja nada sin revisar. Uno a uno, los ocho fragmentos dorados caen en sus manos hasta formar un brillo completo. Ya tiene lo que necesita: ahora debe enfrentar a quien los separó.",
    imagen: "imagenes/escena-4.jpg",
    opciones: [{ etiqueta: "Continuar", destino: "escena04" }]
  },
  {
    id: "escena04",
    texto: "Con los fragmentos guardados junto a su corazón, Link marcha hacia el norte, donde una montaña de picos negros escupe humo rojizo hacia el cielo. Ahí, en las profundidades de la roca, lo espera Ganon.",
    imagen: "imagenes/escena-5.jpg",
    opciones: [{ etiqueta: "Entrar a la guarida", destino: "escena05" }]
  },
  {
    id: "escena05",
    texto: "El calor de la lava golpea el rostro de Link cuando por fin encuentra a Ganon, gigante y cubierto de armadura oscura. El monstruo levanta su tridente, seguro de su victoria. Es el momento decisivo.",
    imagen: "imagenes/escena-6.jpg",
    opciones: [
      { etiqueta: "Atacar con todo el poder reunido", destino: "escena06" },
      { etiqueta: "Dudar en el último instante", destino: "final_tragico" }
    ]
  },
  {
    id: "escena06",
    texto: "Con un grito de determinación, Link reúne los ocho fragmentos frente a él. Una luz dorada envuelve la caverna: Ganon retrocede, vencido. La Trifuerza vuelve a brillar completa en las manos del héroe.",
    imagen: "imagenes/escena-7.jpg",
    opciones: [{ etiqueta: "Continuar", destino: "final_clasico" }]
  },
  {
    id: "escena07",
    texto: "Las antorchas se apagan una a una. Link revisó cada sala que pudo encontrar, pero algunos fragmentos siguen ocultos en rincones que nunca llegó a ver. Sin el poder completo, la misión termina aquí, por ahora.",
    imagen: "imagenes/escena-8.jpg",
    opciones: [{ etiqueta: "Retirarte a pensar una nueva estrategia", destino: "final_reinicio" }]
  },
  {
    id: "escena08",
    texto: "En lugar de las mazmorras, Link recorre los caminos abiertos de Hyrule. Pronto se enfrenta a jaurías de monstruos, puentes derrumbados y desiertos hostiles. Cada fragmento que encuentra tiene un precio alto.",
    imagen: "imagenes/escena-9.jpg",
    opciones: [{ etiqueta: "Continuar", destino: "escena09" }]
  },
  {
    id: "escena09",
    texto: "Agotado tras la travesía, Link cuenta lo que consiguió: apenas la mitad de los fragmentos. No alcanza para enfrentar a Ganon. Respira hondo, sabiendo que deberá reunir fuerzas y volver a intentarlo.",
    imagen: "imagenes/escena-10.jpg",
    opciones: [{ etiqueta: "Retirarte a recuperar fuerzas", destino: "final_reinicio" }]
  },
  {
    id: "escena10",
    texto: "Impaciente por rescatar a la princesa, Link decide no perder tiempo buscando fragmentos. Con la espada en la mano y el coraje como única arma, se dirige directo hacia la montaña de Ganon.",
    imagen: "imagenes/escena-11.jpg",
    opciones: [{ etiqueta: "Continuar", destino: "escena11" }]
  },
  {
    id: "escena11",
    texto: "Sin el poder de la Trifuerza, Link enfrenta a Ganon completamente solo. El monstruo es demasiado fuerte, y cada golpe del héroe no parece hacer ninguna diferencia. La batalla está perdida.",
    imagen: "imagenes/escena-12.jpg",
    opciones: [{ etiqueta: "Continuar", destino: "final_tragico" }]
  },
  {
    id: "final_clasico",
    texto: "Con Ganon derrotado, Link corre hasta lo alto de la torre donde Zelda estaba prisionera. Ella sonríe al verlo, libre por fin. Hyrule respira tranquilo: el héroe cumplió su destino.",
    imagen: "imagenes/escena-13.jpg",
    opciones: [{ etiqueta: "Jugar de nuevo", destino: "escena00" }]
  },
  {
    id: "final_tragico",
    texto: "La oscuridad de Ganon se extiende sobre Hyrule. Link ha caído, y en lo alto de la montaña, Zelda sigue prisionera, esperando a un héroe que esta vez no llegó a tiempo.",
    imagen: "imagenes/escena-14.jpg",
    opciones: [{ etiqueta: "Jugar de nuevo", destino: "escena00" }]
  },
  {
    id: "final_reinicio",
    texto: "El viaje termina antes de tiempo, pero no todo está perdido. Link mira hacia el horizonte, decidido a intentarlo de nuevo, con lo aprendido en el camino.",
    imagen: "imagenes/escena-15.jpg",
    opciones: [{ etiqueta: "Jugar de nuevo", destino: "escena00" }]
  }
];

var PANEL_Y = 280;
var TEXTO_X = 40;
var TEXTO_Y = 292;
var TEXTO_ANCHO = 720;
var TEXTO_ALTO = 66;
var BOTONES_Y = 395;
var BOTON_ALTO = 34;
var BOTONES_MARGEN = 40;
var BOTONES_ESPACIO = 12;

var COLOR_BOTON = [40, 65, 42];
var COLOR_BOTON_HOVER = [76, 122, 58];

var pantallaActualId = "escena00";
var imagenesCargadas = {};

function setup() {
  createCanvas(800, 450);
  textFont("Georgia");

  // Carga las imágenes en segundo plano sin congelar la pantalla de inicio
  for (var i = 0; i < ESCENAS.length; i++) {
    var escena = ESCENAS[i];
    cargarImagenAsync(escena.id, escena.imagen);
  }
}

function cargarImagenAsync(id, ruta) {
  loadImage(
    ruta,
    function(img) {
      imagenesCargadas[id] = img;
    },
    function() {
      imagenesCargadas[id] = null;
    }
  );
}

function draw() {
  cursor(ARROW);

  var escena = obtenerEscenaPorId(pantallaActualId);
  if (escena) {
    dibujarEscenaDeHistoria(escena);
  }
}
function mousePressed() {
  var escena = obtenerEscenaPorId(pantallaActualId);
  if (!escena) return;

  var botones = calcularBotones(escena.opciones);
  for (var i = 0; i < botones.length; i++) {
    var boton = botones[i];
    if (estaElMouseDentro(boton.x, boton.y, boton.w, boton.h)) {
      irAEscena(boton.destino);
      return;
    }
  }
}
