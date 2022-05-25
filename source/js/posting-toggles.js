let buttons = document.querySelectorAll('.photo-posting__change-button');
let ranges = document.querySelectorAll('.photo-posting__input');
let active = 0

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    buttons[active].classList.remove('photo-posting__change-button--active');
    ranges[active].classList.remove('photo-posting__input--active');
    active = i;
    buttons[active].classList.add('photo-posting__change-button--active');
    ranges[active].classList.add('photo-posting__input--active');
  })
}
