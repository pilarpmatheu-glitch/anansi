// 1. PERSONAJES DEL JUEGO

const personajes = [
  { id: "felix", nombre: "Félix" },
  { id: "berto", nombre: "Berto" },
  { id: "roco", nombre: "Roco" }
];


// 2. SALAS, HISTORIAS Y PUERTAS

const salas = [
  {
    nombre: "El Umbral de los Ecos",
    historia: "La primera cámara está cubierta de símbolos antiguos. Tres enormes puertas bloquean el paso. Desde el otro lado se escuchan sonidos que parecen responder a sus propios movimientos.",
    puertas: [
      {
        titulo: "La cerradura olvidada",
        pista: "El mecanismo no reconoce las llaves que le ofrecen. Sus piezas parecen haber sido colocadas en un orden equivocado. Quizás no necesite una llave, sino una nueva manera de funcionar.",
        correcto: "felix",
        imagen: "imagenes/sala1_puerta1.jpg"
      },
      {
        titulo: "Los símbolos del tiempo",
        pista: "En la superficie hay una secuencia de símbolos. Algunos se repiten, otros desaparecen. El último espacio permanece vacío, esperando una respuesta.",
        correcto: "berto",
        imagen: "imagenes/sala1_puerta2.jpg"
      },
      {
        titulo: "El guardián de piedra",
        pista: "Una enorme losa bloquea el camino. Dos anillas sobresalen de sus extremos. El mecanismo parece intacto, pero nada se mueve.",
        correcto: "roco",
        imagen: "imagenes/sala1_puerta3.jpg"
      }
    ],
    imagen: "imagenes/sala1.jpg"
  },

  {
    nombre: "La Galería de los Susurros",
    historia: "Las paredes están decoradas con figuras humanas. Una voz surge desde el techo y repite las mismas palabras una y otra vez. El aire parece reaccionar a cada sonido.",
    puertas: [
      {
        titulo: "El mensaje oculto",
        pista: "Una inscripción está escrita con palabras que parecen no tener sentido. Sin embargo, cada línea guarda una relación con la anterior.",
        correcto: "berto",
        imagen: "imagenes/sala2_puerta1.jpg"
      },
      {
        titulo: "El peso del pasado",
        pista: "Una enorme estructura de piedra cayó sobre el mecanismo de apertura. La puerta todavía funciona, pero algo impide que se levante.",
        correcto: "roco",
        imagen: "imagenes/sala2_puerta2.jpg"
      },
      {
        titulo: "El guardián silencioso",
        pista: "Una figura aparece frente a la entrada. No tiene rostro y parece esperar una respuesta. Cada vez que alguien habla, cambia su postura.",
        correcto: "felix",
        imagen: "imagenes/sala2_puerta3.jpg"
      }
    ],
    imagen: "imagenes/sala2.jpg"
  },

  {
    nombre: "El Laberinto de los Perdidos",
    historia: "El templo se divide en pasillos que parecen cambiar de posición. Las paredes muestran mapas incompletos y el suelo está cubierto de restos de antiguas construcciones.",
    puertas: [
      {
        titulo: "El pasaje derrumbado",
        pista: "El camino está cubierto de bloques y fragmentos de roca. Entre ellos existe un pequeño espacio, aunque la entrada parece demasiado estrecha para pasar.",
        correcto: "roco",
        imagen: "imagenes/sala3_puerta1.jpg"
      },
      {
        titulo: "La habitación cambiante",
        pista: "Las paredes muestran figuras que se transforman cuando alguien se acerca. Una de ellas parece señalar un camino, aunque no siempre es la misma.",
        correcto: "felix",
        imagen: "imagenes/sala3_puerta2.jpg"
      },
      {
        titulo: "El mapa incompleto",
        pista: "Un antiguo mapa muestra tres rutas posibles. Ninguna coincide con los pasillos actuales. Hay marcas repetidas en sus bordes que parecen indicar algo.",
        correcto: "berto",
        imagen: "imagenes/sala3_puerta3.jpg"
      }
    ],
    imagen: "imagenes/sala3.jpg"
  },

  {
    nombre: "La Cámara de los Dioses",
    historia: "En el centro de la habitación hay una estatua sin rostro. Frente a ella se encuentra un puente suspendido y un antiguo reloj de agua que parece controlar los mecanismos del lugar.",
    puertas: [
      {
        titulo: "La voz del ídolo",
        pista: "La estatua repite las últimas palabras que escucha, pero con pequeñas diferencias. Sus movimientos parecen responder a los sonidos del lugar.",
        correcto: "felix",
        imagen: "imagenes/sala4_puerta1.jpg"
      },
      {
        titulo: "El puente de los antiguos",
        pista: "Una parte del puente ha cedido. La estructura se mantiene suspendida gracias a una cadena oxidada que comienza a desprenderse.",
        correcto: "roco",
        imagen: "imagenes/sala4_puerta2.jpg"
      },
      {
        titulo: "El reloj detenido",
        pista: "El agua cae dentro de cuatro recipientes. Cada uno se llena a una velocidad diferente. El mecanismo parece seguir una regla que todavía no fue descubierta.",
        correcto: "berto",
        imagen: "imagenes/sala4_puerta3.jpg"
      }
    ],
    imagen: "imagenes/sala4.jpg"
  },

  {
    nombre: "El Santuario de las Sombras",
    historia: "Una luz tenue ilumina una habitación llena de objetos antiguos. Hay fragmentos de cerámica, inscripciones y enormes bloques que parecen formar parte de una antigua ceremonia.",
    puertas: [
      {
        titulo: "La secuencia perdida",
        pista: "Una serie de figuras está grabada sobre la pared. Al observarlas desde distintos ángulos, algunas parecen cambiar de significado.",
        correcto: "berto",
        imagen: "imagenes/sala5_puerta1.jpg"
      },
      {
        titulo: "Los restos del ritual",
        pista: "Sobre el suelo hay fragmentos de objetos antiguos, una cuerda desgastada y varias piezas de madera. Ninguno parece importante por separado.",
        correcto: "felix",
        imagen: "imagenes/sala5_puerta2.jpg"
      },
      {
        titulo: "La última barrera",
        pista: "Un bloque enorme impide continuar. Sus bordes están agrietados y parece formar parte de una estructura mucho más grande.",
        correcto: "roco",
        imagen: "imagenes/sala5_puerta3.jpg"
      }
    ],
    imagen: "imagenes/sala5.jpg"
  },

  {
    nombre: "El Altar de Anansi",
    historia: "Finalmente llegan al corazón del templo. Tres caminos rodean un altar antiguo. En sus paredes aparecen representados una piedra, una hoja de papel y una hoja afilada. Una voz anuncia que solamente uno podrá abandonar el lugar con el secreto del templo.",
    puertas: [
      {
        titulo: "La última prueba",
        pista: "El altar está cubierto por una placa de piedra. Debajo se escucha el sonido de un mecanismo que continúa funcionando. La entrada no cederá mientras permanezca bloqueada.",
        correcto: "roco",
        imagen: "imagenes/sala6_puerta1.jpg"
      },
      {
        titulo: "La verdad del altar",
        pista: "Tres inscripciones describen el mismo acontecimiento, pero sus versiones se contradicen. Solamente una puede ser verdadera.",
        correcto: "berto",
        imagen: "imagenes/sala6_puerta2.jpg"
      },
      {
        titulo: "El pacto final",
        pista: "Una sombra aparece sobre el altar. No responde a órdenes ni amenazas. Parece esperar que alguien le ofrezca una historia que valga la pena escuchar.",
        correcto: "felix",
        imagen: "imagenes/sala6_puerta3.jpg"
      }
    ],
    imagen: "imagenes/sala6.jpg"
  }
];


