let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.bucin)}”`, m)
}
handler.help = ['bucin']
handler.tags = ['quotes']
handler.command = /^(bucin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
  "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
  "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
  "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
  "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
  "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
  "Pacar orang adalah jodoh kita yang tertunda.",
  "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
  "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
  "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
  "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
  "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
  "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
  "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
  "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
  "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
  "Aku ingin menjadi satu-satunya, bukan salah satunya.",
  "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
  "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
  "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
  "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
  "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
  "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
  "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
  "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
  "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
  "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
  "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
  "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
  "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
  "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
  "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
  "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
  "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
  "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
  "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
  "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
  "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
  "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
  "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
  "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
  "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
  "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
  "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
  "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
  "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
  "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
  "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
  "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
  "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
  "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
  "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
  "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
  "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
  "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
  "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
  "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
  "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
  "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
  "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
  "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
  "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
  "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
  "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
  "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
  "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
  "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
  "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
  "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
  "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
  "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
  "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
  "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
  "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
  "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
  "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
  "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
  "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
  "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
  "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
  "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
  "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
  "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
  "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
  "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
  "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
  "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
  "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
  "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
  "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
  "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
  "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
  "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
  "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
  "Saben dino kegowo ngimpi tapi ora biso nduweni.",
  "Ora ketemu koe 30 dino rasane koyo sewulan.",
  "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
  "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
  "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
  "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
  "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
  "Kanyaah akang moal luntur najan make Bayclean.",
  "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
  "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
  "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
  "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
  "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
  "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
  "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
  "Cukup jaringan aja yang hilang, kamu jangan.",
  "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
  "Musuhku adalah mereka yang ingin memilikimu juga.",
  "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
  "Jam tidurku hancur dirusak rindu.",
  "Cukup China aja yang jauh, cinta kita jangan.",
  "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
  "Cuma satu keinginanku, dicintai olehmu..",
  "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
  "Cukup antartika aja yang jauh. Antarkita jangan."
  "Ingin selalu jadi yang pertama, supaya bisa di notice"
"Aku selalu hadir dikolom koment mu tapi ga pernah d notice"
"Aku hanya bisa mengagumimu dalam diam,aku tidak bisa mengungkapkan semua rasa yg ada di hati ini. Gengsi? bukan,tapi aku sadar diri aja :)"
"Gak ada yang lebih membahagikan selain orang yang km tunggu kembali pulang, dan berkata ia menyadari pengorbananmu. :')"
"Matikan datamu, letakkan hpmu. Tidurlah. dan ingatlah tidak ada yang mencintaimu"
"Pengalihan isuu, tetap kawal 7-2 1-6"
"Hari ini dingin banget yaa, tapi lebih dingin sikapmu ke aku"
"Binggung, bumi seluas ini, tapi yang kumau cuma kamu. hadehh"
"heran, semaleman cas hp yang penuh malah cintaku ke kamu"
"Tiap suka sama orang malah aku yang merasa ga pantas, siapa yang kayak gini?" 
"Buat ngukur suhu tubuh "termometer" kalo buat ngukur cintaku "I Love You Forever" "
"matematika memang membingungkan, tapi lebih bingung lagi kamu kok bsa merebut hati aku"
"Meskipun aku sudah berada dalam fase melupakanmu, namun rasa ini tetap ada, selalu."
"Eh kamu lagi apa? lagi kayang sambil makan samyang di jembatan layang bersama dia yg tersayang namun sayang hanya bayang."
"Kamu rela merusak tidurmu, hanya untuk seseorang yg kemudian merusak hatimu. ada yang kayak gini?" 
"Aku kira rinduku akan dibls dengan miss you too, ternyata sampe sekarang chatnya masih centang dua abuabu."
"Panjang umur buat cewe cewe yg ketika chat masuk langsung read and typing."
"Responmu dibalas semata mata karna dia kesepian, bukan karna dia punya perasaan. ada ga sih yang ngerasain kek gini?" 
"Itu yg main hp sambil ngecas, nungguin chat apa nungguin kesetrum?"
"cuma ngasih tau ke kalian, Semua yang Berlebihan itu ga Baik, Apalagi Berlebihan Ngarepin dia."
"Kamu adalah kemustahilan yang akan terus aku coba dapatkan"
"cewe itu "Keenakan diperjuangin sampe lupa ngehargain" bener ga boy?" 
"Dia hanya mampir, harusnya kamu sediakan kopi bukan hati, ada yang kek gini?" 
"Ternyata bisa juga nglewatin ramadhan tanpa bukber, tanpa ngabuburit, tanpa reuni, tanpamu di sisiku. Hehe"
"Kalo gapunya rasa tolong jangan terlalu baik, aku mudah salah paham soalnya"
"Menyapamu, aku lupa diri. Diabaikanmu, aku tahu diri. Hati bilang gas pol. Otak bilang rem."
"kalian yang suka patah hati "Udah gapapa, tidur yuk. Besok juga bakal baik baik aja. Bilang makasih dulu buat diri sendiri karna masih kuat sejauh ini :)" "
"Jika kalian malu di katain JOMBLO, jawab ajah "Semuanya akan menikah pada waktunya" "
"Biar mata tak bertemu,biar doa yang menyatu:') ohiya kalu udah jadi top komen kabarin aku lagi yak wkwk"
"Yang pernah goblok karna seseorang, Mari kita menertawakan diri kita sendiri:')"
"Jangan jadi cowok bodoh, udah berhasil bikin cewek sayang sama lo sama apa yg lo lakuin ke dia, malah lo tinggalin dan kecewain gitu aja."
"Karena ngabarin cuma butuh waktu beberapa detik saja, jadi kalau dia nggak ngabarin karena katanya nggak sempat, berarti.. ya males."
"Sekuat-kuatnya orang yg selalu riang, tertawa dan bahagia setiap harinya, kalau udah sendiri kadang suka sedih dan netesin air mata. :')"
"Saat kita memandang sesuatu secara sekilas dan menciptakan persepsi secara sepihak, kita memang ga bakal tahu sepenuhnya akan hal itu. Sampai saatnya kita berinteraksi secara langsung, sehingga kita benar-benar mengenalnya. Serese-resenya guru kalian, pasti mereka punya alasan yang baik untuk kalian, kawan. Percayalah."
"Aku ingin kamu saja yang menemaniku membuka pagi hingga melepas senja, menenangkan malam dan membagi cerita."
"Cemburu adlh tanda bahwa cinta harus saling memiliki. Apabila memilikimu bkn hal penting, maka aku tdk pernah cemburu padamu."
"Percayalah, tidak ada pengorbanan yang sia-sia dari usaha sekecil apa pun. Kalian pasti bisa menggenggam dunia jika mau mengusahakannya."
"Cowok serius akan coba mendekatkan dirinya ke keluarga kamu. Berusaha meyakinkan kedua orangtua kamu kalo dia akan benar-benar menjagamu. :)"
"Sirami impian dengan optimisme dan solusi dan Anda akan menumbuhkan sukses. Selalu mencari cara untuk mengubah masalah menjadi kesempatan untuk sukses. Selalu mencari cara untuk memelihara impian Anda."
"Cewe kalo nangis karena cowo pasti rasanya sakit. Tapi kalo cowo sampe bisa nangis karena cewe, pasti rasanya lebih sakit."
"Percayalah, pada akhirnya akan ada satu alasan yang akan membuatmu pulang, hingga akhirnya kamu merasa nyaman dan tak ingin untuk pergi lagi."
"Omongan manisnya orang itu nggak perlu diiyain semuanya. Kalo gampang percaya? Besok sakit hati. Seterusnya gitu terus."
"Aku nggak tahu seberapa berat bebanmu. Selama kamu belum bisa membuka hatimu, aku nggak bisa menanggung bebanmu. Tapi biarlah aku menemani dan melindungimu. Percayalah, aku tulus padamu."
"Emang sih kalo jodoh gak kemana, tapi.. kamunya yang kemana-mana."
"Jika Anda ingin sukses, itu sangatlah sederhana. Ketahuilah apa yang Anda lakukan. Cintai apa yang Anda lakukan. Dan percayalah pada apa yang Anda lakukan."
"Lepaskan, relakan dan lupakan orang yang sudah menyakitimu. Pertahankan orang yg sudah membuatmu bahagia."
"Hidup itu seperti pelangi : penuh warna, penuh rasa, penuh cerita, juga cinta. Kamu yang berjuang, adalah ia yang menjadi juara."
"Ketika kamu sedang lupa dengannya karena kamu sedang dekat dengan orang lain, ingatlah dia yang selalu menjaga hatinya hanya untuk kamu."
"Niat ingin mengenalmu lebih jauh, eh malah disuruh ngejauh."
"Udah Cinta? Mau niat ga peduli kaya apa juga ujung-ujungnya malah makin peduli."
"Paling males sama orang yang kalo ditanyain jawabnya terserah. Terserah itu bukan jawaban, euy."
"Cinta itu seperti kamu menaiki roller coaster. Ada saat kamu naik dan turun. Satu saat kamu akan ada di puncak kebahagiaan, tapi bukan tak mungkin di saat yang lain kamu terempas ke jurang. Percayalah, dengan orang yang tepat, perjalanan itu akan mengasyikkan."
"Stay with your love because if you lost it you cant get it back :)"
"Lu aja bisa ngetik hahaha tanpa ketawa, berarti dia juga bisa ngetik i love you tanpa perasaan."
"Orang yg bener-bener sayang itu dia nggak bakal macem-macem di belakang kita. Meskipun jauh, dia pasti bakal jaga kepercayaan kita. :)"
"Kamu gak suka kalo aku emosi, tapi kamu selalu mancing-mancing emosi aku. Udah biasa."
"Tidak ada yang peduli air matamu. Tidak ada yang peduli kesedihanmu. Yang mereka pedulikan adalah kesalahanmu"
"Cinta adalah perbuatan. Kata-kata dan tulisan indah adalah omong kosong."
"Lepaskanlah. Maka esok lusa, jika dia adalah cinta sejatimu, dia pasti akan kembali dengan cara mengagumkan. Ada saja takdir hebat yang tercipta untuk kita. Jika dia tidak kembali, maka sederhana jadinya, itu bukan cinta sejatimu."
"Bagaimana mungkin aku pergi jika bayanganmu masih saja menghiasi mimpi?"
"Yang mempertahankan kehidupan bersama kita adalah percakapan ringan. Disertai senyuman."
"Percayalah bahwa kebebasan tidak semata-mata sebuah kesempatan untuk melakukan sesuatu semaunya, juga tidak semata-mata kesempatan untuk memilih antara pilihan-pilihan yang ada. Kebebasan adalah, diatas segalanya, sebuah peluang untuk menentukan pilihan diantara kemungkinan yang tersedia, mempertahankannya, dan kemudian membuka peluang untuk memilih."
"Pacar yang baik adalah pacar yg tidak hanya menyayangimu saja, tapi juga menyayangi keluargamu seperti ia menyayangi keluarganya sendiri."
"Kadang jadi orang yang tiap kali sedih nggak pengen orang lain ngerti itu rasanya nggak enak."
"Niatmu pura-pura hilang biar dicari. Dia malah nggak peduli sama sekali."
"Rasa sayang dan kesetiaan itu akan lahir dengan sendirinya apabila suatu kenyamanan sudah tercipta."
"Kenapa aku suka senja? Karena negeri ini kebanyakan pagi, kekurangan senja, kebanyakan gairah, kurang perenungan."
"Sesabar-sabarnya orang sabar, pasti pernah mencapai titik jenuh pada akhirnya jika kesabaran itu slalu di sia-siakan. :)"
"Aku hanya bisa mengagumimu dalam diam,aku tidak bisa mengungkapkan semua rasa yg ada di hati ini. Gengsi? bukan,tapi aku sadar diri aja :)"
"Apa daya lah aku hanya seperti krupuk diwarung makan yg selalu ada tapi buka menu utama."
"Cinta itu : Bukan untuk menyempurnakan, tapi ikhlas menerima kekurangan. Bukan untuk melengkapi, hanya saling mengisi. -Unknown :)"
"Anak muda sekarang pacaran ngapain aja? Selain manggil sayang"
"Dia yang tau cara berjuang untuk mendapatkan kamu, maka dia akan tau pula cara mempertahankan kamu. :)."
"Penyebab putus yang paling sering --> Emosi sesaat karena masalah sepele."
"First Koment dapat apa?"
"Cewek yang typingnya ga disingkat singkat, fix idaman no debat"
"Sikecil mulai aktif ya bund"
"Gua berani taruhan sebanyak Rp.368395346986 lu gak baca angka. Lu skip bacakan. Lu bahkan ga sadar gua taruh satu huruf di angka itu. Ga kok gua taruh satu huruf omong doang. Tapi lu balik buat baca tuh angka kan? Now give me like!!!"
"FAKTA NYA SEMUA CEWEK ITU MANDANG FISIK, SELAGI LO GANTENG LO DI HARGAI. PAHAM?"
"Jadikan aku anak sgm, agar aktif mencintaimu"
"Ganteng doang jemput cewek di depan gang"
"Sopan kah begitu?"
"Tidak perlu menjadi orang lain untuk disukai banyak orang - Nasihat Bapak"
"Semoga rejeki kamu lancar ya. Amin"
]
