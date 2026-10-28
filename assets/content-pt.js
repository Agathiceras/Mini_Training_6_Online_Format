/* Mini_Training_6_Online_Format - Portuguese content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='pt';
const CONTENT = {
  flag:'🇧🇷', dir:'ltr',
  ui:{
    pageTitle:"Minitreinamento · Formato Online — Treinamento para Tutores Kodland",
    logoSub:'Departamento de Desenvolvimento de Tutores',
    heroEyebrow:"🎯 Minitreinamento",
    heroTitle:"Aulas <span class=\"h-pill\">Online</span> que Funcionam de Verdade",
    heroIntro:"Você recebeu este treinamento porque tem alunos que pediram reembolso por não gostarem do formato online. Aqui, vamos mostrar o que você pode fazer como tutor e como lidar com essas situações.",
    heroWork:"Faça 4 módulos curtos. Cada verificação de módulo exige 70% ou mais para liberar o próximo. Cerca de 20 a 25 minutos no total.",
    startBtn:"🚀 Começar o treinamento",
    pathLabel:'Seu caminho de aprendizado',
    devTitle:'Dev: desbloquear todos os módulos para revisão',
    backToPath:'Voltar ao caminho',
    modulesPassed:'{done} / {total} módulos concluídos',
    moduleN:'Módulo {n}',
    of:'de',
    locked:'🔒 Bloqueado',
    passedBadge:'✅ Aprovado · {pct}%',
    reviewedBadge:'✅ Revisado',
    startBadge:'▶ Começar',
    reviewBadge:'▶ Revisar',
    objective:'Objetivo',
    startCheck:'▶ Iniciar a verificação do módulo',
    finishBtn:'▶ Concluir o minitreinamento',
    doneBack:'✓ Pronto — voltar ao caminho',
    ixBadge:'📋 Verificação do módulo — 70% para liberar o próximo módulo',
    ixItemBadge:'📋 Verificação do módulo — item {i} de {n}',
    scoreSoFar:'Pontuação até agora: {c} / {t}',
    continue:'Continuar →',
    sortWrong:'Não foi dessa vez — a resposta certa é “{label}”.',
    resPassed:'Módulo concluído!',
    resFailed:'Ainda não foi dessa vez',
    resUnlocked:"Você liberou o próximo módulo.",
    resDone:"Você concluiu este minitreinamento.",
    resNeed:'Você precisa de 70% para liberar o próximo módulo. Revise a seção acima e faça a verificação novamente.',
    resContinue:'Continuar para o caminho de aprendizado',
    resFinish:'Continuar',
    resBack:'Voltar ao caminho',
    resReview:'Revisar este módulo',
    doneEyebrow:'Minitreinamento concluído',
    doneTitle:'🎉 Parabéns!',
    doneP1:"🎉 <strong>Parabéns! Você concluiu este minitreinamento.</strong>",
    doneP2:"Está tudo pronto por aqui! Volte à página de treinamento do LMS por onde você acessou este minitreinamento para encerrar a atividade.",
    doneP3:"👉 <strong>Se houver uma verificação ou avaliação listada logo abaixo do treinamento no LMS, não deixe de fazê-la e de alcançar a nota de aprovação</strong> — caso contrário, a atividade pode continuar incompleta.",
    doneP4:'Boa sorte! ❤️',
    doneP5:'',
    devUnlockAlert:'Modo dev: todos os módulos estão desbloqueados para revisão.',
    devOn:'🔓 Modo dev ATIVADO — todos os módulos desbloqueados',
    devOff:'🔒 Modo dev DESATIVADO — progresso apagado',
    devBadge:'🔓 MODO DEV',
    doLabel:'✅ Faça',
    avoidLabel:'🚫 Evite',
    noticeLabel:'Atenção:',
    cvSee:'O que você vê:',
    cvDo:'O que você faz:',
    dtExample:'Exemplo de uma aula real',
    dtNext:'A seguir:',
    dtDone:"✅ Essas são as quatro áreas. Agora, classifique o que você vê.",
    tlVideoTitle:'{label} — exemplo de uma aula real',
    tlVideoMeta:'Veja como essa fase acontece em uma aula real'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introdução', emoji:'🧩', color:'var(--coral)',
 title:'Por que você está aqui',
 desc:'Por que “não gosto de aula online” ainda pode ser revertido — e as regras que valem quando o pedido de reembolso já foi feito.',
 obj:'Entender o que “não gosto do formato online” realmente significa, por que o relato no mesmo dia importa e exatamente o que fazer (e o que não fazer) quando já existe um pedido de reembolso.',
 sections:[
  {t:'💻 O que “não gosto de online” realmente significa', html:`
   <div class="card"><p>Quase ninguém diz “minha atenção se dispersa depois de um dia inteiro de telas”. Dizem <em>“online é chato”</em>, <em>“não gosto”</em> — e a família pede reembolso. Por trás dessa única frase, costumam existir coisas bem diferentes:</p></div>
   ${iconGrid([
     {ic:'🥱', html:`<strong>Cansaço de tela.</strong> A aula vem depois de um dia de escola com telas, e a criança já não tem energia.`},
     {ic:'🫥', html:`<strong>Sensação de solidão.</strong> Sem colegas para dividir a tarefa, sem ninguém para rir junto.`},
     {ic:'📱', html:`<strong>Distrações em casa.</strong> O celular, um jogo, um bichinho de estimação ou um irmão estão a um clique de distância.`},
     {ic:'🙈', html:`<strong>Timidez diante da câmera.</strong> Não querem ser vistos nem falar na frente de todo mundo.`},
     {ic:'🔌', html:`<strong>Frustração com as ferramentas.</strong> Travamentos, áudio que não funciona, botões que não respondem.`},
     {ic:'👨‍👩‍👧', html:`<strong>A família esperava aulas presenciais.</strong> Para eles, o online parece “menos de verdade” — não importa o que a criança pense.`}
   ])}
   ${co('co-idea','💡',`<p><strong>Você não pode mudar o formato — mas pode mudar como a aula é vivida dentro dele.</strong> A maior parte do que os alunos não gostam nas aulas online vem de como a aula é conduzida, e essa parte é sua.</p>`)}
  `},
  {t:'⏱️ A chave é a rapidez — e o seu relato', html:`
   <div class="card"><p>Não é você quem decide se um aluno pode mudar de grupo ou de formato. Mas o seu relato é o que inicia essa conversa, e ele só funciona se chegar às pessoas certas <strong>cedo</strong>.</p></div>
   ${stepFlow([
     {ic:'👀', label:'Você percebe o desgosto em uma aula'},
     {ic:'📝', label:'Você relata no BO no mesmo dia'},
     {ic:'👩‍💼', label:'Seu Team Leader e o Client Service avaliam as opções'},
     {ic:'🔄', label:'Uma conversa motivacional, outro grupo ou formato que combine com o aluno (se houver), ou outro curso'}
   ])}
   ${co('co-danger','🚨',`<p><strong>Um relato tardio fecha portas.</strong> Depois que a família decide, a maioria das opções já não existe. O mesmo relato, feito nas primeiras semanas, pode manter uma criança na Kodland.</p>`)}
   ${co('co-ok','✅',`<p><strong>Enquanto a equipe avalia as opções, a aula continua sendo sua.</strong> Os módulos 1 e 2 mostram como descobrir o que incomoda o aluno e como construir uma aula online de que ele goste.</p>`)}
  `},
  {t:'🛟 Se já existe um pedido de reembolso', html:`
   <div class="card"><p>Tudo o que vimos até aqui é sobre perceber isso cedo. Mas pode ser que você esteja abrindo este treinamento porque uma família <strong>já</strong> pediu reembolso. As regras abaixo valem independentemente do motivo — leia-as primeiro e depois use o restante do treinamento para entender o que levou a essa situação e o que você ainda pode fazer na aula.</p></div>
   ${co('co-idea','💡',`<p><strong>O pedido em si é criado pelo Client Service, não por você</strong> — essa parte não está sob o seu controle. O que continua sendo seu é tudo o que acontece na aula a partir de agora, e isso não é pouca coisa.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Não diga nada sobre o pedido em si</strong> — nem para a criança, nem para a família — a menos que o Client Service peça explicitamente que você diga algo específico. Agora o seu trabalho é a aula, não a conversa sobre o pedido.</p>`)}
  `},
  {t:'🎯 Sua próxima aula é a tentativa de reverter', html:`
   <div class="card"><p>Talvez você não tenha outra chance de mudar nada. Trate a próxima aula com essa criança como o momento que decide tudo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dê à criança uma participação real.</strong> Não uma pergunta sem importância — um momento genuíno em que ela é vista e tem sucesso.`},
     {ic:'🏆', html:`<strong>Prepare uma vitória cedo e bem visível.</strong> Ela deve sair da aula sentindo-se capaz, não atrasada.`},
     {ic:'👀', html:`<strong>Atenção específica</strong> — faça-a se sentir notada por algo concreto, não elogiada de forma genérica.`},
     {ic:'🤐', html:`<strong>Nenhuma menção ao pedido</strong> — mesmo que a criança toque no assunto, redirecione com carinho e continue ensinando.`}
   ])}
  `},
  {t:'📮 Avise rápido e conheça a única frase segura', html:`
   <div class="card"><p>Você pode descobrir que existe um pedido pelos comentários do Client Service no perfil da criança no BO — não há nenhum sistema automático que avise você. Quando você souber, o que viu nas suas aulas é uma informação que o Client Service não tem de nenhum outro jeito.</p></div>
   ${numlist([
     'Deixe um comentário no BO no mesmo dia com exatamente o que você viu — datas e detalhes, não impressões',
     'Inclua as palavras da própria família, literalmente, se você as tiver',
     'Avise seu Team Leader no mesmo dia',
     'Nunca confirme que um reembolso foi aprovado nem comente qualquer valor'
   ])}
   ${co('co-ok','✅',`<p><strong>A mensagem que é sempre segura dizer:</strong> <em>“O Client Service vai ajudar você com isso.”</em> É aí que termina a sua parte da conversa — o Client Service assume a partir dali.</p>`)}
  `},
  {t:'🌱 Continue com o cuidado depois', html:`
   <div class="card"><p>Quer o pedido seja retirado, quer a criança continue no seu grupo, quer passe para outro tutor ou formato, continue dando atenção extra nas próximas aulas. Uma reversão que se sustenta por uma aula e depois volta discretamente ao normal muitas vezes não se sustenta de jeito nenhum.</p></div>
  `}
 ]
},
{id:'diagnose', numLabel:'Módulo 1', emoji:'🔍', color:'var(--coral)',
 title:'Descubra o que incomoda — e depois reformule',
 desc:'Como identificar o que exatamente incomoda nas aulas online, as perguntas que revelam isso por faixa etária, como mudar a percepção e como relatar no BO.',
 obj:'Identificar o que o aluno realmente não gosta no formato online, perguntar de um jeito adequado à idade dele, validar e reformular o que ele sente, e relatar o caso no BO no mesmo dia.',
 sections:[
  {t:'🔍 Pergunte primeiro: o que exatamente incomoda?', html:`
   <div class="card"><p>Antes de tentar técnicas de engajamento, descubra <strong>qual parte do formato online não funciona para o aluno</strong>. Uma técnica que resolve a solidão não faz nada pelo cansaço de tela. As crianças raramente dizem isso com clareza, então aprenda como cada caso aparece e soa:</p></div>
   ${patternCards([
     {ic:'🥱', title:'Cansado e distraído', desc:'“Estou cansado.” “É muito longo.” O olhar vaga, as abas mudam, há bocejos.', note:'Um problema de energia e atenção. <strong>Rodadas mais curtas, movimento, mudança de atividade.</strong>'},
     {ic:'🫥', title:'Sozinho, sem conexão', desc:'“Não tem ninguém para conversar.” Câmera desligada, em silêncio, sem reações.', note:'Um problema de conexão. <strong>Traga os colegas para dentro: duplas, mostre e conte, reações.</strong>'},
     {ic:'🙈', title:'Desconfortável diante da câmera', desc:'Não fala nem mostra o rosto; responde no chat, ou não responde.', note:'Um problema de segurança. <strong>Formas de participar sem pressão.</strong>'},
     {ic:'🔌', title:'Frustrado com as ferramentas', desc:'“Sempre trava.” “Não consegui ouvir.” Desiste depois de um problema técnico.', note:'Um problema de ferramenta. <strong>Resolva rápido ou siga o protocolo de problemas técnicos (10 minutos, depois comunicar, documentar, escalar).</strong>'}
   ],2)}
  `},
  {t:'❓ Perguntas que revelam isso — por idade', html:`
   <div class="card"><p>Faça <strong>perguntas abertas, sem pressão</strong>, e dê ao aluno um jeito de responder que não pareça estar sendo posto contra a parede. O que funciona depende da idade:</p></div>
   ${dimTabs([
     {ic:'🧒', title:'6 a 8 anos',
      intro:'As crianças pequenas respondem melhor com carinhas, imagens e escolhas — não com explicações.',
      tips:[
       {ic:'😀', html:`<strong>Enquete de carinhas.</strong> <em>“Mostre com a mão ou com um emoji como foi a aula de hoje — feliz, mais ou menos ou com sono?”</em>`},
       {ic:'🌟', html:`<strong>O melhor e o nem tão bom.</strong> <em>“Qual foi a parte mais divertida de hoje? E a mais chata?”</em>`},
       {ic:'🎁', html:`<strong>A varinha mágica.</strong> <em>“Se você pudesse mudar uma coisa na nossa aula online, o que seria?”</em>`},
       {ic:'👂', html:`<strong>Ouça, não conserte.</strong> Repita o que a criança disse e agradeça — depois mude uma coisinha na próxima aula, para que ela veja que você ouviu.`}
      ]},
     {ic:'🧑', title:'9 a 11 anos',
      intro:'Eles conseguem avaliar e explicar — desde que pareça seguro e curto.',
      tips:[
       {ic:'🔢', html:`<strong>A escala de 1 a 5.</strong> <em>“De 1 a 5, o quanto você gosta das nossas aulas online? O que faria ser um 5?”</em>`},
       {ic:'🌟', html:`<strong>A parte mais legal.</strong> <em>“Qual foi a parte mais legal da aula de hoje?”</em> Se ele não consegue citar nada, isso é um sinal.`},
       {ic:'🔧', html:`<strong>Uma mudança.</strong> <em>“Se você pudesse mudar uma coisa nas aulas, o que seria?”</em>`},
       {ic:'🗳️', html:`<strong>Enquete rápida no chat.</strong> <em>“Digite A se você quer mais tempo para construir, B se quer mais tempo com um colega.”</em>`}
      ]},
     {ic:'🧑‍🎓', title:'12+ anos',
      intro:`Os alunos mais velhos não querem dizer isso na frente de todos. Ofereça um jeito privado ou anônimo.`,
      tips:[
       {ic:'🔒', html:`<strong>Uma mensagem privada.</strong> <em>“Percebi que você tem estado mais quieto ultimamente. Tem alguma coisa nas aulas online que incomoda você? Fica só entre nós.”</em>`},
       {ic:'🗳️', html:`<strong>Uma enquete anônima.</strong> Peça ao grupo todo que complete a frase <em>“Eu participaria mais se…”</em> — isso tira o medo de ser julgado.`},
       {ic:'🤝', html:`<strong>Peça ideias,</strong> não reclamações: <em>“O que deixaria nossas aulas melhores para você?”</em>`},
       {ic:'🙏', html:`<strong>Respeite a resposta.</strong> Nunca discuta com ela — agradeça e aja em relação a uma coisa.`}
      ]}
   ],'✅ Essas são as três faixas etárias. A seguir: como mudar a percepção.')}
   ${co('co-idea','🧠',`<p><strong>Por que funciona.</strong> Perguntas abertas e formatos anônimos eliminam a pressão social de responder na frente dos colegas. Dar um retorno do tipo “eu falaria mais se…” costuma ser mais fácil do que dizer pessoalmente.</p>`)}
  `},
  {t:'🔁 Mude a percepção — valide primeiro, depois reformule', html:`
   <div class="card"><p>Você não consegue convencer alguém a deixar de sentir algo. A ordem que funciona é: <strong>1. validar</strong> (“faz sentido”), <strong>2. reformular</strong> (mostrar o outro lado, com honestidade), <strong>3. tentar algo pequeno</strong> já na próxima aula. Abra cada um:</p></div>
   ${accItem('🥱 “É chato na tela.”', `
     <p><strong>✅ Valide:</strong> <em>“Você tem razão — ficar olhando para uma tela por muito tempo pode ser chato.”</em></p>
     <p><strong>🔁 Reformule:</strong> <em>“Aqui você não fica só olhando — tudo o que está na sua tela é algo que você mesmo cria.”</em></p>
     <p><strong>🎯 Tente:</strong> na próxima aula, coloque o projeto do próprio aluno na tela nos primeiros cinco minutos.</p>`)}
   ${accItem('🫥 “Sinto falta dos meus amigos / não tem ninguém para conversar.”', `
     <p><strong>✅ Valide:</strong> <em>“Faz sentido — é mais divertido construir coisas com outras pessoas.”</em></p>
     <p><strong>🔁 Reformule:</strong> <em>“Na nossa aula você tem pessoas que gostam das mesmas coisas que você. Vamos aproveitar isso.”</em></p>
     <p><strong>🎯 Tente:</strong> uma tarefa em dupla de dois minutos ou um mostre e conte: <em>“Mostre ao seu colega a sua melhor parte.”</em></p>`)}
   ${accItem('📱 “Não consigo me concentrar em casa.”', `
     <p><strong>✅ Valide:</strong> <em>“Em casa há muita coisa tentadora — é normal.”</em></p>
     <p><strong>🔁 Reformule:</strong> <em>“Vamos trabalhar em rodadas curtas, então você só precisa se concentrar um pouquinho de cada vez.”</em></p>
     <p><strong>🎯 Tente:</strong> mude a atividade a cada 10 minutos, mais ou menos, e avise com antecedência qual é a próxima rodada.</p>`)}
   ${accItem('🙈 “Não gosto de falar com a câmera ligada.”', `
     <p><strong>✅ Valide:</strong> <em>“Tudo bem, é totalmente normal — muita gente se sente assim.”</em></p>
     <p><strong>🔁 Reformule:</strong> <em>“Você pode participar pelo chat ou compartilhando a tela primeiro. A câmera pode vir depois, quando você quiser.”</em></p>
     <p><strong>🎯 Tente:</strong> uma pergunta fácil respondida no chat e, depois, uma mensagem privada de “ótima ideia”.</p>`)}
   ${doavoid(
     ['Valide primeiro: <em>“Faz sentido.”</em>','Seja honesto — reformule, não venda','Prometa apenas o que você pode cumprir: <em>“Na próxima aula vamos começar construindo.”</em>','Mude uma coisinha na próxima aula, para que ele veja que você ouviu'],
     ['Argumentar que <em>“o online é tão bom quanto o presencial”</em>','Minimizar: <em>“todo mundo estuda online hoje em dia”</em>','Prometer mudança de grupo ou de formato','Perguntar na frente do grupo inteiro']
   )}
  `},
  {t:'📝 Relate no BO — no mesmo dia', html:`
   <div class="card"><p>Um aluno que repete que não gosta das aulas online, ou que fica calado e desconectado, é um risco de reembolso. <strong>Relate no mesmo dia</strong> — a equipe só consegue avaliar opções (outro grupo ou formato que combine com ele, se houver, uma conversa motivacional, outro curso) enquanto a família ainda está decidindo.</p></div>
   <div class="card" style="background:var(--surface2)"><h4>📨 Como é um relato útil — copie e complete</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Aluno:</strong> [nome] · <strong>Grupo / formato:</strong> [ex.: grupo de 6, terças às 18h] · <strong>Aula:</strong> [data]<br>
   <strong>O que ele disse:</strong> [as palavras dele — ex.: “online é chato, não tem ninguém para conversar”]<br>
   <strong>O que eu vi:</strong> [câmera, microfone, chat, atenção — e se mudou em relação a antes]<br>
   <strong>O que acho que incomoda:</strong> ☐ cansado / distraído &nbsp; ☐ sozinho &nbsp; ☐ desconfortável diante da câmera &nbsp; ☐ frustrado com as ferramentas<br>
   <strong>O que já tentei:</strong> [ex.: rodadas curtas, tarefa em dupla, participação primeiro pelo chat]<br>
   <strong>O que poderia ajudar — minha recomendação, a decisão é de vocês:</strong> [ex.: um grupo menor, uma conversa motivacional, outro curso]</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Relatar um caso</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Relatar um caso" loading="lazy"></iframe></div></div>
   ${co('co-idea','💬',`<p><strong>Com a família:</strong> fale sobre o aprendizado, nunca sobre o acordo. <em>“Olá, [nome do responsável], percebi que [aluno] às vezes tem dificuldade para manter a energia nas aulas online. Comecei a fazer rodadas curtas de construção e a deixá-lo escolher, e compartilhei isso com a minha equipe para que possamos apoiá-lo da melhor forma.”</em> Sem promessas sobre grupos ou formatos.</p>`)}
  `}
 ],
 ix:{
  title:'O que incomoda — e o que fazer primeiro',
  instr:'Classifique as falas e escolha a melhor atitude. 70% para liberar o próximo módulo.',
  items:[
   {type:'sort', prompt:'O que está incomodando este aluno?', card:`“Não tem ninguém para conversar.”`, zones:[{label:'🥱 Cansado e distraído', fb:'Não foi dessa vez — o aluno está falando de estar sozinho, não de cansaço.'},{label:'🫥 Sozinho, sem conexão', fb:'Correto — é um problema de conexão. Traga os colegas para dentro com duplas, mostre e conte e reações.'},{label:'🙈 Desconfortável diante da câmera', fb:'Não foi dessa vez — aqui se trata de faltar gente para compartilhar, não de ser visto.'},{label:'🔌 Frustrado com as ferramentas', fb:'Não foi dessa vez — nada aqui tem a ver com as ferramentas.'}], correctZone:1},
   {type:'sort', prompt:'O que está incomodando esta aluna?', card:`Ela está com a câmera desligada, nunca fala e só digita no chat.`, zones:[{label:'🥱 Cansada e distraída', fb:'Não foi dessa vez — digitar no chat mostra que ela está engajada, só não em voz alta.'},{label:'🫥 Sozinha, sem conexão', fb:'Não foi dessa vez — ela está participando pelo chat.'},{label:'🙈 Desconfortável diante da câmera', fb:'Correto — um problema de segurança. Comece com formas de participar sem pressão: primeiro o chat, depois o compartilhamento de tela e, por fim, a câmera quando ela estiver pronta.'},{label:'🔌 Frustrada com as ferramentas', fb:'Não foi dessa vez — nada indica um problema técnico.'}], correctZone:2},
   {type:'choice', prompt:`Um aluno diz: “As aulas online são chatas.” Qual é a melhor primeira atitude?`, opts:[`Explicar que as aulas online são tão boas quanto as presenciais`,`Alongar suas explicações para que a aula fique mais interessante`,`Perguntar o que exatamente é chato — a duração, as tarefas, a tela, estar sozinho?`], correct:2, fb:`Antes de qualquer técnica, descubra qual parte não funciona. “Chato” pode significar cansado, solitário, tímido ou frustrado — e cada um tem uma solução diferente.`},
   {type:'sort', prompt:'Tesouro ou lixo? Esta é uma boa resposta?', card:`“Faz sentido — telas podem parecer passivas. Aqui, tudo o que está na sua tela é algo que você mesmo cria.”`, zones:[{label:'💎 Tesouro — valida e reformula', fb:'Correto — valida o sentimento primeiro e depois oferece uma reformulação honesta.'},{label:'🗑️ Lixo — minimiza', fb:'Não foi dessa vez — esta resposta valida primeiro e depois reformula. Essa é a ordem certa.'}], correctZone:0},
   {type:'choice', prompt:`Um aluno de 12 anos parece desconectado. Qual jeito de perguntar permite que ele responda com sinceridade?`, opts:[`Perguntar ao grupo todo em voz alta: “Quem acha as aulas online chatas?”`,`Pedir que o responsável converse com ele`,`Uma mensagem privada, ou uma enquete anônima: “Eu participaria mais se…”`], correct:2, fb:`Os alunos mais velhos raramente dizem isso na frente dos colegas. Uma mensagem privada ou uma enquete anônima tira a pressão social.`},
   {type:'choice', prompt:`Quando você relata no BO que um aluno não gosta do formato online?`, opts:[`No mesmo dia — com o que ele disse, o que você viu e o que você tentou`,`Depois de um mês, se nada melhorar`,`Só se o responsável reclamar`], correct:0, fb:`Opções como outro grupo ou formato só podem ser consideradas enquanto a família ainda está decidindo. Fatos, as palavras do aluno e o que você tentou permitem que a equipe aja rápido.`}
  ]
 }
},
{id:'engage', numLabel:'Módulo 2', emoji:'🎬', color:'var(--coral)',
 title:'Construa uma aula online de que eles gostem',
 desc:'Técnicas que mantêm a atenção e fazem a tela parecer uma sala compartilhada: abrir com força, trabalhar em rodadas curtas, interação, conexão, perguntas diretas e uma vitória no final.',
 obj:'Conduzir uma aula online que mantém a atenção, dá a cada aluno um jeito confortável de participar, conecta os colegas e termina com uma vitória — adaptada à idade do grupo.',
 sections:[
  {t:'🧠 Quatro coisas que toda aula motivadora tem', html:`
   <div class="card"><p>No online, nada segura a atenção por você: não há sala física, nem colegas ao lado, e cada distração está a um clique. A pesquisa sobre motivação oferece uma lista simples — o <strong>modelo ARCS</strong> de John Keller (1987). Antes de cada aula, pergunte-se se ela tem os quatro:</p></div>
   ${iconGrid([
     {ic:'👀', html:`<strong>Atenção.</strong> Uma surpresa, uma pergunta, um desafio curto e uma mudança de formato. <em>“Um bug fugiu do jogo — quem me ajuda a pegá-lo?”</em>`},
     {ic:'🔗', html:`<strong>Relevância.</strong> Conecte a aula ao que importa para eles: seus jogos, suas séries, aquilo que querem criar.`},
     {ic:'💪', html:`<strong>Confiança.</strong> Passos pequenos, um próximo passo claro e apoio quando travarem — para que acreditem que conseguem.`},
     {ic:'🏆', html:`<strong>Satisfação.</strong> Elogios específicos e algo concluído para mostrar no final.`}
   ])}
   ${bigStat('≈ 10 min', `<p>Uma regra prática muito citada na pesquisa sobre aprendizagem (popularizada por John Medina em <em>Brain Rules</em>): a atenção começa a se dispersar depois de cerca de <strong>dez minutos</strong>. Planeje uma mudança de atividade por volta desse momento — e deixe as rodadas ainda mais curtas com os menores.</p>`)}
  `},
  {t:'🎬 A aula, minuto a minuto', html:`
   ${timeline([
     {ic:'🎬', label:'Abra com força — os três primeiros minutos', items:[
       '<strong>Comece com uma surpresa, uma história ou uma pergunta</strong> ligada ao projeto de hoje — a abertura define o tom da aula inteira.',
       '<em>“Hoje um robô perdeu a voz — até o fim da aula você vai devolver a voz a ele. Quem topa?”</em>'
     ]},
     {ic:'⏱️', label:'Trabalhe em rodadas curtas', items:[
       '<strong>Mude a atividade a cada 10 minutos, mais ou menos:</strong> explicar → tentar → compartilhar. Diga qual é a próxima rodada.',
       '<em>“Primeira rodada: cinco minutos para testar. Segunda rodada: mostrar para o seu colega.”</em>'
     ]},
     {ic:'🙋', label:'Interaja — a cada poucos minutos', items:[
       '<strong>Dê a todos um jeito de participar:</strong> chat, reações, uma enquete rápida ou compartilhamento de tela em turnos.',
       '<em>“Digite seu palpite no chat — eu vou ler todos em voz alta!”</em>'
     ]},
     {ic:'👥', label:'Conecte os colegas', items:[
       '<strong>Momentos de dois minutos em dupla</strong> ou tarefas em pequenos grupos, para que a tela pareça uma sala compartilhada.',
       '<em>“Mostre ao seu colega a sua melhor parte — depois me conte do que você gostou na dele.”</em>'
     ]},
     {ic:'🏁', label:'Termine com uma vitória', items:[
       '<strong>Mostre e conte o que eles criaram,</strong> faça um elogio específico e dê uma pista do que vem a seguir.',
       '<em>“Olha o que você construiu hoje — na próxima vez ele ganha uma pontuação.”</em>'
     ]}
   ])}
  `},
  {t:'🛠️ Ferramentas que fazem a tela parecer interativa', html:`
   ${iconGrid([
     {ic:'💬', html:`<strong>O chat como uma segunda voz.</strong> Os alunos tímidos participam sem ficar expostos. <em>“Digite sua ideia — eu vou ler todas.”</em>`},
     {ic:'👍', html:`<strong>Reações e enquetes rápidas.</strong> <em>“Mostre com um emoji: fácil, médio ou difícil?”</em>`},
     {ic:'🖥️', html:`<strong>Compartilhamento de tela em turnos.</strong> <em>“Quem quer mostrar o seu projeto em 30 segundos?”</em> Ofereça, não obrigue.`},
     {ic:'1️⃣', html:`<strong>Uma instrução de cada vez — e confira.</strong> Não empilhe passos. Depois pergunte: <em>“O que você vai fazer primeiro?”</em> Uma lista curta escrita no chat ajuda quando a conexão está lenta.`},
     {ic:'🎲', html:`<strong>Minijogos e desafios rápidos.</strong> Um quiz de 60 segundos ou um “quem encontra primeiro?” renova a atenção.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>Duplas ou pequenos grupos.</strong> As pessoas falam mais em um grupo pequeno e recebem um retorno mais pessoal.`}
   ])}
  `},
  {t:'🎂 Adapte por idade', html:`
   ${dimTabs([
     {ic:'🧒', title:'6 a 8 anos',
      intro:'Rodadas curtas, movimento e surpresa. A energia deles é a aula.',
      tips:[
       {ic:'🤸', html:`<strong>Pausas com movimento.</strong> <em>“Levante e me mostre a sua melhor pose de robô!”</em> — depois, de volta ao teclado.`},
       {ic:'⏲️', html:`<strong>Rodadas mais curtas do que 10 minutos,</strong> com um “agora vamos fazer isto” bem claro a cada mudança.`},
       {ic:'🎁', html:`<strong>Adesivos, pontos, um mascote</strong> — recompensas pequenas e imediatas por participar.`},
       {ic:'🧸', html:`<strong>Mostre e conte.</strong> <em>“Mostre para a gente o seu brinquedo ou desenho favorito, e depois vamos construí-lo.”</em>`}
      ]},
     {ic:'🧑', title:'9 a 11 anos',
      intro:'Missões, cronômetros e equipes fazem a tela parecer um jogo.',
      tips:[
       {ic:'🎯', html:`<strong>Minimissões com cronômetro.</strong> <em>“Você tem 8 minutos para fazer o personagem pular. Preparado?”</em>`},
       {ic:'🏁', html:`<strong>Desafios em equipe.</strong> Duplas competem para achar o bug primeiro — de forma amigável e curta.`},
       {ic:'🧩', html:`<strong>Uma escolha de tema</strong> dentro da mesma tarefa — o objetivo continua, a fantasia é deles.`},
       {ic:'🗳️', html:`<strong>Enquetes rápidas</strong> para decidir qual será a próxima rodada.`}
      ]},
     {ic:'🧑‍🎓', title:'12+ anos',
      intro:'Autonomia, relevância e respeito ao nível de conforto deles.',
      tips:[
       {ic:'🧭', html:`<strong>Dê voz no planejamento.</strong> <em>“Temos 15 minutos para esta parte — você quer começar pelo A ou pelo B?”</em>`},
       {ic:'🌍', html:`<strong>Mostre usos reais</strong> da habilidade, em coisas que eles conhecem.`},
       {ic:'🔒', html:`<strong>Respeite a câmera.</strong> Ofereça participação primeiro pelo chat; nunca obrigue a ligar a câmera.`},
       {ic:'🗳️', html:`<strong>Enquetes anônimas</strong> para coletar opiniões, e revisão entre colegas do trabalho uns dos outros.`}
      ]}
   ],'✅ Essas são as três faixas etárias.')}
  `},
  {t:'🙋 Perguntas diretas — sem pressão', html:`
   <div class="card"><p>Perguntar a um aluno pelo nome funciona — se ele confiar que não será constrangedor. Prepare-o, comece fácil e faça com que pareça justo.</p></div>
   ${doavoid(
     ['Avise ao grupo que você vai perguntar a todos em algum momento — e que <em>“não sei”</em> é uma ótima resposta','Comece com uma pergunta fácil para criar confiança','Use um sorteador aleatório para que pareça justo, não pessoal','Elogie qualquer contribuição: <em>“Obrigado — isso nos ajuda a pensar.”</em>'],
     ['Chamar de surpresa o aluno mais quieto com uma pergunta difícil','Corrigir com dureza na frente do grupo','Perguntar sempre apenas aos mesmos alunos rápidos','Apresentar uma pergunta difícil sem aviso — tente: <em>“Esta é complicada, mas alguém quer tentar?”</em>']
   )}
   ${co('co-star','🌱',`<p><strong>Por que funciona:</strong> os alunos participam quando se sentem seguros. Prepará-los, começar fácil e manter a justiça transforma uma pergunta de um risco em um convite.</p>`)}
  `}
 ],
 ix:{
  title:'Construa a aula de que eles gostam',
  instr:'Escolha a melhor atitude ou classifique cada hábito. 70% para liberar o checklist final.',
  items:[
   {type:'choice', prompt:`No meio da aula, um aluno de 9 anos parece cansado e começa a trocar de aba. Qual é a melhor atitude?`, opts:[`Continuar explicando — ele vai acompanhar depois`,`Mudar a atividade: uma enquete rápida ou uma missão curta com cronômetro, e depois uma nova rodada`,`Mandar que ele preste atenção`], correct:1, fb:`Uma mudança de atividade renova a atenção. Mandar focar não dá a ele um motivo para isso.`},
   {type:'sort', prompt:'Este hábito ajuda ou atrapalha uma aula online?', card:`Mudar a atividade a cada 10 minutos, mais ou menos: explicar, tentar, compartilhar.`, zones:[{label:'💎 Ajuda', fb:'Correto — rodadas curtas são uma das formas mais confiáveis de manter a atenção no online.'},{label:'🗑️ Atrapalha', fb:'Não foi dessa vez — rodadas curtas ajudam; trechos longos com uma única atividade fazem os alunos se perderem.'}], correctZone:0},
   {type:'choice', prompt:`Como você dá instruções em uma aula online?`, opts:[`Todos os passos de uma vez, para que ninguém precise esperar`,`Uma instrução de cada vez, e depois conferir: “O que você vai fazer primeiro?”`,`Dizer uma vez, rapidamente, e seguir em frente`], correct:1, fb:`Instruções empilhadas se perdem no online. Um passo mais uma pergunta de conferência identifica a confusão logo no início.`},
   {type:'choice', prompt:`Um aluno tímido de 13 anos nunca responde em voz alta. O que mais ajuda?`, opts:[`Chamá-lo pelo nome em toda aula até que ele fale`,`Deixar que ele participe primeiro pelo chat e elogiar as contribuições dele`,`Pedir que ele ligue a câmera na frente de todos`], correct:1, fb:`Dê a ele uma entrada confortável — primeiro o chat. A câmera pode vir depois, quando ele quiser.`},
   {type:'sort', prompt:'Este hábito ajuda ou atrapalha uma aula online?', card:`Chamar de surpresa o aluno mais quieto com a pergunta mais difícil.`, zones:[{label:'💎 Ajuda', fb:'Não foi dessa vez — isso coloca o aluno contra a parede e torna a próxima pergunta mais difícil de responder.'},{label:'🗑️ Atrapalha', fb:'Correto — comece fácil, prepare o aluno e faça com que a escolha pareça justa.'}], correctZone:1},
   {type:'choice', prompt:`Qual abertura funciona melhor para uma criança de 7 anos?`, opts:[`“Hoje vamos aprender sobre variáveis.”`,`“Hoje um robô perdeu a voz — até o fim da aula você vai devolver a voz a ele. Quem topa?”`,`“Abra a aula e comece o exercício 1.”`], correct:1, fb:`Uma história com uma missão dá atenção e um motivo para participar. Ir direto ao conteúdo desperdiça os minutos mais atentos.`}
  ]
 }
},
{id:'checklist', numLabel:'Checklist final', emoji:'✅', color:'var(--coral)',
 title:'Checklist final',
 desc:'Sem quiz aqui — apenas o essencial deste minitreinamento, antes de você encerrá-lo.',
 obj:'Revise o checklist abaixo. Este módulo não vale nota — leia-o e depois conclua o minitreinamento.',
 sections:[
  {t:'🛟 Se já existe um pedido de reembolso', html:`
   ${numlist([
     'Deixei um comentário no BO no mesmo dia em que soube do pedido e avisei meu Team Leader',
     'Minha próxima aula com este aluno foi uma tentativa real de reverter — uma participação real, uma vitória visível, atenção específica, sem mencionar o pedido',
     'Nunca confirmei uma aprovação nem comentei qualquer valor — usei a única frase segura e deixei o resto para o Client Service'
   ])}
  `},
  {t:'🌱 Em toda aula', html:`
   ${numlist([
     'Antes de tentar qualquer técnica, descubro o que exatamente incomoda este aluno nas aulas online',
     'Valido o sentimento primeiro (“faz sentido”) e só depois reformulo — nunca argumento que o online é “tão bom quanto o presencial”',
     'Pergunto de um jeito adequado à idade: uma enquete de carinhas para os menores, uma escala de 1 a 5 para 9–11 anos, uma enquete privada ou anônima para 12+',
     'Abro toda aula com força: uma surpresa, uma história ou uma pergunta ligada ao projeto de hoje',
     'Mudo a atividade a cada 10 minutos, mais ou menos (menos tempo com os menores): explicar → tentar → compartilhar',
     'Uso o chat, as reações, as enquetes e o compartilhamento de tela em turnos, para que todos tenham um jeito confortável de participar',
     'Dou uma instrução de cada vez e confiro se foi entendida',
     'Faço perguntas diretas sem pressão: primeiro as fáceis, um jeito justo de escolher e um retorno positivo para qualquer resposta',
     'Conecto os colegas com momentos curtos em dupla ou em pequenos grupos',
     'Relato no BO, no mesmo dia, quando um aluno não gosta do formato online: o que ele disse, o que eu vi, o que eu tentei',
     'Nunca prometo mudança de formato ou de grupo — eu recomendo no BO e digo “vou verificar com a minha equipe”'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Esse é o minitreinamento inteiro.</strong> Quando estiver pronto, continue — depois conclua a DST no LMS para encerrar a atividade.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
