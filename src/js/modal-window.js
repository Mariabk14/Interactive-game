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

  console.log(refs.closeModalBtn)
  console.log(refs.backdrop);
console.log(refs.jsFormModal);
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

  console.log(refs.jsFormModal)
refs.jsFormModal.addEventListener("submit", onInputChange)
 
function onInputChange(event) {
  event.preventDefault()
  console.log(refs.formText)
  savedUserName = refs.formText.value
  console.log(savedUserName)
  if (savedUserName) {
    refs.userName.textContent = `Вітаємо, ${savedUserName}!`;
    document.body.classList.remove('show-modal');
  }
}
});



