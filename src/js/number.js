import dandruff from "../img/dandruff.png"

const numberContainer = document.querySelector("#number")
console.log(numberContainer)


const allTitle = document.createElement("h2")
allTitle.textContent = 'Вгадай число, яке загадав комп’ютер';
allTitle.classList.add("all-title")

console.log(allTitle)

const numberForm = document.createElement("form")
numberForm.classList.add("number-form")
const numberText = document.createElement("input")
numberText.setAttribute("class","number-text")
numberText.setAttribute("type", "number");
numberText.setAttribute('placeholder', 'Введіть число');

const numberBtn = document.createElement("button")
numberBtn.setAttribute('type','button')
numberBtn.setAttribute('class', 'number-btn');
const numberImage = document.createElement("img")
numberImage.src = dandruff
numberImage.alt = 'dandruff'
numberImage.width = '15'
console.log(numberImage)

const numberResult = document.createElement("p")
numberResult.classList.add("number-result")
console.log(numberResult)

const bottomLine = document.createElement("div")
bottomLine.classList.add("line")


numberContainer.appendChild(allTitle)
numberContainer.appendChild(numberForm)
numberForm.appendChild(numberText)
numberForm.appendChild(numberBtn)
numberBtn.appendChild(numberImage)
numberForm.appendChild(numberResult);
numberContainer.appendChild(bottomLine)


// const randomNumber = Math.round(Math.random() * 10)
 const min = 0;
const max = 100;
const randomNumber = Math.round (Math.random() * (max - min) + min);
console.log(randomNumber);

numberForm.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log(typeof numberText.value)
    const userNumber = parseInt(numberText.value)
    console.log(userNumber)

    if (randomNumber === userNumber) {
        numberResult.textContent = `Вітаю, ви вгадали число ${randomNumber}!`;
        numberResult.style.color = '#039900';
    } else {
        numberResult.textContent = `Ви програли, комп’ютер загадав ${randomNumber}!`;
        numberResult.style.color = "#900";
    }

})