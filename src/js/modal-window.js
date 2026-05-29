let savedUserName = ""

const refs = {
    closeModalBtn: document.querySelector(".modalCloseBtn"),
    backdrop: document.querySelector('.js-backdrop'),
    jsFormModal: document.querySelector('.js-modal-form'),
    formText: document.querySelector('.form-text'),
    savedBtn: document.querySelector(".form-modal-btn"),
    userName: document.querySelector(".user-name"),
};
  
document.addEventListener('DOMContentLoaded', () => {

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

refs.jsFormModal.addEventListener("submit", onInputChange)
 
function onInputChange(event) {
  event.preventDefault()

  savedUserName = refs.formText.value
  if (savedUserName) {
    refs.userName.textContent = `Вітаємо, ${savedUserName}!`;
    document.body.classList.remove('show-modal');
  }
}
});



