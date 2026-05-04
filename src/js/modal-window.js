document.addEventListener('DOMContentLoaded', () => {
  
  const refs = {
    closeModalBth: document.querySelector("[data-action='close-modal']"),
    backdrop: document.querySelector('.js-backdrop'),
  };

  refs.closeModalBtn.addEventListener('click', onCloseModalClick);
  refs.backdrop.addEventListener('click', onBackdropClick);

  function load() {
    refs.backdrop.classList.remove('is-hidden');
  }

  window.addEventListener('load', load);

  function onCloseModalClick() {
    refs.backdrop.classList.add('is-hidden');
  }

  function onBackdropClick(e) {
    if (e.currentTarget === e.target) {
      onCloseModalClick();
    }
  }
});
