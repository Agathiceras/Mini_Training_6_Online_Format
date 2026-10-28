/* Mini_Training_6_Online_Format - Spanish content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='es';
const CONTENT = {
  flag:'🇪🇸', dir:'ltr',
  ui:{
    pageTitle:"Mini-entrenamiento · Formato en línea — Capacitación de tutores de Kodland",
    logoSub:'Departamento de Desarrollo de Tutores',
    heroEyebrow:"🎯 Mini-entrenamiento",
    heroTitle:"Que las clases <span class=\"h-pill\">en línea</span> se sientan bien",
    heroIntro:"Has recibido este entrenamiento porque tienes estudiantes que han solicitado un reembolso porque no les gusta el formato en línea. Aquí te mostraremos qué puedes hacer como tutor y cómo manejar estas situaciones.",
    heroWork:"Completa 4 módulos cortos. Cada comprobación de módulo requiere un 70 % o más para desbloquear el siguiente. En total, unos 20–25 minutos.",
    startBtn:"🚀 Comenzar el entrenamiento",
    pathLabel:'Tu ruta de aprendizaje',
    devTitle:'Dev: desbloquear todos los módulos para revisión',
    backToPath:'Volver a la ruta',
    modulesPassed:'{done} / {total} módulos aprobados',
    moduleN:'Módulo {n}',
    of:'de',
    locked:'🔒 Bloqueado',
    passedBadge:'✅ Aprobado · {pct}%',
    reviewedBadge:'✅ Revisado',
    startBadge:'▶ Comenzar',
    reviewBadge:'▶ Repasar',
    objective:'Objetivo',
    startCheck:'▶ Comenzar la comprobación del módulo',
    finishBtn:'▶ Finalizar el mini-entrenamiento',
    doneBack:'✓ Listo — volver a la ruta',
    ixBadge:'📋 Comprobación del módulo — 70 % para desbloquear el siguiente módulo',
    ixItemBadge:'📋 Comprobación del módulo — pregunta {i} de {n}',
    scoreSoFar:'Puntuación hasta ahora: {c} / {t}',
    continue:'Continuar →',
    sortWrong:'No exactamente — la respuesta correcta es «{label}».',
    resPassed:'¡Módulo aprobado!',
    resFailed:'Todavía no lo logras',
    resUnlocked:"Has desbloqueado el siguiente módulo.",
    resDone:"Has completado este mini-entrenamiento.",
    resNeed:'Necesitas un 70 % para desbloquear el siguiente módulo. Repasa la sección anterior y vuelve a intentar la comprobación.',
    resContinue:'Continuar a la ruta de aprendizaje',
    resFinish:'Continuar',
    resBack:'Volver a la ruta',
    resReview:'Repasar este módulo',
    doneEyebrow:'Mini-entrenamiento completado',
    doneTitle:'🎉 ¡Felicidades!',
    doneP1:"🎉 <strong>¡Felicidades! Has completado este mini-entrenamiento.</strong>",
    doneP2:"¡Ya terminaste aquí! Por favor, vuelve a la página de capacitación del LMS desde la que accediste a este mini-entrenamiento para cerrar la tarea.",
    doneP3:"👉 <strong>Si debajo de la capacitación en el LMS aparece una comprobación o evaluación, asegúrate de completarla y obtener una puntuación aprobatoria</strong> — de lo contrario, la tarea podría quedar incompleta.",
    doneP4:'¡Mucho éxito! ❤️',
    doneP5:'',
    devUnlockAlert:'Modo Dev: todos los módulos están ahora desbloqueados para revisión.',
    devOn:'🔓 Modo Dev activado — todos los módulos desbloqueados',
    devOff:'🔒 Modo Dev desactivado — progreso borrado',
    devBadge:'🔓 MODO DEV',
    doLabel:'✅ Haz',
    avoidLabel:'🚫 Evita',
    noticeLabel:'Ten en cuenta:',
    cvSee:'Lo que ves:',
    cvDo:'Lo que haces:',
    dtExample:'Ejemplo de una clase real',
    dtNext:'Siguiente:',
    dtDone:"✅ Eso es todo sobre las cuatro áreas. Ahora, clasifica lo que ves.",
    tlVideoTitle:'{label} — un ejemplo de una clase real',
    tlVideoMeta:'Mira cómo se ve esta fase en una clase real'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introducción', emoji:'🧩', color:'var(--coral)',
 title:'Por qué estás aquí',
 desc:'Por qué «no me gustan las clases en línea» todavía se puede revertir — y las reglas que se aplican cuando ya ha llegado una solicitud de reembolso.',
 obj:'Entender qué significa realmente «no me gusta el formato en línea», por qué importa reportarlo el mismo día y qué hacer (y qué no hacer) exactamente cuando ya existe una solicitud de reembolso.',
 sections:[
  {t:'💻 Qué significa realmente «no me gusta en línea»', html:`
   <div class="card"><p>Casi nadie dice «se me va la atención después de un día entero de pantallas». Dicen <em>«en línea es aburrido»</em>, <em>«no me gusta»</em> — y la familia pide un reembolso. Detrás de esa frase suele haber cosas muy distintas:</p></div>
   ${iconGrid([
     {ic:'🥱', html:`<strong>Cansancio de pantallas.</strong> La clase llega después de un día de colegio lleno de pantallas, y el niño ya no tiene energía.`},
     {ic:'🫥', html:`<strong>Sentirse solo.</strong> No hay compañeros con quienes compartir el trabajo, nadie con quien reírse.`},
     {ic:'📱', html:`<strong>Distracciones en casa.</strong> El celular, un videojuego, una mascota o un hermano están a un clic.`},
     {ic:'🙈', html:`<strong>Timidez ante la cámara.</strong> No quiere que lo vean ni hablar delante de todos.`},
     {ic:'🔌', html:`<strong>Frustración con las herramientas.</strong> Retrasos, audio que no funciona, botones que no responden.`},
     {ic:'👨‍👩‍👧', html:`<strong>La familia esperaba algo presencial.</strong> Para ellos, en línea se siente «menos real» — piense lo que piense el niño.`}
   ])}
   ${co('co-idea','💡',`<p><strong>No puedes cambiar el formato — pero sí puedes cambiar cómo se siente la clase dentro de él.</strong> La mayor parte de lo que a los estudiantes no les gusta de las clases en línea depende de cómo se dirige la clase, y esa parte es tuya.</p>`)}
  `},
  {t:'⏱️ La clave es la rapidez — y tu reporte', html:`
   <div class="card"><p>No decides tú si un estudiante puede pasar a otro grupo o formato. Pero tu reporte es lo que inicia esa conversación, y solo funciona si llega a las personas adecuadas <strong>a tiempo</strong>.</p></div>
   ${stepFlow([
     {ic:'👀', label:'Notas el rechazo en una clase'},
     {ic:'📝', label:'Lo reportas en BO ese mismo día'},
     {ic:'👩‍💼', label:'Tu Team Leader y Servicio al Cliente revisan las opciones'},
     {ic:'🔄', label:'Una conversación motivacional, otro grupo o formato que le encaje (si lo hay) u otro curso'}
   ])}
   ${co('co-danger','🚨',`<p><strong>Un reporte tardío cierra puertas.</strong> Cuando la familia ya ha decidido, la mayoría de las opciones desaparecen. El mismo reporte, escrito en las primeras semanas, puede mantener a un niño en Kodland.</p>`)}
   ${co('co-ok','✅',`<p><strong>Mientras el equipo revisa las opciones, la clase sigue siendo tuya.</strong> Los Módulos 1 y 2 te muestran cómo descubrir qué le molesta al estudiante y cómo construir una clase en línea que disfrute.</p>`)}
  `},
  {t:'🛟 Si ya existe una solicitud de reembolso', html:`
   <div class="card"><p>Todo lo anterior trata de detectarlo pronto. Pero puede que estés abriendo este entrenamiento porque una familia <strong>ya</strong> ha pedido un reembolso. Las reglas de abajo se aplican sea cual sea el motivo — léelas primero y usa el resto del entrenamiento para entender qué llevó hasta aquí y qué puedes seguir haciendo en la clase.</p></div>
   ${co('co-idea','💡',`<p><strong>La solicitud la crea Servicio al Cliente, no tú</strong> — esa parte no está en tus manos. Lo que sigue siendo tuyo es todo lo que sucede en la clase a partir de ahora, y no es poco.</p>`)}
   ${co('co-danger','🤐',`<p><strong>No digas nada sobre la solicitud en sí</strong> — ni al niño ni a la familia — a menos que Servicio al Cliente te pida expresamente decir algo concreto. Tu trabajo ahora es la clase, no la conversación.</p>`)}
  `},
  {t:'🎯 Tu próxima clase es el intento de recuperación', html:`
   <div class="card"><p>Puede que no tengas la oportunidad de cambiar nada más. Trata la próxima clase con este niño como el momento que lo decide todo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dale un turno de verdad.</strong> No una pregunta sin sentido, sino un momento genuino en el que se sienta visto y tenga éxito.`},
     {ic:'🏆', html:`<strong>Prepara un logro temprano y visible.</strong> Debe salir de la clase sintiéndose capaz, no rezagado.`},
     {ic:'👀', html:`<strong>Atención específica</strong> — haz que se sienta notado por algo concreto, no elogiado de forma genérica.`},
     {ic:'🤐', html:`<strong>Ni una palabra sobre la solicitud</strong> — incluso si el niño la menciona, redirige con calidez y sigue enseñando.`}
   ])}
  `},
  {t:'📮 Avisa rápido y conoce la única frase segura', html:`
   <div class="card"><p>Puedes enterarte de que existe una solicitud por los comentarios de Servicio al Cliente en el perfil del niño en BO — no hay ningún sistema automático que te avise. Una vez que lo sepas, lo que has visto en tus clases es información que Servicio al Cliente no tiene de ninguna otra forma.</p></div>
   ${numlist([
     'Deja un comentario en BO ese mismo día con exactamente lo que has visto — fechas y datos concretos, no impresiones',
     'Incluye las palabras exactas de la familia, textualmente, si las tienes',
     'Avisa a tu Team Leader ese mismo día',
     'Nunca confirmes que un reembolso ha sido aprobado ni hables de ninguna cantidad'
   ])}
   ${co('co-ok','✅',`<p><strong>El mensaje que siempre es seguro decir:</strong> <em>«Servicio al Cliente le ayudará con esto.»</em> Ahí termina tu parte de la conversación — Servicio al Cliente se encarga a partir de ese punto.</p>`)}
  `},
  {t:'🌱 Mantén el esfuerzo después', html:`
   <div class="card"><p>Tanto si la solicitud se retira, como si el niño sigue en tu grupo o pasa a otro tutor o a otro formato, sigue dándole un cuidado extra durante las siguientes clases. Una recuperación que se sostiene una clase y luego vuelve en silencio a la normalidad, muchas veces no se sostiene en absoluto.</p></div>
  `}
 ]
},
{id:'diagnose', numLabel:'Módulo 1', emoji:'🔍', color:'var(--coral)',
 title:'Descubre qué le molesta — y luego dale otro enfoque',
 desc:'Cómo saber qué es exactamente lo que no funciona de las clases en línea, las preguntas que lo sacan a la luz según la edad, cómo cambiar la percepción y cómo reportarlo en BO.',
 obj:'Identificar qué es lo que realmente no le gusta al estudiante del formato en línea, preguntárselo de una forma adecuada a su edad, validarlo y darle otro enfoque, y reportar el caso en BO el mismo día.',
 sections:[
  {t:'🔍 Primero pregunta: ¿qué es exactamente lo que no funciona?', html:`
   <div class="card"><p>Antes de probar técnicas de participación, descubre <strong>qué parte del formato en línea no está funcionando</strong>. Una técnica que soluciona la soledad no hace nada contra el cansancio de pantallas. Los niños rara vez lo dicen con claridad, así que aprende cómo se ve y cómo suena cada caso:</p></div>
   ${patternCards([
     {ic:'🥱', title:'Cansado y distraído', desc:'«Estoy cansado.» «Es demasiado largo.» Mirada perdida, cambia de pestaña, bosteza.', note:'Un problema de energía y atención. <strong>Rondas más cortas, movimiento, un cambio de actividad.</strong>'},
     {ic:'🫥', title:'Solo, sin conexión', desc:'«No hay nadie con quien hablar.» Cámara apagada, en silencio, sin reacciones.', note:'Un problema de conexión. <strong>Involucra a los compañeros: parejas, mostrar y contar, reacciones.</strong>'},
     {ic:'🙈', title:'Incómodo ante la cámara', desc:'No quiere hablar ni mostrar la cara; responde en el chat, o no responde.', note:'Un problema de seguridad. <strong>Formas de participar sin presión.</strong>'},
     {ic:'🔌', title:'Frustrado con las herramientas', desc:'«Siempre se traba.» «No se oía.» Se rinde después de un fallo técnico.', note:'Un problema de herramientas. <strong>Resuélvelo rápido, o sigue el protocolo para problemas técnicos (10 minutos, y luego comunicar, documentar, escalar).</strong>'}
   ],2)}
  `},
  {t:'❓ Preguntas que lo sacan a la luz — según la edad', html:`
   <div class="card"><p>Haz <strong>preguntas abiertas, sin presión</strong>, y dale al estudiante una forma de responder que no le haga sentirse expuesto. Lo que funciona depende de la edad:</p></div>
   ${dimTabs([
     {ic:'🧒', title:'6–8 años',
      intro:'Los más pequeños responden mejor con caras, imágenes y opciones — no con explicaciones.',
      tips:[
       {ic:'😀', html:`<strong>Elige una cara.</strong> <em>«Muéstrame con la mano o con un emoji cómo te sentiste en la clase de hoy — ¿feliz, más o menos o con sueño?»</em>`},
       {ic:'🌟', html:`<strong>Lo mejor y lo no tan bueno.</strong> <em>«¿Qué fue lo más divertido de hoy? ¿Y lo más aburrido?»</em>`},
       {ic:'🎁', html:`<strong>La varita mágica.</strong> <em>«Si pudieras cambiar una cosa de nuestra clase en línea, ¿qué sería?»</em>`},
       {ic:'👂', html:`<strong>Escucha, no arregles.</strong> Repite lo que dijo y dale las gracias — luego cambia una cosa pequeña en la próxima clase, para que vea que lo escuchaste.`}
      ]},
     {ic:'🧑', title:'9–11 años',
      intro:'Pueden valorar y explicar — siempre que se sienta seguro y breve.',
      tips:[
       {ic:'🔢', html:`<strong>La escala del 1 al 5.</strong> <em>«Del 1 al 5, ¿cuánto disfrutas nuestras clases en línea? ¿Qué haría falta para que fuera un 5?»</em>`},
       {ic:'🌟', html:`<strong>Lo más genial.</strong> <em>«¿Qué fue lo más genial de la clase de hoy?»</em> Si no sabe nombrar nada, eso es una señal.`},
       {ic:'🔧', html:`<strong>Un cambio.</strong> <em>«Si pudieras cambiar una cosa de las clases, ¿qué sería?»</em>`},
       {ic:'🗳️', html:`<strong>Encuesta rápida en el chat.</strong> <em>«Escriban A si les gustaría más tiempo para construir, B si les gustaría más tiempo con un compañero.»</em>`}
      ]},
     {ic:'🧑‍🎓', title:'12 años o más',
      intro:`Los mayores no quieren decirlo delante de todos. Dales una forma privada o anónima.`,
      tips:[
       {ic:'🔒', html:`<strong>Un mensaje privado.</strong> <em>«He notado que últimamente estás más callado. ¿Hay algo de las clases en línea que te moleste? Queda entre nosotros.»</em>`},
       {ic:'🗳️', html:`<strong>Una encuesta anónima.</strong> Pide a todo el grupo que complete la frase <em>«Participaría más si…»</em> — elimina el miedo a ser juzgado.`},
       {ic:'🤝', html:`<strong>Pide sus ideas,</strong> no sus quejas: <em>«¿Qué haría que nuestras clases fueran mejores para ti?»</em>`},
       {ic:'🙏', html:`<strong>Respeta su respuesta.</strong> Nunca la discutas — dale las gracias y actúa sobre una cosa.`}
      ]}
   ],'✅ Esos son los tres grupos de edad. Siguiente: cómo cambiar la percepción.')}
   ${co('co-idea','🧠',`<p><strong>Por qué funciona.</strong> Las preguntas abiertas y los formatos anónimos eliminan la presión social de responder delante de los compañeros. Dar una opinión del tipo «hablaría más si…» suele ser más fácil que darla cara a cara.</p>`)}
  `},
  {t:'🔁 Cambia la percepción — primero valida, luego da otro enfoque', html:`
   <div class="card"><p>No puedes convencer a alguien de que deje de sentir algo. El orden que funciona es: <strong>1. validar</strong> («tiene sentido»), <strong>2. dar otro enfoque</strong> (mostrar el otro lado, con honestidad), <strong>3. probar algo pequeño</strong> en la siguiente clase. Abre cada uno:</p></div>
   ${accItem('🥱 «Es aburrido en una pantalla.»', `
    <p><strong>✅ Valida:</strong> <em>«Tienes razón — mirar una pantalla mucho rato puede ser aburrido.»</em></p>
    <p><strong>🔁 Otro enfoque:</strong> <em>«Aquí no solo miras — todo lo que hay en tu pantalla es algo que creas tú.»</em></p>
    <p><strong>🎯 Prueba:</strong> en la próxima clase, pon el propio proyecto del estudiante en la pantalla en los primeros cinco minutos.</p>`)}
   ${accItem('🫥 «Extraño a mis amigos / no hay nadie con quien hablar.»', `
    <p><strong>✅ Valida:</strong> <em>«Tiene sentido — es más divertido construir cosas con otras personas.»</em></p>
    <p><strong>🔁 Otro enfoque:</strong> <em>«En nuestra clase hay personas a las que les encanta lo mismo que a ti. Aprovechémoslo.»</em></p>
    <p><strong>🎯 Prueba:</strong> una tarea en parejas de dos minutos o un momento de mostrar y contar: <em>«Enséñale a tu compañero tu mejor parte.»</em></p>`)}
   ${accItem('📱 «No me puedo concentrar en casa.»', `
    <p><strong>✅ Valida:</strong> <em>«En casa hay muchas cosas tentadoras — es normal.»</em></p>
    <p><strong>🔁 Otro enfoque:</strong> <em>«Vamos a trabajar en rondas cortas, así solo tienes que concentrarte un poco cada vez.»</em></p>
    <p><strong>🎯 Prueba:</strong> cambia de actividad aproximadamente cada 10 minutos, y diles de antemano cuál es la siguiente ronda.</p>`)}
   ${accItem('🙈 «No me gusta hablar ante la cámara.»', `
    <p><strong>✅ Valida:</strong> <em>«Está totalmente bien — a mucha gente le pasa.»</em></p>
    <p><strong>🔁 Otro enfoque:</strong> <em>«Puedes participar primero por el chat o compartiendo tu pantalla. La cámara puede venir después, cuando tú quieras.»</em></p>
    <p><strong>🎯 Prueba:</strong> una pregunta fácil para responder en el chat, y después un mensaje privado de «¡qué buena idea!».</p>`)}
   ${doavoid(
     ['Valida primero: <em>«Tiene sentido.»</em>','Sé honesto — da otro enfoque, no vendas','Promete solo lo que puedas cumplir: <em>«En la próxima clase empezamos construyendo.»</em>','Cambia una cosa pequeña en la próxima clase, para que vea que lo escuchaste'],
     ['Discutir que <em>«en línea es igual de bueno»</em>','Restarle importancia: <em>«ahora todo el mundo estudia en línea»</em>','Prometer un cambio de grupo o de formato','Preguntarlo delante de todo el grupo']
   )}
  `},
  {t:'📝 Repórtalo en BO — el mismo día', html:`
   <div class="card"><p>Un estudiante que repite que no le gustan las clases en línea, o que se mantiene callado y desconectado, es un riesgo de reembolso. <strong>Repórtalo el mismo día</strong> — el equipo solo puede revisar opciones (otro grupo o formato que le encaje si lo hay, una conversación motivacional, otro curso) mientras la familia todavía está decidiendo.</p></div>
   <div class="card" style="background:var(--surface2)"><h4>📨 Cómo es un reporte útil — copia y completa</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Estudiante:</strong> [nombre] · <strong>Grupo / formato:</strong> [p. ej. grupo de 6, martes 6 p. m.] · <strong>Clase:</strong> [fecha]<br>
   <strong>Lo que dijo:</strong> [sus propias palabras — p. ej. «en línea es aburrido, no hay nadie con quien hablar»]<br>
   <strong>Lo que vi:</strong> [cámara, micrófono, chat, atención — y si cambió respecto a antes]<br>
   <strong>Lo que creo que le molesta:</strong> ☐ cansado / distraído &nbsp; ☐ solo &nbsp; ☐ incómodo ante la cámara &nbsp; ☐ frustrado con las herramientas<br>
   <strong>Lo que ya probé:</strong> [p. ej. rondas cortas, tarea en parejas, participación primero por el chat]<br>
   <strong>Lo que podría ayudar — mi recomendación, su decisión:</strong> [p. ej. un grupo más pequeño, una conversación motivacional, otro curso]</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Reportar un caso</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Reportar un caso" loading="lazy"></iframe></div></div>
   ${co('co-idea','💬',`<p><strong>Con la familia:</strong> habla del aprendizaje, nunca de la organización. <em>«Hola, [nombre del padre o la madre], he notado que a [estudiante] a veces le cuesta mantener la energía en las clases en línea. He empezado a hacer rondas cortas de construcción y a dejar que elija, y lo he compartido con mi equipo para poder apoyarle de la mejor manera.»</em> Sin promesas sobre grupos ni formatos.</p>`)}
  `}
 ],
 ix:{
  title:'Qué le molesta — y qué hacer primero',
  instr:'Clasifica las frases y elige la mejor acción. 70 % para desbloquear el siguiente módulo.',
  items:[
   {type:'sort', prompt:'¿Qué le molesta a este estudiante?', card:`«No hay nadie con quien hablar.»`, zones:[{label:'🥱 Cansado y distraído', fb:'No exactamente — el estudiante describe que se siente solo, no cansado.'},{label:'🫥 Solo, sin conexión', fb:'Correcto — es un problema de conexión. Involucra a los compañeros con parejas, momentos de mostrar y contar y reacciones.'},{label:'🙈 Incómodo ante la cámara', fb:'No exactamente — se trata de echar de menos a personas con quienes compartir, no de que lo vean.'},{label:'🔌 Frustrado con las herramientas', fb:'No exactamente — aquí nada tiene que ver con las herramientas.'}], correctZone:1},
   {type:'sort', prompt:'¿Qué le molesta a esta estudiante?', card:`Tiene la cámara apagada, nunca habla y solo escribe en el chat.`, zones:[{label:'🥱 Cansado y distraído', fb:'No exactamente — escribir en el chat demuestra que está participando, solo que no en voz alta.'},{label:'🫥 Solo, sin conexión', fb:'No exactamente — está participando a través del chat.'},{label:'🙈 Incómodo ante la cámara', fb:'Correcto — un problema de seguridad. Empieza con formas de participar sin presión: primero el chat, luego compartir pantalla, y la cámara cuando esté lista.'},{label:'🔌 Frustrado con las herramientas', fb:'No exactamente — nada sugiere un problema técnico.'}], correctZone:2},
   {type:'choice', prompt:`Un estudiante dice: «Las clases en línea son aburridas.» ¿Cuál es la mejor primera acción?`, opts:[`Explicarle que las clases en línea son igual de buenas que las presenciales`,`Alargar tus explicaciones para que la clase sea más interesante`,`Preguntarle qué es exactamente lo aburrido — ¿la duración, las tareas, la pantalla, estar solo?`], correct:2, fb:`Antes de cualquier técnica, descubre qué parte no funciona. «Aburrido» puede significar cansado, solo, tímido o frustrado — y cada uno tiene una solución distinta.`},
   {type:'sort', prompt:'¿Tesoro o basura? ¿Es una buena respuesta?', card:`«Tiene sentido — las pantallas pueden sentirse pasivas. Aquí, todo lo que hay en tu pantalla es algo que creas tú.»`, zones:[{label:'💎 Tesoro — valida y da otro enfoque', fb:'Correcto — primero valida el sentimiento y después ofrece un enfoque honesto.'},{label:'🗑️ Basura — le resta importancia', fb:'No exactamente — esta respuesta primero valida y después da otro enfoque. Ese es el orden correcto.'}], correctZone:0},
   {type:'choice', prompt:`Un estudiante de 12 años parece desconectado. ¿Qué forma de preguntar le permite responder con sinceridad?`, opts:[`Preguntar en voz alta a todo el grupo: «¿A quién le parecen aburridas las clases en línea?»`,`Pedirle a los padres que hablen con él`,`Un mensaje privado, o una encuesta anónima: «Participaría más si…»`], correct:2, fb:`Los mayores rara vez lo dicen delante de sus compañeros. Un mensaje privado o una encuesta anónima eliminan la presión social.`},
   {type:'choice', prompt:`¿Cuándo reportas en BO que a un estudiante no le gusta el formato en línea?`, opts:[`El mismo día — con lo que dijo, lo que viste y lo que probaste`,`Después de un mes, si nada ha mejorado`,`Solo si los padres se quejan`], correct:0, fb:`Opciones como otro grupo o formato solo se pueden considerar mientras la familia todavía está decidiendo. Los hechos, las palabras del estudiante y lo que probaste permiten al equipo actuar rápido.`}
  ]
 }
},
{id:'engage', numLabel:'Módulo 2', emoji:'🎬', color:'var(--coral)',
 title:'Construye una clase en línea que disfruten',
 desc:'Técnicas que mantienen la atención y hacen que la pantalla se sienta como un aula compartida: empezar con fuerza, trabajar en rondas cortas, interacción, conexión, preguntas directas y un logro al final.',
 obj:'Dirigir una clase en línea que mantenga la atención, dé a cada estudiante una forma cómoda de participar, conecte a los compañeros y termine con un logro — adaptada a la edad del grupo.',
 sections:[
  {t:'🧠 Cuatro cosas que tiene toda clase motivadora', html:`
   <div class="card"><p>En línea, nada mantiene la atención por ti: no hay un aula física, ni compañeros al lado, y cualquier distracción está a un clic. La investigación sobre motivación ofrece una lista sencilla — el <strong>modelo ARCS</strong> de John Keller (1987). Antes de cada clase, pregúntate si tiene las cuatro:</p></div>
   ${iconGrid([
     {ic:'👀', html:`<strong>Atención.</strong> Una sorpresa, una pregunta, un reto corto y un cambio de formato. <em>«Se escapó un bicho del juego — ¿quién me ayuda a atraparlo?»</em>`},
     {ic:'🔗', html:`<strong>Relevancia.</strong> Conecta la clase con lo que les importa: sus videojuegos, sus series, lo que quieren crear.`},
     {ic:'💪', html:`<strong>Confianza.</strong> Pasos pequeños, un siguiente paso claro y apoyo cuando se atascan — para que crean que pueden hacerlo.`},
     {ic:'🏆', html:`<strong>Satisfacción.</strong> Elogios concretos y algo terminado que mostrar al final.`}
   ])}
   ${bigStat('≈ 10 min', `<p>Una regla práctica muy citada de la investigación sobre el aprendizaje (popularizada por <em>Brain Rules</em>, de John Medina): la atención empieza a dispersarse después de unos <strong>diez minutos</strong>. Planifica un cambio de actividad hacia ese momento — y haz las rondas aún más cortas con los más pequeños.</p>`)}
  `},
  {t:'🎬 La clase, minuto a minuto', html:`
   ${timeline([
     {ic:'🎬', label:'Empieza con fuerza — los tres primeros minutos', items:[
       '<strong>Empieza con una sorpresa, una historia o una pregunta</strong> relacionada con el proyecto de hoy — el inicio marca el tono de toda la clase.',
       '<em>«Hoy un robot perdió la voz — al final de la clase se la habrán devuelto. ¿Quién se apunta?»</em>'
     ]},
     {ic:'⏱️', label:'Trabaja en rondas cortas', items:[
       '<strong>Cambia de actividad aproximadamente cada 10 minutos:</strong> explicar → probar → compartir. Diles cuál es la siguiente ronda.',
       '<em>«Primera ronda: cinco minutos para probarlo. Segunda ronda: enséñaselo a tu compañero.»</em>'
     ]},
     {ic:'🙋', label:'Interactúa — cada pocos minutos', items:[
       '<strong>Dale a todos una forma de participar:</strong> el chat, las reacciones, una encuesta rápida o compartir la pantalla por turnos.',
       '<em>«Escriban su respuesta en el chat — ¡las leo todas en voz alta!»</em>'
     ]},
     {ic:'👥', label:'Conecta a los compañeros', items:[
       '<strong>Momentos de dos minutos en parejas</strong> o tareas en grupos pequeños, para que la pantalla se sienta como un aula compartida.',
       '<em>«Enséñale a tu compañero tu mejor parte — y luego cuéntame qué te gustó de la suya.»</em>'
     ]},
     {ic:'🏁', label:'Cierra con un logro', items:[
       '<strong>Un momento de mostrar lo que crearon,</strong> un elogio concreto y una pista de lo que viene.',
       '<em>«Miren lo que construyeron hoy — la próxima vez le pondremos puntuación.»</em>'
     ]}
   ])}
  `},
  {t:'🛠️ Herramientas que hacen la pantalla interactiva', html:`
   ${iconGrid([
     {ic:'💬', html:`<strong>El chat como segunda voz.</strong> Los estudiantes tímidos participan sin sentirse expuestos. <em>«Escriban su idea — las leo todas.»</em>`},
     {ic:'👍', html:`<strong>Reacciones y encuestas rápidas.</strong> <em>«Muéstrenme con un emoji: ¿fácil, medio o difícil?»</em>`},
     {ic:'🖥️', html:`<strong>Compartir pantalla por turnos.</strong> <em>«¿Quién quiere mostrar su proyecto en 30 segundos?»</em> Ofrécelo, no lo impongas.`},
     {ic:'1️⃣', html:`<strong>Una instrucción a la vez — y compruébala.</strong> No acumules pasos. Después pregunta: <em>«¿Qué vas a hacer primero?»</em> Una lista corta escrita en el chat ayuda cuando la conexión va lenta.`},
     {ic:'🎲', html:`<strong>Minijuegos y retos rápidos.</strong> Un quiz de 60 segundos o un «¿quién lo encuentra primero?» reinicia la atención.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>Parejas o grupos pequeños.</strong> En un grupo pequeño se habla más, y se recibe una retroalimentación más personal.`}
   ])}
  `},
  {t:'🎂 Adáptalo según la edad', html:`
   ${dimTabs([
     {ic:'🧒', title:'6–8 años',
      intro:'Rondas cortas, movimiento y sorpresa. Su energía es la clase.',
      tips:[
       {ic:'🤸', html:`<strong>Pausas para moverse.</strong> <em>«¡Levántate y muéstrame tu mejor pose de robot!»</em> — y de vuelta al teclado.`},
       {ic:'⏲️', html:`<strong>Rondas de menos de 10 minutos,</strong> con un «ahora vamos a hacer esto» claro en cada cambio.`},
       {ic:'🎁', html:`<strong>Pegatinas, puntos, una mascota</strong> — pequeñas recompensas inmediatas por participar.`},
       {ic:'🧸', html:`<strong>Mostrar y contar.</strong> <em>«Enséñanos tu juguete o tu dibujo favorito, y luego lo construimos.»</em>`}
      ]},
     {ic:'🧑', title:'9–11 años',
      intro:'Las misiones, los temporizadores y los equipos hacen que la pantalla se sienta como un juego.',
      tips:[
       {ic:'🎯', html:`<strong>Minimisiones con temporizador.</strong> <em>«Tienen 8 minutos para hacer que el personaje salte. ¿Listos?»</em>`},
       {ic:'🏁', html:`<strong>Retos por equipos.</strong> Las parejas compiten por encontrar primero el error — en buen ambiente y por poco tiempo.`},
       {ic:'🧩', html:`<strong>Elegir la temática</strong> dentro de la misma tarea — el objetivo se mantiene, el disfraz es suyo.`},
       {ic:'🗳️', html:`<strong>Encuestas rápidas</strong> para decidir cuál es la siguiente ronda.`}
      ]},
     {ic:'🧑‍🎓', title:'12 años o más',
      intro:'Autonomía, relevancia y respeto por su nivel de comodidad.',
      tips:[
       {ic:'🧭', html:`<strong>Dales voz en el plan.</strong> <em>«Tenemos 15 minutos para esta parte — ¿quieren empezar por la A o por la B?»</em>`},
       {ic:'🌍', html:`<strong>Muestra usos reales</strong> de la habilidad, en cosas que ya conocen.`},
       {ic:'🔒', html:`<strong>Respeta la cámara.</strong> Ofrece participar primero por el chat; nunca obligues a encender la cámara.`},
       {ic:'🗳️', html:`<strong>Encuestas anónimas</strong> para recoger opiniones, y revisión entre compañeros de sus trabajos.`}
      ]}
   ],'✅ Esos son los tres grupos de edad.')}
  `},
  {t:'🙋 Preguntas directas — sin presión', html:`
   <div class="card"><p>Preguntarle a un estudiante por su nombre funciona — si confía en que no va a pasar vergüenza. Prepáralo, empieza por algo fácil y haz que se sienta justo.</p></div>
   ${doavoid(
     ['Dile al grupo que en algún momento le preguntarás a todos — y que <em>«no lo sé»</em> es una respuesta válida','Empieza con una pregunta fácil para dar confianza','Usa un selector aleatorio para que se sienta justo, no personal','Elogia cualquier aportación: <em>«Gracias — eso nos ayuda a pensar.»</em>'],
     ['Preguntar de golpe al estudiante más callado la pregunta más difícil','Corregir con dureza delante del grupo','Preguntar siempre a los mismos estudiantes rápidos','Lanzar una pregunta difícil sin avisar — prueba con: <em>«Esta es complicada, pero ¿alguien quiere intentarlo?»</em>']
   )}
   ${co('co-star','🌱',`<p><strong>Por qué funciona:</strong> los estudiantes participan cuando se sienten seguros. Prepararlos, empezar por algo fácil y ser justo convierte una pregunta de un riesgo en una invitación.</p>`)}
  `}
 ],
 ix:{
  title:'Construye la clase que disfrutan',
  instr:'Elige la mejor acción o clasifica cada hábito. 70 % para desbloquear la lista de verificación final.',
  items:[
   {type:'choice', prompt:`A mitad de la clase, un niño de 9 años parece cansado y empieza a cambiar de pestaña. ¿Cuál es la mejor acción?`, opts:[`Seguir explicando — ya se pondrá al día`,`Cambiar de actividad: una encuesta rápida o una minimisión con temporizador, y luego una nueva ronda`,`Decirle que preste atención`], correct:1, fb:`Un cambio de actividad reinicia la atención. Decirle que se concentre no le da un motivo para hacerlo.`},
   {type:'sort', prompt:'¿Este hábito ayuda o perjudica a una clase en línea?', card:`Cambiar de actividad aproximadamente cada 10 minutos: explicar, probar, compartir.`, zones:[{label:'💎 Ayuda', fb:'Correcto — las rondas cortas son una de las formas más fiables de mantener la atención en línea.'},{label:'🗑️ Perjudica', fb:'No exactamente — las rondas cortas ayudan; los tramos largos con una sola actividad hacen que se pierdan los estudiantes.'}], correctZone:0},
   {type:'choice', prompt:`¿Cómo das las instrucciones en una clase en línea?`, opts:[`Todos los pasos a la vez, para que nadie tenga que esperar`,`Una instrucción a la vez, y luego la compruebas: «¿Qué vas a hacer primero?»`,`Lo dices una vez, rápido, y sigues adelante`], correct:1, fb:`Las instrucciones acumuladas se pierden en línea. Un paso más una pregunta de comprobación detecta la confusión a tiempo.`},
   {type:'choice', prompt:`Un estudiante tímido de 13 años nunca responde en voz alta. ¿Qué ayuda más?`, opts:[`Llamarlo por su nombre en cada clase hasta que hable`,`Dejar que participe primero por el chat, y elogiar sus aportaciones`,`Pedirle que encienda la cámara delante de todos`], correct:1, fb:`Dale una forma cómoda de participar — primero el chat. La cámara puede venir después, cuando él quiera.`},
   {type:'sort', prompt:'¿Este hábito ayuda o perjudica a una clase en línea?', card:`Preguntar de golpe al estudiante más callado la pregunta más difícil.`, zones:[{label:'💎 Ayuda', fb:'No exactamente — lo deja expuesto y hace que la siguiente pregunta le cueste aún más.'},{label:'🗑️ Perjudica', fb:'Correcto — empieza por algo fácil, prepáralo y haz que la elección se sienta justa.'}], correctZone:1},
   {type:'choice', prompt:`¿Qué inicio funciona mejor con un niño de 7 años?`, opts:[`«Hoy vamos a aprender qué son las variables.»`,`«Hoy un robot perdió la voz — al final de la clase se la habrás devuelto. ¿Te apuntas?»`,`«Abre la clase y empieza el ejercicio 1.»`], correct:1, fb:`Una historia con una misión capta la atención y da un motivo para participar. Ir directamente al contenido desperdicia los minutos de mayor atención.`}
  ]
 }
},
{id:'checklist', numLabel:'Lista de verificación final', emoji:'✅', color:'var(--coral)',
 title:'Lista de verificación final',
 desc:'Aquí no hay examen — solo lo esencial de este mini-entrenamiento, antes de cerrarlo.',
 obj:'Repasa la lista de verificación de abajo. Este módulo no se califica — léela y luego finaliza el mini-entrenamiento.',
 sections:[
  {t:'🛟 Si ya existe una solicitud de reembolso', html:`
   ${numlist([
     'Dejé un comentario en BO el mismo día en que supe de la solicitud y avisé a mi Team Leader',
     'Mi siguiente clase con este estudiante fue un intento real de recuperación — un turno de verdad, un logro visible, atención específica, ni una palabra sobre la solicitud',
     'Nunca confirmé una aprobación ni hablé de ninguna cantidad — usé la única frase segura y dejé el resto a Servicio al Cliente'
   ])}
  `},
  {t:'🌱 En cada clase', html:`
   ${numlist([
     'Antes de probar cualquier técnica, descubro qué es exactamente lo que no funciona de las clases en línea para este estudiante',
     'Primero valido el sentimiento («tiene sentido») y solo después doy otro enfoque — nunca discuto que en línea es «igual de bueno»',
     'Pregunto de una forma adecuada a la edad: elegir una cara con los más pequeños, una escala del 1 al 5 de 9 a 11 años, un mensaje privado o una encuesta anónima a partir de 12',
     'Empiezo cada clase con fuerza: una sorpresa, una historia o una pregunta relacionada con el proyecto de hoy',
     'Cambio de actividad aproximadamente cada 10 minutos (menos con los más pequeños): explicar → probar → compartir',
     'Uso el chat, las reacciones, las encuestas y compartir pantalla por turnos, para que todos tengan una forma cómoda de participar',
     'Doy una instrucción a la vez y compruebo que se entendió',
     'Hago preguntas directas sin presión: primero fáciles, una forma justa de elegir y una respuesta positiva a cualquier aportación',
     'Conecto a los compañeros con momentos cortos en parejas o en grupos pequeños',
     'Reporto en BO el mismo día que a un estudiante no le gusta el formato en línea: lo que dijo, lo que vi y lo que probé',
     'Nunca prometo un cambio de formato o de grupo — lo recomiendo en BO y digo «voy a consultarlo con mi equipo»'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Eso es todo el mini-entrenamiento.</strong> Cuando estés listo, continúa — y luego completa el DST en el LMS para cerrar la tarea.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
