const refs = {
  form: document.querySelector('.email'),
  input: document.querySelector('.email-input'),
  backdrop: document.querySelector('[data-modal]'),
  closeModalBtn: document.querySelector('.modal-close-footer'),
  openBtn: document.querySelector('.email-button'),
};


refs.openBtn.addEventListener('click', onOpenModalClick);
refs.closeModalBtn.addEventListener('click', onCloseModalClick);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModalClick() {

  if (refs.input.value.trim() === '') {
    alert('Введіть ел. адресу');
    return;
  }

  refs.backdrop.classList.remove('is-hidden-footer');

  window.addEventListener('keydown', onEscapeKeyPress);

  refs.form.reset();
}

function onCloseModalClick() {
  refs.backdrop.classList.add('is-hidden-footer');

  window.removeEventListener('keydown', onEscapeKeyPress);
}


function onEscapeKeyPress(e) {
  if (e.key === 'Escape') {
    onCloseModalClick();
  }
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModalClick();
  }
}
