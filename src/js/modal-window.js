document.addEventListener('DOMContentLoaded', () => {

  const refs = {
    closeModalBtn: document.querySelector(".modalCloseBtn"),
    backdrop: document.querySelector('.js-backdrop'),
  };
  console.log(refs.closeModalBtn)
  console.log(refs.backdrop);
  refs.closeModalBtn.addEventListener('click', onCloseModalClick);
  
  refs.backdrop.addEventListener('click', onBackdropClick);

  function load() {
    document.body.classList.add('show-modal');
  }

  window.addEventListener('load', load);

  function onCloseModalClick() {
    document.body.classList.remove('show-modal');
  }

  function onBackdropClick(e) {
    if (e.currentTarget === e.target) {
      onCloseModalClick();
    }
  }
});

