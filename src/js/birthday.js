const refs = {
    birthday: document.querySelector('.birthday'),
    form: document.querySelector('.form-age'),
  input: document.querySelector('.form-age-text'),
  button: document.querySelector('.form-age-btn'),
  result: document.querySelector('.form-computer-text'),
};
refs.form.addEventListener('submit', (event) => {
    event.preventDefault()
    const year = parseInt(refs.input.value);

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        refs.result.textContent = 'Ви народилися у високосний рік!';
        refs.result.style.color = "green"
  } else {
        refs.result.textContent = 'Ви народилися не у високосний рік!';
        refs.result.style.color = 'red';
  }
});