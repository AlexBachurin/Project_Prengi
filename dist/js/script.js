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
    autoplayButtonOutput: false
  });