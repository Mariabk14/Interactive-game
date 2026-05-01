const refs = {
    birthday: document.querySelector('.birthday'),
    form: document.querySelector('.form-age'),
  input: document.querySelector('.form-age-text'),
  button: document.querySelector('.form-age-btn'),
  result: document.querySelector('.form-computer-text'),
};
console.log(refs.result)
refs.form.addEventListener('submit', (event) => {
    event.preventDefault()
    const year = parseInt(refs.input.value);
    console.log(year)

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log(refs.result)
        refs.result.textContent = 'Ви народилися у високосний рік!';
        refs.result.style.color = "green"
  } else {
        refs.result.textContent = 'Ви народилися не у високосний рік!';
        refs.result.style.color = 'red';
  }
});