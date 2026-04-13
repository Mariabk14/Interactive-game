window.addEventListener("load")

const refs = {
  closeModalBth: document.querySelector("[data-action='close-modal']"),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.closeModalBth.addEventListener('click', onCloseModalClick);
refs.backdrop.addEventListener('click', onBackdropClick);

function load (){
 document.body.classList.add('show-modal');
}

function onCloseModalClick() {
  window.removeEventListener('keydown', onEscapeKeyPress);
  document.body.classList.remove('show-modal');
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModalClick();
  }
}
