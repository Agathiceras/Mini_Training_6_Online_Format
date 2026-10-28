/* Mini_Training_6_Online_Format - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='id';
const CONTENT = {
  flag:'🇮🇩', dir:'ltr',
  ui:{
    pageTitle:"Mini-Training · Format Online — Pelatihan Tutor Kodland",
    logoSub:'Departemen Pengembangan Tutor',
    heroEyebrow:"🎯 Mini-Training",
    heroTitle:"Membuat Pelajaran <span class=\"h-pill\">Online</span> Terasa Menyenangkan",
    heroIntro:"Kamu menerima pelatihan ini karena ada siswamu yang mengajukan refund karena tidak menyukai format online. Di sini kami akan menunjukkan apa yang bisa kamu lakukan sebagai tutor dan cara menangani situasi seperti ini.",
    heroWork:"Selesaikan 4 modul singkat. Setiap cek modul butuh nilai 70%+ untuk membuka modul berikutnya. Total sekitar 20–25 menit.",
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
 title:'Mengapa Kamu di Sini',
 desc:'Mengapa “aku nggak suka pelajaran online” masih bisa dibalikkan — dan aturan yang berlaku jika permintaan refund sudah masuk.',
 obj:'Memahami apa sebenarnya arti “aku nggak suka format online”, mengapa laporan di hari yang sama itu penting, dan apa persisnya yang harus (dan tidak boleh) dilakukan jika permintaan refund sudah ada.',
 sections:[
  {t:'💻 Apa sebenarnya arti “aku nggak suka online”', html:`
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
   ${co('co-ok','✅',`<p><strong>Selagi tim meninjau pilihannya, pelajarannya tetap milikmu.</strong> Modul 1 dan 2 menunjukkan cara mencari tahu apa yang mengganggu siswa, dan cara membangun pelajaran online yang dia nikmati.</p>`)}
  `},
  {t:'🛟 Jika permintaan refund sudah ada', html:`
   <div class="card"><p>Semua hal di atas adalah tentang menangkap tanda ini sejak dini. Tapi mungkin kamu membuka pelatihan ini karena sebuah keluarga <strong>sudah</strong> mengajukan refund. Aturan di bawah ini berlaku apa pun alasannya — baca dulu, lalu gunakan sisa pelatihan ini untuk memahami apa yang menyebabkannya dan apa yang masih bisa kamu lakukan di kelas.</p></div>
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
   <div class="card"><p>Sebelum mencoba teknik untuk meningkatkan keterlibatan, cari tahu <strong>bagian mana dari format online yang tidak cocok</strong>. Teknik yang mengatasi rasa sendirian tidak ada gunanya untuk kelelahan menatap layar. Anak-anak jarang mengatakannya dengan jelas, jadi pelajari seperti apa tanda-tanda masing-masing terlihat dan terdengar:</p></div>
   ${patternCards([
     {ic:'🥱', title:'Lelah dan terdistraksi', desc:'“Aku capek.” “Kelamaan.” Pandangan ke mana-mana, berganti-ganti tab, menguap.', note:'Masalah energi dan fokus. <strong>Ronde yang lebih singkat, gerakan, pergantian aktivitas.</strong>'},
     {ic:'🫥', title:'Sendirian, tidak terhubung', desc:'“Nggak ada yang bisa diajak ngobrol.” Kamera mati, diam, tidak ada reaksi.', note:'Masalah keterhubungan. <strong>Libatkan teman sekelas: berpasangan, show-and-tell, reaksi.</strong>'},
     {ic:'🙈', title:'Tidak nyaman di depan kamera', desc:'Tidak mau bicara atau menunjukkan wajahnya; menjawab lewat chat, atau tidak sama sekali.', note:'Masalah rasa aman. <strong>Cara-cara ikut serta yang tidak menekan.</strong>'},
     {ic:'🔌', title:'Frustrasi dengan alatnya', desc:'“Selalu lag.” “Aku nggak bisa dengar.” Menyerah setelah ada gangguan teknis.', note:'Masalah alat. <strong>Perbaiki dengan cepat, atau ikuti protokol masalah teknis (10 menit, lalu komunikasikan, dokumentasikan, eskalasikan).</strong>'}
   ],2)}
  `},
  {t:'❓ Pertanyaan yang bisa mengungkapnya — sesuai usia', html:`
   <div class="card"><p>Ajukan <strong>pertanyaan terbuka, tanpa tekanan</strong>, dan beri siswa cara menjawab yang tidak membuatnya merasa disorot. Apa yang berhasil tergantung usianya:</p></div>
   ${dimTabs([
     {ic:'🧒', title:'Usia 6–8',
      intro:'Anak-anak kecil paling mudah menjawab lewat ekspresi wajah, gambar, dan pilihan — bukan lewat penjelasan.',
      tips:[
       {ic:'😀', html:`<strong>Polling pilih wajah.</strong> <em>“Tunjukkan dengan tanganmu atau emoji, gimana rasanya pelajaran hari ini — senang, biasa aja, atau ngantuk?”</em>`},
       {ic:'🌟', html:`<strong>Paling seru dan kurang seru.</strong> <em>“Bagian paling seru hari ini apa? Terus bagian yang paling membosankan apa?”</em>`},
       {ic:'🎁', html:`<strong>Tongkat ajaib.</strong> <em>“Kalau kamu bisa mengubah satu hal dari kelas online kita, kamu mau ubah apa?”</em>`},
       {ic:'👂', html:`<strong>Dengarkan, jangan langsung memperbaiki.</strong> Ulangi apa yang dia katakan dan ucapkan terima kasih — lalu ubah satu hal kecil di pelajaran berikutnya, supaya dia melihat bahwa kamu mendengarkan.`}
      ]},
     {ic:'🧑', title:'Usia 9–11',
      intro:'Mereka bisa memberi nilai dan menjelaskan — asalkan terasa aman dan singkat.',
      tips:[
       {ic:'🔢', html:`<strong>Skala 1–5.</strong> <em>“Dari 1 sampai 5, seberapa kamu menikmati pelajaran online kita? Apa yang bikin jadi 5?”</em>`},
       {ic:'🌟', html:`<strong>Bagian paling keren.</strong> <em>“Bagian paling keren dari kelas hari ini apa?”</em> Jika dia tidak bisa menyebutkan apa pun, itu sebuah tanda.`},
       {ic:'🔧', html:`<strong>Satu perubahan.</strong> <em>“Kalau kamu bisa mengubah satu hal dari pelajaran kita, kamu mau ubah apa?”</em>`},
       {ic:'🗳️', html:`<strong>Polling cepat di chat.</strong> <em>“Ketik A kalau kamu mau lebih banyak waktu untuk membuat sesuatu, B kalau kamu mau lebih banyak waktu bareng teman.”</em>`}
      ]},
     {ic:'🧑‍🎓', title:'Usia 12+',
      intro:`Siswa yang lebih besar tidak mau mengatakannya di depan semua orang. Beri mereka cara yang pribadi atau anonim.`,
      tips:[
       {ic:'🔒', html:`<strong>Pesan pribadi.</strong> <em>“Aku perhatikan kamu lebih pendiam akhir-akhir ini. Ada nggak sesuatu dari pelajaran online yang mengganggumu? Cuma antara kita aja.”</em>`},
       {ic:'🗳️', html:`<strong>Polling anonim.</strong> Minta seluruh grup melengkapi kalimat <em>“Aku akan lebih aktif ikut serta kalau…”</em> — ini menghilangkan rasa takut dihakimi.`},
       {ic:'🤝', html:`<strong>Tanyakan ide mereka,</strong> bukan keluhan mereka: <em>“Apa yang bisa bikin pelajaran kita lebih baik buatmu?”</em>`},
       {ic:'🙏', html:`<strong>Hargai jawabannya.</strong> Jangan pernah membantahnya — ucapkan terima kasih, dan tindak lanjuti satu hal.`}
      ]}
   ],'✅ Itu dia ketiga kelompok usia. Berikutnya: cara mengubah persepsinya.')}
   ${co('co-idea','🧠',`<p><strong>Mengapa ini berhasil.</strong> Pertanyaan terbuka dan format anonim menghilangkan tekanan sosial untuk menjawab di depan teman sekelas. Memberi masukan lewat kalimat “Aku akan lebih banyak bicara kalau…” sering kali lebih mudah daripada menyampaikannya secara langsung.</p>`)}
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
   ${co('co-idea','💬',`<p><strong>Dengan keluarga:</strong> bicarakan proses belajarnya, jangan pengaturannya. <em>“Halo Bapak/Ibu [nama orang tua], saya perhatikan [siswa] kadang kesulitan untuk tetap bersemangat di pelajaran online. Saya sudah mulai membuat ronde-ronde singkat untuk membuat sesuatu dan membiarkannya memilih, dan saya sudah menyampaikannya kepada tim saya agar kami bisa mendukungnya dengan cara terbaik.”</em> Jangan menjanjikan apa pun soal grup atau format.</p>`)}
  `}
 ],
 ix:{
  title:'Apa yang mengganggunya — dan apa yang dilakukan pertama kali',
  instr:'Kelompokkan kutipannya dan pilih langkah terbaik. 70% untuk membuka modul berikutnya.',
  items:[
   {type:'sort', prompt:'Apa yang mengganggu siswa ini?', card:`“Nggak ada yang bisa diajak ngobrol.”`, zones:[{label:'🥱 Lelah dan terdistraksi', fb:'Belum tepat — siswa ini menggambarkan rasa sendirian, bukan rasa lelah.'},{label:'🫥 Sendirian, tidak terhubung', fb:'Benar — ini masalah keterhubungan. Libatkan teman sekelas lewat tugas berpasangan, show-and-tell, dan reaksi.'},{label:'🙈 Tidak nyaman di depan kamera', fb:'Belum tepat — ini tentang tidak adanya orang untuk berbagi, bukan tentang dilihat orang lain.'},{label:'🔌 Frustrasi dengan alatnya', fb:'Belum tepat — tidak ada yang berkaitan dengan alat di sini.'}], correctZone:1},
   {type:'sort', prompt:'Apa yang mengganggu siswa ini?', card:`Kameranya mati, dia tidak pernah bicara, dan hanya mengetik di chat.`, zones:[{label:'🥱 Lelah dan terdistraksi', fb:'Belum tepat — mengetik di chat menunjukkan dia terlibat, hanya saja tidak bersuara.'},{label:'🫥 Sendirian, tidak terhubung', fb:'Belum tepat — dia ikut serta lewat chat.'},{label:'🙈 Tidak nyaman di depan kamera', fb:'Benar — masalah rasa aman. Mulailah dengan cara ikut serta yang tidak menekan: chat dulu, lalu berbagi layar, dan kamera saat dia sudah siap.'},{label:'🔌 Frustrasi dengan alatnya', fb:'Belum tepat — tidak ada tanda masalah teknis.'}], correctZone:2},
   {type:'choice', prompt:`Seorang siswa bilang: “Pelajaran online itu membosankan.” Apa langkah pertama yang terbaik?`, opts:[`Menjelaskan bahwa pelajaran online sama bagusnya dengan pelajaran tatap muka`,`Memperpanjang penjelasanmu supaya pelajarannya lebih menarik`,`Menanyakan apa persisnya yang terasa membosankan — durasinya, tugasnya, layarnya, atau rasa sendirian?`], correct:2, fb:`Sebelum teknik apa pun, cari tahu bagian mana yang tidak cocok. “Membosankan” bisa berarti lelah, kesepian, malu, atau frustrasi — dan masing-masing punya solusi yang berbeda.`},
   {type:'sort', prompt:'Harta karun atau sampah? Apakah ini respons yang baik?', card:`“Itu masuk akal — layar memang bisa terasa pasif. Di sini, semua yang ada di layarmu adalah sesuatu yang kamu buat.”`, zones:[{label:'💎 Harta karun — memvalidasi dan membingkai ulang', fb:'Benar — respons ini memvalidasi perasaannya terlebih dahulu, lalu menawarkan bingkai ulang yang jujur.'},{label:'🗑️ Sampah — mengabaikan', fb:'Belum tepat — respons ini memvalidasi dulu, lalu membingkai ulang. Itulah urutan yang benar.'}], correctZone:0},
   {type:'choice', prompt:`Seorang anak berusia 12 tahun tampak tidak terhubung. Cara bertanya mana yang membuatnya bisa menjawab dengan jujur?`, opts:[`Bertanya dengan lantang kepada seluruh grup: “Siapa yang merasa pelajaran online membosankan?”`,`Meminta orang tuanya untuk berbicara dengannya`,`Pesan pribadi, atau polling anonim: “Aku akan lebih aktif ikut serta kalau…”`], correct:2, fb:`Siswa yang lebih besar jarang mengatakannya di depan teman sebaya. Pesan pribadi atau polling anonim menghilangkan tekanan sosial.`},
   {type:'choice', prompt:`Kapan kamu melaporkan ketidaksukaan siswa terhadap format online di BO?`, opts:[`Di hari yang sama — berisi apa yang dia katakan, apa yang kamu lihat, dan apa yang sudah kamu coba`,`Setelah sebulan, jika tidak ada perbaikan`,`Hanya jika orang tuanya mengeluh`], correct:0, fb:`Pilihan seperti grup atau format lain hanya bisa dipertimbangkan selagi keluarga masih menimbang keputusannya. Fakta, kata-kata siswa, dan apa yang sudah kamu coba membuat tim bisa bertindak cepat.`}
  ]
 }
},
{id:'engage', numLabel:'Modul 2', emoji:'🎬', color:'var(--coral)',
 title:'Bangun Pelajaran Online yang Mereka Nikmati',
 desc:'Teknik-teknik yang menjaga perhatian dan membuat layar terasa seperti ruang bersama: pembukaan yang kuat, bekerja dalam ronde-ronde singkat, interaksi, keterhubungan, pertanyaan langsung, dan keberhasilan di akhir.',
 obj:'Menjalankan pelajaran online yang menjaga perhatian, memberi setiap siswa cara yang nyaman untuk ikut serta, menghubungkan teman sekelas, dan diakhiri dengan keberhasilan — disesuaikan dengan usia grupnya.',
 sections:[
  {t:'🧠 Empat hal yang dimiliki setiap pelajaran yang memotivasi', html:`
   <div class="card"><p>Di kelas online, tidak ada yang membantumu menjaga perhatian: tidak ada ruang fisik, tidak ada teman sekelas di samping mereka, dan setiap gangguan hanya berjarak satu klik. Penelitian tentang motivasi memberikan checklist sederhana — <strong>model ARCS</strong> dari John Keller (1987). Tanyakan pada dirimu sendiri, sebelum setiap pelajaran, apakah keempatnya sudah ada:</p></div>
   ${iconGrid([
     {ic:'👀', html:`<strong>Attention (Perhatian).</strong> Kejutan, pertanyaan, tantangan singkat, dan pergantian format. <em>“Ada bug yang kabur dari game — siapa yang bisa bantu aku menangkapnya?”</em>`},
     {ic:'🔗', html:`<strong>Relevance (Relevansi).</strong> Hubungkan pelajaran dengan hal yang mereka pedulikan: game mereka, serial mereka, hal yang ingin mereka buat.`},
     {ic:'💪', html:`<strong>Confidence (Kepercayaan diri).</strong> Langkah-langkah kecil, langkah berikutnya yang jelas, dan dukungan saat mereka buntu — supaya mereka yakin bisa melakukannya.`},
     {ic:'🏆', html:`<strong>Satisfaction (Kepuasan).</strong> Pujian yang spesifik dan hasil jadi yang bisa ditunjukkan di akhir.`}
   ])}
   ${bigStat('≈ 10 mnt', `<p>Patokan yang banyak dikutip dari penelitian tentang belajar (dipopulerkan oleh buku <em>Brain Rules</em> karya John Medina): perhatian mulai buyar setelah sekitar <strong>sepuluh menit</strong>. Rencanakan pergantian aktivitas di sekitar waktu itu — dan buat rondenya lebih singkat lagi untuk siswa yang paling kecil.</p>`)}
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
       '<em>“Ketik tebakanmu di chat — nanti aku bacakan semuanya!”</em>'
     ]},
     {ic:'👥', label:'Hubungkan teman sekelas', items:[
       '<strong>Momen berpasangan selama dua menit</strong> atau tugas kelompok kecil, supaya layar terasa seperti ruang bersama.',
       '<em>“Tunjukkan bagian terbaikmu ke pasanganmu — lalu ceritakan ke aku apa yang kamu suka dari punya dia.”</em>'
     ]},
     {ic:'🏁', label:'Tutup dengan keberhasilan', items:[
       '<strong>Show-and-tell dari apa yang mereka buat,</strong> pujian yang spesifik, dan sedikit bocoran tentang apa yang akan datang.',
       '<em>“Lihat apa yang sudah kalian buat hari ini — pertemuan berikutnya, ini akan punya skor.”</em>'
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
       {ic:'⏲️', html:`<strong>Ronde yang lebih singkat dari 10 menit,</strong> dengan “sekarang kita melakukan ini” yang jelas di setiap pergantian.`},
       {ic:'🎁', html:`<strong>Stiker, poin, maskot</strong> — hadiah kecil dan langsung karena sudah ikut serta.`},
       {ic:'🧸', html:`<strong>Show-and-tell.</strong> <em>“Tunjukkan mainan atau gambar favoritmu, lalu kita buat bersama.”</em>`}
      ]},
     {ic:'🧑', title:'Usia 9–11',
      intro:'Misi, penghitung waktu, dan tim membuat layar terasa seperti permainan.',
      tips:[
       {ic:'🎯', html:`<strong>Misi mini dengan penghitung waktu.</strong> <em>“Kalian punya 8 menit untuk membuat karakternya melompat. Siap?”</em>`},
       {ic:'🏁', html:`<strong>Tantangan tim.</strong> Pasangan berlomba menemukan bug lebih dulu — bersahabat dan singkat.`},
       {ic:'🧩', html:`<strong>Pilihan tema</strong> di dalam tugas yang sama — tujuannya tetap, kostumnya milik mereka.`},
       {ic:'🗳️', html:`<strong>Polling cepat</strong> untuk memutuskan ronde berikutnya.`}
      ]},
     {ic:'🧑‍🎓', title:'Usia 12+',
      intro:'Otonomi, relevansi, dan menghargai tingkat kenyamanan mereka.',
      tips:[
       {ic:'🧭', html:`<strong>Beri mereka suara dalam rencananya.</strong> <em>“Kita punya 15 menit untuk bagian ini — mau mulai dengan A atau B?”</em>`},
       {ic:'🌍', html:`<strong>Tunjukkan penggunaan nyata</strong> dari keterampilan itu, dalam hal-hal yang mereka kenal.`},
       {ic:'🔒', html:`<strong>Hargai soal kamera.</strong> Tawarkan partisipasi lewat chat terlebih dahulu; jangan pernah memaksa menyalakan kamera.`},
       {ic:'🗳️', html:`<strong>Polling anonim</strong> untuk mengumpulkan pendapat, dan saling mengulas hasil kerja satu sama lain.`}
      ]}
   ],'✅ Itu dia ketiga kelompok usia.')}
  `},
  {t:'🙋 Pertanyaan langsung — tanpa tekanan', html:`
   <div class="card"><p>Bertanya kepada siswa dengan menyebut namanya itu berhasil — jika mereka percaya bahwa itu tidak akan memalukan. Siapkan mereka, mulai dari yang mudah, dan buat terasa adil.</p></div>
   ${doavoid(
     ['Beri tahu grup bahwa kamu akan bertanya kepada semua orang suatu saat nanti — dan bahwa <em>“aku nggak tahu”</em> adalah jawaban yang tidak apa-apa','Mulailah dengan pertanyaan mudah untuk membangun rasa percaya diri','Gunakan pemilih acak supaya terasa adil, bukan personal','Puji setiap kontribusi: <em>“Terima kasih — itu membantu kita berpikir.”</em>'],
     ['Tiba-tiba menunjuk siswa yang paling pendiam dengan pertanyaan sulit','Mengoreksi dengan keras di depan grup','Hanya bertanya kepada siswa yang sama-sama cepat setiap kali','Melontarkan pertanyaan sulit tanpa peringatan — coba: <em>“Yang ini agak susah, tapi ada yang mau mencoba?”</em>']
   )}
   ${co('co-star','🌱',`<p><strong>Mengapa ini berhasil:</strong> siswa ikut serta saat mereka merasa aman. Menyiapkan mereka, memulai dari yang mudah, dan menjaga keadilan mengubah pertanyaan dari sebuah risiko menjadi sebuah ajakan.</p>`)}
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
   {type:'choice', prompt:`Pembukaan mana yang paling cocok untuk anak berusia 7 tahun?`, opts:[`“Hari ini kita akan belajar tentang variabel.”`,`“Hari ini ada robot yang kehilangan suaranya — di akhir pelajaran, kalian yang akan memberinya suara. Siapa yang ikut?”`,`“Buka pelajarannya dan mulai latihan 1.”`], correct:1, fb:`Cerita dengan sebuah misi menarik perhatian dan memberi alasan untuk ikut serta. Langsung masuk ke materi menyia-nyiakan menit-menit saat perhatian sedang paling tinggi.`}
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
     'Saya tidak pernah menjanjikan perubahan format atau grup — saya merekomendasikan di BO dan bilang “aku akan cek ke timku”'
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
