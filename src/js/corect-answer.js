const scientists = [
  {
    name: 'Albert',
    surname: 'Einstein',
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: 'Isaac',
    surname: 'Newton',
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: 'Galileo',
    surname: 'Galilei',
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: 'Marie',
    surname: 'Curie',
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: 'Johannes',
    surname: 'Kepler',
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: 'Nicolaus',
    surname: 'Copernicus',
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: 'Max',
    surname: 'Planck',
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: 'Katherine',
    surname: 'Blodgett',
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: 'Ada',
    surname: 'Lovelace',
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: 'Sarah E.',
    surname: 'Goode',
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: 'Lise',
    surname: 'Meitner',
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: 'Hanna',
    surname: 'Hammarström',
    born: 1829,
    dead: 1909,
    id: 12,
  },
];
const refs = {
   photos: document.querySelectorAll(".foto"),
  buttons: document.querySelectorAll(".task"),
}

function highlight(list) {
  refs.photos.forEach(p => p.classList.remove('active'));

  list.forEach(s => {
    refs.photos[s.id - 1].classList.add('active');
  });
}
// function
refs.buttons[0].addEventListener('click', () => {
  const res = scientists.filter(s => s.born >= 1801 && s.born <= 1900);
  highlight(res);
});

refs.buttons[1].addEventListener("click", () => {
  const res = [...scientists].sort((a, b) => 
    a.surname.localeCompare(b.surname)
  );
  highlight(res);
});

refs.buttons[2].addEventListener('click', () => {
  const res = [...scientists].sort(
    (a, b) => b.dead - b.born - (a.dead - a.born)
  )
  highlight(res);
});

refs.buttons[3].addEventListener('click', () => {
  const res = scientists.reduce((a, b) => (a.born > b.born ? a : b));
  highlight([res]);
});

refs.buttons[4].addEventListener('click', () => {
  const res = scientists.find(s => s.surname === 'Einstein');
  alert(res.born);
  highlight([res]);
});

refs.buttons[5].addEventListener('click', () => {
  const res = scientists.filter(s => s.surname.startsWith('C'));
  highlight(res);
});

refs.buttons[6].addEventListener('click', () => {
  const res = scientists.filter(s => !s.name.startsWith('A'));
  highlight(res);
});

refs.buttons[7].addEventListener('click', () => {
  const sorted = [...scientists].sort(
    (a, b) => a.dead - a.born - (b.dead - b.born)
  );

  const shortest = sorted[0];
  const longest = sorted[sorted.length - 1];

  highlight([shortest, longest]);
});

refs.buttons[8].addEventListener('click', () => {
  const res = scientists.filter(s => s.name[0] === s.surname[0]);
  highlight(res);
});
