let slides = document.querySelectorAll('.slider__list .slider__item');
let currentSlide = 0;
let sliderToggleNext = document.querySelector('.slider__toggle--right');
let sliderTogglePrev = document.querySelector('.slider__toggle--left');
let sliderPaginations = document.querySelectorAll('.slider__pagination-item');
let sliderTexts = document.querySelectorAll('.reviews__text');

let resizeText = function () {
  let hgt = 0
  for (let i = 0; i < sliderTexts.length; i++) {
    sliderTexts[i].style.height = null;
  }

  for (let i = 0; i < sliderTexts.length; i++) {
    if (i === currentSlide) {
      let tmpHgt = window.getComputedStyle(sliderTexts[i]).getPropertyValue("height");
      tmpHgt = parseInt(tmpHgt.replace(/[^\d.]/g, ''), 10);
      if (tmpHgt > hgt) {
        hgt = tmpHgt
      }
    } else {
      slides[i].classList.add('slider__item--active');
      let tmpHgt = window.getComputedStyle(sliderTexts[i]).getPropertyValue("height");
      tmpHgt = parseInt(tmpHgt.replace(/[^\d.]/g, ''), 10);
      slides[i].classList.remove('slider__item--active');
      if (tmpHgt > hgt) {
        hgt = tmpHgt
      }
    }
  }

  for (let i = 0; i < sliderTexts.length; i++) {
    sliderTexts[i].style.height = hgt + "px";
  }

}

resizeText();

sliderToggleNext.addEventListener('click', function () {
  slides[currentSlide].classList.remove('slider__item--active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('slider__item--active');
});

sliderTogglePrev.addEventListener('click', function () {
  slides[currentSlide].classList.remove('slider__item--active');
  if (currentSlide === 0) {
    currentSlide = (slides.length - 1);
  } else {
    currentSlide = (currentSlide - 1) % slides.length;
  }
  slides[currentSlide].classList.add('slider__item--active');
});

for (let i = 0; i < sliderPaginations.length; i++) {
  sliderPaginations[i].addEventListener('click', function () {
    slides[currentSlide].classList.remove('slider__item--active');
    sliderPaginations[currentSlide].classList.remove('slider__pagination-item--active');
    currentSlide = i
    slides[currentSlide].classList.add('slider__item--active');
    sliderPaginations[currentSlide].classList.add('slider__pagination-item--active');
  });
}

window.addEventListener('resize', function () {
  resizeText();
});
