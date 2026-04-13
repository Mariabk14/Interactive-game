const numberContainer = document.querySelector("#number")
console.log(numberContainer)

const allTitle = document.createElement("h2")
allTitle.textContent = 'Вгадай число, яке загадав комп’ютер';

console.log(allTitle)

const numberForm = document.createElement("form")
const numberText = document.createElement("input")
numberText.setAttribute("class","number-text")
numberText.setAttribute("type", "number");
numberText.setAttribute('placeholder', 'Введіть число');

const numberBtn = document.createElement("button")
numberBtn.setAttribute('type','button')
numberBtn.setAttribute('class', 'number-btn');
const numberImage = document.createElement("img")
numberImage.src = './img/dandruff.png'
numberImage.alt = 'dandruff'
numberImage.width = '15'
console.log(numberImage)

const numberResult = document.createElement("p")
numberResult.classList.add("number-result")
numberResult.textContent = 'Вітаю, ви вгадали число! (number) ';
console.log(numberResult)


numberContainer.appendChild(allTitle)
numberContainer.appendChild(numberForm)
numberForm.appendChild(numberText)
numberForm.appendChild(numberBtn)
numberBtn.appendChild(numberImage)
numberContainer.appendChild(numberResult)