// 3. VARIABLES QUE GUARDAN LO QUE PASA EN LA PARTIDA

let jugador = "";
let salaActual = 0;
let confianza = 0;

let resentimiento = {
  felix: 0,
  berto: 0,
  roco: 0
};

let elecciones = ["", "", ""];
let ultimoResultado = "";


// 4. MUESTRA UNA PANTALLA Y ESCONDE LAS DEMÁS

function mostrarPantalla(nombre) {
  const pantallas = document.querySelectorAll(".pantalla");

  for (let i = 0; i < pantallas.length; i++) {
    pantallas[i].classList.remove("activa");
  }

  document.getElementById(nombre).classList.add("activa");
}


// 5. INICIA UNA NUEVA PARTIDA

function iniciarJuego() {
  jugador = document.getElementById("nombreJugador").value.trim();

  if (jugador === "") {
    alert("Escribí tu nombre primero.");
    return;
  }

  salaActual = 0;
  confianza = 0;

  resentimiento = {
    felix: 0,
    berto: 0,
    roco: 0
  };

  elecciones = ["", "", ""];

  localStorage.removeItem("partidaAnansi4");

  mostrarPantalla("personajes");
}


// 6. CONSTRUYE LAS TRES PUERTAS DE LA SALA ACTUAL

function mostrarSala() {
  mostrarPantalla("juego");

  const sala = salas[salaActual];

  document.getElementById("numeroSala").textContent =
    "SALA " + (salaActual + 1) + " / " + salas.length;

  document.getElementById("nombreSala").textContent = sala.nombre;

  document.getElementById("historiaSala").textContent = sala.historia;

  document.getElementById("barraProgreso").style.width =
    ((salaActual + 1) / salas.length * 100) + "%";

  const contenedor = document.getElementById("puertasContainer");

  // Cada puerta tiene su propia imagen, definida arriba en el arreglo salas.
  // El contenedor ya no usa una sola foto para las tres puertas.

  contenedor.style.backgroundImage = "none";
  contenedor.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    const puerta = sala.puertas[i];

    const tarjeta = document.createElement("article");
    tarjeta.className = "puerta";

    // Ponemos la imagen de esta puerta como fondo de su tarjeta.

    tarjeta.style.backgroundImage =
      "linear-gradient(to bottom, rgba(20, 12, 7, 0.08), rgba(20, 12, 7, 0.85)), url('" + puerta.imagen + "')";

    const titulo = document.createElement("h3");
    titulo.textContent = "Puerta " + (i + 1) + ": " + puerta.titulo;

    const pista = document.createElement("p");
    pista.textContent = puerta.pista;

    const selector = document.createElement("select");

    selector.innerHTML = '<option value="">Elegí un personaje</option>';

    for (let j = 0; j < personajes.length; j++) {
      const persona = personajes[j];

      const opcion = document.createElement("option");

      opcion.value = persona.id;
      opcion.textContent = persona.nombre;

      opcion.selected = elecciones[i] === persona.id;

      opcion.disabled =
        elecciones.includes(persona.id) &&
        elecciones[i] !== persona.id;

      selector.appendChild(opcion);
    }

    selector.addEventListener("change", function() {
      elecciones[i] = selector.value;
      mostrarSala();
    });

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(pista);
    tarjeta.appendChild(selector);

    contenedor.appendChild(tarjeta);
  }

  document.getElementById("confirmar").disabled =
    elecciones.includes("");
}


