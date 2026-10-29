/* Mini_Training_6_Online_Format - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='it';
const CONTENT = {
  flag:'🇮🇹', dir:'ltr',
  ui:{
    pageTitle:"Mini-training · Formato online — Formazione tutor Kodland",
    logoSub:'Dipartimento Sviluppo Tutor',
    heroEyebrow:"🎯 Mini-training",
    heroTitle:"Lezioni <span class=\"h-pill\">online</span> che piacciono davvero",
    heroIntro:"Ricevi questa formazione perché alcuni dei tuoi studenti hanno chiesto un rimborso, dato che il formato online non li convince. Qui vedremo cosa puoi fare come tutor e come gestire queste situazioni.",
    heroWork:"Completa 4 brevi moduli. Per sbloccare il modulo successivo devi ottenere almeno il 70% nella verifica di ciascun modulo. Circa 20–25 minuti in tutto.",
    startBtn:"🚀 Inizia la formazione",
    pathLabel:'Il tuo percorso di apprendimento',
    devTitle:'Dev: sblocca tutti i moduli per la revisione',
    backToPath:'Torna al percorso',
    modulesPassed:'{done} / {total} moduli superati',
    moduleN:'Modulo {n}',
    of:'di',
    locked:'🔒 Bloccato',
    passedBadge:'✅ Superato · {pct}%',
    reviewedBadge:'✅ Rivisto',
    startBadge:'▶ Inizia',
    reviewBadge:'▶ Rivedi',
    objective:'Obiettivo',
    startCheck:'▶ Inizia la verifica del modulo',
    finishBtn:'▶ Concludi il mini-training',
    doneBack:'✓ Fatto — torna al percorso',
    ixBadge:'📋 Verifica del modulo — 70% per sbloccare il modulo successivo',
    ixItemBadge:'📋 Verifica del modulo — domanda {i} di {n}',
    scoreSoFar:'Punteggio finora: {c} / {t}',
    continue:'Continua →',
    sortWrong:'Non proprio — la risposta giusta è «{label}».',
    resPassed:'Modulo superato!',
    resFailed:'Non ci sei ancora del tutto',
    resUnlocked:"Hai sbloccato il modulo successivo.",
    resDone:"Hai completato questo mini-training.",
    resNeed:'Ti serve il 70% per sbloccare il modulo successivo. Rivedi la sezione qui sopra e riprova la verifica.',
    resContinue:'Continua al percorso di apprendimento',
    resFinish:'Continua',
    resBack:'Torna al percorso',
    resReview:'Rivedi questo modulo',
    doneEyebrow:'Mini-training completato',
    doneTitle:'🎉 Congratulazioni!',
    doneP1:"🎉 <strong>Congratulazioni! Hai completato questo mini-training.</strong>",
    doneP2:"Hai finito! Torna alla pagina della formazione sull’LMS da cui hai aperto questo mini-training per chiudere l’assegnazione.",
    doneP3:"👉 <strong>Se nell’LMS, subito sotto la formazione, è presente una verifica o un test, assicurati di completarlo e di raggiungere il punteggio minimo</strong> — altrimenti l’assegnazione potrebbe risultare incompleta.",
    doneP4:'Buona fortuna! ❤️',
    doneP5:'',
    devUnlockAlert:'Modalità dev: ora tutti i moduli sono sbloccati per la revisione.',
    devOn:'🔓 Modalità dev ATTIVA — tutti i moduli sbloccati',
    devOff:'🔒 Modalità dev DISATTIVATA — progressi cancellati',
    devBadge:'🔓 MODALITÀ DEV',
    doLabel:'✅ Da fare',
    avoidLabel:'🚫 Da evitare',
    noticeLabel:'Nota:',
    cvSee:'Cosa vedi:',
    cvDo:'Cosa fai:',
    dtExample:'Esempio da una lezione reale',
    dtNext:'Avanti:',
    dtDone:"✅ Ecco tutte e quattro le aree. Ora classifica ciò che vedi.",
    tlVideoTitle:'{label} — un esempio da una lezione reale',
    tlVideoMeta:'Guarda come si presenta questa fase in una lezione reale'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introduzione', emoji:'🧩', color:'var(--coral)',
 title:'Perché sei qui',
 desc:'Perché anche un «le lezioni online non mi piacciono» si può ancora ribaltare — e le regole da seguire quando è già arrivata una richiesta di rimborso.',
 obj:'Capire cosa significa davvero «il formato online non mi piace», perché è importante segnalarlo il giorno stesso e cosa fare esattamente (e cosa non fare) quando esiste già una richiesta di rimborso.',
 sections:[
  {t:'💻 Cosa significa davvero «l’online non mi piace»', html:`
   <div class="card"><p>Quasi nessuno dice «dopo una lunga giornata davanti agli schermi faccio fatica a concentrarmi». Si dice <em>«l’online è noioso»</em>, <em>«non mi piace»</em> — e la famiglia chiede un rimborso. Dietro quell’unica frase di solito si nascondono cose molto diverse:</p></div>
   ${iconGrid([
     {ic:'🥱', html:`<strong>Stanchezza da schermo.</strong> La lezione arriva dopo una giornata di scuola passata davanti agli schermi, e il bambino non ha più energie.`},
     {ic:'🫥', html:`<strong>Sentirsi soli.</strong> Nessun compagno con cui condividere il lavoro, nessuno con cui ridere.`},
     {ic:'📱', html:`<strong>Distrazioni a casa.</strong> Il telefono, un gioco, un animale o un fratello sono a un clic di distanza.`},
     {ic:'🙈', html:`<strong>Timidezza davanti alla videocamera.</strong> Non vuole farsi vedere né parlare davanti a tutti.`},
     {ic:'🔌', html:`<strong>Frustrazione con gli strumenti.</strong> Rallentamenti, audio che non funziona, pulsanti che non rispondono.`},
     {ic:'👨‍👩‍👧', html:`<strong>La famiglia si aspettava lezioni in presenza.</strong> Per loro l’online sembra «meno vero», qualunque cosa ne pensi il bambino.`}
   ])}
   ${co('co-idea','💡',`<p><strong>Non puoi cambiare il formato, ma puoi cambiare come si vive la lezione al suo interno.</strong> Gran parte di ciò che agli studenti non piace delle lezioni online dipende da come viene condotta la lezione, e quella parte è nelle tue mani.</p>`)}
  `},
  {t:'⏱️ La chiave è la rapidità — e la tua segnalazione', html:`
   <div class="card"><p>Non sei tu a decidere se uno studente può passare a un altro gruppo o formato. Ma è la tua segnalazione ad avviare quella conversazione, e funziona solo se arriva alle persone giuste <strong>presto</strong>.</p></div>
   ${stepFlow([
     {ic:'👀', label:'Noti il malcontento durante una lezione'},
     {ic:'📝', label:'Lo segnali in BO il giorno stesso'},
     {ic:'👩‍💼', label:'Il tuo Team Leader e il Client Service valutano le opzioni'},
     {ic:'🔄', label:'Una conversazione motivazionale, un altro gruppo o formato più adatto (se disponibile), oppure un altro corso'}
   ])}
   ${co('co-danger','🚨',`<p><strong>Una segnalazione tardiva chiude delle porte.</strong> Quando la famiglia ha già deciso, la maggior parte delle opzioni non c’è più. La stessa segnalazione, fatta nelle prime settimane, può far restare un bambino con Kodland.</p>`)}
   ${co('co-ok','✅',`<p><strong>Mentre il team valuta le opzioni, la lezione resta nelle tue mani.</strong> I moduli 1 e 2 ti mostrano come scoprire cosa infastidisce lo studente e come costruire una lezione online che gli piaccia.</p>`)}
  `},
  {t:'🛟 Se esiste già una richiesta di rimborso', html:`
   <div class="card"><p>Tutto ciò che hai letto finora serve a intercettare il problema per tempo. Ma potresti aprire questa formazione proprio perché una famiglia ha <strong>già</strong> chiesto un rimborso. Le regole qui sotto valgono qualunque sia il motivo: leggile per prime, poi usa il resto della formazione per capire cosa ha portato a questo punto e cosa puoi ancora fare durante la lezione.</p></div>
   ${co('co-idea','💡',`<p><strong>La richiesta viene creata dal Client Service, non da te</strong> — quella parte non dipende da te. Ciò che resta nelle tue mani è tutto quello che succede in lezione da qui in avanti, e non è poco.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Non dire nulla sulla richiesta in sé</strong> — né al bambino, né alla famiglia — a meno che il Client Service non ti chieda esplicitamente di dire qualcosa di specifico. Il tuo compito ora è la lezione, non la conversazione.</p>`)}
  `},
  {t:'🎯 La prossima lezione è il tentativo di recupero', html:`
   <div class="card"><p>Potresti non avere altre occasioni per cambiare le cose. Considera la prossima lezione con questo bambino come il momento decisivo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dagli un vero turno.</strong> Non una domanda di circostanza, ma un momento autentico in cui si sente visto e ci riesce.`},
     {ic:'🏆', html:`<strong>Prevedi un successo rapido e visibile.</strong> Deve uscire dalla lezione sentendosi capace, non indietro.`},
     {ic:'👀', html:`<strong>Attenzione mirata</strong> — fagli sentire che hai notato qualcosa di concreto, invece di lodarlo in modo generico.`},
     {ic:'🤐', html:`<strong>Nessun accenno alla richiesta</strong> — anche se è il bambino a parlarne, riporta con gentilezza l’attenzione sulla lezione e continua.`}
   ])}
  `},
  {t:'📮 Avvisa subito, e conosci l’unica frase sicura', html:`
   <div class="card"><p>Puoi scoprire che esiste una richiesta dai commenti del Client Service sul profilo del bambino in BO: non c’è un sistema automatico che ti avvisa. Una volta che lo sai, ciò che hai osservato nelle tue lezioni è un’informazione che il Client Service non può avere in nessun altro modo.</p></div>
   ${numlist([
     'Lascia un commento in BO il giorno stesso con esattamente ciò che hai osservato: date e dettagli concreti, non impressioni',
     'Includi le parole della famiglia, testuali, se le hai',
     'Coinvolgi il tuo Team Leader il giorno stesso',
     'Non confermare mai che un rimborso è stato approvato e non parlare mai di importi'
   ])}
   ${co('co-ok','✅',`<p><strong>La frase che puoi sempre dire senza rischi:</strong> <em>«Su questo vi aiuterà il Servizio Clienti.»</em> Lì finisce la tua parte della conversazione: da quel momento se ne occupa il Client Service.</p>`)}
  `},
  {t:'🌱 Continua anche dopo', html:`
   <div class="card"><p>Che la richiesta venga ritirata, che il bambino resti nel tuo gruppo o che passi a un altro tutor o formato, continua a dedicargli un’attenzione in più nelle lezioni successive. Un recupero che regge per una lezione e poi, piano piano, torna alla normalità spesso non regge affatto.</p></div>
  `}
 ]
},
{id:'diagnose', numLabel:'Modulo 1', emoji:'🔍', color:'var(--coral)',
 title:'Scopri cosa lo infastidisce — poi cambia prospettiva',
 desc:'Come capire cosa esattamente non va nelle lezioni online, le domande per farlo emergere in base all’età, come cambiare la percezione e come segnalarlo in BO.',
 obj:'Individuare cosa allo studente non piace davvero del formato online, chiederglielo in modo adatto alla sua età, validare e riformulare, e segnalare il caso in BO il giorno stesso.',
 sections:[
  {t:'🔍 Prima chiedi: cosa non va, esattamente?', html:`
   <div class="card"><p>Prima di provare tecniche di coinvolgimento, scopri <strong>quale parte del formato online non funziona</strong>. Una tecnica che risolve la solitudine non serve a nulla contro la stanchezza da schermo. I bambini raramente lo dicono in modo chiaro, quindi impara a riconoscere come si presenta e cosa dice ciascun caso:</p></div>
   ${patternCards([
     {ic:'🥱', title:'Stanco e distratto', desc:'«Sono stanco.» «È troppo lunga.» Lo sguardo vaga, cambia scheda, sbadiglia.', note:'Un problema di energia e attenzione. <strong>Blocchi più brevi, movimento, un cambio di attività.</strong>'},
     {ic:'🫥', title:'Solo, non connesso', desc:'«Non c’è nessuno con cui parlare.» Videocamera spenta, silenzio, nessuna reazione.', note:'Un problema di connessione con gli altri. <strong>Coinvolgi i compagni: coppie, mostra e racconta, reazioni.</strong>'},
     {ic:'🙈', title:'A disagio davanti alla videocamera', desc:'Non vuole parlare né mostrare il viso; risponde in chat, oppure non risponde affatto.', note:'Un problema di sicurezza emotiva. <strong>Modi di partecipare senza pressione.</strong>'},
     {ic:'🔌', title:'Frustrato dagli strumenti', desc:'«Si blocca sempre.» «Non sentivo.» Si arrende dopo un intoppo tecnico.', note:'Un problema di strumenti. <strong>Risolvi in fretta, oppure segui il protocollo per i problemi tecnici (10 minuti, poi comunica, documenta, inoltra il caso).</strong>'}
   ],2)}
  `},
  {t:'❓ Domande per farlo emergere — in base all’età', html:`
   <div class="card"><p>Fai <strong>domande aperte, senza pressione</strong>, e dai allo studente un modo di rispondere che non lo faccia sentire messo alle strette. Cosa funziona dipende dall’età:</p></div>
   ${dimTabs([
     {ic:'🧒', title:'6–8 anni',
      intro:'I più piccoli rispondono meglio con faccine, immagini e scelte, non con spiegazioni.',
      tips:[
       {ic:'😀', html:`<strong>Il sondaggio delle faccine.</strong> <em>«Mostrami con la mano o con un’emoji com’è andata la lezione di oggi: felice, così così o assonnato?»</em>`},
       {ic:'🌟', html:`<strong>Il meglio e il meno bello.</strong> <em>«Qual è stata la parte più divertente di oggi? E quella più noiosa?»</em>`},
       {ic:'🎁', html:`<strong>La bacchetta magica.</strong> <em>«Se potessi cambiare una cosa della nostra lezione online, quale sarebbe?»</em>`},
       {ic:'👂', html:`<strong>Ascolta, non correggere.</strong> Ripeti ciò che ha detto e ringrazialo, poi cambia una piccola cosa nella lezione successiva, così vede che l’hai ascoltato.`}
      ]},
     {ic:'🧑', title:'9–11 anni',
      intro:'Sanno dare un voto e spiegare, purché sia una cosa breve e li faccia sentire al sicuro.',
      tips:[
       {ic:'🔢', html:`<strong>La scala da 1 a 5.</strong> <em>«Da 1 a 5, quanto ti piacciono le nostre lezioni online? Cosa servirebbe per arrivare a 5?»</em>`},
       {ic:'🌟', html:`<strong>La parte più bella.</strong> <em>«Qual è stata la parte più bella della lezione di oggi?»</em> Se non riesce a nominare nulla, è un segnale.`},
       {ic:'🔧', html:`<strong>Una sola modifica.</strong> <em>«Se potessi cambiare una cosa delle lezioni, quale sarebbe?»</em>`},
       {ic:'🗳️', html:`<strong>Sondaggio veloce in chat.</strong> <em>«Scrivete A se vorreste più tempo per costruire, B se vorreste più tempo con un compagno.»</em>`}
      ]},
     {ic:'🧑‍🎓', title:'12+ anni',
      intro:`I ragazzi più grandi non vogliono dirlo davanti a tutti. Offri loro un modo privato o anonimo.`,
      tips:[
       {ic:'🔒', html:`<strong>Un messaggio privato.</strong> <em>«Ho notato che ultimamente sei più silenzioso. C’è qualcosa delle lezioni online che ti dà fastidio? Resta tra noi.»</em>`},
       {ic:'🗳️', html:`<strong>Un sondaggio anonimo.</strong> Chiedi a tutto il gruppo di completare la frase <em>«Parteciperei di più se…»</em>: elimina la paura di essere giudicati.`},
       {ic:'🤝', html:`<strong>Chiedi le sue idee,</strong> non le sue lamentele: <em>«Cosa renderebbe le nostre lezioni migliori per te?»</em>`},
       {ic:'🙏', html:`<strong>Rispetta la sua risposta.</strong> Non contestarla mai: ringrazialo e intervieni su una cosa.`}
      ]}
   ],'✅ Ecco le tre fasce d’età. Avanti: come cambiare la percezione.')}
   ${co('co-idea','🧠',`<p><strong>Perché funziona.</strong> Le domande aperte e i formati anonimi eliminano la pressione sociale di rispondere davanti ai compagni. Completare una frase come «Parlerei di più se…» è spesso più facile che dare un riscontro faccia a faccia.</p>`)}
  `},
  {t:'🔁 Cambia la percezione — prima valida, poi riformula', html:`
   <div class="card"><p>Non puoi convincere qualcuno a smettere di provare un’emozione. L’ordine che funziona è: <strong>1. valida</strong> («ha senso»), <strong>2. riformula</strong> (mostra l’altro lato, con onestà), <strong>3. prova qualcosa di piccolo</strong> già nella lezione successiva. Aprili uno per uno:</p></div>
   ${accItem('🥱 «Davanti a uno schermo è noioso.»', `
     <p><strong>✅ Valida:</strong> <em>«Hai ragione, guardare uno schermo a lungo può essere noioso.»</em></p>
     <p><strong>🔁 Riformula:</strong> <em>«Qui non stai solo guardando: tutto quello che c’è sul tuo schermo lo crei tu.»</em></p>
     <p><strong>🎯 Prova:</strong> nella lezione successiva, mostra sullo schermo il progetto dello studente entro i primi cinque minuti.</p>`)}
   ${accItem('🫥 «Mi mancano i miei amici / non c’è nessuno con cui parlare.»', `
     <p><strong>✅ Valida:</strong> <em>«Ha senso: costruire cose insieme agli altri è più divertente.»</em></p>
     <p><strong>🔁 Riformula:</strong> <em>«Nella nostra classe ci sono persone che amano le stesse cose che ami tu. Sfruttiamolo.»</em></p>
     <p><strong>🎯 Prova:</strong> un’attività in coppia di due minuti o un mostra e racconta: <em>«Mostra al tuo compagno la parte che ti è venuta meglio.»</em></p>`)}
   ${accItem('📱 «A casa non riesco a concentrarmi.»', `
     <p><strong>✅ Valida:</strong> <em>«A casa ci sono tante distrazioni: è normale.»</em></p>
     <p><strong>🔁 Riformula:</strong> <em>«Lavoreremo a blocchi brevi, così dovrai concentrarti solo un po’ alla volta.»</em></p>
     <p><strong>🎯 Prova:</strong> cambia attività circa ogni 10 minuti e annuncia in anticipo cosa farete nel blocco successivo.</p>`)}
   ${accItem('🙈 «Non mi piace parlare davanti alla videocamera.»', `
     <p><strong>✅ Valida:</strong> <em>«Va benissimo, capita a tante persone.»</em></p>
     <p><strong>🔁 Riformula:</strong> <em>«Puoi partecipare prima con la chat o condividendo lo schermo. La videocamera può arrivare dopo, quando vorrai tu.»</em></p>
     <p><strong>🎯 Prova:</strong> una domanda facile a cui rispondere in chat e, dopo, un messaggio privato con scritto «ottima idea».</p>`)}
   ${doavoid(
     ['Prima valida: <em>«Ha senso.»</em>','Sii onesto: riformula, non cercare di vendere','Prometti solo ciò che puoi mantenere: <em>«Nella prossima lezione iniziamo costruendo.»</em>','Cambia una piccola cosa nella lezione successiva, così vede che l’hai ascoltato'],
     ['Sostenere che <em>«l’online è altrettanto valido»</em>','Liquidare la questione: <em>«ormai tutti studiano online»</em>','Promettere un cambio di gruppo o di formato','Fare la domanda davanti a tutto il gruppo']
   )}
  `},
  {t:'📝 Segnalalo in BO — il giorno stesso', html:`
   <div class="card"><p>Uno studente che continua a dire che le lezioni online non gli piacciono, o che resta in silenzio e distaccato, è a rischio rimborso. <strong>Segnalalo il giorno stesso</strong>: il team può valutare le opzioni (un altro gruppo o formato più adatto se disponibile, una conversazione motivazionale, un altro corso) solo finché la famiglia sta ancora decidendo.</p></div>
   <div class="card" style="background:var(--surface2)"><h4>📨 Com’è fatta una segnalazione utile — copia e completa</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Studente:</strong> [nome] · <strong>Gruppo / formato:</strong> [es. gruppo da 6, martedì ore 18] · <strong>Lezione:</strong> [data]<br>
   <strong>Cosa ha detto:</strong> [le sue parole — es. «l’online è noioso, non c’è nessuno con cui parlare»]<br>
   <strong>Cosa ho osservato:</strong> [videocamera, microfono, chat, attenzione — e se è cambiato qualcosa rispetto a prima]<br>
   <strong>Cosa penso che lo infastidisca:</strong> ☐ stanco / distratto &nbsp; ☐ solo &nbsp; ☐ a disagio davanti alla videocamera &nbsp; ☐ frustrato dagli strumenti<br>
   <strong>Cosa ho già provato:</strong> [es. blocchi brevi, attività in coppia, partecipazione prima in chat]<br>
   <strong>Cosa potrebbe aiutare — la mia proposta, la vostra decisione:</strong> [es. un gruppo più piccolo, una conversazione motivazionale, un altro corso]</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Segnala un caso</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Segnala un caso" loading="lazy"></iframe></div></div>
   ${co('co-idea','💬',`<p><strong>Con la famiglia:</strong> parla dell’apprendimento, mai dell’organizzazione. <em>«Buongiorno [nome del genitore], ho notato che a volte [nome dello studente] fa fatica a mantenere l’energia durante le lezioni online. Ho iniziato a proporre brevi momenti di costruzione e a lasciargli scegliere, e ne ho parlato con il mio team per poterlo supportare al meglio.»</em> Nessuna promessa su gruppi o formati.</p>`)}
  `}
 ],
 ix:{
  title:'Cosa lo infastidisce — e cosa fare per prima cosa',
  instr:'Classifica le frasi e scegli la mossa migliore. 70% per sbloccare il modulo successivo.',
  items:[
   {type:'sort', prompt:'Cosa infastidisce questo studente?', card:`«Non c’è nessuno con cui parlare.»`, zones:[{label:'🥱 Stanco e distratto', fb:'Non proprio — lo studente descrive il sentirsi solo, non la stanchezza.'},{label:'🫥 Solo, non connesso', fb:'Esatto — è un problema di connessione con gli altri. Coinvolgi i compagni con attività in coppia, mostra e racconta e reazioni.'},{label:'🙈 A disagio davanti alla videocamera', fb:'Non proprio — qui gli manca qualcuno con cui condividere, non si tratta di essere visto.'},{label:'🔌 Frustrato dagli strumenti', fb:'Non proprio — qui gli strumenti non c’entrano.'}], correctZone:1},
   {type:'sort', prompt:'Cosa infastidisce questa studentessa?', card:`Ha la videocamera spenta, non parla mai e scrive solo in chat.`, zones:[{label:'🥱 Stanco e distratto', fb:'Non proprio — scrivere in chat mostra che è coinvolta, solo non a voce.'},{label:'🫥 Solo, non connesso', fb:'Non proprio — sta partecipando tramite la chat.'},{label:'🙈 A disagio davanti alla videocamera', fb:'Esatto — un problema di sicurezza emotiva. Parti da modi di partecipare senza pressione: prima la chat, poi la condivisione dello schermo, e la videocamera quando sarà pronta.'},{label:'🔌 Frustrato dagli strumenti', fb:'Non proprio — nulla fa pensare a un problema tecnico.'}], correctZone:2},
   {type:'choice', prompt:`Uno studente dice: «Le lezioni online sono noiose.» Qual è la prima mossa migliore?`, opts:[`Spiegare che le lezioni online valgono quanto quelle in presenza`,`Allungare le spiegazioni per rendere la lezione più interessante`,`Chiedere cosa, esattamente, risulta noioso: la durata, le attività, lo schermo, il sentirsi solo?`], correct:2, fb:`Prima di qualsiasi tecnica, scopri quale parte non funziona. «Noioso» può voler dire stanco, solo, timido o frustrato, e ognuno ha una soluzione diversa.`},
   {type:'sort', prompt:'Tesoro o spazzatura? È una buona risposta?', card:`«Ha senso: davanti a uno schermo ci si può sentire passivi. Qui, tutto quello che c’è sul tuo schermo lo crei tu.»`, zones:[{label:'💎 Tesoro — valida e riformula', fb:'Esatto — prima valida l’emozione, poi offre una riformulazione onesta.'},{label:'🗑️ Spazzatura — sminuisce', fb:'Non proprio — questa risposta prima valida e poi riformula. È l’ordine giusto.'}], correctZone:0},
   {type:'choice', prompt:`Uno studente di 12 anni sembra distaccato. Quale modo di chiedere gli permette di rispondere sinceramente?`, opts:[`Chiedere ad alta voce a tutto il gruppo: «Chi trova noiose le lezioni online?»`,`Chiedere al genitore di parlargli`,`Un messaggio privato, o un sondaggio anonimo: «Parteciperei di più se…»`], correct:2, fb:`I ragazzi più grandi raramente lo dicono davanti ai coetanei. Un messaggio privato o un sondaggio anonimo elimina la pressione sociale.`},
   {type:'choice', prompt:`Quando segnali in BO che a uno studente non piace il formato online?`, opts:[`Il giorno stesso, con cosa ha detto, cosa hai osservato e cosa hai provato`,`Dopo un mese, se non è migliorato nulla`,`Solo se il genitore si lamenta`], correct:0, fb:`Opzioni come un altro gruppo o formato si possono valutare solo finché la famiglia sta ancora decidendo. Fatti concreti, le parole dello studente e ciò che hai provato permettono al team di agire in fretta.`}
  ]
 }
},
{id:'engage', numLabel:'Modulo 2', emoji:'🎬', color:'var(--coral)',
 title:'Costruisci una lezione online che piaccia ai tuoi studenti',
 desc:'Tecniche per mantenere l’attenzione e far sembrare lo schermo una stanza condivisa: un inizio forte, blocchi brevi, interazione, legami tra compagni, domande dirette e un successo finale.',
 obj:'Condurre una lezione online che mantenga l’attenzione, dia a ogni studente un modo comodo di partecipare, crei legami tra i compagni e si chiuda con un successo, adattandola all’età del gruppo.',
 sections:[
  {t:'🧠 I quattro ingredienti di ogni lezione motivante', html:`
   <div class="card"><p>Online, niente tiene l’attenzione al posto tuo: non c’è un’aula fisica, non ci sono compagni accanto, e ogni distrazione è a un clic di distanza. La ricerca sulla motivazione offre una checklist semplice: il <strong>modello ARCS</strong> di John Keller (1987). Prima di ogni lezione, chiediti se li contiene tutti e quattro:</p></div>
   ${iconGrid([
     {ic:'👀', html:`<strong>Attenzione.</strong> Una sorpresa, una domanda, una breve sfida e un cambio di formato. <em>«Un bug è scappato dal gioco: chi mi aiuta a catturarlo?»</em>`},
     {ic:'🔗', html:`<strong>Rilevanza.</strong> Collega la lezione a ciò che sta loro a cuore: i loro giochi, le loro serie, la cosa che vogliono creare.`},
     {ic:'💪', html:`<strong>Fiducia.</strong> Piccoli passi, un passo successivo chiaro e supporto quando si bloccano, così credono di potercela fare.`},
     {ic:'🏆', html:`<strong>Soddisfazione.</strong> Lodi specifiche e qualcosa di finito da mostrare alla fine.`}
   ])}
   ${bigStat('≈ 10 min', `<p>Una regola pratica molto citata nella ricerca sull’apprendimento (resa popolare da John Medina nel libro <em>Brain Rules</em>): l’attenzione inizia a calare dopo circa <strong>dieci minuti</strong>. Prevedi un cambio di attività più o meno a quel punto, e con i più piccoli tieni i blocchi ancora più brevi.</p>`)}
  `},
  {t:'🎬 La lezione, minuto per minuto', html:`
   ${timeline([
     {ic:'🎬', label:'Inizia forte — i primi tre minuti', items:[
       '<strong>Inizia con una sorpresa, una storia o una domanda</strong> legata al progetto di oggi: l’apertura dà il tono a tutta la lezione.',
       '<em>«Oggi un robot ha perso la voce: alla fine della lezione gliel’avrete ridata. Chi ci sta?»</em>'
     ]},
     {ic:'⏱️', label:'Lavora a blocchi brevi', items:[
       '<strong>Cambia attività circa ogni 10 minuti:</strong> spiega → prova → condividi. Annuncia cosa farete nel blocco successivo.',
       '<em>«Primo giro: cinque minuti per provare. Secondo giro: mostralo al tuo compagno.»</em>'
     ]},
     {ic:'🙋', label:'Interagisci — ogni pochi minuti', items:[
       '<strong>Dai a tutti un modo per partecipare:</strong> chat, reazioni, un sondaggio veloce o la condivisione dello schermo a turno.',
       '<em>«Scrivete la vostra ipotesi in chat: le leggo tutte ad alta voce!»</em>'
     ]},
     {ic:'👥', label:'Crea legami tra i compagni', items:[
       '<strong>Momenti in coppia di due minuti</strong> o attività in piccoli gruppi, così lo schermo sembra una stanza condivisa.',
       '<em>«Mostra al tuo compagno la parte che ti è venuta meglio, poi dimmi cosa ti è piaciuto nella sua.»</em>'
     ]},
     {ic:'🏁', label:'Chiudi con un successo', items:[
       '<strong>Un mostra e racconta di ciò che hanno creato,</strong> un complimento specifico e un’anticipazione di cosa verrà dopo.',
       '<em>«Guardate cosa avete costruito oggi: la prossima volta avrà anche un punteggio.»</em>'
     ]}
   ])}
  `},
  {t:'🛠️ Strumenti che rendono lo schermo interattivo', html:`
   ${iconGrid([
     {ic:'💬', html:`<strong>La chat come seconda voce.</strong> Gli studenti timidi partecipano senza sentirsi messi alle strette. <em>«Scrivete la vostra idea: le leggo tutte.»</em>`},
     {ic:'👍', html:`<strong>Reazioni e sondaggi veloci.</strong> <em>«Mostratemi con un’emoji: facile, medio o difficile?»</em>`},
     {ic:'🖥️', html:`<strong>Condivisione dello schermo a turno.</strong> <em>«Chi vuole mostrare il proprio progetto in 30 secondi?»</em> Proponi, non imporre.`},
     {ic:'1️⃣', html:`<strong>Un’istruzione alla volta, e verificala.</strong> Non accumulare passaggi. Poi chiedi: <em>«Cosa farai per prima cosa?»</em> Un breve elenco scritto in chat aiuta quando la connessione è lenta.`},
     {ic:'🎲', html:`<strong>Minigiochi e sfide rapide.</strong> Un quiz di 60 secondi o un «chi lo trova per primo?» riaccende l’attenzione.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>Coppie o piccoli gruppi.</strong> In un piccolo gruppo si parla di più e si ricevono riscontri più personali.`}
   ])}
  `},
  {t:'🎂 Adattala all’età', html:`
   ${dimTabs([
     {ic:'🧒', title:'6–8 anni',
      intro:'Blocchi brevi, movimento e sorprese. La loro energia è la lezione.',
      tips:[
       {ic:'🤸', html:`<strong>Pause di movimento.</strong> <em>«In piedi e mostratemi la vostra migliore posa da robot!»</em> — poi di nuovo alla tastiera.`},
       {ic:'⏲️', html:`<strong>Blocchi più brevi di 10 minuti,</strong> con un chiaro «ora facciamo questo» a ogni cambio.`},
       {ic:'🎁', html:`<strong>Adesivi, punti, una mascotte</strong>: piccole ricompense immediate per chi partecipa.`},
       {ic:'🧸', html:`<strong>Mostra e racconta.</strong> <em>«Mostraci il tuo giocattolo o il tuo disegno preferito, poi lo costruiamo.»</em>`}
      ]},
     {ic:'🧑', title:'9–11 anni',
      intro:'Missioni, timer e squadre fanno sembrare lo schermo un gioco.',
      tips:[
       {ic:'🎯', html:`<strong>Mini-missioni a tempo.</strong> <em>«Hai 8 minuti per far saltare il personaggio. Pronto?»</em>`},
       {ic:'🏁', html:`<strong>Sfide a squadre.</strong> Le coppie gareggiano a chi trova prima il bug, in modo amichevole e breve.`},
       {ic:'🧩', html:`<strong>La scelta del tema</strong> all’interno della stessa attività: l’obiettivo resta lo stesso, il travestimento lo scelgono loro.`},
       {ic:'🗳️', html:`<strong>Sondaggi veloci</strong> per decidere cosa fare nel blocco successivo.`}
      ]},
     {ic:'🧑‍🎓', title:'12+ anni',
      intro:'Autonomia, rilevanza e rispetto per il loro livello di comfort.',
      tips:[
       {ic:'🧭', html:`<strong>Coinvolgili nel programma.</strong> <em>«Abbiamo 15 minuti per questa parte: volete iniziare con A o con B?»</em>`},
       {ic:'🌍', html:`<strong>Mostra usi reali</strong> di ciò che imparano, in cose che conoscono.`},
       {ic:'🔒', html:`<strong>Rispetta la videocamera.</strong> Proponi di partecipare prima in chat; non imporre mai di accendere la videocamera.`},
       {ic:'🗳️', html:`<strong>Sondaggi anonimi</strong> per raccogliere opinioni, e revisione reciproca dei lavori.`}
      ]}
   ],'✅ Ecco le tre fasce d’età.')}
  `},
  {t:'🙋 Domande dirette — senza pressione', html:`
   <div class="card"><p>Chiamare uno studente per nome funziona, se è sicuro che non sarà imbarazzante. Preparalo, inizia con domande facili e fai in modo che sembri equo.</p></div>
   ${doavoid(
     ['Avvisa il gruppo che prima o poi farai una domanda a tutti, e che <em>«Non lo so»</em> è una risposta accettabile','Inizia con una domanda facile per creare fiducia','Usa un sorteggio casuale, così sembra equo e non personale','Apprezza ogni contributo: <em>«Grazie, questo ci aiuta a ragionare.»</em>'],
     ['Interpellare a sorpresa lo studente più silenzioso con una domanda difficile','Correggere in modo brusco davanti al gruppo','Chiedere sempre agli stessi studenti più veloci','Fare una domanda difficile senza preavviso. Prova invece: <em>«Questa è difficile, ma qualcuno vuole provarci?»</em>']
   )}
   ${co('co-star','🌱',`<p><strong>Perché funziona:</strong> gli studenti partecipano quando si sentono al sicuro. Prepararli, iniziare con domande facili e scegliere in modo equo trasforma una domanda da rischio a invito.</p>`)}
  `}
 ],
 ix:{
  title:'Costruisci una lezione che piace',
  instr:'Scegli la mossa migliore o classifica ogni abitudine. 70% per sbloccare la checklist finale.',
  items:[
   {type:'choice', prompt:`A metà lezione, un bambino di 9 anni sembra stanco e inizia a cambiare scheda. Qual è la mossa migliore?`, opts:[`Continuare a spiegare: recupererà`,`Cambiare attività: un sondaggio veloce o una breve missione a tempo, poi un nuovo blocco`,`Dirgli di stare attento`], correct:1, fb:`Un cambio di attività riaccende l’attenzione. Dirgli di concentrarsi non gli dà un motivo per farlo.`},
   {type:'sort', prompt:'Questa abitudine aiuta o danneggia una lezione online?', card:`Cambiare attività circa ogni 10 minuti: spiega, prova, condividi.`, zones:[{label:'💎 Aiuta', fb:'Esatto — i blocchi brevi sono uno dei modi più affidabili per mantenere l’attenzione online.'},{label:'🗑️ Danneggia', fb:'Non proprio — i blocchi brevi aiutano; sono le attività lunghe e sempre uguali a far perdere gli studenti.'}], correctZone:0},
   {type:'choice', prompt:`Come dai le istruzioni in una lezione online?`, opts:[`Tutti i passaggi insieme, così nessuno deve aspettare`,`Un’istruzione alla volta, poi verifica: «Cosa farai per prima cosa?»`,`Le dici una volta, velocemente, e vai avanti`], correct:1, fb:`Online, le istruzioni accumulate si perdono. Un passaggio alla volta più una domanda di verifica fanno emergere subito la confusione.`},
   {type:'choice', prompt:`Uno studente timido di 13 anni non risponde mai a voce. Cosa aiuta di più?`, opts:[`Chiamarlo per nome a ogni lezione finché non parla`,`Lasciarlo partecipare prima tramite la chat, e apprezzare i suoi contributi`,`Chiedergli di accendere la videocamera davanti a tutti`], correct:1, fb:`Dagli un modo comodo per partecipare: prima la chat. La videocamera può arrivare dopo, quando vorrà lui.`},
   {type:'sort', prompt:'Questa abitudine aiuta o danneggia una lezione online?', card:`Interpellare a sorpresa lo studente più silenzioso con la domanda più difficile.`, zones:[{label:'💎 Aiuta', fb:'Non proprio — mette lo studente in difficoltà e rende più difficile rispondere alla domanda successiva.'},{label:'🗑️ Danneggia', fb:'Esatto — inizia con domande facili, preparalo e fai in modo che la scelta sembri equa.'}], correctZone:1},
   {type:'choice', prompt:`Quale apertura funziona meglio con un bambino di 7 anni?`, opts:[`«Oggi impariamo cosa sono le variabili.»`,`«Oggi un robot ha perso la voce: alla fine della lezione gliel’avrete ridata. Chi ci sta?»`,`«Aprite la lezione e iniziate l’esercizio 1.»`], correct:1, fb:`Una storia con una missione cattura l’attenzione e dà un motivo per partecipare. Partire subito con i contenuti spreca i minuti in cui l’attenzione è massima.`}
  ]
 }
},
{id:'checklist', numLabel:'Checklist finale', emoji:'✅', color:'var(--coral)',
 title:'Checklist finale',
 desc:'Niente quiz qui: solo gli elementi essenziali di questo mini-training, prima di concluderlo.',
 obj:'Rivedi la checklist qui sotto. Questo modulo non ha valutazione: leggilo, poi concludi il mini-training.',
 sections:[
  {t:'🛟 Se esiste già una richiesta di rimborso', html:`
   ${numlist([
     'Ho lasciato un commento in BO il giorno stesso in cui ho saputo della richiesta e ho coinvolto il mio Team Leader',
     'La mia lezione successiva con questo studente è stata un vero tentativo di recupero: un vero turno, un successo visibile, attenzione mirata, nessun accenno alla richiesta',
     'Non ho mai confermato l’approvazione né parlato di importi: ho usato l’unica frase sicura e ho lasciato il resto al Client Service'
   ])}
  `},
  {t:'🌱 In ogni lezione', html:`
   ${numlist([
     'Prima di provare qualsiasi tecnica, scopro cosa, esattamente, non va nelle lezioni online per questo studente',
     'Prima valido l’emozione («ha senso») e solo dopo riformulo: non sostengo mai che l’online sia «altrettanto valido»',
     'Faccio domande adatte all’età: il sondaggio delle faccine per i più piccoli, la scala da 1 a 5 per i 9–11 anni, un sondaggio privato o anonimo per i 12+',
     'Inizio ogni lezione in modo forte: una sorpresa, una storia o una domanda legata al progetto di oggi',
     'Cambio attività circa ogni 10 minuti (più spesso con i più piccoli): spiega → prova → condividi',
     'Uso la chat, le reazioni, i sondaggi e la condivisione dello schermo a turno, così tutti hanno un modo comodo per partecipare',
     'Do un’istruzione alla volta e verifico che sia stata capita',
     'Faccio domande dirette senza pressione: prima quelle facili, un modo equo di scegliere chi risponde e un riscontro positivo per ogni risposta',
     'Creo legami tra i compagni con brevi momenti in coppia o in piccoli gruppi',
     'Segnalo in BO il giorno stesso che a uno studente non piace il formato online: cosa ha detto, cosa ho osservato, cosa ho provato',
     'Non prometto mai un cambio di formato o di gruppo: lo propongo in BO e dico «Ne parlo con il mio team»'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Il mini-training è tutto qui.</strong> Quando sei pronto, continua, poi completa il DST nell’LMS per chiudere l’assegnazione.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
