const slider = document.getElementById('slider')
const slides = document.getElementsByClassName('slide')
const sliderNavigation = document.getElementById('sliderNavigation')
let currentIndex = 0

const forestPictureNames = [
  'Candi Jiwa',
  'Candi Blandongan',
  'Candi Serut',
]

const slideContent = [
  {
    title: 'Candi Jiwa',
    history:
      "Candi Jiwa merupakan sebuah gundukan tanah seperti bukit kecil yang biasa disebut penduduk unur jiwa berbentuk lonjong. Memiliki ketinggian 4 m dari permukaan tanah sawah di sekitarnya  dan luas sekitarnya 500 m². Pada tahun 1985 situs ini pertama kali diekskavasi dan dilanjutkan pada tahun 1986. Situs ini  semula digarap oleh penduduk sebagai lahan  pertanian yang ditanami pohon pisang dan  pala wija. Dari hasil penelitian kemungkinan besar candi jiwa merupakan sebuah candi berbentuk\xa0stupa.",
    gallery: [
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
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
    history:
      'Situs ini pertama kali di survei oleh  tim arkeologi FSUI pada tahun 1984,  antara tahun 1992 dan 2000 situs ini di  eskapasi oleh Puslit Arkenas, dan  menghasilkan penemuan sebuah  reruntuhan candi dengan bagian kaki  yang berdenah bujur sangkar dengan  ukuran 25 x 25 m. Di beberapa tempat pada bagian kaki candi masih ditemukan lepa stuko yang menempel pada lapisan stuko tersebut, eskavasi oleh puslit arkenas pada tahun 1995 telah menemukan sebuah temuan  berupa fragmen meterai (votive tablet) terakota bergambar relief Budha.  Pada tahun berikutnya  telah di temukan pula pecahan votive tablet dalam jumlah yang lebih banyak, yaitu 5 buah utuhan dan  lebih dari 50 potong pecahannya. Beberapa pecahan tersebut masih dapat di utuhkan  kembali. Sebagian votive tablet tersebut ada yang berinskripsi.   Sejak tahun 1999 Suaka Peninggalan purbakala Sejarah dan Purbakala (sekarang: Balai Pelestarian  Peninggalan Purbakala) Serang. Telah melakukan pula berbagai kegiatan dalam rangka pemugaran  candi ini, di antaranya melakukan penggalian-pengupasan untuk mengangkat reruntuhan bata.  Keempat inskripsi tersebut berisi ayat–ayat suci agama Buddha, yang semuanya di  goreskan dengan aksara palawa dan bahasa sansekerta. Pada tahun 2002 dan 2003 Puslit Arkenas bersama EFEO kembali melakukan penelitian di SEG V.  Penelitian ini di peroleh data mengenai keadaan stratigrafi situs ini, khususnya pada sisi timur laut  kaki candi. Kemudian Balai Pelestarian Peninggalan Purbakala Serang melakukan eskapasi di halaman  candi di sisi timur laut dan tenggara, telah menemukan pula runtuhan pagar keliling dengan sisa-sisa  bagian pintu atau gapura di bagian tengah masing-masing sisi pagarkeliling\xa0tersebut.',
    gallery: [
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
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
    history:
      'Sejarah Candi Serut',
    gallery: [
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/200',
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
    <hr>
    <h3>Sejarah</h3>
    <p>${slideContent[index].history}</p>
    <hr>
    <h3>Galeri</h3>
    <div class="gallery">
      ${slideContent[index].gallery
        .map(imageUrl => `<img src="${imageUrl}" alt="Image">`)
        .join('')}
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

// Create circles for each slide
for (let i = 0; i < slides.length; i++) {
  const circle = document.createElement('div')
  circle.classList.add('circle')
  sliderNavigation.appendChild(circle)

  // Set a random forest background image for each slide
  const randomImageUrl = `https://source.unsplash.com/1600x900/?forest,landscape&sig=${i}`
  // slides[i].style.backgroundImage = `url('${randomImageUrl}')`
  slides[i].style.backgroundImage = `url('../../src/image/test.jpg')`
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