// 7. COMPARA CADA ELECCIÓN CON LA RESPUESTA CORRECTA

function confirmarDecisiones() {
  const sala = salas[salaActual];

  let aciertos = 0;
  let detalles = "";

  for (let i = 0; i < 3; i++) {

    if (elecciones[i] === sala.puertas[i].correcto) {
      aciertos++;

      detalles += "Puerta " + (i + 1) + ": superada.\n";

    } else {

      resentimiento[elecciones[i]]++;

      detalles += "Puerta " + (i + 1) + ": hubo dificultades.\n";
    }
  }

  if (aciertos >= 2) {
    confianza++;
  } else {
    confianza--;
  }

  ultimoResultado =
    detalles +
    "\nAciertos: " + aciertos + "/3" +
    "\nConfianza: " + confianza;

  document.getElementById("textoResultado").textContent =
    aciertos === 3
      ? "¡Los tres desafíos fueron superados!"
      : "El grupo avanza, pero las decisiones tienen consecuencias.";

  document.getElementById("resumenResultado").textContent =
    ultimoResultado;

  mostrarPantalla("resultado");
}


// 8. AVANZA Y GUARDA EL PROGRESO EN EL NAVEGADOR

function siguienteSala() {
  salaActual++;

  elecciones = ["", "", ""];

  if (salaActual < salas.length) {

    guardarPartida();

    mostrarSala();

  } else {

    localStorage.removeItem("partidaAnansi4");

    elegirTraidor();
  }
}


// 9. GUARDA LOS DATOS DE LA PARTIDA

function guardarPartida() {
  const datos = {
    jugador: jugador,
    salaActual: salaActual,
    confianza: confianza,
    resentimiento: resentimiento
  };

  localStorage.setItem("partidaAnansi4", JSON.stringify(datos));
}


// 10. RECUPERA UNA PARTIDA GUARDADA

