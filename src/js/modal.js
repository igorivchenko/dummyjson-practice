const button = document.querySelector('.js-close');
const backdrop = document.querySelector('.backdrop');

function buttonClick(event) {
  backdrop.classList.add('is-hidden');
}
button.addEventListener('click', buttonClick);
