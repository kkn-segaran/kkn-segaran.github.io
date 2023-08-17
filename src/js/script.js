const slider = document.getElementById('slider')
const slides = document.getElementsByClassName('slide')
const sliderNavigation = document.getElementById('sliderNavigation')
let currentIndex = 0

const forestPictureNames = [
  'Candi Jiwa',
  'Candi Blandongan',
  'Candi Serut',
]

// const slideContent = [
//   {
//     title: 'Candi Jiwa',
//     history:
//       "Candi Jiwa merupakan sebuah gundukan tanah seperti bukit kecil yang biasa disebut penduduk unur jiwa berbentuk lonjong. Memiliki ketinggian 4 m dari permukaan tanah sawah di sekitarnya  dan luas sekitarnya 500 m². Pada tahun 1985 situs ini pertama kali diekskavasi dan dilanjutkan pada tahun 1986. Situs ini  semula digarap oleh penduduk sebagai lahan  pertanian yang ditanami pohon pisang dan  pala wija. Dari hasil penelitian kemungkinan besar candi jiwa merupakan sebuah candi berbentuk\xa0stupa.",
//     gallery: [
//       'https://via.placeholder.com/200',
//       'https://via.placeholder.com/200',
//       'https://via.placeholder.com/200',
//     ],
//     location: {
//       name: 'Candi Jiwa',
//       latitude: -6.05702,
//       longitude: 107.154689,
//       link: "https://www.google.co.id/maps/search/Candi+Jiwa/@-6.05702,107.1521141,17",
//     },
//   },
//   {
//     title: 'Candi Blandongan',
//     history:
//       'Situs ini pertama kali di survei oleh  tim arkeologi FSUI pada tahun 1984,  antara tahun 1992 dan 2000 situs ini di  eskapasi oleh Puslit Arkenas, dan  menghasilkan penemuan sebuah  reruntuhan candi dengan bagian kaki  yang berdenah bujur sangkar dengan  ukuran 25 x 25 m. Di beberapa tempat pada bagian kaki candi masih ditemukan lepa stuko yang menempel pada lapisan stuko tersebut, eskavasi oleh puslit arkenas pada tahun 1995 telah menemukan sebuah temuan  berupa fragmen meterai (votive tablet) terakota bergambar relief Budha.  Pada tahun berikutnya  telah di temukan pula pecahan votive tablet dalam jumlah yang lebih banyak, yaitu 5 buah utuhan dan  lebih dari 50 potong pecahannya. Beberapa pecahan tersebut masih dapat di utuhkan  kembali. Sebagian votive tablet tersebut ada yang berinskripsi.   Sejak tahun 1999 Suaka Peninggalan purbakala Sejarah dan Purbakala (sekarang: Balai Pelestarian  Peninggalan Purbakala) Serang. Telah melakukan pula berbagai kegiatan dalam rangka pemugaran  candi ini, di antaranya melakukan penggalian-pengupasan untuk mengangkat reruntuhan bata.  Keempat inskripsi tersebut berisi ayat–ayat suci agama Buddha, yang semuanya di  goreskan dengan aksara palawa dan bahasa sansekerta. Pada tahun 2002 dan 2003 Puslit Arkenas bersama EFEO kembali melakukan penelitian di SEG V.  Penelitian ini di peroleh data mengenai keadaan stratigrafi situs ini, khususnya pada sisi timur laut  kaki candi. Kemudian Balai Pelestarian Peninggalan Purbakala Serang melakukan eskapasi di halaman  candi di sisi timur laut dan tenggara, telah menemukan pula runtuhan pagar keliling dengan sisa-sisa  bagian pintu atau gapura di bagian tengah masing-masing sisi pagarkeliling\xa0tersebut.',
//     gallery: [
//       'https://via.placeholder.com/200',
//       'https://via.placeholder.com/200',
//       'https://via.placeholder.com/200',
//     ],
//     location: {
//       name: 'Candi Blandongan',
//       latitude: 34.0522,
//       longitude: -118.2437,
//       link: "https://www.google.co.id/maps/search/Candi+Blandongan/@-6.0556198,107.148646,17",
//     },
//   },
//   {
//     title: 'Candi Serut 1a',
//     history:
//       'Sejarah Candi Serut',
//     gallery: [
//       'https://via.placeholder.com/200',
//       'https://via.placeholder.com/200',
//       'https://via.placeholder.com/200',
//     ],
//     location: {
//       name: 'Candi Serut 1a',
//       latitude: 51.5074,
//       longitude: -0.1278,
//       link: "https://www.google.co.id/maps/search/Candi+serut+1a/@-6.0560039,107.1483191,17",
//     },
//   },
//   {
//     title: 'Magic Glen',
//     history:
//       'The Magic Glen is known for its magical aura and mysterious happenings.',
//     gallery: [
//       'https://via.placeholder.com/200',
//       'https://via.placeholder.com/200',
//       'https://via.placeholder.com/200',
//     ],
//     location: {
//       name: 'Magic Glen',
//       latitude: 52.52,
//       longitude: 13.405,
//     },
//   },
// ]