function continuarPartida() {
  try {

    const datos = JSON.parse(localStorage.getItem("partidaAnansi4"));

    if (
      !datos ||
      !Number.isInteger(datos.salaActual) ||
      datos.salaActual < 0 ||
      datos.salaActual >= salas.length ||
      typeof datos.jugador !== "string" ||
      typeof datos.confianza !== "number" ||
      !datos.resentimiento ||
      !["felix", "berto", "roco"].every(
        id => Number.isInteger(datos.resentimiento[id]) &&
        datos.resentimiento[id] >= 0
      )
    ) {
      throw new Error("Datos incorrectos");
    }

    jugador = datos.jugador;
    salaActual = datos.salaActual;
    confianza = datos.confianza;
    resentimiento = datos.resentimiento;

    elecciones = ["", "", ""];

    mostrarSala();

  } catch (error) {

    alert("No se pudo recuperar la partida guardada.");

    localStorage.removeItem("partidaAnansi4");

    document.getElementById("continuar").hidden = true;
  }
}


// 11. EL PERSONAJE CON MÁS RESENTIMIENTO SE CONVIERTE EN TRAIDOR

function elegirTraidor() {
  const mayor = Math.max(
    resentimiento.felix,
    resentimiento.berto,
    resentimiento.roco
  );

  const empatados = [];

  for (let i = 0; i < personajes.length; i++) {
    const id = personajes[i].id;

    if (resentimiento[id] === mayor) {
      empatados.push(personajes[i]);
    }
  }

  if (empatados.length === 1) {

    mostrarFinal(empatados[0].id);

    return;
  }

  mostrarPantalla("empate");

  const caja = document.getElementById("opcionesTraidor");

  caja.innerHTML = "";

  for (let i = 0; i < empatados.length; i++) {

    const boton = document.createElement("button");

    boton.textContent = empatados[i].nombre;

    boton.addEventListener("click", function() {
      mostrarFinal(empatados[i].id);
    });

    caja.appendChild(boton);
  }
}


// 12. MUESTRA UNO DE LOS TRES FINALES

function mostrarFinal(traidor) {

  const finales = {

    roco: {
      titulo: "FINAL I - LA FUERZA",
      subtitulo: "La piedra rompe la tijera",
      historia: "Roco traiciona a Félix. Berto sobrevive y sale del templo con el secreto de Anansi."
    },

    berto: {
      titulo: "FINAL II - LA INTELIGENCIA",
      subtitulo: "El papel envuelve la piedra",
      historia: "Berto traiciona a Roco. Félix logra escapar, mientras Berto desaparece entre las ruinas."
    },

    felix: {
      titulo: "FINAL III - LA ASTUCIA",
      subtitulo: "La tijera corta el papel",
      historia: "Félix traiciona a Berto. Roco consigue salir del templo, aunque ya no confía en nadie."
    }
  };

  const finalElegido = finales[traidor];

  document.getElementById("tituloFinal").textContent =
    finalElegido.titulo;

  document.getElementById("subtituloFinal").textContent =
    finalElegido.subtitulo;

  document.getElementById("historiaFinal").textContent =
    finalElegido.historia +
    (confianza >= 2
      ? " A pesar de todo, quedan recuerdos de la amistad."
      : " La desconfianza terminó separándolos.");

  document.getElementById("estadisticasFinal").textContent =
    "Jugador: " + jugador +
    "\nResentimiento de Félix: " + resentimiento.felix +
    "\nResentimiento de Berto: " + resentimiento.berto +
    "\nResentimiento de Roco: " + resentimiento.roco +
    "\nConfianza: " + confianza;

  localStorage.removeItem("partidaAnansi4");

  mostrarPantalla("final");
}


// 13. LOS BOTONES EJECUTAN LAS FUNCIONES CUANDO SE HACE CLIC

document.getElementById("comenzar").addEventListener("click", iniciarJuego);

document.getElementById("entrarTemplo").addEventListener("click", mostrarSala);

document.getElementById("confirmar").addEventListener("click", confirmarDecisiones);

document.getElementById("siguienteSala").addEventListener("click", siguienteSala);

document.getElementById("continuar").addEventListener("click", continuarPartida);

document.getElementById("reiniciar").addEventListener("click", function() {

  localStorage.removeItem("partidaAnansi4");

  location.reload();

});


// 14. COMPRUEBA SI EXISTE UNA PARTIDA GUARDADA

if (localStorage.getItem("partidaAnansi4") !== null) {

  document.getElementById("continuar").hidden = false;

}