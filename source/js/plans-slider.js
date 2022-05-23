let headers = document.querySelectorAll('.plans-table__header-item[data-index]');
let rows = document.querySelectorAll('.plans-table__row-item[data-index]');
let index = document.querySelector('.plans-table__header-item--active').dataset.index;
let plansPaginations = document.querySelectorAll('.plans__pagination-item');

for (let i = 0; i < plansPaginations.length; i++) {
  plansPaginations[i].addEventListener('click', function () {
    headers[index].classList.remove('plans-table__header-item--active');
    for (let j = 0; j < rows.length; j++) {
      if (rows[j].dataset.index == index) {
        rows[j].classList.remove('plans-table__row-item--active');
      }
    }
    plansPaginations[index].classList.remove('slider__pagination-item--active')
    index = i;
    headers[index].classList.add('plans-table__header-item--active');
    for (let j = 0; j < rows.length; j++) {
      if (rows[j].dataset.index == index) {
        rows[j].classList.add('plans-table__row-item--active');
      }
    }
    plansPaginations[index].classList.add('slider__pagination-item--active')
  });
}
