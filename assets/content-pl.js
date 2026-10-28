/* Mini_Training_6_Online_Format - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='pl';
const CONTENT = {
  flag:'🇵🇱', dir:'ltr',
  ui:{
    pageTitle:"Miniszkolenie · Format online — szkolenie nauczycieli Kodland",
    logoSub:'Dział Rozwoju Nauczycieli',
    heroEyebrow:"🎯 Miniszkolenie",
    heroTitle:"Lekcje <span class=\"h-pill\">online</span>, które naprawdę działają",
    heroIntro:"Otrzymujesz to szkolenie, ponieważ masz uczniów, którzy poprosili o zwrot pieniędzy, bo nie odpowiada im format online. Pokażemy ci, co możesz zrobić jako nauczyciel i jak radzić sobie w takich sytuacjach.",
    heroWork:"Przejdź przez 4 krótkie moduły. Aby odblokować kolejny, w sprawdzianie każdego modułu potrzebujesz co najmniej 70%. Całość zajmie około 20–25 minut.",
    startBtn:"🚀 Rozpocznij szkolenie",
    pathLabel:'Twoja ścieżka nauki',
    devTitle:'Dev: odblokuj wszystkie moduły do przeglądu',
    backToPath:'Powrót do ścieżki',
    modulesPassed:'Zaliczone moduły: {done} / {total}',
    moduleN:'Moduł {n}',
    of:'z',
    locked:'🔒 Zablokowany',
    passedBadge:'✅ Zaliczony · {pct}%',
    reviewedBadge:'✅ Przejrzany',
    startBadge:'▶ Rozpocznij',
    reviewBadge:'▶ Przejrzyj',
    objective:'Cel',
    startCheck:'▶ Rozpocznij sprawdzian modułu',
    finishBtn:'▶ Ukończ miniszkolenie',
    doneBack:'✓ Gotowe — powrót do ścieżki',
    ixBadge:'📋 Sprawdzian modułu — 70%, aby odblokować kolejny moduł',
    ixItemBadge:'📋 Sprawdzian modułu — pytanie {i} z {n}',
    scoreSoFar:'Dotychczasowy wynik: {c} / {t}',
    continue:'Dalej →',
    sortWrong:'Nie do końca — poprawna odpowiedź to „{label}”.',
    resPassed:'Moduł zaliczony!',
    resFailed:'Jeszcze nie tym razem',
    resUnlocked:"Udało ci się odblokować kolejny moduł.",
    resDone:"Udało ci się ukończyć to miniszkolenie.",
    resNeed:'Aby odblokować kolejny moduł, potrzebujesz 70%. Przejrzyj powyższą część i spróbuj ponownie.',
    resContinue:'Przejdź do ścieżki nauki',
    resFinish:'Dalej',
    resBack:'Powrót do ścieżki',
    resReview:'Przejrzyj ten moduł',
    doneEyebrow:'Miniszkolenie ukończone',
    doneTitle:'🎉 Gratulacje!',
    doneP1:"🎉 <strong>Gratulacje! Udało ci się ukończyć to miniszkolenie.</strong>",
    doneP2:"To już wszystko! Wróć na stronę szkolenia w LMS, z której trafiasz do tego miniszkolenia, aby zamknąć zadanie.",
    doneP3:"👉 <strong>Jeśli bezpośrednio pod szkoleniem w LMS widnieje sprawdzian lub test, rozwiąż go i uzyskaj wynik zaliczający</strong> — w przeciwnym razie zadanie może pozostać nieukończone.",
    doneP4:'Powodzenia! ❤️',
    doneP5:'',
    devUnlockAlert:'Tryb deweloperski: wszystkie moduły zostały odblokowane do przeglądu.',
    devOn:'🔓 Tryb deweloperski WŁ. — wszystkie moduły odblokowane',
    devOff:'🔒 Tryb deweloperski WYŁ. — postęp wyczyszczony',
    devBadge:'🔓 TRYB DEWELOPERSKI',
    doLabel:'✅ Rób tak',
    avoidLabel:'🚫 Unikaj',
    noticeLabel:'Zwróć uwagę:',
    cvSee:'Co widzisz:',
    cvDo:'Co robisz:',
    dtExample:'Przykład z prawdziwych zajęć',
    dtNext:'Następnie:',
    dtDone:"✅ To już wszystkie cztery obszary. Teraz sklasyfikuj to, co widzisz.",
    tlVideoTitle:'{label} — przykład z prawdziwych zajęć',
    tlVideoMeta:'Zobacz, jak ten etap wygląda na prawdziwej lekcji'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Wprowadzenie', emoji:'🧩', color:'var(--coral)',
 title:'Dlaczego tu jesteś',
 desc:'Dlaczego „nie lubię lekcji online” wciąż można odwrócić — i jakie zasady obowiązują, gdy wniosek o zwrot już wpłynął.',
 obj:'Zrozum, co naprawdę oznacza „nie odpowiada mi format online”, dlaczego zgłoszenie tego samego dnia ma znaczenie, i co dokładnie robić (a czego nie robić), gdy wniosek o zwrot już istnieje.',
 sections:[
  {t:'💻 Co naprawdę oznacza „nie lubię online”', html:`
   <div class="card"><p>Prawie nikt nie mówi: „po całym dniu przed ekranami moja uwaga odpływa”. Mówią: <em>„online jest nudno”</em>, <em>„nie podoba mi się”</em> — a rodzina prosi o zwrot pieniędzy. Za tym jednym zdaniem zwykle kryją się bardzo różne rzeczy:</p></div>
   ${iconGrid([
     {ic:'🥱', html:`<strong>Zmęczenie ekranem.</strong> Lekcja odbywa się po dniu w szkole spędzonym przed ekranami i dziecko nie ma już siły.`},
     {ic:'🫥', html:`<strong>Poczucie osamotnienia.</strong> Nie ma kolegów, z którymi można dzielić pracę, nie ma z kim się pośmiać.`},
     {ic:'📱', html:`<strong>Rozpraszacze w domu.</strong> Telefon, gra, zwierzak albo rodzeństwo są na wyciągnięcie ręki.`},
     {ic:'🙈', html:`<strong>Nieśmiałość przed kamerą.</strong> Uczniowie nie chcą być widoczni ani mówić przy wszystkich.`},
     {ic:'🔌', html:`<strong>Frustracja narzędziami.</strong> Lagi, niedziałający dźwięk, niereagujące przyciski.`},
     {ic:'👨‍👩‍👧', html:`<strong>Rodzina oczekiwała zajęć stacjonarnych.</strong> Dla niej online jest „mniej prawdziwe” — niezależnie od tego, co myśli dziecko.`}
   ])}
   ${co('co-idea','💡',`<p><strong>Nie możesz zmienić formatu — ale możesz zmienić to, jak lekcja jest w nim odbierana.</strong> Większość tego, co uczniom nie podoba się w lekcjach online, wynika ze sposobu prowadzenia lekcji, a ta część należy do ciebie.</p>`)}
  `},
  {t:'⏱️ Kluczowe są szybkość — i twoje zgłoszenie', html:`
   <div class="card"><p>Nie decydujesz o tym, czy uczeń może przejść do innej grupy lub formatu. Ale to twoje zgłoszenie rozpoczyna tę rozmowę i działa tylko wtedy, gdy <strong>wcześnie</strong> trafi do właściwych osób.</p></div>
   ${stepFlow([
     {ic:'👀', label:'Zauważasz niechęć na lekcji'},
     {ic:'📝', label:'Tego samego dnia zgłaszasz to w BO'},
     {ic:'👩‍💼', label:'Twój lider zespołu i Dział Obsługi Klienta analizują możliwości'},
     {ic:'🔄', label:'Rozmowa motywacyjna, inna grupa lub format, który odpowiada uczniowi (jeśli jest dostępny), albo inny kurs'}
   ])}
   ${co('co-danger','🚨',`<p><strong>Spóźnione zgłoszenie zamyka drogi.</strong> Gdy rodzina już podejmie decyzję, większość możliwości znika. To samo zgłoszenie napisane w pierwszych tygodniach może zatrzymać dziecko w Kodland.</p>`)}
   ${co('co-ok','✅',`<p><strong>Gdy zespół analizuje możliwości, lekcja wciąż należy do ciebie.</strong> Moduły 1 i 2 pokazują, jak dowiedzieć się, co przeszkadza uczniowi, i jak zbudować lekcję online, która mu się spodoba.</p>`)}
  `},
  {t:'🛟 Jeśli wniosek o zwrot już wpłynął', html:`
   <div class="card"><p>Wszystko powyżej dotyczy wczesnego wychwytywania problemu. Możliwe jednak, że otwierasz to szkolenie, bo rodzina <strong>już</strong> poprosiła o zwrot pieniędzy. Poniższe zasady obowiązują bez względu na powód — przeczytaj je najpierw, a potem wykorzystaj resztę szkolenia, aby zrozumieć, co do tego doprowadziło i co wciąż możesz zrobić na lekcji.</p></div>
   ${co('co-idea','💡',`<p><strong>Sam wniosek tworzy Dział Obsługi Klienta, nie ty</strong> — na tę część nie masz wpływu. Do ciebie wciąż należy wszystko, co od teraz dzieje się na lekcji, a to naprawdę sporo.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Nie mów nic o samym wniosku</strong> — ani dziecku, ani rodzinie — chyba że Dział Obsługi Klienta wyraźnie poprosi cię o przekazanie czegoś konkretnego. Twoim zadaniem jest teraz lekcja, a nie ta rozmowa.</p>`)}
  `},
  {t:'🎯 Następna lekcja to twoja szansa na ratunek', html:`
   <div class="card"><p>Możesz nie mieć okazji, by zmienić cokolwiek innego. Potraktuj najbliższą lekcję z tym dzieckiem jako moment, który o wszystkim zdecyduje.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Daj dziecku prawdziwą okazję do działania.</strong> Nie pytanie dla zasady — tylko autentyczny moment, w którym zostaje zauważone i odnosi sukces.`},
     {ic:'🏆', html:`<strong>Zaplanuj wczesny, widoczny sukces.</strong> Dziecko powinno wyjść z lekcji z poczuciem, że daje radę, a nie że zostaje w tyle.`},
     {ic:'👀', html:`<strong>Konkretna uwaga</strong> — niech dziecko poczuje, że zauważasz coś konkretnego, a nie chwalisz ogólnikowo.`},
     {ic:'🤐', html:`<strong>Ani słowa o wniosku</strong> — nawet jeśli dziecko samo o nim wspomni, ciepło zmień temat i ucz dalej.`}
   ])}
  `},
  {t:'📮 Zgłaszaj szybko i znaj jedno bezpieczne zdanie', html:`
   <div class="card"><p>O tym, że wniosek istnieje, możesz dowiedzieć się z komentarzy Działu Obsługi Klienta w profilu dziecka w BO — nie ma automatycznego systemu, który by cię o tym powiadomił. Gdy już wiesz, to, co widzisz na swoich lekcjach, jest informacją, której Dział Obsługi Klienta nie zdobędzie w żaden inny sposób.</p></div>
   ${numlist([
     'Tego samego dnia zostaw komentarz w BO z dokładnym opisem tego, co widzisz — daty i konkrety, a nie wrażenia',
     'Jeśli je znasz, zacytuj dosłownie słowa rodziny',
     'Tego samego dnia poinformuj swojego lidera zespołu',
     'Nigdy nie potwierdzaj, że zwrot został zatwierdzony, i nie rozmawiaj o żadnych kwotach'
   ])}
   ${co('co-ok','✅',`<p><strong>Zdanie, które zawsze jest bezpieczne:</strong> <em>„Dział Obsługi Klienta pomoże w tej sprawie.”</em> Na tym kończy się twoja część rozmowy — dalej przejmuje ją Dział Obsługi Klienta.</p>`)}
  `},
  {t:'🌱 Nie odpuszczaj później', html:`
   <div class="card"><p>Niezależnie od tego, czy wniosek zostanie wycofany, dziecko zostanie w twojej grupie, czy przejdzie do innego nauczyciela lub formatu — przez kilka kolejnych lekcji poświęcaj mu szczególną uwagę. Ratunek, który trzyma się przez jedną lekcję, a potem wszystko po cichu wraca do normy, często w ogóle się nie udaje.</p></div>
  `}
 ]
},
{id:'diagnose', numLabel:'Moduł 1', emoji:'🔍', color:'var(--coral)',
 title:'Dowiedz się, co przeszkadza — a potem zmień perspektywę',
 desc:'Jak rozpoznać, co dokładnie nie pasuje uczniowi w lekcjach online, jakie pytania pomagają to odkryć w zależności od wieku, jak zmienić sposób postrzegania i jak zgłosić sprawę w BO.',
 obj:'Ustal, czego uczeń naprawdę nie lubi w formacie online, zapytaj o to w sposób dopasowany do wieku, uznaj jego odczucia i zmień perspektywę, a potem zgłoś sprawę w BO tego samego dnia.',
 sections:[
  {t:'🔍 Najpierw zapytaj: co dokładnie nie pasuje?', html:`
   <div class="card"><p>Zanim zaczniesz stosować techniki angażowania, dowiedz się, <strong>która część formatu online nie działa</strong>. Technika, która pomaga na samotność, nic nie zmieni przy zmęczeniu ekranem. Dzieci rzadko mówią o tym wprost, więc naucz się rozpoznawać, jak każda z tych sytuacji wygląda i brzmi:</p></div>
   ${patternCards([
     {ic:'🥱', title:'Zmęczenie i rozproszenie', desc:'„Jestem zmęczony.” „To za długo.” Wzrok błądzi, przełącza karty, ziewa.', note:'Problem z energią i uwagą. <strong>Krótsze rundy, ruch, zmiana aktywności.</strong>'},
     {ic:'🫥', title:'Samotność, brak więzi', desc:'„Nie ma z kim pogadać.” Wyłączona kamera, milczenie, brak reakcji.', note:'Problem z więzią. <strong>Włącz kolegów: praca w parach, pokazywanie swoich prac, reakcje.</strong>'},
     {ic:'🙈', title:'Dyskomfort przed kamerą', desc:'Nie chce mówić ani pokazywać twarzy; odpowiada na czacie albo wcale.', note:'Problem z poczuciem bezpieczeństwa. <strong>Sposoby udziału bez presji.</strong>'},
     {ic:'🔌', title:'Frustracja narzędziami', desc:'„Ciągle laguje.” „Nic nie słyszałem.” Poddaje się po technicznej wpadce.', note:'Problem z narzędziami. <strong>Napraw szybko albo postępuj według procedury dla problemów technicznych (10 minut, potem komunikuj, dokumentuj, eskaluj).</strong>'}
   ],2)}
  `},
  {t:'❓ Pytania, które to odkrywają — według wieku', html:`
   <div class="card"><p>Zadawaj <strong>otwarte pytania, bez presji</strong>, i daj uczniowi możliwość odpowiedzi, która nie stawia go pod ścianą. To, co działa, zależy od wieku:</p></div>
   ${dimTabs([
     {ic:'🧒', title:'Wiek 6–8',
      intro:'Małe dzieci najlepiej odpowiadają minami, obrazkami i wyborem — a nie wyjaśnieniami.',
      tips:[
       {ic:'😀', html:`<strong>Sonda z minami.</strong> <em>„Pokaż mi ręką albo emoji, jaka była dzisiejsza lekcja — wesoła, taka sobie czy senna?”</em>`},
       {ic:'🌟', html:`<strong>Najlepsze i nie najlepsze.</strong> <em>„Co było dziś najfajniejsze? A co najnudniejsze?”</em>`},
       {ic:'🎁', html:`<strong>Czarodziejska różdżka.</strong> <em>„Masz czarodziejską różdżkę i możesz zmienić jedną rzecz w naszych zajęciach online. Co zmieniasz?”</em>`},
       {ic:'👂', html:`<strong>Słuchaj, nie naprawiaj.</strong> Powtórz, co dziecko powiedziało, i podziękuj — a na następnej lekcji zmień jedną drobną rzecz, żeby widziało, że słuchasz.`}
      ]},
     {ic:'🧑', title:'Wiek 9–11',
      intro:'Potrafią ocenić i wyjaśnić — o ile czują się bezpiecznie i trwa to krótko.',
      tips:[
       {ic:'🔢', html:`<strong>Skala 1–5.</strong> <em>„W skali od 1 do 5 — jak bardzo lubisz nasze lekcje online? Co sprawiłoby, że byłoby 5?”</em>`},
       {ic:'🌟', html:`<strong>Najfajniejszy moment.</strong> <em>„Co było najfajniejsze na dzisiejszych zajęciach?”</em> Jeśli uczeń nie potrafi niczego wskazać, to sygnał.`},
       {ic:'🔧', html:`<strong>Jedna zmiana.</strong> <em>„Gdyby można było zmienić jedną rzecz w lekcjach, co by to było?”</em>`},
       {ic:'🗳️', html:`<strong>Szybka sonda na czacie.</strong> <em>„Napisz A, jeśli chcesz więcej czasu na budowanie, albo B, jeśli więcej czasu z kimś z grupy.”</em>`}
      ]},
     {ic:'🧑‍🎓', title:'Wiek 12+',
      intro:`Starsi uczniowie nie chcą mówić o tym przy wszystkich. Daj im prywatny lub anonimowy sposób.`,
      tips:[
       {ic:'🔒', html:`<strong>Prywatna wiadomość.</strong> <em>„Zauważam, że ostatnio częściej milczysz. Czy coś w lekcjach online ci przeszkadza? Zostanie to między nami.”</em>`},
       {ic:'🗳️', html:`<strong>Anonimowa sonda.</strong> Poproś całą grupę o dokończenie zdania <em>„Łatwiej byłoby mi się włączyć, gdyby…”</em> — to usuwa strach przed oceną.`},
       {ic:'🤝', html:`<strong>Pytaj o pomysły,</strong> a nie o skargi: <em>„Co sprawiłoby, że nasze lekcje byłyby dla ciebie lepsze?”</em>`},
       {ic:'🙏', html:`<strong>Szanuj odpowiedź.</strong> Nigdy z nią nie dyskutuj — podziękuj i zmień jedną rzecz w odpowiedzi na nią.`}
      ]}
   ],'✅ To już wszystkie trzy grupy wiekowe. Dalej: jak zmienić sposób postrzegania.')}
   ${co('co-idea','🧠',`<p><strong>Dlaczego to działa.</strong> Otwarte pytania i anonimowe formy usuwają presję odpowiadania przy kolegach. Dokończenie zdania „Łatwiej byłoby mi mówić, gdyby…” jest często łatwiejsze niż informacja zwrotna twarzą w twarz.</p>`)}
  `},
  {t:'🔁 Zmień sposób postrzegania — najpierw uznaj, potem przeformułuj', html:`
   <div class="card"><p>Nikomu nie wyperswadujesz uczucia. Kolejność, która działa, to: <strong>1. uznaj</strong> („to zrozumiałe”), <strong>2. przeformułuj</strong> (uczciwie pokaż drugą stronę), <strong>3. spróbuj czegoś małego</strong> już na najbliższej lekcji. Otwórz każdy przykład:</p></div>
   ${accItem('🥱 „Na ekranie jest nudno.”', `
     <p><strong>✅ Uznaj:</strong> <em>„Masz rację — długie patrzenie w ekran może być nudne.”</em></p>
     <p><strong>🔁 Przeformułuj:</strong> <em>„Tylko że tutaj nie tylko patrzysz — wszystko na twoim ekranie to coś, co tworzysz ty.”</em></p>
     <p><strong>🎯 Spróbuj:</strong> na następnej lekcji pokaż projekt ucznia na ekranie w ciągu pierwszych pięciu minut.</p>`)}
   ${accItem('🫥 „Brakuje mi przyjaciół / nie ma z kim pogadać.”', `
     <p><strong>✅ Uznaj:</strong> <em>„To zrozumiałe — fajniej jest tworzyć rzeczy z innymi.”</em></p>
     <p><strong>🔁 Przeformułuj:</strong> <em>„Na naszych zajęciach są osoby, które kochają to samo co ty. Wykorzystajmy to.”</em></p>
     <p><strong>🎯 Spróbuj:</strong> dwuminutowe zadanie w parach albo pokaz prac: <em>„Pokaż partnerowi swój najlepszy fragment.”</em></p>`)}
   ${accItem('📱 „W domu nie mogę się skupić.”', `
     <p><strong>✅ Uznaj:</strong> <em>„W domu jest mnóstwo kuszących rzeczy — to normalne.”</em></p>
     <p><strong>🔁 Przeformułuj:</strong> <em>„Będziemy pracować w krótkich rundach, więc wystarczy, że skupisz się na chwilę.”</em></p>
     <p><strong>🎯 Spróbuj:</strong> zmieniaj aktywność mniej więcej co 10 minut i z góry mów, co będzie w kolejnej rundzie.</p>`)}
   ${accItem('🙈 „Nie lubię mówić przed kamerą.”', `
     <p><strong>✅ Uznaj:</strong> <em>„To całkowicie w porządku — wiele osób tak ma.”</em></p>
     <p><strong>🔁 Przeformułuj:</strong> <em>„Możesz najpierw włączać się przez czat albo udostępniając ekran. Kamera może przyjść później, kiedy zechcesz.”</em></p>
     <p><strong>🎯 Spróbuj:</strong> łatwe pytanie z odpowiedzią na czacie, a potem prywatna wiadomość „świetny pomysł”.</p>`)}
   ${doavoid(
     ['Najpierw uznaj: <em>„To zrozumiałe.”</em>','Mów szczerze — przeformułuj, nie sprzedawaj','Obiecuj tylko to, czego możesz dotrzymać: <em>„Na następnej lekcji zaczynamy od budowania.”</em>','Na następnej lekcji zmień jedną drobną rzecz, żeby uczeń widział, że słuchasz'],
     ['Przekonywanie, że <em>„online jest równie dobre”</em>','Bagatelizowanie: <em>„teraz wszyscy uczą się online”</em>','Obiecywanie zmiany grupy lub formatu','Pytanie przy całej grupie']
   )}
  `},
  {t:'📝 Zgłoś to w BO — tego samego dnia', html:`
   <div class="card"><p>Uczeń, który ciągle mówi, że nie lubi lekcji online, albo pozostaje cichy i wycofany, to ryzyko zwrotu. <strong>Zgłoś to tego samego dnia</strong> — zespół może analizować możliwości (inna grupa lub format, który odpowiada uczniowi, jeśli jest dostępny, rozmowa motywacyjna, inny kurs) tylko wtedy, gdy rodzina wciąż podejmuje decyzję.</p></div>
   <div class="card" style="background:var(--surface2)"><h4>📨 Jak wygląda przydatne zgłoszenie — skopiuj i uzupełnij</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Uczeń:</strong> [imię] · <strong>Grupa / format:</strong> [np. grupa 6 osób, wtorki 18:00] · <strong>Lekcja:</strong> [data]<br>
   <strong>Co powiedział uczeń:</strong> [jego własne słowa — np. „online jest nudno, nie ma z kim pogadać”]<br>
   <strong>Obserwacje:</strong> [kamera, mikrofon, czat, uwaga — i czy coś się zmieniło w porównaniu z wcześniejszymi lekcjami]<br>
   <strong>Moim zdaniem przeszkadza mu:</strong> ☐ zmęczenie / rozproszenie &nbsp; ☐ samotność &nbsp; ☐ dyskomfort przed kamerą &nbsp; ☐ frustracja narzędziami<br>
   <strong>Co już zostało wypróbowane:</strong> [np. krótkie rundy, zadanie w parach, udział najpierw przez czat]<br>
   <strong>Co mogłoby pomóc — moja rekomendacja, wasza decyzja:</strong> [np. mniejsza grupa, rozmowa motywacyjna, inny kurs]</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Zgłoś sprawę</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Zgłoś sprawę" loading="lazy"></iframe></div></div>
   ${co('co-idea','💬',`<p><strong>Z rodziną:</strong> rozmawiaj o nauce, nigdy o organizacji zajęć. <em>„Dzień dobry, [imię rodzica], zauważam, że [imię ucznia] czasem ma trudność z utrzymaniem energii na lekcjach online. Wprowadzam krótkie rundy budowania i daję możliwość wyboru, a sprawę przekazuję też mojemu zespołowi, żebyśmy mogli jak najlepiej wspierać [imię ucznia].”</em> Żadnych obietnic dotyczących grup czy formatów.</p>`)}
  `}
 ],
 ix:{
  title:'Co przeszkadza — i co zrobić najpierw',
  instr:'Przyporządkuj wypowiedzi i wybierz najlepszy ruch. 70%, aby odblokować kolejny moduł.',
  items:[
   {type:'sort', prompt:'Co przeszkadza temu uczniowi?', card:`„Nie ma z kim pogadać.”`, zones:[{label:'🥱 Zmęczenie i rozproszenie', fb:'Nie do końca — uczeń opisuje samotność, a nie zmęczenie.'},{label:'🫥 Samotność, brak więzi', fb:'Zgadza się — to problem z więzią. Włącz kolegów: praca w parach, pokazywanie prac i reakcje.'},{label:'🙈 Dyskomfort przed kamerą', fb:'Nie do końca — chodzi o brak ludzi, z którymi można coś dzielić, a nie o bycie widocznym.'},{label:'🔌 Frustracja narzędziami', fb:'Nie do końca — nic tu nie dotyczy narzędzi.'}], correctZone:1},
   {type:'sort', prompt:'Co przeszkadza tej uczennicy?', card:`Ma wyłączoną kamerę, nigdy się nie odzywa i pisze tylko na czacie.`, zones:[{label:'🥱 Zmęczenie i rozproszenie', fb:'Nie do końca — pisanie na czacie pokazuje, że jest zaangażowana, tylko nie na głos.'},{label:'🫥 Samotność, brak więzi', fb:'Nie do końca — bierze udział przez czat.'},{label:'🙈 Dyskomfort przed kamerą', fb:'Zgadza się — to problem z poczuciem bezpieczeństwa. Zacznij od sposobów udziału bez presji: najpierw czat, potem udostępnianie ekranu, a kamera, gdy uczennica będzie na to gotowa.'},{label:'🔌 Frustracja narzędziami', fb:'Nie do końca — nic nie wskazuje na problem techniczny.'}], correctZone:2},
   {type:'choice', prompt:`Uczeń mówi: „Lekcje online są nudne”. Jaki jest najlepszy pierwszy ruch?`, opts:[`Wyjaśnić, że lekcje online są równie dobre jak stacjonarne`,`Wydłużyć wyjaśnienia, żeby lekcja była ciekawsza`,`Zapytać, co dokładnie jest nudne — długość, zadania, ekran, samotność?`], correct:2, fb:`Przed jakąkolwiek techniką dowiedz się, która część nie działa. „Nudne” może oznaczać zmęczenie, samotność, nieśmiałość lub frustrację — a każda z tych sytuacji ma inne rozwiązanie.`},
   {type:'sort', prompt:'Skarb czy śmieć? Czy to dobra odpowiedź?', card:`„To zrozumiałe — ekran może wydawać się bierny. Tutaj wszystko na twoim ekranie to coś, co tworzysz.”`, zones:[{label:'💎 Skarb — uznaje i przeformułowuje', fb:'Zgadza się — najpierw uznaje uczucie, a potem uczciwie zmienia perspektywę.'},{label:'🗑️ Śmieć — bagatelizuje', fb:'Nie do końca — ta odpowiedź najpierw uznaje uczucie, a potem przeformułowuje. To właściwa kolejność.'}], correctZone:0},
   {type:'choice', prompt:`Dwunastolatek wydaje się wycofany. Jaki sposób zapytania pozwoli mu odpowiedzieć szczerze?`, opts:[`Zapytać na głos całą grupę: „Komu nudzą się lekcje online?”`,`Poprosić rodzica, żeby z nim porozmawiał`,`Wysłać prywatną wiadomość albo zrobić anonimową sondę: „Łatwiej byłoby mi się włączyć, gdyby…”`], correct:2, fb:`Starsi uczniowie rzadko mówią o tym przy rówieśnikach. Prywatna wiadomość lub anonimowa sonda usuwają presję społeczną.`},
   {type:'choice', prompt:`Kiedy zgłaszasz w BO niechęć ucznia do formatu online?`, opts:[`Tego samego dnia — z tym, co powiedział, co widzisz i czego już próbujesz`,`Po miesiącu, jeśli nic się nie poprawi`,`Tylko jeśli rodzic się poskarży`], correct:0, fb:`Możliwości takie jak inna grupa czy format można rozważyć tylko wtedy, gdy rodzina wciąż podejmuje decyzję. Fakty, słowa ucznia i to, czego już próbujesz, pozwalają zespołowi działać szybko.`}
  ]
 }
},
{id:'engage', numLabel:'Moduł 2', emoji:'🎬', color:'var(--coral)',
 title:'Zbuduj lekcję online, która się podoba',
 desc:'Techniki, które utrzymują uwagę i sprawiają, że ekran przypomina wspólną salę: mocny początek, praca w krótkich rundach, interakcja, więź, bezpośrednie pytania i sukces na koniec.',
 obj:'Prowadź lekcję online, która utrzymuje uwagę, daje każdemu uczniowi komfortowy sposób udziału, łączy uczniów ze sobą i kończy się sukcesem — w sposób dopasowany do wieku grupy.',
 sections:[
  {t:'🧠 Cztery rzeczy, które ma każda motywująca lekcja', html:`
   <div class="card"><p>Online nic nie utrzyma uwagi za ciebie: nie ma fizycznej sali, nie ma kolegów obok, a każdy rozpraszacz jest na jedno kliknięcie. Badania nad motywacją dają prostą listę kontrolną — <strong>model ARCS</strong> Johna Kellera (1987). Przed każdą lekcją zadaj sobie pytanie, czy ma ona wszystkie cztery elementy:</p></div>
   ${iconGrid([
     {ic:'👀', html:`<strong>Uwaga (Attention).</strong> Niespodzianka, pytanie, krótkie wyzwanie i zmiana formy. <em>„Z gry uciekł bug — kto pomoże mi go złapać?”</em>`},
     {ic:'🔗', html:`<strong>Istotność (Relevance).</strong> Połącz lekcję z tym, na czym uczniom zależy: z ich grami, serialami, z tym, co chcą stworzyć.`},
     {ic:'💪', html:`<strong>Pewność siebie (Confidence).</strong> Małe kroki, jasny następny krok i wsparcie, gdy utkną — żeby uwierzyli, że dadzą radę.`},
     {ic:'🏆', html:`<strong>Satysfakcja (Satisfaction).</strong> Konkretna pochwała i gotowa rzecz do pokazania na koniec.`}
   ])}
   ${bigStat('≈ 10 min', `<p>Często cytowana praktyczna reguła z badań nad uczeniem się (spopularyzowana przez książkę Johna Mediny <em>Brain Rules</em>): uwaga zaczyna odpływać po około <strong>dziesięciu minutach</strong>. Zaplanuj zmianę aktywności mniej więcej w tym momencie — a z najmłodszymi rób jeszcze krótsze rundy.</p>`)}
  `},
  {t:'🎬 Lekcja minuta po minucie', html:`
   ${timeline([
     {ic:'🎬', label:'Mocny początek — pierwsze trzy minuty', items:[
       '<strong>Zacznij od niespodzianki, historii lub pytania</strong> związanego z dzisiejszym projektem — początek nadaje ton całej lekcji.',
       '<em>„Dzisiaj pewien robot stracił głos — do końca lekcji przywrócicie mu go. Kto wchodzi?”</em>'
     ]},
     {ic:'⏱️', label:'Pracuj w krótkich rundach', items:[
       '<strong>Zmieniaj aktywność mniej więcej co 10 minut:</strong> wyjaśnij → spróbujcie → pokażcie. Zapowiadaj, co będzie w kolejnej rundzie.',
       '<em>„Runda pierwsza: pięć minut na próbę. Runda druga: pokażcie swoją pracę partnerowi.”</em>'
     ]},
     {ic:'🙋', label:'Interakcja — co kilka minut', items:[
       '<strong>Daj każdemu sposób na włączenie się:</strong> czat, reakcje, szybka sonda albo udostępnianie ekranu po kolei.',
       '<em>„Wpiszcie swoje typy na czacie — przeczytam wszystkie na głos!”</em>'
     ]},
     {ic:'👥', label:'Łącz uczniów ze sobą', items:[
       '<strong>Dwuminutowe momenty w parach</strong> lub zadania w małych grupach, żeby ekran przypominał wspólną salę.',
       '<em>„Pokaż partnerowi swój najlepszy fragment — a potem powiedz mi, co ci się podobało w jego pracy.”</em>'
     ]},
     {ic:'🏁', label:'Zakończ sukcesem', items:[
       '<strong>Pokaz tego, co stworzyli,</strong> konkretny komplement i zapowiedź tego, co będzie dalej.',
       '<em>„Zobaczcie, co dziś zbudowaliście — następnym razem dostanie licznik punktów.”</em>'
     ]}
   ])}
  `},
  {t:'🛠️ Narzędzia, dzięki którym ekran staje się interaktywny', html:`
   ${iconGrid([
     {ic:'💬', html:`<strong>Czat jako drugi głos.</strong> Nieśmiali uczniowie biorą udział, nie będąc w centrum uwagi. <em>„Wpiszcie swój pomysł — przeczytam wszystkie.”</em>`},
     {ic:'👍', html:`<strong>Reakcje i szybkie sondy.</strong> <em>„Pokażcie emoji: łatwe, średnie czy trudne?”</em>`},
     {ic:'🖥️', html:`<strong>Udostępnianie ekranu po kolei.</strong> <em>„Kto chce w 30 sekund pokazać swój projekt?”</em> Proponuj, nie zmuszaj.`},
     {ic:'1️⃣', html:`<strong>Jedna instrukcja naraz — i sprawdź ją.</strong> Nie piętrz kroków. Potem zapytaj: <em>„Co zrobisz najpierw?”</em> Krótka lista na czacie pomaga, gdy połączenie jest wolne.`},
     {ic:'🎲', html:`<strong>Minigry i szybkie wyzwania.</strong> 60-sekundowy quiz albo „kto znajdzie pierwszy?” odświeża uwagę.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>Pary lub małe grupy.</strong> W małej grupie ludzie mówią więcej i dostają bardziej osobistą informację zwrotną.`}
   ])}
  `},
  {t:'🎂 Dopasuj do wieku', html:`
   ${dimTabs([
     {ic:'🧒', title:'Wiek 6–8',
      intro:'Krótkie rundy, ruch i niespodzianka. Ich energia to paliwo lekcji.',
      tips:[
       {ic:'🤸', html:`<strong>Przerwy na ruch.</strong> <em>„Wstańcie i pokażcie mi swoją najlepszą pozę robota!”</em> — a potem z powrotem do klawiatury.`},
       {ic:'⏲️', html:`<strong>Rundy krótsze niż 10 minut,</strong> z jasnym „teraz robimy to” przy każdej zmianie.`},
       {ic:'🎁', html:`<strong>Naklejki, punkty, maskotka</strong> — małe, natychmiastowe nagrody za udział.`},
       {ic:'🧸', html:`<strong>Pokaż i opowiedz.</strong> <em>„Pokażcie nam swoją ulubioną zabawkę albo rysunek, a potem to zbudujemy.”</em>`}
      ]},
     {ic:'🧑', title:'Wiek 9–11',
      intro:'Misje, timery i drużyny sprawiają, że ekran przypomina grę.',
      tips:[
       {ic:'🎯', html:`<strong>Minimisje z timerem.</strong> <em>„Macie 8 minut, żeby wasza postać zaczęła skakać. Gotowi?”</em>`},
       {ic:'🏁', html:`<strong>Wyzwania drużynowe.</strong> Pary rywalizują, kto pierwszy znajdzie błąd — przyjaźnie i krótko.`},
       {ic:'🧩', html:`<strong>Wybór motywu</strong> w ramach tego samego zadania — cel zostaje, przebranie należy do nich.`},
       {ic:'🗳️', html:`<strong>Szybkie sondy</strong>, żeby zdecydować, co będzie w kolejnej rundzie.`}
      ]},
     {ic:'🧑‍🎓', title:'Wiek 12+',
      intro:'Autonomia, istotność i szacunek dla ich poziomu komfortu.',
      tips:[
       {ic:'🧭', html:`<strong>Daj wpływ na plan.</strong> <em>„Mamy 15 minut na tę część — chcecie zacząć od A czy od B?”</em>`},
       {ic:'🌍', html:`<strong>Pokazuj realne zastosowania</strong> umiejętności w rzeczach, które znają.`},
       {ic:'🔒', html:`<strong>Szanuj kamerę.</strong> Proponuj udział najpierw przez czat; nigdy nie wymuszaj włączenia kamery.`},
       {ic:'🗳️', html:`<strong>Anonimowe sondy</strong> do zbierania opinii i wzajemna ocena prac.`}
      ]}
   ],'✅ To już wszystkie trzy grupy wiekowe.')}
  `},
  {t:'🙋 Bezpośrednie pytania — bez presji', html:`
   <div class="card"><p>Zwracanie się do ucznia po imieniu działa — jeśli ufa, że nie będzie to krępujące. Przygotuj uczniów, zacznij od łatwych pytań i zadbaj, żeby było sprawiedliwie.</p></div>
   ${doavoid(
     ['Powiedz grupie, że w którymś momencie zapytasz każdego — i że <em>„nie wiem”</em> to dobra odpowiedź','Zacznij od łatwego pytania, żeby zbudować pewność siebie','Używaj losowania, żeby wybór był sprawiedliwy, a nie osobisty','Doceniaj każdy wkład: <em>„Dziękuję — to pomaga nam myśleć.”</em>'],
     ['Wywoływanie najcichszego ucznia z trudnym pytaniem bez uprzedzenia','Ostre poprawianie przy grupie','Pytanie wciąż tych samych szybkich uczniów','Zadawanie trudnego pytania bez ostrzeżenia — spróbuj: <em>„To jest podchwytliwe, ale czy ktoś chce spróbować?”</em>']
   )}
   ${co('co-star','🌱',`<p><strong>Dlaczego to działa:</strong> uczniowie biorą udział, gdy czują się bezpiecznie. Przygotowanie ich, zaczynanie od łatwych pytań i sprawiedliwość zamieniają pytanie z ryzyka w zaproszenie.</p>`)}
  `}
 ],
 ix:{
  title:'Zbuduj lekcję, która się podoba',
  instr:'Wybierz najlepszy ruch lub przyporządkuj każdy nawyk. 70%, aby odblokować końcową listę kontrolną.',
  items:[
   {type:'choice', prompt:`W połowie lekcji dziewięciolatek wygląda na zmęczonego i zaczyna przełączać karty. Jaki jest najlepszy ruch?`, opts:[`Dalej tłumaczyć — nadrobi`,`Zmienić aktywność: szybka sonda albo krótka misja na czas, a potem nowa runda`,`Powiedzieć mu, żeby uważał`], correct:1, fb:`Zmiana aktywności odświeża uwagę. Polecenie, żeby się skupił, nie daje mu do tego powodu.`},
   {type:'sort', prompt:'Czy ten nawyk pomaga, czy szkodzi lekcji online?', card:`Zmiana aktywności mniej więcej co 10 minut: wyjaśnij, spróbujcie, pokażcie.`, zones:[{label:'💎 Pomaga', fb:'Zgadza się — krótkie rundy to jeden z najpewniejszych sposobów na utrzymanie uwagi online.'},{label:'🗑️ Szkodzi', fb:'Nie do końca — krótkie rundy pomagają; długie odcinki jednej aktywności sprawiają, że uczniowie się wyłączają.'}], correctZone:0},
   {type:'choice', prompt:`Jak przekazywać instrukcje na lekcji online?`, opts:[`Wszystkie kroki naraz, żeby nikt nie musiał czekać`,`Jedna instrukcja naraz, a potem sprawdzenie: „Co zrobisz najpierw?”`,`Raz, szybko, i od razu dalej`], correct:1, fb:`Spiętrzone instrukcje gubią się online. Jeden krok plus pytanie sprawdzające pozwalają wcześnie wychwycić niezrozumienie.`},
   {type:'choice', prompt:`Nieśmiały trzynastolatek nigdy nie odpowiada na głos. Co pomaga najbardziej?`, opts:[`Wywoływać go po imieniu na każdej lekcji, aż się odezwie`,`Pozwolić mu najpierw brać udział przez czat i doceniać jego wkład`,`Poprosić go przy wszystkich o włączenie kamery`], correct:1, fb:`Daj mu komfortowy sposób udziału — najpierw czat. Kamera może przyjść później, kiedy zechce.`},
   {type:'sort', prompt:'Czy ten nawyk pomaga, czy szkodzi lekcji online?', card:`Wywoływanie najcichszego ucznia z najtrudniejszym pytaniem bez uprzedzenia.`, zones:[{label:'💎 Pomaga', fb:'Nie do końca — stawia ucznia pod ścianą i sprawia, że na kolejne pytanie trudniej mu będzie odpowiedzieć.'},{label:'🗑️ Szkodzi', fb:'Zgadza się — zacznij od łatwego pytania, przygotuj uczniów i zadbaj, by wybór był sprawiedliwy.'}], correctZone:1},
   {type:'choice', prompt:`Który początek najlepiej sprawdzi się u siedmiolatka?`, opts:[`„Dzisiaj nauczymy się o zmiennych.”`,`„Dzisiaj pewien robot stracił głos — do końca lekcji przywrócicie mu go. Kto wchodzi?”`,`„Otwórz lekcję i zacznij ćwiczenie 1.”`], correct:1, fb:`Historia z misją przyciąga uwagę i daje powód do udziału. Przeskakiwanie od razu do treści marnuje minuty największej uwagi.`}
  ]
 }
},
{id:'checklist', numLabel:'Lista kontrolna', emoji:'✅', color:'var(--coral)',
 title:'Końcowa lista kontrolna',
 desc:'Tu nie ma quizu — tylko najważniejsze punkty tego miniszkolenia, zanim je zamkniesz.',
 obj:'Przejrzyj poniższą listę kontrolną. Ten moduł nie jest oceniany — przeczytaj go, a potem ukończ miniszkolenie.',
 sections:[
  {t:'🛟 Jeśli wniosek o zwrot już wpłynął', html:`
   ${numlist([
     'Tego samego dnia, w którym dowiaduję się o wniosku, zostawiam komentarz w BO i informuję lidera zespołu',
     'Moja następna lekcja z tym uczniem to prawdziwa próba ratunku — prawdziwa okazja do działania, widoczny sukces, konkretna uwaga, ani słowa o wniosku',
     'Nigdy nie potwierdzam zatwierdzenia zwrotu i nie rozmawiam o kwotach — używam jednego bezpiecznego zdania, a resztę zostawiam Działowi Obsługi Klienta'
   ])}
  `},
  {t:'🌱 Na każdej lekcji', html:`
   ${numlist([
     'Zanim zastosuję jakąkolwiek technikę, dowiaduję się, co dokładnie nie pasuje temu uczniowi w lekcjach online',
     'Najpierw uznaję uczucie („to zrozumiałe”), a dopiero potem przeformułowuję — nigdy nie przekonuję, że online jest „równie dobre”',
     'Pytam w sposób dopasowany do wieku: sonda z minami dla najmłodszych, skala 1–5 dla 9–11 lat, prywatna wiadomość lub anonimowa sonda dla 12+',
     'Każdą lekcję zaczynam mocno: od niespodzianki, historii lub pytania związanego z dzisiejszym projektem',
     'Zmieniam aktywność mniej więcej co 10 minut (z najmłodszymi częściej): wyjaśnij → spróbujcie → pokażcie',
     'Korzystam z czatu, reakcji, sond i udostępniania ekranu po kolei, żeby każdy miał komfortowy sposób udziału',
     'Daję jedną instrukcję naraz i sprawdzam, czy została zrozumiana',
     'Zadaję bezpośrednie pytania bez presji: najpierw łatwe, sprawiedliwy sposób wyboru i pozytywna reakcja na każdą odpowiedź',
     'Łączę uczniów ze sobą krótkimi momentami w parach lub małych grupach',
     'Niechęć ucznia do formatu online zgłaszam w BO tego samego dnia: co powiedział, co widzę, czego już próbuję',
     'Nigdy nie obiecuję zmiany formatu ani grupy — rekomenduję w BO i mówię „sprawdzę z moim zespołem”'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>To już całe miniszkolenie.</strong> Kiedy zechcesz, przejdź dalej — a potem wykonaj DST w LMS, aby zamknąć zadanie.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
