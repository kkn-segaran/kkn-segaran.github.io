const slider = document.getElementById('slider');
const slides = document.getElementsByClassName('slide');
const sliderNavigation = document.getElementById('sliderNavigation');
let currentIndex = 0;

const forestPictureNames = [
  "Mystical Forest",
  "Enchanted Woods",
  "Whispering Pines",
  "Magic Glen"
];

const slideContent = [
  {
    title: "Mystical Forest",
    history: "This is the history of the Mystical Forest. It's a place of magic and mystery.",
    gallery: [
      "https://via.placeholder.com/200",
      "https://via.placeholder.com/200",
      "https://via.placeholder.com/200"
    ],
    location: {
      name: "Mystical Forest",
      latitude: 40.7128,
      longitude: -74.0060
    }
  },
  {
    title: "Enchanted Woods",
    history: "The Enchanted Woods are full of wonder and enchantment. Many mystical creatures reside here.",
    gallery: [
      "https://via.placeholder.com/200",
      "https://via.placeholder.com/200",
      "https://via.placeholder.com/200"
    ],
    location: {
      name: "Enchanted Woods",
      latitude: 34.0522,
      longitude: -118.2437
    }
  },
  {
    title: "Whispering Pines",
    history: "The Whispering Pines have a tale of ancient whispers and stories carried by the wind.",
    gallery: [
      "https://via.placeholder.com/200",
      "https://via.placeholder.com/200",
      "https://via.placeholder.com/200"
    ],
    location: {
      name: "Whispering Pines",
      latitude: 51.5074,
      longitude: -0.1278
    }
  },
  {
    title: "Magic Glen",
    history: "The Magic Glen is known for its magical aura and mysterious happenings.",
    gallery: [
      "https://via.placeholder.com/200",
      "https://via.placeholder.com/200",
      "https://via.placeholder.com/200"
    ],
    location: {
      name: "Magic Glen",
      latitude: 52.5200,
      longitude: 13.4050
    }
  }
];

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;

  // Update circles to indicate the current slide
  for (let i = 0; i < slides.length; i++) {
    const circles = sliderNavigation.children;
    if (i === index) {
      circles[i].classList.add('active');
    } else {
      circles[i].classList.remove('active');
    }
  }

  // Update the picture names based on the current slide
  document.getElementById('leftPictureName').textContent = forestPictureNames[index];
  document.getElementById('rightPictureName').textContent = forestPictureNames[index + 1];

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

  // Handle hiding/showing arrow buttons
  const leftArrowBtn = document.querySelector('.arrow-btn.left');
  const rightArrowBtn = document.querySelector('.arrow-btn.right');
  if (index === 0) {
    leftArrowBtn.style.display = 'none';
  } else {
    leftArrowBtn.style.display = 'block';
  }

  if (index === slides.length - 1) {
    rightArrowBtn.style.display = 'none';
  } else {
    rightArrowBtn.style.display = 'block';
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    showSlide(currentIndex - 1);
  }
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    showSlide(currentIndex + 1);
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    prevSlide();
  } else if (e.key === 'ArrowRight') {
    nextSlide();
  }
});

// Create circles for each slide
for (let i = 0; i < slides.length; i++) {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  sliderNavigation.appendChild(circle);

  // Set a random forest background image for each slide
  const randomImageUrl = `https://source.unsplash.com/1600x900/?forest,landscape&sig=${i}`;
  slides[i].style.backgroundImage = `url('${randomImageUrl}')`;
}

// Show the initial slide and mark the first circle as active
showSlide(currentIndex);