// https://via.placeholder.com/200

const slideContent = [
  {
    title: 'Candi Jiwa',
    about: 
      "&nbsp;&nbsp;&nbsp;&nbsp;Candi Jiwa merupakan sebuah gundukan tanah seperti bukit kecil yang biasa disebut penduduk unur jiwa berbentuk lonjong. Memiliki ketinggian 4 m dari permukaan tanah sawah di sekitarnya  dan luas sekitarnya 500 m². Pada tahun 1985 situs ini pertama kali diekskavasi dan dilanjutkan pada tahun 1986. Situs ini  semula digarap oleh penduduk sebagai lahan  pertanian yang ditanami pohon pisang dan  pala wija. Dari hasil penelitian kemungkinan besar candi jiwa merupakan sebuah candi berbentuk\xa0stupa.",
    history:
      "&nbsp;&nbsp;&nbsp;&nbsp;Situs candi jiwa merupakan sebuah gundukan tanah seperti bukit kecil yang oleh penduduk disebut unur jiwa berbentuk lonjong,dengan ketinggian 4 m dari permukaan tanah sawah di sekitarnya  dan luas sekitarnya 500 m2 . Terletak pada koordinat 107 0 09‟ 04,91 ” BT dan 060 03‟ 26” LS.<br>&nbsp;&nbsp;&nbsp;&nbsp;Situs ini  semula digarap oleh penduduk sebagai lahan  pertanian yang ditanami pohon pisang dan  pala wija  Situs ini pertama kali diekskavasi pada  tahun 1985 dan dilanjutkan pada tahun 1986  oleh Tim Arkeologi Fakultas Sastra UI dalam  rangka KKL, yang merupakan praktek terpadu  dalam mata kuliah metode Arkeologi yang  dipimpin oleh Mundardjito.<br>&nbsp;&nbsp;&nbsp;&nbsp;Dari dua kali kegiatan ekskavasi di situs  ini telah dapat ditampakan seluruh permukaan  bangunan yang tersisa dan beberapa bagian  kaki candi. Candi ini sudah tidak utuh, yang  ditemukan hanya bagian kaki candi yang  berukuran 18 x 18 m dengan tinggi seluruh bangunan yang tersisa 4,70 m dengan orientasinya  tenggara- barat laut.di keempat sisi candi tidak terdapat tangga naik atau pintu masuk. Kaki candi  memiliki susunan perbingkaian atau pelipit penyangga (uttara), dan pilipit setengah lingkaran  (kumuda) dari atas bangunan yang tersisa, tampak susunan bata yang melingkar dengan diameter 6 m. Susunan bata melingkar ini dibatasi oleh susunan bata yang di pasang tegak ( rolak ) yang membentuk  bujur sangkar dengan panjang 10 m, susunan pasangan bata seperti ini mengingatkan kita pada bentuk  susunan dasar Stupa ( Jurusan Arkeologi FSUI 1985, 1986 ). Dengan demikian besar kemungkinan  situs candi jiwa merupakan sebuah candi berbentuk stupa.<br>&nbsp;&nbsp;&nbsp;&nbsp;Candi jiwa mulai di pugar pada tahun 1996 sampai 2001 oleh Direktorat Perlindungan dan  Pembinaan Peninggalan Sejarah dan Purbakala,Departemen Pendidikan Nasional (sekarangt menjadi  Direktorat Peninggalan Purbakala ,Dep. Kebudayaan dan Pariwisata), melalui Suaka Peninggalan  Sejarah dan Purbakala (sekarang Balai Pelestarian Peninggalan Purbakala) BP3 Serang.<br>&nbsp;&nbsp;&nbsp;&nbsp;Pada waktu pengupasan halama sekeliling candi telah ditemukan Struktur berupa hamparan  pasangan bata yang menutupi permukaan tanah.Srtuktur ini mengeliling bagian bawah kaki candi di  keempat sisi dengan ukuran 2,65 m. Pinggiran struktur ini di batasi dengan bata yang dipasang tegak  memanjang.Struktur ini memperlihatkan sebuah jalan yang di buat mengelilingi kaki candi. Maka  dapat dipastikan bahwa jalan yang mengelilingi bangunan candi tersebut adalah sebuah jalan ( patha ) atau (pradaksina)",
    gallery: [
      '../../img/candiJiwa-01.jpeg',
      '../../img/candiJiwa-02.jpeg',
      '../../img/candiJiwa-03.jpeg',
      '../../img/candiJiwa-04.jpeg',
    ],
    location: {
      name: 'Candi Jiwa',
      latitude: -6.05702,
      longitude: 107.154689,
      link: "https://www.google.co.id/maps/search/Candi+Jiwa/@-6.05702,107.1521141,17",
    },
  },
  {
    title: 'Candi Blandongan',
    about: "&nbsp;&nbsp;&nbsp;&nbsp;Situs ini pertama kali di survei oleh  tim arkeologi FSUI pada tahun 1984,  antara tahun 1992 dan 2000 situs ini di  eskapasi oleh Puslit Arkenas, dan  menghasilkan penemuan sebuah  reruntuhan candi dengan bagian kaki  yang berdenah bujur sangkar dengan  ukuran 25 x 25 m. Di beberapa tempat pada bagian kaki candi masih ditemukan lepa stuko yang menempel pada lapisan stuko tersebut, eskavasi oleh puslit arkenas pada tahun 1995 telah menemukan sebuah temuan  berupa fragmen meterai (votive tablet) terakota bergambar relief Budha.  Pada tahun berikutnya  telah di temukan pula pecahan votive tablet dalam jumlah yang lebih banyak, yaitu 5 buah utuhan dan  lebih dari 50 potong pecahannya. Beberapa pecahan tersebut masih dapat di utuhkan  kembali. Sebagian votive tablet tersebut ada yang berinskripsi.   Sejak tahun 1999 Suaka Peninggalan purbakala Sejarah dan Purbakala (sekarang: Balai Pelestarian  Peninggalan Purbakala) Serang. Telah melakukan pula berbagai kegiatan dalam rangka pemugaran  candi ini, di antaranya melakukan penggalian-pengupasan untuk mengangkat reruntuhan bata.  Keempat inskripsi tersebut berisi ayat–ayat suci agama Buddha, yang semuanya di  goreskan dengan aksara palawa dan bahasa sansekerta. Pada tahun 2002 dan 2003 Puslit Arkenas bersama EFEO kembali melakukan penelitian di SEG V.  Penelitian ini di peroleh data mengenai keadaan stratigrafi situs ini, khususnya pada sisi timur laut  kaki candi. Kemudian Balai Pelestarian Peninggalan Purbakala Serang melakukan eskapasi di halaman  candi di sisi timur laut dan tenggara, telah menemukan pula runtuhan pagar keliling dengan sisa-sisa  bagian pintu atau gapura di bagian tengah masing-masing sisi pagarkeliling\xa0tersebut.",
    history:
      '&nbsp;&nbsp;&nbsp;&nbsp;Situs candi Blandongan terletek  pada Koordinat 1070 09‟ 14” BT dan  060 03‟ 21” LS, dan berukuran 110 x 38  m.( masih berupa gundukan tanah ).<br>&nbsp;&nbsp;&nbsp;&nbsp;Situs ini pertama kali di surpei oleh  tim arkeologi FSUI pada tahun 1984,  antara tahun 1992 dan 2000 situs ini di  eskapasi oleh Puslit Arkenas, dan  menghasilkan penemuan sebuah  reruntuhan candi dengan bagian kaki  yang berdenah bujur sangkar dengan  ukuran 25 x 25 m.di bagian atas kaki  pada keempat sisi candi terdapat pagar  langkan. Di bagian tengah candi masih terdapat sebuah bangunan dengan  ukuran 10 x 10 m. Antara badan candi dengan pagar langkan terdapat sebuah lantai bata dengan di  lapisi beton stuko setebal 15 cm, bagian atas atau atap badan candi sudah runtuh dan tidak diketahui  bentuknya. Bagian atas badan candi ini diduga berbentuk stupa yang massif, berupa susunan bata yang  kemudian dilapisi dengan beton stuko, dugaan ini didasarkan atas temuan pecahan beton stuko  berbentuk lengkung seperti bulatan stupa dengan ketebalan 20 cm, pecahan beton stuko ini ditemukan  tersebar dalam onggokan dilantai selasar dan sudut utara dinding langkan. Pecahan genta stupa tersebut  bagian luarnya halus dan bagian dalamnya memperlihatkan bekas-bekas bata menempel.dengan ukuran  lebar diperkirakan 6 m, dan tinggi tidak dapat diketahui.<br>&nbsp;&nbsp;&nbsp;&nbsp;Di beberapa tempat pada bagian kaki candi masih ditemukan lepa stuko yang menempel pada  lapisan stuko tersebut, eskavasi oleh puslit arkenas pada tahun 1995 telah menemukan sebuah temuan  berupa fragmen meterai (votive tablet) terakota bergambar relief Budha. Pada tahun tahun berikutnya  telah di temukan pula pecahan votive tablet dalam jumlah yang lebih banyak, yaitu 5 buah utuhan dan  lebih dari 50 potong pecahannya. Beberapa di antaranya pecahan tersebut masi dapat di utuhkan  kembali. Sebagian votive tablet tersebut ada yang berinskripsi.<br>&nbsp;&nbsp;&nbsp;&nbsp;Sejak tahun 1999 Suaka Peninggalan purbakala Sejarah dan Purbakala (sekarang: Balai Pelestarian  Peninggalan Purbakala) Serang. Telah melakukan pula berbagai kegiatan dalam rangka pemugaran  candi ini, di antaranya melakukan penggalian-pengupasan untuk mengangkat reruntuhan bata. Selama  kegiatan tersebut telah di temukan pula dua buah fragmen inskripsi yang tergores pada sebuah pecahan  bata dan sebuah pecahan terakota, dan dua buah inskripsi yang di goreskan pada lempengan emas kecil  yang di lipat. Keempat inskripsi tersebut berisi ayat–ayat suci agama Buddha, yang semuanya di  goreskan dengan aksara palawa dan bahasa sansekerta. Pada bagian kaki candi terdapat susunan pelipit  yang terdiri dari pelipit rata, pelipit setengah lingkaran, dan pelipit bergerigi. Sedangkan pada dinding  candinya tidak ditemukan susunan pelipit seperti pada bagian kaki.<br>&nbsp;&nbsp;&nbsp;&nbsp;Pada tahun 2002 dan 2003 Puslit Arkenas bersama EFEO kembali melakukan penelitian di SEG V.  dari penelitian ini di peroleh data mengenai keadaan stratigrafi situs ini, khususnya pada sisi timur laut  kaki candi. Kemudian Balai Pelestarian Peninggalan Purbakala Serang melakukan eskapasi di halaman  candi di sisi timur laut dan tenggara, telah menemukanpula runtuhan pagar keliling dengan sisa-sisa  bagian pintu atau gapura di bagian tengah masing-masing sisi pagarkeliling tersebut.',
    gallery: [
      '../../img/candiBlandongan-01.jpeg',
      '../../img/candiBlandongan-02.jpeg',
      '../../img/candiBlandongan-03.jpeg',
      '../../img/candiBlandongan-04.jpeg',
      '../../img/candiBlandongan-05.jpeg',
    ],
    location: {
      name: 'Candi Blandongan',
      latitude: 34.0522,
      longitude: -118.2437,
      link: "https://www.google.co.id/maps/search/Candi+Blandongan/@-6.0556198,107.148646,17",
    },
  },
  {
    title: 'Candi Serut 1a',
    about: "Situs ini semula merupakan sebuah unur yang kemudian dihuni oleh penduduk dan dikenal  dengan kampung Gunteng. Di situs ini sedikitnya ditemukan empat sektor situs yang masing-masing memiliki sisa bangunan candi.",
    history:
      '&nbsp;&nbsp;&nbsp;&nbsp;Situs ini terletak dikampung gunteng pada  kordinat 1070 08‟51‟‟ BT dan 060 03,23‟‟ LS. Pada tahun 1989 Bakosurtanal bersama Fakultas  Geografi UGM dan Ditlinbinjarah mengadakan  penelitian Geoarkeologi melalui penjajagan geo\x02listrik (geoelectric prospecting ), dari penelitian  penjajagan ini diperoleh kepastian adanya sisa  bangunan candi. Melalui tiga kali eskavasi  hampir seluruh kaki candi dapat dinampakan  dengan ukuran 13,65 x 10,70 m, dan tinggi yang  tersisa pada dinding bangunan sekitar 1,80 cm.  Tinggi seluruh bangunan candi sekitar 2,30 m. Pada inding sisi timur laut di sudut utara dan  sudut timur terdapat tembok memanjang yang membentuk garis lurus dengan arah barat laut-tenggara.  Candi Tlj Ia tidak memiliki tangga naik atau pintu masuk di keempat sisinya, kaki candi mempunyai  bentuk konstruksi seperti sebuah “Bak” yang berdiri diatas sebuah pondasi. Situs ini mulai di pugar  pada tahun 2007 sampai saat ini oleh Bp3 serang, penelitian pun masih berlanjut sampai saat ini.',
    gallery: [
      '../../img/candiSerut-01.jpeg',
      '../../img/candiSerut-02.jpeg',
    ],
    location: {
      name: 'Candi Serut 1a',
      latitude: 51.5074,
      longitude: -0.1278,
      link: "https://www.google.co.id/maps/search/Candi+serut+1a/@-6.0560039,107.1483191,17",
    },
  },
  {
    title: 'Magic Glen',
    history:
      'The Magic Glen is known for its magical aura and mysterious happenings.',
    gallery: [
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
    ],
    location: {
      name: 'Magic Glen',
      latitude: 52.52,
      longitude: 13.405,
    },
  },
]


