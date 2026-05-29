const choiceContainer = document.querySelector('#choice');

const allTitle = document.createElement('h2');
allTitle.textContent = 'Введіть 3 числа';
allTitle.classList.add('all-title')


const form = document.createElement("form")
form.classList.add('form-choise')
const  numberOne = document.createElement("input");
numberOne.classList.add('nummber-choice')
numberOne.setAttribute('type', 'text');
numberOne.setAttribute('placeholder', 'Введіть число');

const numberTwo = document.createElement('input');
numberTwo.classList.add('nummber-choice');
numberTwo.setAttribute('type', 'text');
numberTwo.setAttribute('placeholder', 'Введіть число');

const numberThree = document.createElement('input');
numberThree.classList.add('nummber-choice');
numberThree.setAttribute('type', 'text');
numberThree.setAttribute('placeholder', 'Введіть число');

const numberText = document.createElement("p")
numberText.classList.add('number-text-choice')
numberText.textContent = '';

const bottomLine = document.createElement('div');
bottomLine.classList.add('line');

choiceContainer.appendChild(allTitle)
choiceContainer.appendChild(form)
form.appendChild(numberOne)
form.appendChild(numberTwo);
form.appendChild(numberThree);
choiceContainer.appendChild(numberText)
choiceContainer.appendChild(bottomLine);

const refs = {
  inputs: document.querySelectorAll(".nummber-choice"),
  result: document.querySelector(".number-text-choice")
}

function updaitNumberArrai() {
  let numbers =[]
refs.inputs.forEach(input => {
    const value = input.value
    numbers.push(value)
})
  const maxNumber = Math.max(...numbers)
  refs.result.textContent = `Найбільше число, яке ви ввели - ${maxNumber}`;
}
refs.inputs.forEach(input => (input.addEventListener("input", updaitNumberArrai)))