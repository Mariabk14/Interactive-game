const choiceContainer = document.querySelector('#choice');
console.log(choiceContainer);

const allTitle = document.createElement('h2');
allTitle.textContent = 'Введіть 3 числа';
allTitle.classList.add('all-title')

console.log(allTitle)

const form = document.createElement("form")
const  numberOne = document.createElement("input");
numberOne.classList.add('nummber-choice')
numberOne.setAttribute('type', 'number');
numberOne.setAttribute('placeholder', 'Введіть число');

const numberTwo = document.createElement('input');
numberTwo.classList.add('nummber-choice');
numberTwo.setAttribute('type', 'number');
numberTwo.setAttribute('placeholder', 'Введіть число');

const numberThree = document.createElement('input');
numberThree.classList.add('nummber-choice');
numberThree.setAttribute('type', 'number');
numberThree.setAttribute('placeholder', 'Введіть число');

const numberText = document.createElement("p")
numberText.classList.add('number-text-choice')
numberText.textContent = '';

choiceContainer.appendChild(allTitle)
choiceContainer.appendChild(form)
form.appendChild(numberOne)
form.appendChild(numberTwo);
form.appendChild(numberThree);
choiceContainer.appendChild(numberText)

const refs = {
    input : document.querySelectorAll(".nummber-choice")
}
console.log(refs.input)
let numbers =[]
refs.input.forEach(input => {
    // const value = Number(input.value)
    console.log(input.value)
    // numbers.push(value)
    // return numbers
})
console.log(numbers)
form.addEventListener('submit', function (e) {
  e.preventDefault();

    const num1 = numberOne.value;
  const num2 = numberTwo.value;
  const num3 = numberThree.value;

  if (num1 === '' || num2 === '' || num3 === '') {
      numberText.textContent = 'Введіть всі три числа!';
    return;
  }

  const n1 = Number(num1);
  const n2 = Number(num2);
  const n3 = Number(num3);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    numberText.textContent = 'Введені дані не є числами!';
    return;
  }

  const max = Math.max(n1, n2, n3);

  numberText.textContent = `Найбільше число, яке ви ввели - ${max}`;
});