function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`
  currentIndex = index

  // Update circles to indicate the current slide
  for (let i = 0; i < slides.length; i++) {
    const circles = sliderNavigation.children
    if (i === index) {
      circles[i].classList.add('active')
    } else {
      circles[i].classList.remove('active')
    }
  }

  // Update the picture names based on the current slide
  document.getElementById('leftPictureName').textContent =
    forestPictureNames[index]
  document.getElementById('rightPictureName').textContent =
    forestPictureNames[index + 1]

  /*
  // Update the content based on the current slide
  const slideContentElement = document.getElementById('slideContent');
  slideContentElement.innerHTML = `
    <h2>${slideContent[index].title}</h2>
    <hr>
    <h3>History</h3>
    <p>${slideContent[index].history}</p>
    <hr>
    <h3>Gallery</h3>
    <div class="gallery">
      ${slideContent[index].gallery.map(imageUrl => `<img src="${imageUrl}" alt="Image">`).join('')}
    </div>
    <hr>
    <h3>Location</h3>
    <div class="location">
      <a href="https://www.google.com/maps?q=${slideContent[index].location.latitude},${slideContent[index].location.longitude}" target="_blank">
        ${slideContent[index].location.name}
      </a>
    </div>
    <hr>
  `;
  */

  // Update the content based on the current slide
  const slideContentElement = document.getElementById('slideContent')
  slideContentElement.innerHTML = `
    <h2>${slideContent[index].title}</h2>
    <br>
    <hr>
    <p>${slideContent[index].about}</p>
    <hr>
    <h3>Sejarah Singkat</h3>
    <p>${slideContent[index].history}</p>
    <hr>
    <h3>Galeri</h3>
    <div class="gallery">
      <div class="container">
        <div class="row d-flex flex-wrap align-items-center" data-toggle="modal" data-target="#lightbox">
          <div class="col-12 col-md-6 col-lg-3">
            ${slideContent[index].gallery
            .map(imageUrl => `<img src="${imageUrl}" data-target="#indicators" data-slide-to="0" alt="Image">`)
            .join('')}
          </div>
        </div>
      </div>
      
    </div>
    <hr>
    <h3>Lokasi</h3>
    <div class="location">
      <a href="#" onclick=openLocationLink("${
        slideContent[index].location.link}")>
        ${slideContent[index].location.name}
      </a>
    </div>
    <hr>
  `

  // slideContentElement.innerHTML = `
  //   <h2>${slideContent[index].title}</h2>
  //   <br>
  //   <hr>
  //   <p>${slideContent[index].about}</p>
  //   <hr>
  //   <h3>Sejarah Singkat</h3>
  //   <p>${slideContent[index].history}</p>
  //   <hr>
  //   <h3>Galeri</h3>
  //   <div class="gallery">
  //     ${slideContent[index].gallery
  //       .map(imageUrl => `<img src="${imageUrl}" alt="Image">`)
  //       .join('')}
  //   </div>
  //   <hr>
  //   <h3>Lokasi</h3>
  //   <div class="location">
  //     <a href="#" onclick=openLocationLink("${
  //       slideContent[index].location.link}")>
  //       ${slideContent[index].location.name}
  //     </a>
  //   </div>
  //   <hr>
  // `

  // <a href="#" onclick="openLocationLink(${
  //   slideContent[index].location.latitude
  // }, ${slideContent[index].location.longitude})">
  //   ${slideContent[index].location.name}
  // </a>
  

  // Handle hiding/showing arrow buttons
  const leftArrowBtn = document.querySelector('.arrow-btn.left')
  const rightArrowBtn = document.querySelector('.arrow-btn.right')
  if (index === 0) {
    leftArrowBtn.style.display = 'none'
  } else {
    leftArrowBtn.style.display = 'block'
  }

  if (index === slides.length - 1) {
    rightArrowBtn.style.display = 'none'
  } else {
    rightArrowBtn.style.display = 'block'
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    showSlide(currentIndex - 1)
  }
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    showSlide(currentIndex + 1)
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') {
    prevSlide()
  } else if (e.key === 'ArrowRight') {
    nextSlide()
  }
})

