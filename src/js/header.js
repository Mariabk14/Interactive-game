import light from "../img/Sun-btn.png"
import dark from "../img/Moon-btn.png"

const games = [
  {
    id: 1,
    name: 'Високосний калькулятор',
    category: 'numerical',
  },
  {
    id: 2,
    name: 'Вгадай число',
    category: 'numerical',
  },
  {
    id: 3,
    name: 'Камінь-Ножиці-Папір',
    category: 'game',
  },
  {
    id: 4,
    name: 'Калькулятор',
    category: 'numerical',
  },
  {
    id: 5,
    name: 'Калькулятор часу',
    category: 'numerical',
  },
  {
    id: 8,
    name: 'Найбільше число',
    category: 'numerical',
  },
  {
    id: 10,
    name: 'Вчений',
    category: 'acquaintance',
  },
];
document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll("[data-filter]")
  const sections = document.querySelectorAll("section[id]")

  // console.log(options)
  // console.log(sections)

  const groups = {
    numerical: ["1","2","4","5","8"],
    game: ["3"],
    acquaintance: ["10"],
    all: ["1", "2", "3","4", "5", "8", "10"]
  };
  
  options.forEach(option => {
    // console.log(option)
    option.addEventListener("click", (event) => {
      event.preventDefault()
    const filter = option.dataset.filter

    const allowed = groups[filter]
    
    sections.forEach(section => {
      const id = section.id
      if (allowed.includes(id)) {
        section.style.display = "block"
      } else {
         section.style.display = 'none';
      }
    })
  })
});
})
const btn = document.querySelector('.background-change');
// const icon = document.querySelector('.background-change::after');
const sections = document.querySelectorAll(".section")
const header = document.querySelector(".header")
const footer = document.querySelector(".footer")

btn.addEventListener('click', () => {
  btn.classList.toggle('background-change-dark');

  if (btn.classList.contains('background-change-dark')) {
    // icon.style.display = "none"
    sections.forEach(section => section.style.backgroundColor = 'gray');
    header.style.backgroundColor = "gray"
    footer.style.backgroundColor = 'gray';
  } else {
    sections.forEach(section => (section.style.backgroundColor = 'white'));
    header.style.backgroundColor = 'white';
    footer.style.backgroundColor = 'white';

  }
  
});

