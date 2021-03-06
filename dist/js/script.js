//slider

const slider = tns({
  container: '.solutions__slider',
  items: 1,
  slideBy: 'page',
  navContainer: ".solutions__slider-list",
  controlsContainer: ".solutions__slider-controls",
  speed: 500,
  autoplay: true,
  autoplayButtonOutput: false,
  mouseDrag: true

});

const sliderMain = tns({
  container: '.slider',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  navContainer: ".slider__dots",
  controlsContainer: ".slider__controls",
  speed: 500,
  autoplay: true,
  autoplayButtonOutput: false,
  // gutter: 20
});

//menu

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.head__menu'),
  links = document.querySelectorAll('.head__link'),
  overlay = document.querySelector('.head__overlay')

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active')
  hamburger.classList.toggle('is-active')
})

links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active')
    hamburger.classList.remove('is-active')
  })
});

overlay.addEventListener('click', () => {
  menu.classList.remove('active')
  hamburger.classList.remove('is-active')
})