const data = [
  {
    id: 1,
    name: 'Pixels Art',
    internet: 'https://vincenzofdg.github.io/Pixels-Art',
    repositorie: 'https://github.com/Vincenzofdg/Pixels-Art',
    downloadLink: 'https://github.com/Vincenzofdg/Pixels-Art/archive/refs/heads/master.zip',
    type: 'Front-end',
    framework: 'None',
    gif: true
  },
  {
    id: 2,
    name: 'To Do List',
    internet: 'https://vincenzofdg.github.io/To-Do-List',
    repositorie: 'https://github.com/Vincenzofdg/To-Do-List',
    downloadLink: 'https://github.com/Vincenzofdg/To-Do-List/archive/refs/heads/master.zip',
    type: 'Front-end',
    framework: 'None',
    gif: true
  },
  {
    id: 3,
    name: 'Mistery Letter',
    internet: 'https://vincenzofdg.github.io/Mistery-Letter',
    repositorie: 'https://github.com/Vincenzofdg/Mistery-Letter',
    downloadLink: 'https://github.com/Vincenzofdg/Mistery-Letter/archive/refs/heads/master.zip',
    type: 'Front-end',
    framework: 'None',
    gif: true
  },
  {
    id: 4,
    name: 'Hogwarts Application',
    internet: 'https://vincenzofdg.github.io/Hogwarts-Application',
    repositorie: 'https://github.com/Vincenzofdg/Hogwarts-Application',
    downloadLink: 'https://github.com/Vincenzofdg/Hogwarts-Application/archive/refs/heads/master.zip',
    type: 'Front-end',
    framework: 'None',
    gif: true
  },
  {
    id: 5,
    name: 'Shopping Cart',
    internet: 'https://vincenzofdg.github.io/Shopping-Cart',
    repositorie: 'https://github.com/Vincenzofdg/Shopping-Cart',
    downloadLink: 'https://github.com/Vincenzofdg/Shopping-Cart/archive/refs/heads/master.zip',
    type: 'Front-end',
    framework: 'None',
    gif: true
  },
  {
    id: 6,
    name: 'Shopping Shirt',
    internet: 'https://vincenzofdg.github.io/Shopping-Shirt',
    repositorie: 'https://github.com/Vincenzofdg/Shopping-Shirt',
    downloadLink: 'https://github.com/Vincenzofdg/Shopping-Shirt/archive/refs/heads/master.zip',
    type: 'Front-end',
    framework: 'None',
    gif: true
  },
  {
    id: 7,
    name: 'Naruto Movies',
    internet: 'https://vincenzofdg.github.io/Naruto-Movies',
    repositorie: 'https://github.com/Vincenzofdg/Naruto-Movies',
    downloadLink: 'https://github.com/Vincenzofdg/Naruto-Movies/archive/refs/heads/master.zip',
    type: 'Front-end',
    framework: 'React',
    gif: true
  },
  {
    id: 8,
    name: 'Movie Library',
    internet: 'https://vincenzofdg.github.io/Movie-Library',
    repositorie: 'https://github.com/Vincenzofdg/Movie-Library',
    downloadLink: 'https://github.com/Vincenzofdg/Movie-Library/archive/refs/heads/master.zip',
    type: 'Front-end',
    framework: 'React',
    gif: true
  },
  {
    id: 9,
    name: 'Testes Unitários',
    internet: '',
    repositorie: 'https://github.com/Vincenzofdg/Trybe/tree/master/M.01_07%20-%20Introdu%C3%A7%C3%A3o%20%C3%A0%20JavaScript%20ES6%20e%20Testes%20Unit%C3%A1rios/04%20-%20Projeto:%20Js%20Unit%20Tests%20(27.07.21)',
    downloadLink: '',
    type: 'Test',
    framework: 'None',
    gif: false
  },
  {
    id: 10,
    name: 'Jest (Mocking)',
    internet: '',
    repositorie: 'https://github.com/Vincenzofdg/Trybe/tree/master/M.01_10%20-%20Testes%20Automatizados%20com%20Jest/04%20-%20Projeto:%20Jest%20Ass%C3%ADncrono%20e%20Mocking%20(20.08.21)',
    downloadLink: '',
    type: 'Test',
    framework: 'None',
    gif: false
  },
  {
    id: 11,
    name: 'React Testing Library',
    internet: '',
    repositorie: 'https://github.com/Vincenzofdg/Trybe/tree/master/M.02_05%20-%20Testes%20Automatizados%20com%20React%20Testing%20Library/04%20-%20Projeto:%20Testes%20em%20React%20(29.09.21)',
    downloadLink: '',
    type: 'Test',
    framework: 'React',
    gif: false
  },
  {
    id: 12,
    name: 'To Do List (Docker)',
    internet: '',
    repositorie: 'https://github.com/Vincenzofdg/Trybe/tree/master/M.03_01%20-%20Docker:%20Utilizando%20Containers/04%20-%20Projeto:%20Docker%20To%20Do%20List%20(01.12.21)',
    downloadLink: '',
    type: 'Back-end',
    framework: 'Docker',
    gif: false
  },
  {
    id: 13,
    name: 'All For One',
    internet: '',
    repositorie: 'https://github.com/Vincenzofdg/Trybe/tree/master/M.03_02%20-%20Introdu%C3%A7%C3%A3o%20%C3%A0%20SQL/05%20-%20Projeto:%20All%20For%20One%20(08.12.21)',
    downloadLink: '',
    type: 'Back-end',
    framework: 'MySQL',
    gif: false
  },
  {
    id: 14,
    name: 'One For All',
    internet: '',
    repositorie: 'https://github.com/Vincenzofdg/Trybe/tree/master/M.03_03%20-%20Fun%C3%A7%C3%B5es%20SQL,%20JOINs%20e%20Normaliza%C3%A7%C3%A3o/04%20-%20Projeto:%20One%20for%20All%20(04.01.2022)',
    downloadLink: '',
    type: 'Back-end',
    framework: 'MySQL',
    gif: false
  },
  {
    id: 15,
    name: 'Talker Manager',
    internet: '',
    repositorie: 'https://github.com/Vincenzofdg/Trybe/tree/master/M.03_04%20-%20Introdu%C3%A7%C3%A3o%20ao%20desenvolvimento%20Web%20com%20Node.js/05%20-%20Projeto:%20Talker%20Manager%20(15.02.22)',
    downloadLink: '',
    type: 'Back-end',
    framework: 'MySQL',
    gif: false
  },
]

export default data;
