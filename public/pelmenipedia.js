// Hamburger-menu

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})

// Themes

const oddBlocks = document.querySelectorAll("div[class^='block']:nth-child(odd), div[class*=' block']:nth-child(odd)");
const prev = document.querySelector(".slider-prev img");
const next = document.querySelector(".slider-next img");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");
const btn = document.querySelector(".change-theme");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.toggle('dark');
  navbar.classList.toggle('dark');
  oddBlocks.forEach((block, i) => {
    block.classList.toggle('dark');
  });
  prev.src = "./img/left-white.png";
  next.src = "./img/right-white.png";
})

// Slider

const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}
