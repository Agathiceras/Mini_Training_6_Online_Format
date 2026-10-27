/* Mini_Training_6_Online_Format - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='tr';
const CONTENT = {
  flag:'🇹🇷', dir:'ltr',
  ui:{
    pageTitle:"Mini Eğitim · Çevrim İçi Format — Kodland Eğitmen Eğitimi",
    logoSub:'Eğitmen Gelişim Departmanı',
    heroEyebrow:"🎯 Mini Eğitim",
    heroTitle:"<span class=\"h-pill\">Çevrim İçi</span> Dersleri Keyifli Hâle Getirmek",
    heroIntro:"Bu eğitimi, çevrim içi formatı sevmedikleri için iade talep eden öğrencileriniz olduğu için alıyorsunuz. Burada, bir eğitmen olarak neler yapabileceğinizi ve bu tür durumları nasıl yöneteceğinizi göstereceğiz.",
    heroWork:"4 kısa modülü tamamlayın. Bir sonraki modülün kilidini açmak için her modül kontrolünde en az %70 almanız gerekir. Toplam süre yaklaşık 20–25 dakikadır.",
    startBtn:"🚀 Eğitimi Başlat",
    pathLabel:'Öğrenme yolunuz',
    devTitle:'Geliştirici: inceleme için tüm modüllerin kilidini aç',
    backToPath:'Öğrenme yoluna dön',
    modulesPassed:'{done} / {total} modül tamamlandı',
    moduleN:'Modül {n}',
    of:'/',
    locked:'🔒 Kilitli',
    passedBadge:'✅ Geçildi · %{pct}',
    reviewedBadge:'✅ İncelendi',
    startBadge:'▶ Başla',
    reviewBadge:'▶ İncele',
    objective:'Hedef',
    startCheck:'▶ Modül kontrolüne başla',
    finishBtn:'▶ Mini eğitimi bitir',
    doneBack:'✓ Tamamlandı — öğrenme yoluna dön',
    ixBadge:'📋 Modül kontrolü — sonraki modülün kilidini açmak için %70',
    ixItemBadge:'📋 Modül kontrolü — soru {i} / {n}',
    scoreSoFar:'Şu ana kadarki puan: {c} / {t}',
    continue:'Devam →',
    sortWrong:'Tam değil — doğru cevap “{label}”.',
    resPassed:'Modülü geçtiniz!',
    resFailed:'Henüz tam olmadı',
    resUnlocked:"Sonraki modülün kilidini açtınız.",
    resDone:"Bu mini eğitimi tamamladınız.",
    resNeed:'Sonraki modülün kilidini açmak için %70 almanız gerekiyor. Yukarıdaki bölümü yeniden gözden geçirin ve kontrolü tekrar deneyin.',
    resContinue:'Öğrenme yoluna devam et',
    resFinish:'Devam et',
    resBack:'Öğrenme yoluna dön',
    resReview:'Bu modülü incele',
    doneEyebrow:'Mini Eğitim Tamamlandı',
    doneTitle:'🎉 Tebrikler!',
    doneP1:"🎉 <strong>Tebrikler! Bu mini eğitimi tamamladınız.</strong>",
    doneP2:"Burada işiniz bitti! Ödevi kapatmak için lütfen bu mini eğitime eriştiğiniz LMS eğitim sayfasına geri dönün.",
    doneP3:"👉 <strong>LMS’de eğitimin hemen altında bir kontrol veya değerlendirme varsa, onu da tamamladığınızdan ve geçer puan aldığınızdan emin olun</strong> — aksi hâlde ödev tamamlanmamış olarak kalabilir.",
    doneP4:'Bol şans! ❤️',
    doneP5:'',
    devUnlockAlert:'Geliştirici modu: tüm modüllerin kilidi inceleme için açıldı.',
    devOn:'🔓 Geliştirici modu AÇIK — tüm modüllerin kilidi açık',
    devOff:'🔒 Geliştirici modu KAPALI — ilerleme sıfırlandı',
    devBadge:'🔓 GELİŞTİRİCİ MODU',
    doLabel:'✅ Yapın',
    avoidLabel:'🚫 Kaçının',
    noticeLabel:'Dikkat:',
    cvSee:'Gördüğünüz:',
    cvDo:'Yapmanız gereken:',
    dtExample:'Gerçek bir dersten örnek',
    dtNext:'Sonraki:',
    dtDone:"✅ Dört alanın hepsini gördünüz. Şimdi gördüklerinizi sınıflandırın.",
    tlVideoTitle:'{label} — gerçek bir ders örneği',
    tlVideoMeta:'Bu aşamanın gerçek bir derste nasıl göründüğünü izleyin'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Giriş', emoji:'🧩', color:'var(--coral)',
 title:'Neden Buradasınız',
 desc:'“Çevrim içi dersleri sevmiyorum” neden hâlâ tersine çevrilebilir — ve bir iade talebi zaten oluşturulduysa hangi kurallar geçerlidir.',
 obj:'“Çevrim içi formatı sevmiyorum” cümlesinin gerçekte ne anlama geldiğini, aynı gün yapılan bildirimin neden önemli olduğunu ve bir iade talebi zaten varsa tam olarak ne yapmanız (ve ne yapmamanız) gerektiğini anlamak.',
 sections:[
  {t:'💻 “Çevrim içi dersleri sevmiyorum” aslında ne anlama geliyor', html:`
   <div class="card"><p>Neredeyse hiç kimse “ekran başında geçen uzun bir günün ardından dikkatim dağılıyor” demez. <em>“Çevrim içi ders sıkıcı”</em>, <em>“Sevmiyorum”</em> derler — ve aile iade talep eder. Bu tek cümlenin arkasında genellikle birbirinden çok farklı şeyler vardır:</p></div>
   ${iconGrid([
     {ic:'🥱', html:`<strong>Ekran yorgunluğu.</strong> Ders, ekran başında geçen bir okul gününün ardından geliyor ve çocukta hiç enerji kalmamış.`},
     {ic:'🫥', html:`<strong>Yalnız hissetmek.</strong> Çalışmasını paylaşacağı sınıf arkadaşları yok, birlikte gülebileceği kimse yok.`},
     {ic:'📱', html:`<strong>Evdeki dikkat dağıtıcılar.</strong> Telefon, bir oyun, bir evcil hayvan ya da bir kardeş bir tık uzaklıkta.`},
     {ic:'🙈', html:`<strong>Kamera karşısında utangaçlık.</strong> Görünmek ya da herkesin önünde konuşmak istemiyor.`},
     {ic:'🔌', html:`<strong>Araçlardan kaynaklanan hayal kırıklığı.</strong> Gecikmeler, çalışmayan ses, yanıt vermeyen düğmeler.`},
     {ic:'👨‍👩‍👧', html:`<strong>Aile yüz yüze ders bekliyordu.</strong> Çocuk ne düşünürse düşünsün, onlara çevrim içi ders “daha az gerçek” geliyor.`}
   ])}
   ${co('co-idea','💡',`<p><strong>Formatı değiştiremezsiniz — ama ders içinde nasıl hissettirdiğini değiştirebilirsiniz.</strong> Öğrencilerin çevrim içi derslerde sevmedikleri şeylerin çoğu dersin nasıl yürütüldüğünden kaynaklanır ve o kısım sizin elinizdedir.</p>`)}
  `},
  {t:'⏱️ Anahtar hız — ve sizin bildiriminiz', html:`
   <div class="card"><p>Bir öğrencinin farklı bir gruba veya formata geçip geçemeyeceğine siz karar vermezsiniz. Ancak bu konuşmayı başlatan sizin bildiriminizdir ve yalnızca doğru kişilere <strong>erken</strong> ulaşırsa işe yarar.</p></div>
   ${stepFlow([
     {ic:'👀', label:'Bir derste öğrencinin hoşnutsuzluğunu fark edersiniz'},
     {ic:'📝', label:'Aynı gün BO’da bildirirsiniz'},
     {ic:'👩‍💼', label:'Takım Lideriniz ve Müşteri Hizmetleri seçenekleri değerlendirir'},
     {ic:'🔄', label:'Bir motivasyon görüşmesi, ona uygun farklı bir grup veya format (varsa) ya da başka bir kurs'}
   ])}
   ${co('co-danger','🚨',`<p><strong>Geç yapılan bir bildirim kapıları kapatır.</strong> Aile kararını verdikten sonra seçeneklerin çoğu ortadan kalkar. Aynı bildirim ilk haftalarda yapılırsa, bir çocuğun Kodland’de kalmasını sağlayabilir.</p>`)}
   ${co('co-ok','✅',`<p><strong>Ekip seçenekleri değerlendirirken ders hâlâ sizin elinizde.</strong> Modül 1 ve 2, öğrenciyi neyin rahatsız ettiğini nasıl öğreneceğinizi ve keyif alacağı bir çevrim içi dersi nasıl kuracağınızı gösteriyor.</p>`)}
  `},
  {t:'🛟 Bir iade talebi zaten varsa', html:`
   <div class="card"><p>Yukarıdakilerin hepsi bu durumu erkenden yakalamakla ilgili. Ancak bu eğitimi, bir aile <strong>zaten</strong> iade talep ettiği için açıyor olabilirsiniz. Aşağıdaki kurallar, sebep ne olursa olsun geçerlidir — önce bunları okuyun, ardından bu noktaya nasıl gelindiğini ve derste hâlâ neler yapabileceğinizi anlamak için eğitimin geri kalanından yararlanın.</p></div>
   ${co('co-idea','💡',`<p><strong>Talebin kendisini siz değil, Müşteri Hizmetleri oluşturur</strong> — o kısım sizin kontrolünüzde değil. Sizin elinizde olan, bundan sonra derste yaşanacak her şeydir ve bu hiç de az değildir.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Talebin kendisi hakkında hiçbir şey söylemeyin</strong> — ne çocuğa ne de aileye — Müşteri Hizmetleri sizden açıkça belirli bir şey söylemenizi istemedikçe. Şu anki göreviniz bu konuşma değil, derstir.</p>`)}
  `},
  {t:'🎯 Bir sonraki dersiniz, öğrenciyi kazanma fırsatınızdır', html:`
   <div class="card"><p>Başka hiçbir şeyi değiştirme şansınız olmayabilir. Bu çocukla yapacağınız bir sonraki dersi, sonucu belirleyecek an olarak görün.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Ona gerçek bir söz hakkı verin.</strong> Anlamsız bir soru değil — görüldüğü ve başardığı gerçek bir an.`},
     {ic:'🏆', html:`<strong>Erken ve görünür bir başarı planlayın.</strong> Dersten geride kalmış hissederek değil, başarabildiğini hissederek ayrılmalı.`},
     {ic:'👀', html:`<strong>Ona özel ilgi gösterin</strong> — genel geçer bir övgü yerine, somut bir şey için fark edildiğini hissettirin.`},
     {ic:'🤐', html:`<strong>Talepten hiç bahsetmeyin</strong> — çocuk konuyu kendisi açsa bile sıcak bir şekilde konuyu değiştirin ve derse devam edin.`}
   ])}
  `},
  {t:'📮 Hızlıca bildirin ve güvenli tek cümleyi bilin', html:`
   <div class="card"><p>Bir talep olduğunu, BO’da çocuğun profilindeki Müşteri Hizmetleri yorumlarından öğrenebilirsiniz — sizi bilgilendiren otomatik bir sistem yoktur. Bunu öğrendiğiniz andan itibaren, derslerinizde gördükleriniz Müşteri Hizmetleri’nin başka hiçbir yoldan edinemeyeceği bilgilerdir.</p></div>
   ${numlist([
     'Aynı gün BO’da tam olarak ne gördüğünüzü anlatan bir yorum bırakın — izlenimler değil, tarihler ve somut ayrıntılar',
     'Varsa, ailenin kendi sözlerini kelimesi kelimesine ekleyin',
     'Aynı gün Takım Liderinizi de bilgilendirin',
     'Bir iadenin onaylandığını asla teyit etmeyin ve herhangi bir tutar konuşmayın'
   ])}
   ${co('co-ok','✅',`<p><strong>Her zaman güvenle söyleyebileceğiniz cümle:</strong> <em>“Müşteri Hizmetleri bu konuda size yardımcı olacak.”</em> Konuşmadaki rolünüz burada biter — gerisini Müşteri Hizmetleri devralır.</p>`)}
  `},
  {t:'🌱 Sonrasında da özen göstermeye devam edin', html:`
   <div class="card"><p>Talep geri çekilse de, çocuk grubunuzda kalsa da ya da başka bir eğitmene veya formata geçse de, sonraki birkaç derste ona ekstra özen göstermeye devam edin. Bir ders boyunca işe yarayıp sonra sessizce eski hâline dönen bir kurtarma girişimi, çoğu zaman hiç işe yaramamış demektir.</p></div>
  `}
 ]
},
{id:'diagnose', numLabel:'Modül 1', emoji:'🔍', color:'var(--coral)',
 title:'Onu Neyin Rahatsız Ettiğini Öğrenin — Sonra Yeniden Çerçeveleyin',
 desc:'Çevrim içi derslerde tam olarak neyin yanlış hissettirdiğini nasıl anlayacağınız, bunu ortaya çıkaran yaşa göre sorular, algıyı nasıl değiştireceğiniz ve durumu BO’da nasıl bildireceğiniz.',
 obj:'Öğrencinin çevrim içi formatta gerçekte neyi sevmediğini tespit etmek, bunu yaşına uygun bir şekilde sormak, duygusunu kabul edip yeniden çerçevelemek ve durumu aynı gün BO’da bildirmek.',
 sections:[
  {t:'🔍 Önce sorun: tam olarak ne yanlış hissettiriyor?', html:`
   <div class="card"><p>Katılım tekniklerini denemeden önce, <strong>çevrim içi formatın hangi kısmının işe yaramadığını</strong> öğrenin. Yalnızlığı gideren bir teknik, ekran yorgunluğuna hiçbir fayda sağlamaz. Çocuklar bunu nadiren açıkça söyler; bu yüzden her birinin nasıl göründüğünü ve nasıl duyulduğunu öğrenin:</p></div>
   ${patternCards([
     {ic:'🥱', title:'Yorgun ve dikkati dağınık', desc:'“Yoruldum.” “Çok uzun.” Gözleri dalıyor, sekme değiştiriyor, esniyor.', note:'Bir enerji ve dikkat sorunu. <strong>Daha kısa turlar, hareket, etkinlik değişikliği.</strong>'},
     {ic:'🫥', title:'Yalnız, bağ kuramamış', desc:'“Konuşacak kimse yok.” Kamera kapalı, sessiz, hiçbir tepki yok.', note:'Bir bağ kurma sorunu. <strong>Sınıf arkadaşlarını işin içine katın: ikili çalışmalar, göster-anlat, tepkiler.</strong>'},
     {ic:'🙈', title:'Kamera karşısında rahat değil', desc:'Konuşmak ya da yüzünü göstermek istemiyor; sohbete yazarak cevap veriyor ya da hiç cevap vermiyor.', note:'Bir güven sorunu. <strong>Baskı yaratmayan katılım yolları.</strong>'},
     {ic:'🔌', title:'Araçlardan bunalmış', desc:'“Hep donuyor.” “Duyamadım.” Teknik bir aksaklıktan sonra pes ediyor.', note:'Bir araç sorunu. <strong>Hızla çözün ya da teknik sorun protokolünü izleyin (10 dakika, ardından iletişim kurun, kayıt altına alın, üst kademeye iletin).</strong>'}
   ],2)}
  `},
  {t:'❓ Bunu ortaya çıkaran sorular — yaşa göre', html:`
   <div class="card"><p><strong>Baskı yaratmadan, açık uçlu sorular</strong> sorun ve öğrenciye, kendini köşeye sıkışmış hissettirmeyecek bir cevap verme yolu sunun. Neyin işe yaradığı yaşa bağlıdır:</p></div>
   ${dimTabs([
     {ic:'🧒', title:'6–8 yaş',
      intro:'Küçük çocuklar en iyi açıklamalarla değil; yüz ifadeleri, resimler ve seçeneklerle cevap verir.',
      tips:[
       {ic:'😀', html:`<strong>Yüz seçme anketi.</strong> <em>“Bugünkü dersin nasıl geçtiğini elinle ya da bir emojiyle göster — mutlu mu, idare eder mi, uykulu mu?”</em>`},
       {ic:'🌟', html:`<strong>En iyi ve en az iyi.</strong> <em>“Bugünün en eğlenceli kısmı neydi? Peki en sıkıcı kısmı?”</em>`},
       {ic:'🎁', html:`<strong>Sihirli değnek.</strong> <em>“Çevrim içi dersimizde bir şeyi değiştirebilseydin, ne olurdu?”</em>`},
       {ic:'👂', html:`<strong>Dinleyin, hemen çözmeye çalışmayın.</strong> Söylediğini tekrar edin ve teşekkür edin — ardından bir sonraki derste küçük bir şeyi değiştirin ki onu dinlediğinizi görsün.`}
      ]},
     {ic:'🧑', title:'9–11 yaş',
      intro:'Güvenli ve kısa hissettirdiği sürece puan verebilir ve açıklayabilirler.',
      tips:[
       {ic:'🔢', html:`<strong>1–5 ölçeği.</strong> <em>“1’den 5’e kadar, çevrim içi derslerimizden ne kadar keyif alıyorsun? 5 olması için ne gerekir?”</em>`},
       {ic:'🌟', html:`<strong>En havalı kısım.</strong> <em>“Bugünkü dersin en havalı kısmı neydi?”</em> Hiçbir şey söyleyemiyorsa, bu bir işarettir.`},
       {ic:'🔧', html:`<strong>Tek bir değişiklik.</strong> <em>“Derslerde bir şeyi değiştirebilseydin, ne olurdu?”</em>`},
       {ic:'🗳️', html:`<strong>Sohbette hızlı anket.</strong> <em>“Daha fazla yapım süresi istiyorsan A, bir arkadaşınla daha fazla zaman istiyorsan B yaz.”</em>`}
      ]},
     {ic:'🧑‍🎓', title:'12 yaş ve üzeri',
      intro:`Daha büyük öğrenciler bunu herkesin önünde söylemek istemez. Onlara özel ya da anonim bir yol sunun.`,
      tips:[
       {ic:'🔒', html:`<strong>Özel bir mesaj.</strong> <em>“Son zamanlarda daha sessiz olduğunu fark ettim. Çevrim içi derslerde seni rahatsız eden bir şey var mı? Aramızda kalacak.”</em>`},
       {ic:'🗳️', html:`<strong>Anonim bir anket.</strong> Tüm gruptan <em>“Derse daha çok katılırdım, eğer…”</em> cümlesini tamamlamalarını isteyin — bu, yargılanma korkusunu ortadan kaldırır.`},
       {ic:'🤝', html:`<strong>Şikâyetlerini değil, fikirlerini sorun:</strong> <em>“Derslerimizi senin için ne daha iyi hâle getirirdi?”</em>`},
       {ic:'🙏', html:`<strong>Cevabına saygı gösterin.</strong> Asla tartışmayın — teşekkür edin ve bir konuda harekete geçin.`}
      ]}
   ],'✅ Üç yaş grubunun hepsini gördünüz. Sırada: algıyı nasıl değiştireceğiniz.')}
   ${co('co-idea','🧠',`<p><strong>Neden işe yarar?</strong> Açık uçlu sorular ve anonim formatlar, sınıf arkadaşlarının önünde cevap vermenin yarattığı sosyal baskıyı ortadan kaldırır. “Daha çok konuşurdum, eğer…” şeklinde geri bildirim vermek, çoğu zaman yüz yüze vermekten daha kolaydır.</p>`)}
  `},
  {t:'🔁 Algıyı değiştirin — önce kabul edin, sonra yeniden çerçeveleyin', html:`
   <div class="card"><p>Bir duyguyu kimsenin aklından konuşarak çıkaramazsınız. İşe yarayan sıra şudur: <strong>1. kabul edin</strong> (“bu çok anlaşılır”), <strong>2. yeniden çerçeveleyin</strong> (diğer tarafı dürüstçe gösterin), <strong>3. küçük bir şey deneyin</strong> — hemen bir sonraki derste. Her birini açın:</p></div>
   ${accItem('🥱 “Ekranda sıkıcı.”', `
     <p><strong>✅ Kabul edin:</strong> <em>“Haklısın — uzun süre ekran izlemek sıkıcı gelebilir.”</em></p>
     <p><strong>🔁 Yeniden çerçeveleyin:</strong> <em>“Burada sadece izlemiyorsun — ekranındaki her şey senin yaptığın bir şey.”</em></p>
     <p><strong>🎯 Deneyin:</strong> bir sonraki derste, ilk beş dakika içinde öğrencinin kendi projesini ekrana getirin.</p>`)}
   ${accItem('🫥 “Arkadaşlarımı özlüyorum / konuşacak kimse yok.”', `
     <p><strong>✅ Kabul edin:</strong> <em>“Çok anlaşılır — bir şeyleri başkalarıyla birlikte yapmak daha eğlenceli.”</em></p>
     <p><strong>🔁 Yeniden çerçeveleyin:</strong> <em>“Sınıfımızda seninle aynı şeyi seven insanlar var. Bunu kullanalım.”</em></p>
     <p><strong>🎯 Deneyin:</strong> iki dakikalık bir ikili görev ya da bir göster-anlat: <em>“Arkadaşına en iyi kısmını göster.”</em></p>`)}
   ${accItem('📱 “Evde odaklanamıyorum.”', `
     <p><strong>✅ Kabul edin:</strong> <em>“Evde insanın dikkatini çeken çok şey var — bu çok normal.”</em></p>
     <p><strong>🔁 Yeniden çerçeveleyin:</strong> <em>“Kısa turlar hâlinde çalışacağız; böylece her seferinde sadece biraz odaklanman yetecek.”</em></p>
     <p><strong>🎯 Deneyin:</strong> etkinliği yaklaşık her 10 dakikada bir değiştirin ve bir sonraki turun ne olacağını önceden söyleyin.</p>`)}
   ${accItem('🙈 “Kamerada konuşmayı sevmiyorum.”', `
     <p><strong>✅ Kabul edin:</strong> <em>“Bu tamamen normal — pek çok insan böyle hisseder.”</em></p>
     <p><strong>🔁 Yeniden çerçeveleyin:</strong> <em>“Önce sohbete yazarak ya da ekranını paylaşarak katılabilirsin. Kamera daha sonra, sen istediğinde gelebilir.”</em></p>
     <p><strong>🎯 Deneyin:</strong> sohbette cevaplanabilecek kolay bir soru ve ardından özel bir “harika fikir” mesajı.</p>`)}
   ${doavoid(
     ['Önce kabul edin: <em>“Bu çok anlaşılır.”</em>','Dürüst olun — satış yapmayın, yeniden çerçeveleyin','Yalnızca tutabileceğiniz sözler verin: <em>“Bir sonraki derse bir şey yaparak başlayacağız.”</em>','Bir sonraki derste küçük bir şeyi değiştirin ki onu dinlediğinizi görsün'],
     ['<em>“Çevrim içi ders de bir o kadar iyi”</em> diye tartışmak','Geçiştirmek: <em>“artık herkes çevrim içi okuyor”</em>','Grup veya format değişikliği vaat etmek','Tüm grubun önünde sormak']
   )}
  `},
  {t:'📝 BO’da bildirin — aynı gün', html:`
   <div class="card"><p>Çevrim içi dersleri sevmediğini sürekli söyleyen ya da sessiz ve kopuk kalan bir öğrenci, bir iade riskidir. <strong>Aynı gün bildirin</strong> — ekip seçenekleri (varsa ona uygun farklı bir grup veya format, bir motivasyon görüşmesi, başka bir kurs) yalnızca aile hâlâ karar aşamasındayken değerlendirebilir.</p></div>
   <div class="card" style="background:var(--surface2)"><h4>📨 Faydalı bir bildirim nasıl görünür — kopyalayıp doldurun</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Öğrenci:</strong> [ad] · <strong>Grup / format:</strong> [örn. 6 kişilik grup, salı 18:00] · <strong>Ders:</strong> [tarih]<br>
   <strong>Ne söyledi:</strong> [kendi sözleriyle — örn. “çevrim içi ders sıkıcı, konuşacak kimse yok”]<br>
   <strong>Ne gördüm:</strong> [kamera, mikrofon, sohbet, dikkat — ve öncesine göre değişip değişmediği]<br>
   <strong>Bence onu rahatsız eden:</strong> ☐ yorgun / dikkati dağınık &nbsp; ☐ yalnız &nbsp; ☐ kamera karşısında rahat değil &nbsp; ☐ araçlardan bunalmış<br>
   <strong>Zaten denediklerim:</strong> [örn. kısa turlar, ikili görev, önce sohbetle katılım]<br>
   <strong>Neler yardımcı olabilir — önerim benden, karar sizden:</strong> [örn. daha küçük bir grup, bir motivasyon görüşmesi, başka bir kurs]</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Bir durumu bildirin</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Bir durumu bildirin" loading="lazy"></iframe></div></div>
   ${co('co-idea','💬',`<p><strong>Aileyle:</strong> düzenlemeden değil, öğrenme sürecinden bahsedin. <em>“Merhaba [velinin adı], [öğrenci]’nin çevrim içi derslerde enerjisini korumakta bazen zorlandığını fark ettim. Kısa yapım turları yapmaya ve seçim yapmasına izin vermeye başladım; ona en iyi şekilde destek olabilmemiz için durumu ekibimle de paylaştım.”</em> Grup veya format hakkında hiçbir vaatte bulunmayın.</p>`)}
  `}
 ],
 ix:{
  title:'Onu ne rahatsız ediyor — ve ilk olarak ne yapmalı',
  instr:'Alıntıları sınıflandırın ve en iyi hamleyi seçin. Sonraki modülün kilidini açmak için %70 gerekir.',
  items:[
   {type:'sort', prompt:'Bu öğrenciyi rahatsız eden ne?', card:`“Konuşacak kimse yok.”`, zones:[{label:'🥱 Yorgun ve dikkati dağınık', fb:'Tam değil — öğrenci yorgun olduğunu değil, yalnız olduğunu anlatıyor.'},{label:'🫥 Yalnız, bağ kuramamış', fb:'Doğru — bu bir bağ kurma sorunu. İkili çalışmalar, göster-anlat ve tepkilerle sınıf arkadaşlarını işin içine katın.'},{label:'🙈 Kamera karşısında rahat değil', fb:'Tam değil — bu, görünmekle değil, paylaşacak insanların eksikliğiyle ilgili.'},{label:'🔌 Araçlardan bunalmış', fb:'Tam değil — burada araçlarla ilgili hiçbir şey yok.'}], correctZone:1},
   {type:'sort', prompt:'Bu öğrenciyi rahatsız eden ne?', card:`Kamerası kapalı, hiç konuşmuyor ve yalnızca sohbete yazıyor.`, zones:[{label:'🥱 Yorgun ve dikkati dağınık', fb:'Tam değil — sohbete yazması, sesli olmasa da derse katıldığını gösteriyor.'},{label:'🫥 Yalnız, bağ kuramamış', fb:'Tam değil — sohbet aracılığıyla derse katılıyor.'},{label:'🙈 Kamera karşısında rahat değil', fb:'Doğru — bir güven sorunu. Baskı yaratmayan yollarla başlayın: önce sohbet, sonra ekran paylaşımı, kamera ise hazır olduğunda.'},{label:'🔌 Araçlardan bunalmış', fb:'Tam değil — teknik bir sorun olduğuna dair hiçbir işaret yok.'}], correctZone:2},
   {type:'choice', prompt:`Bir öğrenci şöyle diyor: “Çevrim içi dersler sıkıcı.” En iyi ilk hamle nedir?`, opts:[`Çevrim içi derslerin yüz yüze dersler kadar iyi olduğunu açıklamak`,`Ders daha ilginç olsun diye açıklamalarınızı uzatmak`,`Tam olarak neyin sıkıcı geldiğini sormak — süre mi, görevler mi, ekran mı, yalnızlık mı?`], correct:2, fb:`Herhangi bir teknikten önce, hangi kısmın işe yaramadığını öğrenin. “Sıkıcı”; yorgun, yalnız, utangaç ya da bunalmış anlamına gelebilir — ve her birinin çözümü farklıdır.`},
   {type:'sort', prompt:'Hazine mi, çöp mü? Bu iyi bir cevap mı?', card:`“Çok anlaşılır — ekranlar insanı pasif hissettirebilir. Burada ise ekranındaki her şey senin yaptığın bir şey.”`, zones:[{label:'💎 Hazine — kabul ediyor ve yeniden çerçeveliyor', fb:'Doğru — önce duyguyu kabul ediyor, ardından dürüst bir yeniden çerçeveleme sunuyor.'},{label:'🗑️ Çöp — geçiştiriyor', fb:'Tam değil — bu cevap önce kabul ediyor, sonra yeniden çerçeveliyor. Doğru sıra da budur.'}], correctZone:0},
   {type:'choice', prompt:`12 yaşında bir öğrenci kopuk görünüyor. Hangi soru şekli dürüstçe cevap vermesini sağlar?`, opts:[`Tüm gruba yüksek sesle sormak: “Çevrim içi dersleri kim sıkıcı buluyor?”`,`Veliden onunla konuşmasını istemek`,`Özel bir mesaj ya da anonim bir anket: “Derse daha çok katılırdım, eğer…”`], correct:2, fb:`Daha büyük öğrenciler bunu akranlarının önünde nadiren söyler. Özel bir mesaj ya da anonim bir anket sosyal baskıyı ortadan kaldırır.`},
   {type:'choice', prompt:`Bir öğrencinin çevrim içi formatı sevmediğini BO’da ne zaman bildirirsiniz?`, opts:[`Aynı gün — ne söylediğini, ne gördüğünüzü ve ne denediğinizi yazarak`,`Bir ay sonra, hiçbir şey düzelmediyse`,`Yalnızca veli şikâyet ederse`], correct:0, fb:`Farklı bir grup veya format gibi seçenekler, yalnızca aile hâlâ karar aşamasındayken değerlendirilebilir. Somut bilgiler, öğrencinin kendi sözleri ve denedikleriniz ekibin hızlı hareket etmesini sağlar.`}
  ]
 }
},
{id:'engage', numLabel:'Modül 2', emoji:'🎬', color:'var(--coral)',
 title:'Keyif Alacakları Bir Çevrim İçi Ders Kurun',
 desc:'Dikkati canlı tutan ve ekranı ortak bir sınıf gibi hissettiren teknikler: güçlü bir açılış, kısa turlar hâlinde çalışmak, etkileşim, bağ kurma, doğrudan sorular ve sonda bir başarı.',
 obj:'Dikkati canlı tutan, her öğrenciye katılmak için rahat bir yol sunan, sınıf arkadaşlarını birbirine bağlayan ve bir başarıyla biten — grubun yaşına göre uyarlanmış — bir çevrim içi ders yürütmek.',
 sections:[
  {t:'🧠 Motive eden her dersin sahip olduğu dört şey', html:`
   <div class="card"><p>Çevrim içi ortamda dikkati sizin yerinize tutan hiçbir şey yoktur: fiziksel bir sınıf yok, yanlarında oturan sınıf arkadaşları yok ve her dikkat dağıtıcı bir tık uzaklıkta. Motivasyon araştırmaları basit bir kontrol listesi sunar — John Keller’ın <strong>ARCS modeli</strong> (1987). Her dersten önce kendinize, dersinizin bu dördüne de sahip olup olmadığını sorun:</p></div>
   ${iconGrid([
     {ic:'👀', html:`<strong>Dikkat (Attention).</strong> Bir sürpriz, bir soru, kısa bir meydan okuma ve format değişikliği. <em>“Oyundan bir böcek kaçtı — onu yakalamama kim yardım edebilir?”</em>`},
     {ic:'🔗', html:`<strong>Uygunluk (Relevance).</strong> Dersi önem verdikleri şeylerle ilişkilendirin: oyunları, dizileri, yapmak istedikleri şey.`},
     {ic:'💪', html:`<strong>Güven (Confidence).</strong> Küçük adımlar, net bir sonraki adım ve takıldıklarında destek — böylece yapabileceklerine inanırlar.`},
     {ic:'🏆', html:`<strong>Doyum (Satisfaction).</strong> Somut övgü ve sonunda gösterecekleri tamamlanmış bir çalışma.`}
   ])}
   ${bigStat('≈ 10 dk', `<p>Öğrenme araştırmalarından sık alıntılanan bir pratik kural (John Medina’nın <em>Brain Rules</em> kitabıyla yaygınlaşan): dikkat yaklaşık <strong>on dakika</strong> sonra dağılmaya başlar. Etkinlik değişikliğini bu süre civarında planlayın — en küçüklerle turları daha da kısa tutun.</p>`)}
  `},
  {t:'🎬 Dakika dakika ders', html:`
   ${timeline([
     {ic:'🎬', label:'Güçlü bir açılış — ilk üç dakika', items:[
       '<strong>Bugünkü projeyle bağlantılı bir sürpriz, bir hikâye ya da bir soruyla başlayın</strong> — açılış, dersin tamamının havasını belirler.',
       '<em>“Bugün bir robot sesini kaybetti — dersin sonunda ona sen ses vermiş olacaksın. Var mısın?”</em>'
     ]},
     {ic:'⏱️', label:'Kısa turlar hâlinde çalışın', items:[
       '<strong>Etkinliği yaklaşık her 10 dakikada bir değiştirin:</strong> açıkla → dene → paylaş. Bir sonraki turun ne olduğunu söyleyin.',
       '<em>“Birinci tur: denemek için beş dakika. İkinci tur: arkadaşına göster.”</em>'
     ]},
     {ic:'🙋', label:'Birkaç dakikada bir etkileşim kurun', items:[
       '<strong>Herkese bir katılım yolu verin:</strong> sohbet, tepkiler, hızlı bir anket ya da sırayla ekran paylaşımı.',
       '<em>“Tahminini sohbete yaz — hepsini sesli okuyacağım!”</em>'
     ]},
     {ic:'👥', label:'Sınıf arkadaşlarını birbirine bağlayın', items:[
       '<strong>İki dakikalık ikili anlar</strong> ya da küçük grup görevleri; böylece ekran ortak bir sınıf gibi hissettirir.',
       '<em>“Arkadaşına en iyi kısmını göster — sonra bana onunkinde neyi beğendiğini söyle.”</em>'
     ]},
     {ic:'🏁', label:'Bir başarıyla kapatın', items:[
       '<strong>Yaptıklarının göster-anlatı,</strong> somut bir iltifat ve sırada ne olduğuna dair bir ipucu.',
       '<em>“Bugün ne yaptığına bir bak — bir dahaki sefere buna bir de puan sistemi ekleyeceğiz.”</em>'
     ]}
   ])}
  `},
  {t:'🛠️ Ekranı etkileşimli hissettiren araçlar', html:`
   ${iconGrid([
     {ic:'💬', html:`<strong>İkinci bir ses olarak sohbet.</strong> Utangaç öğrenciler kendilerini köşeye sıkışmış hissetmeden katılır. <em>“Fikrini yaz — hepsini okuyacağım.”</em>`},
     {ic:'👍', html:`<strong>Tepkiler ve hızlı anketler.</strong> <em>“Bir emojiyle göster: kolay mı, orta mı, zor mu?”</em>`},
     {ic:'🖥️', html:`<strong>Sırayla ekran paylaşımı.</strong> <em>“Kim projesini 30 saniyede göstermek ister?”</em> Teklif edin, zorlamayın.`},
     {ic:'1️⃣', html:`<strong>Her seferinde tek bir talimat — ve anlaşıldığını kontrol edin.</strong> Adımları üst üste yığmayın. Ardından sorun: <em>“İlk olarak ne yapacaksın?”</em> Bağlantı yavaş olduğunda sohbete yazılmış kısa bir liste işe yarar.`},
     {ic:'🎲', html:`<strong>Mini oyunlar ve hızlı meydan okumalar.</strong> 60 saniyelik bir bilgi yarışması ya da “ilk kim bulacak?” dikkati yeniden toplar.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>İkililer veya küçük gruplar.</strong> İnsanlar küçük bir grupta daha çok konuşur ve daha kişisel geri bildirim alır.`}
   ])}
  `},
  {t:'🎂 Yaşa göre uyarlayın', html:`
   ${dimTabs([
     {ic:'🧒', title:'6–8 yaş',
      intro:'Kısa turlar, hareket ve sürpriz. Onların enerjisi dersin ta kendisidir.',
      tips:[
       {ic:'🤸', html:`<strong>Hareket molaları.</strong> <em>“Ayağa kalk ve bana en iyi robot pozunu göster!”</em> — sonra klavyeye geri dönün.`},
       {ic:'⏲️', html:`<strong>10 dakikadan daha kısa turlar,</strong> her değişiklikte net bir “şimdi bunu yapıyoruz” ile.`},
       {ic:'🎁', html:`<strong>Çıkartmalar, puanlar, bir maskot</strong> — katıldıkları için küçük ve anında ödüller.`},
       {ic:'🧸', html:`<strong>Göster-anlat.</strong> <em>“Bize en sevdiğin oyuncağı ya da çizimi göster, sonra onu birlikte yapalım.”</em>`}
      ]},
     {ic:'🧑', title:'9–11 yaş',
      intro:'Görevler, zamanlayıcılar ve takımlar ekranı bir oyun gibi hissettirir.',
      tips:[
       {ic:'🎯', html:`<strong>Zamanlayıcılı mini görevler.</strong> <em>“Karakteri zıplatmak için 8 dakikan var. Hazır mısın?”</em>`},
       {ic:'🏁', html:`<strong>Takım yarışmaları.</strong> İkililer hatayı ilk bulmak için yarışır — dostça ve kısa.`},
       {ic:'🧩', html:`<strong>Aynı görev içinde tema seçimi</strong> — hedef aynı kalır, kostüm onlarındır.`},
       {ic:'🗳️', html:`<strong>Hızlı anketler</strong> — bir sonraki turun ne olacağına karar vermek için.`}
      ]},
     {ic:'🧑‍🎓', title:'12 yaş ve üzeri',
      intro:'Özerklik, anlam ve kendilerini rahat hissettikleri sınırlara saygı.',
      tips:[
       {ic:'🧭', html:`<strong>Plan konusunda söz hakkı verin.</strong> <em>“Bu kısım için 15 dakikamız var — A ile mi başlamak istersin, B ile mi?”</em>`},
       {ic:'🌍', html:`<strong>Becerinin gerçek kullanım alanlarını gösterin</strong> — bildikleri şeylerde.`},
       {ic:'🔒', html:`<strong>Kameraya saygı gösterin.</strong> Önce sohbetle katılımı önerin; kamerayı açmaya asla zorlamayın.`},
       {ic:'🗳️', html:`<strong>Anonim anketler</strong> — görüş toplamak için; ayrıca birbirlerinin çalışmalarını değerlendirmeleri.`}
      ]}
   ],'✅ Üç yaş grubunun hepsini gördünüz.')}
  `},
  {t:'🙋 Doğrudan sorular — baskı yaratmadan', html:`
   <div class="card"><p>Bir öğrenciye adıyla soru sormak işe yarar — utandırıcı olmayacağına güveniyorsa. Onu hazırlayın, kolay bir soruyla başlayın ve süreci adil hissettirin.</p></div>
   ${doavoid(
     ['Gruba, bir noktada herkese soracağınızı söyleyin — ve <em>“Bilmiyorum”</em> demenin de gayet iyi bir cevap olduğunu','Özgüven oluşturmak için kolay bir soruyla başlayın','Kişisel değil, adil hissettirmesi için rastgele bir seçici kullanın','Her katkıyı övün: <em>“Teşekkürler — bu, düşünmemize yardımcı oluyor.”</em>'],
     ['En sessiz öğrenciye habersizce zor bir soru sormak','Grubun önünde sert bir şekilde düzeltmek','Her seferinde yalnızca aynı hızlı öğrencilere sormak','Zor bir soruyu uyarmadan sormak — bunun yerine şunu deneyin: <em>“Bu biraz zor, ama denemek isteyen var mı?”</em>']
   )}
   ${co('co-star','🌱',`<p><strong>Bu neden işe yarar:</strong> öğrenciler kendilerini güvende hissettiklerinde katılır. Onları hazırlamak, kolay bir soruyla başlamak ve süreci adil tutmak, bir soruyu riskten çıkarıp bir davete dönüştürür.</p>`)}
  `}
 ],
 ix:{
  title:'Keyif alacakları dersi kurun',
  instr:'En iyi hamleyi seçin veya her alışkanlığı sınıflandırın. Son kontrol listesinin kilidini açmak için %70 gerekir.',
  items:[
   {type:'choice', prompt:`Dersin ortasında 9 yaşında bir öğrenci yorgun görünüyor ve sekme değiştirmeye başlıyor. En iyi hamle nedir?`, opts:[`Açıklamaya devam etmek — yetişir`,`Etkinliği değiştirmek: hızlı bir anket ya da kısa, zamanlayıcılı bir görev, ardından yeni bir tur`,`Ona dikkatini vermesini söylemek`], correct:1, fb:`Etkinlik değişikliği dikkati yeniden toplar. Odaklanmasını söylemek, ona odaklanması için bir neden vermez.`},
   {type:'sort', prompt:'Bu alışkanlık çevrim içi bir derse yardımcı mı olur, zarar mı verir?', card:`Etkinliği yaklaşık her 10 dakikada bir değiştirmek: açıkla, dene, paylaş.`, zones:[{label:'💎 Yardımcı olur', fb:'Doğru — kısa turlar, çevrim içi ortamda dikkati canlı tutmanın en güvenilir yollarından biridir.'},{label:'🗑️ Zarar verir', fb:'Tam değil — kısa turlar yardımcı olur; uzun ve tek etkinlikli bölümler öğrencileri kaybettirir.'}], correctZone:0},
   {type:'choice', prompt:`Çevrim içi bir derste talimatları nasıl verirsiniz?`, opts:[`Kimse beklemesin diye tüm adımları bir kerede`,`Her seferinde tek bir talimat, ardından kontrol: “İlk olarak ne yapacaksın?”`,`Bir kez, hızlıca söyleyip devam etmek`], correct:1, fb:`Üst üste yığılan talimatlar çevrim içi ortamda kaybolur. Tek bir adım ve bir kontrol sorusu, kafa karışıklığını erkenden yakalar.`},
   {type:'choice', prompt:`Utangaç, 13 yaşında bir öğrenci hiç sesli cevap vermiyor. En çok ne yardımcı olur?`, opts:[`Konuşana kadar her derste adıyla söz vermek`,`Önce sohbet aracılığıyla katılmasına izin vermek ve katkılarını övmek`,`Herkesin önünde kamerasını açmasını istemek`], correct:1, fb:`Ona rahat bir katılım yolu sunun — önce sohbet. Kamera daha sonra, o istediğinde gelebilir.`},
   {type:'sort', prompt:'Bu alışkanlık çevrim içi bir derse yardımcı mı olur, zarar mı verir?', card:`En sessiz öğrenciye habersizce en zor soruyu sormak.`, zones:[{label:'💎 Yardımcı olur', fb:'Tam değil — öğrenciyi köşeye sıkıştırır ve bir sonraki soruyu cevaplamasını daha da zorlaştırır.'},{label:'🗑️ Zarar verir', fb:'Doğru — kolay bir soruyla başlayın, onu hazırlayın ve seçimi adil hissettirin.'}], correctZone:1},
   {type:'choice', prompt:`7 yaşındaki bir çocuk için hangi açılış en iyi sonucu verir?`, opts:[`“Bugün değişkenleri öğreneceğiz.”`,`“Bugün bir robot sesini kaybetti — dersin sonunda ona sen ses vermiş olacaksın. Var mısın?”`,`“Dersi aç ve 1. alıştırmaya başla.”`], correct:1, fb:`Görevi olan bir hikâye dikkat çeker ve katılmak için bir neden verir. Doğrudan içeriğe atlamak, dikkatin en yüksek olduğu dakikaları boşa harcar.`}
  ]
 }
},
{id:'checklist', numLabel:'Son Kontrol Listesi', emoji:'✅', color:'var(--coral)',
 title:'Son Kontrol Listesi',
 desc:'Burada test yok — mini eğitimi kapatmadan önce temel noktaların bir özeti.',
 obj:'Aşağıdaki kontrol listesini gözden geçirin. Bu modül notlandırılmaz — okuyun, ardından mini eğitimi bitirin.',
 sections:[
  {t:'🛟 Bir iade talebi zaten varsa', html:`
   ${numlist([
     'Talebi öğrendiğim gün BO’da bir yorum bıraktım ve Takım Liderimi bilgilendirdim',
     'Bu öğrenciyle yaptığım bir sonraki ders gerçek bir kazanma girişimiydi — gerçek bir söz hakkı, görünür bir başarı, özel ilgi ve talepten hiç bahsetmeden',
     'Onayı asla teyit etmedim ve herhangi bir tutar konuşmadım — güvenli tek cümleyi kullandım ve gerisini Müşteri Hizmetleri’ne bıraktım'
   ])}
  `},
  {t:'🌱 Her derste', html:`
   ${numlist([
     'Herhangi bir tekniği denemeden önce, bu öğrenci için çevrim içi derslerde tam olarak neyin yanlış hissettirdiğini öğreniyorum',
     'Önce duyguyu kabul ediyor (“bu çok anlaşılır”), ancak ondan sonra yeniden çerçeveliyorum — çevrim içi dersin “bir o kadar iyi” olduğunu asla tartışmıyorum',
     'Yaşa uygun bir şekilde soruyorum: en küçükler için yüz seçme anketi, 9–11 yaş için 1–5 ölçeği, 12 yaş ve üzeri için özel mesaj veya anonim anket',
     'Her derse güçlü bir açılışla başlıyorum: bugünkü projeyle bağlantılı bir sürpriz, bir hikâye ya da bir soru',
     'Etkinliği yaklaşık her 10 dakikada bir değiştiriyorum (en küçüklerle daha sık): açıkla → dene → paylaş',
     'Herkesin katılmak için rahat bir yolu olsun diye sohbeti, tepkileri, anketleri ve sırayla ekran paylaşımını kullanıyorum',
     'Her seferinde tek bir talimat veriyor ve anlaşıldığını kontrol ediyorum',
     'Baskı yaratmadan doğrudan sorular soruyorum: önce kolay sorular, adil bir seçim yöntemi ve her cevaba olumlu geri bildirim',
     'Kısa ikili veya küçük grup anlarıyla sınıf arkadaşlarını birbirine bağlıyorum',
     'Bir öğrencinin çevrim içi formatı sevmediğini aynı gün BO’da bildiriyorum: ne söylediğini, ne gördüğümü, ne denediğimi',
     'Format veya grup değişikliğini asla vaat etmiyorum — BO’da öneriyor ve “ekibime soracağım” diyorum'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Mini eğitimin tamamı bu kadar.</strong> Hazır olduğunuzda devam edin — ardından ödevi kapatmak için LMS’deki DST’yi tamamlayın.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