imageUrlContainerSlide = ['candiJiwa.jpeg', 'candiBlandongan.jpeg', 'candiSerut.jpeg']

// Create circles for each slide
for (let i = 0; i < slides.length; i++) {
  const circle = document.createElement('div')
  circle.classList.add('circle')
  sliderNavigation.appendChild(circle)

  // Set a random forest background image for each slide
  // const randomImageUrl = `https://source.unsplash.com/1600x900/?forest,landscape&sig=${i}`
  // slides[i].style.backgroundImage = `url('${randomImageUrl}')`
  // slides[i].style.backgroundImage = `url('../../img/candiBlandongan.jpeg')`
  // slides[i].style.backgroundImage = `url('../../img/candiBlandongan.jpeg')`
  var imageUrl = '../../img/'
  // imageUrl += 'candiBlandongan.jpeg'
  imageUrl += imageUrlContainerSlide[i]
  slides[i].style.backgroundImage = `url('${imageUrl}')`
}

// function openLocationLink(latitude, longitude) {
//   const url = `https://www.google.com/maps?q=${latitude},${longitude}`
//   window.open(url, '_blank')
// }

function openLocationLink(urlLink) {
  window.open(urlLink, '_blank')
}

// Show the initial slide and mark the first circle as active
showSlide(currentIndex)

