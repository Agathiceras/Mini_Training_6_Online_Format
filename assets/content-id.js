/* Mini_Training_6_Online_Format - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='id';
const CONTENT = {
  flag:'🇮🇩', dir:'ltr',
  ui:{
    heroCard1:"<b>Sesuai kecepatanmu.</b> Progresmu tersimpan di browser ini.",
    heroCard2:"<b>Termasuk latihan.</b> Setiap modul diakhiri dengan pengecekan singkat.",
    pbLabel:'modul selesai',
    tapOpen:'Ketuk untuk membuka',
    tapFlip:'Ketuk untuk membalik',
    lblSee:'Yang kamu lihat',
    lblDo:'Yang kamu lakukan',
    lblSay:'Yang bisa kamu katakan',
    lblReport:'Ke mana melapor',
    lblAvoid:'Hindari',
    lblTip:'Tips',
    stepOf:'Langkah {i} dari {n}',
    next:'Berikutnya',
    pageTitle:"Mini-Training · Format Online — Pelatihan Tutor Kodland",
    logoSub:'Departemen Pengembangan Tutor',
    heroEyebrow:"🎯 Mini-Training",
    heroTitle:"Membuat Pelajaran <span class=\"h-pill\">Online</span> Terasa Menyenangkan",
    heroIntro:"Kamu menerima pelatihan ini karena ada siswamu yang mengajukan refund karena tidak menyukai format online. Di sini kami akan menunjukkan apa yang bisa kamu lakukan sebagai tutor dan cara menangani situasi seperti ini.",
    heroWork:"Selesaikan 4 modul singkat. Untuk membuka modul berikutnya, Anda harus mendapatkan nilai minimal 70% pada evaluasi setiap modul. Total waktu yang dibutuhkan sekitar 30–35 menit.",
    startBtn:"🚀 Mulai Pelatihan",
    pathLabel:'Jalur belajarmu',
    devTitle:'Dev: buka semua modul untuk ditinjau',
    backToPath:'Kembali ke jalur',
    modulesPassed:'{done} / {total} modul lulus',
    moduleN:'Modul {n}',
    of:'dari',
    locked:'🔒 Terkunci',
    passedBadge:'✅ Lulus · {pct}%',
    reviewedBadge:'✅ Sudah ditinjau',
    startBadge:'▶ Mulai',
    reviewBadge:'▶ Tinjau',
    objective:'Tujuan',
    startCheck:'▶ Mulai cek modul',
    finishBtn:'▶ Selesaikan mini-training',
    doneBack:'✓ Selesai — kembali ke jalur',
    ixBadge:'📋 Cek modul — 70% untuk membuka modul berikutnya',
    ixItemBadge:'📋 Cek modul — soal {i} dari {n}',
    scoreSoFar:'Skor sementara: {c} / {t}',
    continue:'Lanjut →',
    sortWrong:'Belum tepat — jawaban yang benar adalah “{label}”.',
    resPassed:'Modul lulus!',
    resFailed:'Belum berhasil',
    resUnlocked:"Kamu sudah membuka modul berikutnya.",
    resDone:"Kamu sudah menyelesaikan mini-training ini.",
    resNeed:'Kamu butuh 70% untuk membuka modul berikutnya. Tinjau lagi bagian di atas, lalu coba cek ini sekali lagi.',
    resContinue:'Lanjut ke jalur belajar',
    resFinish:'Lanjut',
    resBack:'Kembali ke jalur',
    resReview:'Tinjau modul ini',
    doneEyebrow:'Mini-Training Selesai',
    doneTitle:'🎉 Selamat!',
    doneP1:"🎉 <strong>Selamat! Kamu sudah menyelesaikan mini-training ini.</strong>",
    doneP2:"Semuanya sudah selesai di sini! Silakan kembali ke halaman pelatihan di LMS tempat kamu membuka mini-training ini untuk menuntaskan tugasnya.",
    doneP3:"👉 <strong>Jika ada cek atau penilaian yang tercantum tepat di bawah pelatihan ini di LMS, pastikan kamu menyelesaikannya dan mencapai nilai kelulusan</strong> — jika tidak, tugasnya bisa tetap tercatat belum selesai.",
    doneP4:'Semoga sukses! ❤️',
    doneP5:'',
    devUnlockAlert:'Mode dev: semua modul sekarang terbuka untuk ditinjau.',
    devOn:'🔓 Mode dev AKTIF — semua modul terbuka',
    devOff:'🔒 Mode dev NONAKTIF — progres dihapus',
    devBadge:'🔓 MODE DEV',
    doLabel:'✅ Lakukan',
    avoidLabel:'🚫 Hindari',
    noticeLabel:'Perhatikan:',
    cvSee:'Yang kamu lihat:',
    cvDo:'Yang kamu lakukan:',
    dtExample:'Contoh dari kelas sungguhan',
    dtNext:'Berikutnya:',
    dtDone:"✅ Itu dia keempat area. Selanjutnya, klasifikasikan apa yang kamu lihat.",
    tlVideoTitle:'{label} — contoh dari kelas sungguhan',
    tlVideoMeta:'Tonton seperti apa fase ini dalam pelajaran sungguhan'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Pendahuluan', emoji:'🧩', color:'var(--coral)',
 title:'Kenapa Penting Memahaminya',
 desc:'Mengapa siswa yang bilang “aku tidak suka belajar online” masih bisa berubah pikiran, hingga do and don’ts jika permintaan refund sudah masuk',
 obj:'Memahami apa sebenarnya arti “aku nggak suka format online”, mengapa laporan di hari yang sama itu penting, dan apa persisnya yang harus (dan tidak boleh) dilakukan jika permintaan refund sudah ada.',
 sections:[
  {t:'Apa maksud sebenarnya dari “aku tidak suka belajar online”', html:`
   <div class="card"><p>Hampir tidak ada yang bilang “fokusku buyar setelah seharian menatap layar”. Mereka bilang <em>“online itu membosankan”</em>, <em>“aku nggak suka”</em> — lalu keluarganya meminta refund. Di balik satu kalimat itu biasanya ada hal-hal yang sangat berbeda:</p></div>
   ${iconGrid([
     {ic:'🥱', html:`<strong>Lelah menatap layar.</strong> Pelajarannya datang setelah seharian sekolah di depan layar, dan anaknya sudah kehabisan tenaga.`},
     {ic:'🫥', html:`<strong>Merasa sendirian.</strong> Tidak ada teman sekelas untuk berbagi pekerjaan, tidak ada yang diajak tertawa bersama.`},
     {ic:'📱', html:`<strong>Gangguan di rumah.</strong> Ponsel, game, hewan peliharaan, atau saudara hanya berjarak satu klik.`},
     {ic:'🙈', html:`<strong>Malu di depan kamera.</strong> Dia tidak mau terlihat atau berbicara di depan semua orang.`},
     {ic:'🔌', html:`<strong>Frustrasi dengan alatnya.</strong> Lag, audio yang tidak berfungsi, tombol yang tidak merespons.`},
     {ic:'👨‍👩‍👧', html:`<strong>Keluarga mengharapkan kelas tatap muka.</strong> Bagi mereka, online terasa “kurang nyata” — apa pun pendapat anaknya.`}
   ])}
   ${co('co-idea','💡',`<p><strong>Kamu tidak bisa mengubah formatnya — tapi kamu bisa mengubah bagaimana pelajaran terasa di dalamnya.</strong> Sebagian besar hal yang tidak disukai siswa dari pelajaran online berasal dari cara pelajarannya dijalankan, dan bagian itu milikmu.</p>`)}
  `},
  {t:'⏱️ Kuncinya adalah kecepatan — dan laporanmu', html:`
   <div class="card"><p>Kamu tidak memutuskan apakah siswa bisa pindah ke grup atau format lain. Tapi laporanmulah yang memulai percakapan itu, dan itu hanya berhasil jika sampai ke orang yang tepat <strong>sejak dini</strong>.</p></div>
   ${stepFlow([
     {ic:'👀', label:'Kamu melihat rasa tidak suka itu di kelas'},
     {ic:'📝', label:'Kamu melaporkannya di BO di hari yang sama'},
     {ic:'👩‍💼', label:'Team Leader-mu dan Client Service meninjau pilihannya'},
     {ic:'🔄', label:'Percakapan motivasi, grup atau format lain yang cocok untuknya (jika tersedia), atau kursus lain'}
   ])}
   ${co('co-danger','🚨',`<p><strong>Laporan yang terlambat menutup pintu.</strong> Begitu keluarga sudah memutuskan, sebagian besar pilihan sudah hilang. Laporan yang sama, jika ditulis di minggu-minggu pertama, bisa membuat seorang anak tetap di Kodland.</p>`)}
   ${co('co-ok','✅',`<p><strong>Selagi tim meninjau pilihannya, kelas tetap menjadi tanggung jawabmu.</strong> Modul 1 dan 2 menunjukkan cara mencari tahu apa yang mengganggu siswa, dan cara membangun pelajaran online yang dia nikmati.</p>`)}
  `},
  {t:'🛟 Jika permintaan refund sudah ada', html:`
   <div class="card"><p>Semua hal di atas adalah cara menyadari tanda ini sejak dini. Tapi mungkin kamu membuka pelatihan ini karena ada keluarga yang <strong>sudah</strong> mengajukan refund. Aturan di bawah ini berlaku apa pun alasannya. Baca dulu, lalu gunakan materi selanjutnya di pelatihan ini untuk memahami apa yang menyebabkannya dan apa yang masih bisa kamu lakukan di kelas.</p></div>
   ${co('co-idea','💡',`<p><strong>Permintaannya sendiri dibuat oleh Client Service, bukan oleh kamu</strong> — bagian itu bukan wewenangmu. Yang masih menjadi bagianmu adalah semua yang terjadi di kelas mulai sekarang, dan itu bukan hal kecil.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Jangan membicarakan permintaan refund itu sama sekali</strong> — tidak kepada anak, tidak kepada keluarga — kecuali Client Service secara jelas memintamu menyampaikan sesuatu yang spesifik. Tugasmu sekarang adalah pelajarannya, bukan percakapan itu.</p>`)}
  `},
  {t:'🎯 Pelajaran berikutnya adalah kesempatan untuk mempertahankannya', html:`
   <div class="card"><p>Mungkin kamu tidak punya kesempatan untuk mengubah hal lain. Perlakukan pelajaran berikutnya dengan anak ini sebagai momen penentu.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Beri dia giliran yang sungguhan.</strong> Bukan pertanyaan basa-basi — tapi momen nyata saat dia diperhatikan dan berhasil.`},
     {ic:'🏆', html:`<strong>Ciptakan keberhasilan yang cepat dan terlihat.</strong> Dia harus meninggalkan kelas dengan perasaan mampu, bukan tertinggal.`},
     {ic:'👀', html:`<strong>Perhatian yang spesifik</strong> — buat dia merasa diperhatikan karena sesuatu yang konkret, bukan sekadar dipuji secara umum.`},
     {ic:'🤐', html:`<strong>Jangan menyinggung permintaan refund</strong> — bahkan jika anak itu yang membahasnya, alihkan dengan hangat dan lanjutkan mengajar.`}
   ])}
  `},
  {t:'📮 Laporkan dengan cepat, dan ingat satu kalimat yang aman', html:`
   <div class="card"><p>Kamu bisa tahu bahwa ada permintaan refund dari komentar Client Service di profil anak di BO — tidak ada sistem otomatis yang memberitahumu. Begitu kamu tahu, apa yang kamu lihat di pelajaranmu adalah informasi yang tidak bisa didapatkan Client Service dengan cara lain.</p></div>
   ${numlist([
     'Tinggalkan komentar di BO pada hari yang sama berisi persis apa yang kamu lihat — tanggal dan detail, bukan kesan',
     'Sertakan kata-kata keluarga itu sendiri, apa adanya, jika kamu punya',
     'Libatkan Team Leader-mu pada hari yang sama',
     'Jangan pernah mengonfirmasi bahwa refund sudah disetujui, atau membahas nominal apa pun'
   ])}
   ${co('co-ok','✅',`<p><strong>Kalimat yang selalu aman untuk diucapkan:</strong> <em>“Tim Customer Service akan membantu Anda terkait hal ini.”</em> Di situlah bagianmu dalam percakapan berakhir — Client Service yang akan melanjutkannya.</p>`)}
  `},
  {t:'🌱 Pertahankan setelahnya', html:`
   <div class="card"><p>Entah permintaannya dibatalkan, anak itu tetap di grupmu, atau pindah ke tutor atau format lain, tetap berikan perhatian ekstra selama beberapa pelajaran berikutnya. Upaya mempertahankan yang hanya bertahan satu pelajaran lalu diam-diam kembali seperti biasa sering kali tidak berhasil sama sekali.</p></div>
  `}
 ]
},
{id:'diagnose', numLabel:'Modul 1', emoji:'🔍', color:'var(--coral)',
 title:'Cari Tahu Apa yang Mengganggunya — Lalu Ubah Cara Pandangnya',
 desc:'Cara mengetahui apa persisnya yang terasa tidak cocok dari pelajaran online, pertanyaan-pertanyaan yang bisa mengungkapnya sesuai usia, cara mengubah persepsinya, dan cara melaporkannya di BO.',
 obj:'Mengidentifikasi apa yang sebenarnya tidak disukai siswa dari format online, menanyakannya dengan cara yang sesuai usianya, memvalidasi lalu membingkai ulang perasaannya, dan melaporkan kasusnya di BO di hari yang sama.',
 sections:[
  {t:'🔍 Tanyakan dulu: apa persisnya yang terasa tidak cocok?', html:`
   <div class="card"><p>Sebelum mencoba teknik untuk meningkatkan keterlibatan, cari tahu <strong>bagian mana dari format online yang tidak cocok</strong>. Teknik untuk mengatasi rasa sendirian tidak akan membantu siswa yang lelah menatap layar. Anak-anak jarang mengatakannya dengan jelas, jadi kenali tanda-tandanya dari apa yang terlihat dan terdengar:</p></div>
   ${patternCards([
     {ic:'🥱', title:'Lelah dan terdistraksi', desc:'“Aku capek.” “Kelamaan.” Pandangan ke mana-mana, berganti-ganti tab, menguap.', note:'Masalah energi dan fokus. <strong>Ronde yang lebih singkat, gerakan, pergantian aktivitas.</strong>'},
     {ic:'🫥', title:'Sendirian, tidak terhubung', desc:'“Nggak ada yang bisa diajak ngobrol.” Kamera mati, diam, tidak ada reaksi.', note:'Masalah keterhubungan. <strong>Libatkan teman sekelas: berpasangan, show-and-tell, reaksi.</strong>'},
     {ic:'🙈', title:'Tidak nyaman di depan kamera', desc:'Tidak mau bicara atau menunjukkan wajahnya; menjawab lewat chat, atau tidak sama sekali.', note:'Masalah rasa aman. <strong>Cara-cara ikut serta yang tidak menekan.</strong>'},
     {ic:'🔌', title:'Frustrasi dengan alatnya', desc:'“Selalu lag.” “Aku nggak bisa dengar.” Menyerah setelah ada gangguan teknis.', note:'Masalah alat. <strong>Perbaiki dengan cepat, atau ikuti protokol masalah teknis (10 menit, lalu komunikasikan, dokumentasikan, eskalasikan).</strong>'}
   ],2)}
  `},
  {t:'Pertanyaan untuk menggali penyebabnya — sesuai usia', html:`
   <div class="card"><p>Ajukan <strong>pertanyaan terbuka, tanpa tekanan</strong>, dan beri siswa cara menjawab yang tidak membuatnya merasa disorot. Apa yang berhasil tergantung usianya:</p></div>
   ${dimTabs([
     {ic:'🧒', title:'Usia 6–8',
      intro:'Anak-anak kecil paling mudah menjawab lewat ekspresi wajah, gambar, dan pilihan — bukan lewat penjelasan.',
      tips:[
       {ic:'😀', html:`<strong>Polling pilih wajah.</strong> <em>“Tunjukkan dengan tanganmu atau emoji, gimana rasanya pelajaran hari ini — senang, biasa aja, atau ngantuk?”</em>`},
       {ic:'🌟', html:`<strong>Paling seru dan kurang seru.</strong> <em>“Bagian paling seru hari ini apa? Lalu bagian yang paling membosankan apa?”</em>`},
       {ic:'🎁', html:`<strong>Tongkat ajaib.</strong> <em>“Kalau kamu bisa mengubah satu hal dari kelas online kita, kamu mau ubah apa?”</em>`},
       {ic:'👂', html:`<strong>Dengarkan, jangan langsung memperbaiki.</strong> Ulangi apa yang dia katakan dan ucapkan terima kasih — lalu ubah satu hal kecil di pelajaran berikutnya, supaya dia melihat bahwa kamu mendengarkan.`}
      ]},
     {ic:'🧑', title:'Usia 9–11',
      intro:'Mereka bisa memberi nilai dan menjelaskan — asalkan terasa aman dan singkat.',
      tips:[
       {ic:'🔢', html:`<strong>Skala 1–5.</strong> <em>“Dari 1 sampai 5, seberapa kamu menikmati pelajaran online kita? Apa yang bisa membuatnya jadi 5?”</em>`},
       {ic:'🌟', html:`<strong>Bagian paling keren.</strong> <em>“Bagian paling keren dari kelas hari ini apa?”</em> Jika dia tidak bisa menyebutkan apa pun, itu sebuah tanda.`},
       {ic:'🔧', html:`<strong>Satu perubahan.</strong> <em>“Kalau kamu bisa mengubah satu hal dari pelajaran kita, kamu mau ubah apa?”</em>`},
       {ic:'🗳️', html:`<strong>Polling cepat di chat.</strong> <em>“Ketik A kalau kamu mau lebih banyak waktu untuk membuat sesuatu, B kalau kamu mau lebih banyak waktu bersama teman.”</em>`}
      ]},
     {ic:'🧑‍🎓', title:'Usia 12+',
      intro:`Siswa yang lebih besar tidak mau mengatakannya di depan semua orang. Beri mereka cara yang pribadi atau anonim.`,
      tips:[
       {ic:'🔒', html:`<strong>Pesan pribadi.</strong> <em>“Saya perhatikan kamu lebih pendiam akhir-akhir ini. Apakah ada hal dari pelajaran online yang mengganggumu? Ini cukup antara kita berdua saja.”</em>`},
       {ic:'🗳️', html:`<strong>Polling anonim.</strong> Minta seluruh grup melengkapi kalimat <em>“Aku akan lebih aktif ikut serta kalau…”</em> — ini menghilangkan rasa takut dihakimi.`},
       {ic:'🤝', html:`<strong>Tanyakan ide mereka,</strong> bukan keluhan mereka: <em>“Apa yang bisa membuat pelajaran kita lebih baik untukmu?”</em>`},
       {ic:'🙏', html:`<strong>Hargai jawabannya.</strong> Jangan pernah membantahnya — ucapkan terima kasih, dan tindak lanjuti satu hal.`}
      ]}
   ],'✅ Itu dia ketiga kelompok usia. Berikutnya: cara mengubah persepsinya.')}
   ${co('co-idea','🧠',`<p><strong>Mengapa ini berhasil.</strong> Pertanyaan terbuka dan format anonim menghilangkan tekanan sosial untuk menjawab di depan teman sekelas. Memberi masukan lewat kalimat “Aku akan lebih aktif ikut serta kalau…” sering kali lebih mudah daripada menyampaikannya secara langsung.</p>`)}
  `},
  {t:'🔁 Ubah persepsinya — validasi dulu, lalu bingkai ulang', html:`
   <div class="card"><p>Kamu tidak bisa membujuk seseorang untuk berhenti merasakan sesuatu. Urutan yang berhasil adalah: <strong>1. validasi</strong> (“itu masuk akal”), <strong>2. bingkai ulang</strong> (tunjukkan sisi lainnya, dengan jujur), <strong>3. coba sesuatu yang kecil</strong> di pelajaran berikutnya. Buka masing-masing:</p></div>
   ${accItem('🥱 “Bosan kalau di layar.”', `
     <p><strong>✅ Validasi:</strong> <em>“Kamu benar — menatap layar lama-lama memang bisa terasa membosankan.”</em></p>
     <p><strong>🔁 Bingkai ulang:</strong> <em>“Di sini kamu nggak cuma nonton — semua yang ada di layarmu adalah sesuatu yang kamu buat.”</em></p>
     <p><strong>🎯 Coba:</strong> di pelajaran berikutnya, tampilkan proyek milik siswa itu sendiri di layar dalam lima menit pertama.</p>`)}
   ${accItem('🫥 “Aku kangen teman-temanku / nggak ada yang bisa diajak ngobrol.”', `
     <p><strong>✅ Validasi:</strong> <em>“Itu masuk akal — membuat sesuatu bareng orang lain memang lebih seru.”</em></p>
     <p><strong>🔁 Bingkai ulang:</strong> <em>“Di kelas kita ada teman-teman yang suka hal yang sama denganmu. Yuk kita manfaatkan itu.”</em></p>
     <p><strong>🎯 Coba:</strong> tugas berpasangan selama dua menit atau show-and-tell: <em>“Tunjukkan bagian terbaikmu ke pasanganmu.”</em></p>`)}
   ${accItem('📱 “Aku nggak bisa fokus di rumah.”', `
     <p><strong>✅ Validasi:</strong> <em>“Di rumah memang banyak hal yang menggoda — itu wajar.”</em></p>
     <p><strong>🔁 Bingkai ulang:</strong> <em>“Kita akan kerja dalam ronde-ronde singkat, jadi kamu cukup fokus sebentar-sebentar saja.”</em></p>
     <p><strong>🎯 Coba:</strong> ganti aktivitas kira-kira setiap 10 menit, dan beri tahu mereka lebih dulu apa ronde berikutnya.</p>`)}
   ${accItem('🙈 “Aku nggak suka bicara di depan kamera.”', `
     <p><strong>✅ Validasi:</strong> <em>“Itu sama sekali nggak apa-apa — banyak orang yang merasa begitu.”</em></p>
     <p><strong>🔁 Bingkai ulang:</strong> <em>“Kamu bisa ikut lewat chat atau dengan membagikan layarmu dulu. Kameranya bisa nanti, kalau kamu mau.”</em></p>
     <p><strong>🎯 Coba:</strong> pertanyaan mudah yang dijawab lewat chat, lalu pesan pribadi “ide yang bagus” setelahnya.</p>`)}
   ${doavoid(
     ['Validasi dulu: <em>“Itu masuk akal.”</em>','Jujurlah — bingkai ulang, jangan “jualan”','Janjikan hanya yang bisa kamu tepati: <em>“Pelajaran berikutnya kita mulai dengan membuat sesuatu.”</em>','Ubah satu hal kecil di pelajaran berikutnya, supaya mereka melihat bahwa kamu mendengarkan'],
     ['Membantah bahwa <em>“online itu sama bagusnya”</em>','Mengabaikannya: <em>“sekarang semua orang belajar online”</em>','Menjanjikan perubahan grup atau format','Bertanya di depan seluruh grup']
   )}
  `},
  {t:'📝 Laporkan di BO — di hari yang sama', html:`
   <div class="card"><p>Siswa yang terus bilang tidak suka pelajaran online, atau yang tetap diam dan tidak terhubung, berisiko mengajukan refund. <strong>Laporkan di hari yang sama</strong> — tim hanya bisa meninjau pilihannya (grup atau format lain yang cocok untuknya jika tersedia, percakapan motivasi, kursus lain) selagi keluarga masih menimbang keputusannya.</p></div>
   <div class="card" style="background:var(--surface2)"><h4>📨 Seperti apa laporan yang berguna — salin dan lengkapi</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Siswa:</strong> [nama] · <strong>Grup / format:</strong> [mis. grup 6 orang, Selasa pukul 18.00] · <strong>Pelajaran:</strong> [tanggal]<br>
   <strong>Yang dia katakan:</strong> [kata-katanya sendiri — mis. “online itu membosankan, nggak ada yang bisa diajak ngobrol”]<br>
   <strong>Yang saya lihat:</strong> [kamera, mikrofon, chat, fokus — dan apakah ada perubahan dibanding sebelumnya]<br>
   <strong>Yang menurut saya mengganggunya:</strong> ☐ lelah / terdistraksi &nbsp; ☐ sendirian &nbsp; ☐ tidak nyaman di depan kamera &nbsp; ☐ frustrasi dengan alatnya<br>
   <strong>Yang sudah saya coba:</strong> [mis. ronde singkat, tugas berpasangan, partisipasi lewat chat terlebih dahulu]<br>
   <strong>Yang bisa membantu — rekomendasi saya, keputusan Anda:</strong> [mis. grup yang lebih kecil, percakapan motivasi, kursus lain]</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Laporkan kasus</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Laporkan kasus" loading="lazy"></iframe></div></div>
   ${co('co-idea','💬',`<p><strong>Dengan keluarga:</strong> fokus pada proses belajarnya, bukan soal pindah grup atau format. Jangan menjanjikan apa pun soal grup atau format.</p>`)}
  `}
 ],
 ix:{
  title:'Apa yang mengganggunya — dan apa yang perlu dilakukan pertama kali',
  instr:'Kelompokkan kutipannya dan pilih langkah terbaik. 70% untuk membuka modul berikutnya.',
  items:[
   {type:'sort', prompt:'Apa yang mengganggu siswa ini?', card:`“Nggak ada yang bisa diajak ngobrol.”`, zones:[{label:'🥱 Lelah dan terdistraksi', fb:'Belum tepat — siswa ini menggambarkan rasa sendirian, bukan rasa lelah.'},{label:'🫥 Sendirian, tidak terhubung', fb:'Benar — ini masalah keterhubungan. Libatkan teman sekelas lewat tugas berpasangan, show-and-tell, dan reaksi.'},{label:'🙈 Tidak nyaman di depan kamera', fb:'Belum tepat — ini tentang tidak adanya orang untuk berbagi, bukan tentang dilihat orang lain.'},{label:'🔌 Frustrasi dengan alatnya', fb:'Belum tepat — tidak ada yang berkaitan dengan alat di sini.'}], correctZone:1},
   {type:'sort', prompt:'Apa yang mengganggu siswa ini?', card:`Kameranya mati, dia tidak pernah bicara, dan hanya mengetik di chat.`, zones:[{label:'🥱 Lelah dan terdistraksi', fb:'Belum tepat — mengetik di chat menunjukkan dia terlibat, hanya saja tidak bersuara.'},{label:'🫥 Sendirian, tidak terhubung', fb:'Belum tepat — dia ikut serta lewat chat.'},{label:'🙈 Tidak nyaman di depan kamera', fb:'Benar — masalah rasa aman. Mulailah dengan cara ikut serta yang tidak menekan: chat dulu, lalu berbagi layar, dan kamera saat dia sudah siap.'},{label:'🔌 Frustrasi dengan alatnya', fb:'Belum tepat — tidak ada tanda masalah teknis.'}], correctZone:2},
   {type:'choice', prompt:`Seorang siswa bilang: “Pelajaran online itu membosankan.” Apa langkah pertama yang terbaik?`, opts:[`Menjelaskan bahwa pelajaran online sama bagusnya dengan pelajaran tatap muka`,`Memperpanjang penjelasanmu supaya pelajarannya lebih menarik`,`Menanyakan apa persisnya yang terasa membosankan — durasinya, tugasnya, layarnya, atau rasa sendirian?`], correct:2, fb:`Sebelum teknik apa pun, cari tahu bagian mana yang tidak cocok. “Membosankan” bisa berarti lelah, kesepian, malu, atau frustrasi — dan masing-masing punya solusi yang berbeda.`},
   {type:'sort', prompt:'Tepat atau kurang tepat? Apakah ini umpan balik yang respons yang baik?', card:`🔁 Bingkai ulang: “Di sini kamu tidak hanya menonton — semua yang ada di layarmu adalah hasil buatanmu sendiri.”`, zones:[{label:'💎 Harta karun — memvalidasi dan membingkai ulang', fb:'Benar — respons ini memvalidasi perasaannya terlebih dahulu, lalu menawarkan bingkai ulang yang jujur.'},{label:'🗑️ Sampah — mengabaikan', fb:'Belum tepat — respons ini memvalidasi dulu, lalu membingkai ulang. Itulah urutan yang benar.'}], correctZone:0},
   {type:'choice', prompt:`Seorang anak berusia 12 tahun tampak tidak terhubung. Cara bertanya mana yang membuatnya bisa menjawab dengan jujur?`, opts:[`Bertanya dengan lantang kepada seluruh grup: “Siapa yang merasa pelajaran online membosankan?”`,`Meminta orang tuanya untuk berbicara dengannya`,`Pesan pribadi, atau polling anonim: “Aku akan lebih aktif ikut serta kalau…”`], correct:2, fb:`Siswa yang lebih besar jarang mengatakannya di depan teman sebaya. Pesan pribadi atau polling anonim menghilangkan tekanan sosial.`},
   {type:'choice', prompt:`Kapan kamu melaporkan ketidaksukaan siswa terhadap format online di BO?`, opts:[`Di hari yang sama — berisi apa yang dia katakan, apa yang kamu lihat, dan apa yang sudah kamu coba`,`Setelah sebulan, jika tidak ada perbaikan`,`Hanya jika orang tuanya mengeluh`], correct:0, fb:`Pilihan seperti grup atau format lain hanya bisa dipertimbangkan selagi keluarga masih menimbang keputusannya. Fakta, kata-kata siswa, dan apa yang sudah kamu coba membuat tim bisa bertindak cepat.`}
  ]
 }
},
{id:'engage', numLabel:'Modul 2', emoji:'🎬', color:'var(--coral)',
 title:'Bangun Pelajaran Online yang Mereka Nikmati',
 desc:'Teknik untuk menjaga perhatian siswa dan membuat layar terasa seperti ruang belajar bersama, serta strategi untuk mendukung siswa yang mengalami kesulitan fokus, memiliki lingkungan rumah yang penuh distraksi, belum menguasai keterampilan dasar komputer, atau menggunakan komputer yang lambat.',
 obj:'Mengajar kelas online yang mampu menjaga perhatian siswa, memberikan kesempatan kepada setiap siswa untuk berpartisipasi dengan nyaman, membangun interaksi antar teman, dan mengakhiri kelas dengan sebuah pencapaian dengan menyesuaikan kegiatan berdasarkan usia kelompok. Selain itu, Anda akan belajar mendukung siswa yang mengalami kesulitan fokus, memiliki lingkungan rumah yang penuh gangguan, belum menguasai keterampilan dasar komputer, atau menggunakan komputer yang lambat.',
 sections:[
  {t:'Empat hal yang membuat pelajaran terasa memotivasi', html:`
   <div class="card"><p>Di kelas online, tidak ada yang membantumu menjaga perhatian: tidak ada ruang fisik, tidak ada teman sekelas di samping mereka, dan setiap gangguan hanya berjarak satu klik. Penelitian tentang motivasi memberikan checklist sederhana — <strong>model ARCS</strong> dari John Keller (1987). Tanyakan pada dirimu sendiri, sebelum setiap pelajaran, apakah keempatnya sudah ada:</p></div>
   ${iconGrid([
     {ic:'👀', html:`<strong>Attention (Perhatian).</strong> Kejutan, pertanyaan, tantangan singkat, dan pergantian format. <em>“Ada bug yang kabur dari game — siapa yang bisa bantu aku menangkapnya?”</em>`},
     {ic:'🔗', html:`<strong>Relevance (Relevansi).</strong> Hubungkan pelajaran dengan hal yang mereka pedulikan: game mereka, serial mereka, hal yang ingin mereka buat.`},
     {ic:'💪', html:`<strong>Confidence (Kepercayaan diri).</strong> Langkah-langkah kecil, langkah berikutnya yang jelas, dan dukungan saat mereka buntu — supaya mereka yakin bisa melakukannya.`},
     {ic:'🏆', html:`<strong>Satisfaction (Kepuasan).</strong> Pujian yang spesifik dan hasil jadi yang bisa ditunjukkan di akhir.`}
   ])}
   ${bigStat('≈ 10 mnt', `<p>Perhatian mulai buyar setelah sekitar <strong>sepuluh menit</strong>. Rencanakan pergantian aktivitas di sekitar waktu itu — dan buat rondenya lebih singkat lagi untuk siswa yang paling kecil.</p>`)}
  `},
  {t:'🎬 Pelajarannya, menit demi menit', html:`
   ${timeline([
     {ic:'🎬', label:'Buka dengan kuat — tiga menit pertama', items:[
       '<strong>Mulailah dengan kejutan, cerita, atau pertanyaan</strong> yang berkaitan dengan proyek hari ini — pembukaan menentukan suasana seluruh pelajaran.',
       '<em>“Hari ini ada robot yang kehilangan suaranya — di akhir pelajaran, kalian yang akan memberinya suara. Siapa yang ikut?”</em>'
     ]},
     {ic:'⏱️', label:'Bekerja dalam ronde-ronde singkat', items:[
       '<strong>Ganti aktivitas kira-kira setiap 10 menit:</strong> jelaskan → coba → bagikan. Beri tahu mereka apa ronde berikutnya.',
       '<em>“Ronde pertama: lima menit untuk mencobanya. Ronde kedua: tunjukkan ke pasanganmu.”</em>'
     ]},
     {ic:'🙋', label:'Berinteraksi — setiap beberapa menit', items:[
       '<strong>Beri semua orang cara untuk ikut serta:</strong> chat, reaksi, polling cepat, atau berbagi layar secara bergiliran.',
       '<em>“Ketik tebakanmu di chat — nanti saya bacakan semuanya!”</em>'
     ]},
     {ic:'👥', label:'Hubungkan teman sekelas', items:[
       '<strong>Momen berpasangan selama dua menit</strong> atau tugas kelompok kecil, supaya layar terasa seperti ruang bersama.',
       '<em>Tunjukkan bagian terbaik proyekmu ke pasanganmu — lalu ceritakan ke saya apa yang kamu suka dari proyek temanmu.”</em>'
     ]},
     {ic:'🏁', label:'Tutup dengan keberhasilan', items:[
       '<strong>Show-and-tell dari apa yang mereka buat,</strong> pujian yang spesifik, dan sedikit bocoran tentang apa yang akan datang.',
       '<em>Lihat apa yang sudah kalian buat hari ini! Di pertemuan berikutnya, kita akan menambahkan skor ke game ini.”</em>'
     ]}
   ])}
  `},
  {t:'🛠️ Alat-alat yang membuat layar terasa interaktif', html:`
   ${iconGrid([
     {ic:'💬', html:`<strong>Chat sebagai suara kedua.</strong> Siswa yang pemalu bisa ikut serta tanpa merasa disorot. <em>“Ketik idemu — nanti aku bacakan semuanya.”</em>`},
     {ic:'👍', html:`<strong>Reaksi dan polling cepat.</strong> <em>“Tunjukkan dengan emoji: mudah, sedang, atau sulit?”</em>`},
     {ic:'🖥️', html:`<strong>Berbagi layar secara bergiliran.</strong> <em>“Siapa yang mau menunjukkan proyeknya dalam 30 detik?”</em> Tawarkan, jangan paksa.`},
     {ic:'1️⃣', html:`<strong>Satu instruksi dalam satu waktu — dan cek pemahamannya.</strong> Jangan menumpuk langkah. Lalu tanyakan: <em>“Apa yang akan kamu lakukan pertama kali?”</em> Daftar singkat yang ditulis di chat membantu saat koneksi lambat.`},
     {ic:'🎲', html:`<strong>Mini game dan tantangan cepat.</strong> Kuis 60 detik atau “siapa yang bisa menemukannya duluan?” menyegarkan kembali perhatian.`},
     {ic:'🧑‍🤝‍🧑', html:`<strong>Berpasangan atau kelompok kecil.</strong> Orang lebih banyak bicara di kelompok kecil, dan mendapat umpan balik yang lebih personal.`}
   ])}
  `},
  {t:'🎂 Sesuaikan dengan usia', html:`
   ${dimTabs([
     {ic:'🧒', title:'Usia 6–8',
      intro:'Ronde singkat, gerakan, dan kejutan. Energi mereka adalah pelajarannya.',
      tips:[
       {ic:'🤸', html:`<strong>Jeda untuk bergerak.</strong> <em>“Ayo berdiri dan tunjukkan gaya robot terbaikmu!”</em> — lalu kembali ke keyboard.`},
       {ic:'⏲️', html:`<strong>Ronde yang lebih singkat dari 10 menit,</strong> dan sampaikan dengan jelas “sekarang kita akan…” setiap kali berganti aktivitas.`},
       {ic:'🎁', html:`<strong>Stiker, poin, maskot</strong> — hadiah kecil dan langsung karena sudah ikut serta.`},
       {ic:'🧸', html:`<strong>Show-and-tell.</strong> <em>“Tunjukkan mainan atau gambar favoritmu, lalu kita buat bersama.”</em>`}
      ]},
     {ic:'🧑', title:'Usia 9–11',
      intro:'Ronde singkat, gerakan, dan kejutan. Manfaatkan energi mereka dalam pelajaran.',
      tips:[
       {ic:'🎯', html:`<strong>Misi mini dengan penghitung waktu.</strong> <em>“Kalian punya 8 menit untuk membuat karakternya melompat. Siap?”</em>`},
       {ic:'🏁', html:`<strong>Tantangan tim.</strong> Pasangan berlomba menemukan bug lebih dulu — bersahabat dan singkat.`},
       {ic:'🧩', html:`<strong>Pilihan tema</strong> di dalam tugas yang sama — tujuannya tetap sama, tapi temanya bebas mereka pilih.`},
       {ic:'🗳️', html:`<strong>Polling cepat</strong> untuk memutuskan ronde berikutnya.`}
      ]},
     {ic:'🧑‍🎓', title:'Usia 12+',
      intro:'Otonomi, relevansi, dan menghargai tingkat kenyamanan mereka.',
      tips:[
       {ic:'🧭', html:`<strong>Beri mereka suara dalam rencananya.</strong> <em>“Kita punya 15 menit untuk bagian ini — mau mulai dengan A atau B?”</em>`},
       {ic:'🌍', html:`<strong>Tunjukkan penggunaan nyata</strong> dari keterampilan itu, dalam hal-hal yang mereka kenal.`},
       {ic:'🔒', html:`<strong>Hargai pilihan mereka soal kamera.</strong> Tawarkan partisipasi lewat chat terlebih dahulu; jangan pernah memaksa menyalakan kamera.`},
       {ic:'🗳️', html:`<strong>Polling anonim</strong> untuk mengumpulkan pendapat, dan saling mengulas hasil kerja.`}
      ]}
   ],'✅ Itu dia ketiga kelompok usia.')}
  `},
  {t:'🙋 Pertanyaan langsung — tanpa tekanan', html:`
   <div class="card"><p>Menunjuk siswa dengan menyebut namanya bisa efektif — asalkan mereka yakin tidak akan dipermalukan. Siapkan mereka, mulai dari yang mudah, dan buat terasa adil.</p></div>
   ${doavoid(
     ['Beri tahu grup bahwa kamu akan bertanya kepada semua orang suatu saat nanti — dan bahwa <em>“aku nggak tahu”</em> adalah jawaban yang tidak apa-apa','Mulailah dengan pertanyaan mudah untuk membangun rasa percaya diri','Gunakan pemilih acak supaya terasa adil, bukan personal','Puji setiap kontribusi: <em>“Terima kasih — itu membantu kita berpikir.”</em>'],
     ['Tiba-tiba menunjuk siswa yang paling pendiam dengan pertanyaan sulit','Mengoreksi dengan keras di depan grup','Hanya bertanya kepada siswa yang sama-sama cepat setiap kali','Melontarkan pertanyaan sulit tanpa peringatan — coba: <em>“Yang ini agak susah, tapi ada yang mau mencoba?”</em>']
   )}
   ${co('co-star','🌱',`<p><strong>Mengapa ini berhasil:</strong> siswa ikut serta saat mereka merasa aman. Menyiapkan mereka, memulai dari yang mudah, dan menjaga keadilan mengubah pertanyaan dari sebuah risiko menjadi sebuah ajakan.</p>`)}
  `},
  {t:'🧠 Siswa dengan kesulitan fokus, ADHD, atau kecemasan', html:`
   <div class="card"><p>Bagi sebagian siswa, kalimat "Saya tidak bisa belajar online" sebenarnya berarti <em>"Saya tidak bisa fokus di depan layar selama itu"</em>. ADHD, autisme, atau kecemasan dapat membuat hal ini semakin sulit. Keluarga mungkin belum memberitahu Anda tentang kondisi tersebut, atau anak mungkin belum pernah menjalani pemeriksaan. <strong>Anda tidak memerlukan diagnosis untuk menyesuaikan cara mengajar</strong>, dan Anda juga tidak boleh mendiagnosis siswa. Yang Anda perlukan adalah kelas yang dibagi menjadi beberapa aktivitas kecil, memiliki struktur yang jelas, dan memberikan kesempatan bagi siswa untuk bergerak.</p></div>
   ${iconGrid([
     {ic:'🎯', html:`<strong>Tugas-tugas kecil dengan hasil yang terlihat.</strong> <em>"Untuk sekarang, kerjakan bagian latar belakangnya saja. Beri tahu saya kalau sudah selesai."</em> Setiap tugas kecil yang berhasil diselesaikan merupakan pencapaian nyata.`},
     {ic:'1️⃣', html:`<strong>Instruksi singkat, diberikan satu per satu.</strong> Ulangi tujuan sebelum memulai setiap aktivitas.`},
     {ic:'✅', html:`<strong>Daftar tugas yang terlihat</strong> di layar atau chat: apa yang sudah selesai dan apa yang harus dilakukan selanjutnya. Daftar ini membantu siswa mengingat langkah berikutnya ketika perhatiannya mulai teralihkan.`},
     {ic:'⏲️', html:`<strong>Jika siswa menyukainya, jadikan timer bagian dari permainan,</strong> misalnya: <em>"Ayo, coba selesaikan sebelum waktunya habis!"</em> Jika tekanan waktu membuat siswa frustrasi, tampilkan timer hanya sebagai panduan visual.`},
     {ic:'🤸', html:`<strong>Berikan kesempatan untuk bergerak, bukan meminta siswa duduk diam.</strong> <em>"Mau berdiri dulu 10 detik, lalu kita lanjut lagi?"</em> Istirahat singkat untuk bergerak dapat membantu mengembalikan fokus lebih baik daripada meminta siswa untuk tetap tenang dan tidak bergerak.`},
     {ic:'↩️', html:`<strong>Arahkan kembali perhatian siswa dengan lembut.</strong> Ketika siswa mulai membicarakan hal lain, Anda bisa mengatakan: <em>"Wah, ide yang bagus! Kita simpan dulu untuk nanti."</em> Kemudian, berikan langkah selanjutnya yang jelas dan konkret, bukan sekadar mengatakan "fokus".`},
     {ic:'🔁', html:`<strong>Pertahankan struktur yang sama dan beri tahu siswa sebelum ada perubahan.</strong> <em>"5 menit lagi, kita akan beralih ke..."</em> Rutinitas yang dapat diprediksi membantu mengurangi kecemasan, terutama pada siswa autistik.`},
     {ic:'👀', html:`<strong>Berikan jeda untuk mengistirahatkan mata.</strong> Mengalihkan pandangan dari layar sejenak di antara aktivitas dapat membantu siswa yang merasa tidak nyaman jika terlalu lama menatap layar.`}
   ])}
   ${co('co-cute','🫂',`<p><strong>Ketika situasi mulai sulit dikendalikan</strong> — misalnya siswa frustrasi, menangis, atau berhenti berpartisipasi — turunkan volume suara dan perlambat tempo mengajar. Akui perasaan siswa tanpa menghakimi (<em>"Saya tahu ini terasa sulit buatmu sekarang"</em>), berikan langkah konkret alih-alih hanya mengatakan "tenanglah", lalu kembali ke langkah terakhir yang berhasil dilakukan siswa. Materi pelajaran bisa menunggu sampai siswa merasa lebih tenang.</p>`)}
  `},
  {t:'🏠 Lingkungan rumah: bekerja sama dengan keluarga', html:`
   <div class="card"><p>Dalam kelas online, rumah anak menjadi ruang kelasnya. Ponsel di atas meja, TV yang menyala di latar belakang, atau saudara yang bermain di dekatnya dapat mengganggu kelas, bahkan yang sudah dipersiapkan dengan baik. Anda tidak dapat mengendalikan lingkungan rumah, tetapi Anda bisa <strong>meminta bantuan keluarga</strong> dengan ramah sambil memberikan saran yang jelas.</p></div>
   ${patternCards([
     {ic:'🪑', title:'Gunakan tempat tenang yang sama', desc:'Gunakan tempat yang sama untuk setiap kelas, jauh dari TV dan area rumah yang paling ramai.', note:'Rutinitas membantu siswa menjaga fokus.'},
     {ic:'🎧', title:'Headphone', desc:'Mengurangi suara bising dari sekitar dan membantu siswa mendengar tutor dengan lebih jelas.', note:'Headphone sederhana pun sudah cukup.'},
     {ic:'📱', title:'Jauhkan ponsel dari jangkauan', desc:'Ponsel harus berada di luar jangkauan siswa selama kelas berlangsung, dan aplikasi serta tab lain harus ditutup.', note:'Kalau ponsel masih mudah diraih, artinya masih terlalu dekat.'},
     {ic:'👋', title:'Orang tua mendampingi — terutama di awal', desc:'Untuk siswa yang masih sangat kecil, sebaiknya ada orang dewasa di dekatnya selama beberapa menit pertama untuk membantu persiapan.', note:'Bantuan hanya untuk persiapan, bukan untuk mengerjakan tugas.'}
   ],2)}
   ${co('co-idea','👪',`<p><strong>Bagikan pengamatan, bukan penilaian.</strong> Mengatakan <em>"Hari ini saya perhatikan dia jauh lebih fokus di paruh kedua kelas, setelah istirahat singkat"</em> dapat membuka percakapan. Sebaliknya, mengatakan <em>"Dia tidak pernah memperhatikan"</em> justru menutup percakapan.</p>`)}
  `},
  {t:'⌨️ Keterampilan dasar komputer dan komputer yang lambat', html:`
   <div class="card"><p>Kelas online mengharuskan anak menggunakan komputer sekaligus mengikuti materi pelajaran. Siswa yang masih belajar mengetik, menyeret dan melepas elemen (drag and drop), menyalin dan menempel, atau berpindah antarjendela — atau yang menggunakan komputer lambat — bisa menghabiskan seluruh waktu kelas untuk mengatasi masalah komputer, bukan untuk belajar. Akibatnya, keluarga mungkin menyimpulkan bahwa <em>"kelas online tidak cocok untuknya"</em>.</p></div>
   ${symCards([
     {ic:'🔍', title:'Tanda-tanda yang perlu diperhatikan', sub:'Di pelajaran-pelajaran pertama',
      see:`Mencari-cari setiap tombol di keyboard sebelum menekannya · Tidak bisa menyeret dan melepas elemen, mengklik kanan, menyalin, atau menempel · Bingung saat berpindah antarjendela atau tab · Kesulitan membagikan layar · Memahami tugasnya, tetapi tidak pernah selesai karena kesulitan mengoperasikan komputer.`,
      tip:`Minta siswa membagikan layarnya dan amati <em>cara</em> kerjanya. Yang tampak seperti kurang minat sering kali sebenarnya adalah kesulitan menggunakan komputer.`},
     {ic:'🧑‍🏫', title:'Apa yang harus dilakukan selama kelas',
      do:`<ul><li><strong>Tunjukkan setiap langkah secara perlahan, pastikan kursor Anda terlihat</strong> saat menjelaskan setiap klik, dan perbesar tampilan saat membagikan layar.</li><li><strong>Berikan instruksi satu per satu, lalu cek:</strong> <em>"Coba tunjukkan layarmu. Sekarang kamu sudah sampai mana?"</em></li><li><strong>Luangkan dua menit untuk latihan keterampilan dasar:</strong> menyalin dan menempel, menyeret elemen, menyimpan file, dan berpindah antarjendela.</li><li><strong>Bagikan pintasan keyboard melalui chat:</strong> Ctrl+C, Ctrl+V, Ctrl+Z, Ctrl+S, dan Alt+Tab (di Mac, gunakan Cmd sebagai pengganti Ctrl/Alt).</li><li><strong>Apresiasi juga keberhasilan siswa dalam menggunakan komputer:</strong> <em>"Kamu berhasil membagikan layar sendiri!"</em></li></ul>`,
      avoid:`Mengambil alih kendali layar siswa atau mengerjakan tugas untuk mereka.`},
     {ic:'👪', title:'Libatkan orang tua dalam persiapan',
      do:`Sebelum kelas, minta keluarga memeriksa apakah Chrome sudah terinstal dan diperbarui, program yang diperlukan untuk kursus sudah terinstal, informasi login sudah tersimpan, dan tautan kelas mudah ditemukan. Untuk siswa yang masih sangat kecil, kehadiran orang tua di dekat mereka selama beberapa menit pertama dapat membantu proses persiapan.`},
     {ic:'🐢', title:'Ketika komputer berjalan lambat',
      do:`<ul><li><strong>Minta siswa atau keluarga menutup program dan tab lain</strong> sebelum kelas serta menggunakan Google Chrome. Minta juga anggota keluarga lain untuk tidak memakai Wi-Fi secara berlebihan selama kelas berlangsung.</li><li><strong>Blender berjalan lambat?</strong> Gunakan panduan performa Blender di wiki untuk membantu siswa mengatur programnya. Panduan performa juga tersedia di beberapa pelajaran pertama kursus.</li><li><strong>Siswa sama sekali tidak bisa menjalankan program kursus?</strong> Usahakan agar kelas tetap bermanfaat: lakukan demonstrasi dengan membagikan layar Anda dan ajukan pertanyaan yang bisa dijawab siswa secara lisan. Setelah itu, beri tahu Team Leader Anda. Departemen Teaching dan Sales akan menentukan bagaimana siswa dapat melanjutkan kursus.</li></ul>`,
      avoid:`Meminta keluarga membeli komputer baru atau menjanjikan pergantian kursus.`},
     {ic:'📝', title:'Ketika masalahnya tidak bisa diatasi dalam kelas kelompok',
      do:`Tinggalkan komentar di BO tentang apa yang Anda amati dan solusi apa saja yang sudah dicoba, lalu beri tahu Team Leader Anda. Anda dapat mengajukan permintaan kelas tambahan agar siswa bisa berlatih keterampilan dasar, tetapi keputusan akhirnya tetap berada di tangan Team Leader Anda.`,
      avoid:`Menawarkan kelas tambahan atau format kelas yang berbeda secara langsung kepada keluarga.`}
   ])}
  `}
 ],
 ix:{
  title:'Bangun pelajaran yang mereka nikmati',
  instr:'Pilih langkah terbaik atau kelompokkan setiap kebiasaan. 70% untuk membuka checklist akhir.',
  items:[
   {type:'choice', prompt:`Di tengah pelajaran, seorang anak berusia 9 tahun tampak lelah dan mulai berganti-ganti tab. Apa langkah terbaik?`, opts:[`Terus menjelaskan — nanti dia juga bisa mengejar`,`Ganti aktivitasnya: polling cepat atau misi singkat dengan penghitung waktu, lalu ronde baru`,`Menyuruhnya memperhatikan`], correct:1, fb:`Pergantian aktivitas menyegarkan kembali perhatian. Menyuruhnya fokus tidak memberinya alasan untuk fokus.`},
   {type:'sort', prompt:'Apakah kebiasaan ini membantu atau merugikan pelajaran online?', card:`Mengganti aktivitas kira-kira setiap 10 menit: jelaskan, coba, bagikan.`, zones:[{label:'💎 Membantu', fb:'Benar — ronde singkat adalah salah satu cara paling andal untuk menjaga perhatian di kelas online.'},{label:'🗑️ Merugikan', fb:'Belum tepat — ronde singkat itu membantu; satu aktivitas panjang tanpa jeda justru membuat siswa kehilangan perhatian.'}], correctZone:0},
   {type:'choice', prompt:`Bagaimana cara memberikan instruksi di pelajaran online?`, opts:[`Semua langkah sekaligus, supaya tidak ada yang perlu menunggu`,`Satu instruksi dalam satu waktu, lalu cek: “Apa yang akan kamu lakukan pertama kali?”`,`Sampaikan sekali, dengan cepat, lalu lanjut`], correct:1, fb:`Instruksi yang bertumpuk mudah hilang di kelas online. Satu langkah ditambah pertanyaan cek bisa menangkap kebingungan sejak awal.`},
   {type:'choice', prompt:`Seorang anak pemalu berusia 13 tahun tidak pernah menjawab dengan bersuara. Apa yang paling membantu?`, opts:[`Memanggil namanya di setiap pelajaran sampai dia mau bicara`,`Membiarkannya ikut serta lewat chat terlebih dahulu, dan memuji kontribusinya`,`Memintanya menyalakan kamera di depan semua orang`], correct:1, fb:`Beri dia cara yang nyaman untuk ikut serta — chat terlebih dahulu. Kameranya bisa nanti, kalau dia mau.`},
   {type:'sort', prompt:'Apakah kebiasaan ini membantu atau merugikan pelajaran online?', card:`Tiba-tiba menunjuk siswa yang paling pendiam dengan pertanyaan yang paling sulit.`, zones:[{label:'💎 Membantu', fb:'Belum tepat — ini membuat siswa merasa disorot dan membuat pertanyaan berikutnya lebih sulit dijawab.'},{label:'🗑️ Merugikan', fb:'Benar — mulai dari yang mudah, siapkan mereka, dan buat cara memilihnya terasa adil.'}], correctZone:1},
   {type:'choice', prompt:`Pembukaan mana yang paling cocok untuk anak berusia 7 tahun?`, opts:[`“Hari ini kita akan belajar tentang variabel.”`,`“Hari ini ada robot yang kehilangan suaranya — di akhir pelajaran, kalian yang akan memberinya suara. Siapa yang ikut?”`,`“Buka pelajarannya dan mulai latihan 1.”`], correct:1, fb:`Cerita dengan sebuah misi menarik perhatian dan memberi alasan untuk ikut serta. Langsung masuk ke materi menyia-nyiakan menit-menit saat perhatian sedang paling tinggi.`},
   {type:'choice', prompt:`Seorang siswa dengan ADHD terus mengalihkan pembicaraan untuk membahas acara TV. Apa yang akan Anda katakan?`, opts:[`"Berhenti membicarakan itu, kita sedang belajar."`,`"Wah, ide yang bagus! Kita simpan dulu untuk nanti. Sekarang, cukup kerjakan bagian latar belakangnya dan beri tahu saya kalau sudah selesai."`,`Tidak menanggapinya dan terus menjelaskan materi kepada siswa lain.`], correct:1, fb:`Arahkan kembali perhatian siswa dengan lembut, lalu berikan satu tugas kecil dan konkret dengan hasil yang terlihat. Mengatakan "berhenti" tidak memberi tahu siswa apa yang harus dilakukan sebagai gantinya.`},
   {type:'sort', prompt:'Apakah tindakan ini membantu atau justru menghambat?', card:`Anda mengirim pesan kepada keluarga berisi saran untuk menggunakan tempat yang tenang, memakai headphone, dan menjauhkan ponsel dari jangkauan siswa selama kelas. Anda juga bertanya apa yang biasanya membantu anak mereka berkonsentrasi.`, zones:[{label:'💎 Membantu', fb:'Benar! Dalam kelas online, rumah menjadi ruang kelas. Saran yang konkret dan disampaikan dengan ramah, disertai pertanyaan tentang apa yang biasanya berhasil di rumah, menjadikan keluarga mitra dalam proses belajar.'},{label:'🗑️ Menghambat', fb:'Tidak tepat. Pesan tersebut disampaikan dengan ramah, berisi saran konkret, dan meminta keluarga berbagi pengalaman. Inilah cara yang tepat untuk bekerja sama dengan keluarga.'}], correctZone:0},
   {type:'choice', prompt:`Seorang siswa berusia 7 tahun kesulitan menemukan tombol di keyboard dan belum bisa menyalin-tempel. Keluarganya mengatakan bahwa "kelas online tidak cocok untuknya". Apa yang pertama kali Anda lakukan?`, opts:[`Memberi tahu keluarga bahwa anak tersebut terlalu kecil untuk mengikuti kelas online.`,`Mengambil alih kendali layarnya agar dia tidak tertinggal dari kelompok.`,`Menunjukkan langkah-langkah secara perlahan dengan kursor yang terlihat, menambahkan latihan singkat untuk keterampilan dasar, dan meminta orang tua membantu proses persiapan.`], correct:2, fb:`Keterampilan dasar komputer dapat dilatih. Menunjukkan langkah-langkah secara perlahan dan melibatkan orang tua dalam persiapan, bukan dalam mengerjakan tugas, membantu siswa makin percaya diri dari kelas ke kelas.`},
   {type:'sort', prompt:'Apakah tindakan ini membantu atau justru menghambat?', card:`Blender berjalan sangat lambat di komputer seorang siswa, jadi Anda memberi tahu keluarganya bahwa mereka perlu membeli komputer yang lebih baik.`, zones:[{label:'💎 Membantu', fb:'Tidak tepat. Jangan pernah meminta keluarga membeli peralatan baru. Bantu siswa menutup program lain dan menggunakan panduan performa Blender di wiki, lalu beri tahu Team Leader Anda jika program masih tidak dapat berjalan dengan baik.'},{label:'🗑️ Menghambat', fb:'Benar! Pertama, bantu siswa menggunakan panduan performa Blender yang tersedia di wiki. Jika komputer tidak mampu menjalankan program kursus, Team Leader Anda akan menangani langkah selanjutnya.'}], correctZone:1}
  ]
 }
},
{id:'checklist', numLabel:'Checklist Akhir', emoji:'✅', color:'var(--coral)',
 title:'Checklist Akhir',
 desc:'Tidak ada kuis di sini — hanya hal-hal penting dari mini-training ini, sebelum kamu menutupnya.',
 obj:'Tinjau checklist di bawah ini. Modul ini tidak dinilai — baca, lalu selesaikan mini-training-nya.',
 sections:[
  {t:'🛟 Jika permintaan refund sudah ada', html:`
   ${numlist([
     'Saya meninggalkan komentar di BO di hari yang sama saat saya mengetahui permintaan itu, dan melibatkan Team Leader saya',
     'Pelajaran berikutnya dengan siswa ini adalah upaya nyata untuk mempertahankannya — giliran yang sungguhan, keberhasilan yang terlihat, perhatian yang spesifik, tanpa menyinggung permintaan refund',
     'Saya tidak pernah mengonfirmasi persetujuan atau membahas nominal — saya menggunakan satu kalimat yang aman dan menyerahkan sisanya kepada Client Service'
   ])}
  `},
  {t:'🌱 Di setiap pelajaran', html:`
   ${numlist([
     'Sebelum mencoba teknik apa pun, saya mencari tahu apa persisnya yang terasa tidak cocok dari pelajaran online bagi siswa ini',
     'Saya memvalidasi perasaannya terlebih dahulu (“itu masuk akal”) dan baru setelah itu membingkai ulang — saya tidak pernah membantah bahwa online itu “sama bagusnya”',
     'Saya bertanya dengan cara yang sesuai usia: polling pilih wajah untuk yang paling kecil, skala 1–5 untuk usia 9–11, pesan pribadi atau polling anonim untuk usia 12+',
     'Saya membuka setiap pelajaran dengan kuat: kejutan, cerita, atau pertanyaan yang berkaitan dengan proyek hari ini',
     'Saya mengganti aktivitas kira-kira setiap 10 menit (lebih singkat untuk yang paling kecil): jelaskan → coba → bagikan',
     'Saya menggunakan chat, reaksi, polling, dan berbagi layar secara bergiliran, supaya semua orang punya cara yang nyaman untuk ikut serta',
     'Saya memberikan satu instruksi dalam satu waktu dan memastikan instruksinya dipahami',
     'Saya mengajukan pertanyaan langsung tanpa tekanan: yang mudah dulu, cara memilih yang adil, dan umpan balik positif untuk jawaban apa pun',
     'Saya menghubungkan teman sekelas lewat momen singkat berpasangan atau dalam kelompok kecil',
     'Saya melaporkan ketidaksukaan siswa terhadap format online di BO di hari yang sama: apa yang dia katakan, apa yang saya lihat, apa yang sudah saya coba',
     'Saya tidak pernah menjanjikan perubahan format atau grup — saya merekomendasikan di BO dan bilang “aku akan cek ke timku”',
     'Saat mengajar siswa dengan kesulitan fokus, ADHD, atau kecemasan, saya menggunakan tugas-tugas kecil dengan hasil yang terlihat, instruksi yang diberikan satu per satu, daftar tugas yang terlihat, dan jeda singkat untuk bergerak',
     'Saya mengarahkan kembali perhatian siswa dengan lembut ("kita simpan ide itu untuk nanti") dan memberi tahu mereka sebelum ada perubahan. Saya tidak pernah melabeli atau mencoba mendiagnosis anak',
     'Saya meminta bantuan keluarga dengan cara yang ramah dan konkret untuk menciptakan lingkungan belajar yang lebih baik di rumah: tempat yang tenang, headphone, dan ponsel yang berada di luar jangkauan siswa',
     'Ketika seorang siswa masih belajar menggunakan komputer, saya menunjukkan langkah-langkah secara perlahan dengan kursor yang terlihat, memberikan instruksi satu per satu, dan meminta orang tua membantu persiapan, bukan mengerjakan tugas',
     'Jika komputer berjalan lambat, saya membantu siswa menutup program lain dan menggunakan panduan performa Blender yang tersedia di wiki. Jika komputer tidak mampu menjalankan program kursus, saya memberi tahu Team Leader saya'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Itulah keseluruhan mini-training ini.</strong> Jika sudah siap, lanjutkan — lalu selesaikan DST di LMS untuk menuntaskan tugasnya.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
