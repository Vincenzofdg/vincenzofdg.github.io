const data = [
  {
    id: 1,
    name: 'Pixels Art',
    image: undefined,
    internet: 'https://vincenzofdg.github.io/Pixels-Art',
    repositorie: 'https://github.com/Vincenzofdg/Pixels-Art',
    downloadLink: 'https://github.com/Vincenzofdg/Pixels-Art/archive/refs/heads/master.zip',
    type: ['JavaScript'],
    gif: true
  },
  {
    id: 2,
    name: 'To Do List',
    image: undefined,
    internet: 'https://vincenzofdg.github.io/To-Do-List',
    repositorie: 'https://github.com/Vincenzofdg/To-Do-List',
    downloadLink: 'https://github.com/Vincenzofdg/To-Do-List/archive/refs/heads/master.zip',
    type: ['JavaScript'],
    gif: true
  },
  {
    id: 3,
    name: 'Mistery Letter',
    image: undefined,
    internet: 'https://vincenzofdg.github.io/Mistery-Letter',
    repositorie: 'https://github.com/Vincenzofdg/Mistery-Letter',
    downloadLink: 'https://github.com/Vincenzofdg/Mistery-Letter/archive/refs/heads/master.zip',
    type: ['JavaScript'],
    gif: true
  },
  {
    id: 4,
    name: 'Hogwarts Application',
    image: undefined,
    internet: 'https://vincenzofdg.github.io/Hogwarts-Application',
    repositorie: 'https://github.com/Vincenzofdg/Hogwarts-Application',
    downloadLink: 'https://github.com/Vincenzofdg/Hogwarts-Application/archive/refs/heads/master.zip',
    type: ['JavaScript'],
    gif: true
  },
  {
    id: 5,
    name: 'Shopping Cart',
    image: undefined,
    internet: 'https://vincenzofdg.github.io/Shopping-Cart',
    repositorie: 'https://github.com/Vincenzofdg/Shopping-Cart',
    downloadLink: 'https://github.com/Vincenzofdg/Shopping-Cart/archive/refs/heads/master.zip',
    type: ['JavaScript'],
    gif: true
  },
  {
    id: 6,
    name: 'Shopping Shirt',
    image: undefined,
    internet: 'https://vincenzofdg.github.io/Shopping-Shirt',
    repositorie: 'https://github.com/Vincenzofdg/Shopping-Shirt',
    downloadLink: 'https://github.com/Vincenzofdg/Shopping-Shirt/archive/refs/heads/master.zip',
    type: ['JavaScript'],
    gif: true
  },
  {
    id: 7,
    name: 'Naruto Movies',
    image: undefined,
    internet: 'https://vincenzofdg.github.io/Naruto-Movies',
    repositorie: 'https://github.com/Vincenzofdg/Naruto-Movies',
    downloadLink: 'https://github.com/Vincenzofdg/Naruto-Movies/archive/refs/heads/master.zip',
    type: ['JavaScript', 'ReactJs'],
    gif: true
  },
  {
    id: 8,
    name: 'Movie Library',
    image: undefined,
    internet: 'https://vincenzofdg.github.io/Movie-Library',
    repositorie: 'https://github.com/Vincenzofdg/Movie-Library',
    downloadLink: 'https://github.com/Vincenzofdg/Movie-Library/archive/refs/heads/master.zip',
    type: ['JavaScript', 'ReactJs'],
    gif: true
  },
  {
    id: 9,
    name: 'Testes Unitários',
    image: 'Jest',
    internet: '',
    repositorie: 'https://github.com/Vincenzofdg/Study_-_Full_Stack/tree/master/M.01_07%20-%20Introdu%C3%A7%C3%A3o%20%C3%A0%20JavaScript%20ES6%20e%20Testes%20Unit%C3%A1rios/04%20-%20Projeto:%20Js%20Unit%20Tests%20(27.07.21)',
    downloadLink: '',
    type: ['JavaScript', 'Test'],
    gif: false
  },
  {
    id: 10,
    name: 'Jest (Mocking)',
    image: 'Jest',
    internet: '',
    repositorie: 'https://github.com/Vincenzofdg/Study_-_Full_Stack/tree/master/M.01_10%20-%20Testes%20Automatizados%20com%20Jest/04%20-%20Projeto:%20Jest%20Ass%C3%ADncrono%20e%20Mocking%20(20.08.21)',
    downloadLink: '',
    type: ['JavaScript', 'Test'],
    gif: false
  },
  {
    id: 11,
    name: 'React Testing Library',
    image: 'RTL',
    internet: '',
    repositorie: 'https://github.com/Vincenzofdg/Study_-_Full_Stack/tree/master/M.02_05%20-%20Testes%20Automatizados%20com%20React%20Testing%20Library/04%20-%20Projeto:%20Testes%20em%20React%20(29.09.21)',
    downloadLink: '',
    type: ['JavaScript', 'ReactJs', 'Test'],
    gif: false
  },
  {
    id: 12,
    name: 'To Do List (Docker)',
    image: 'Docker',
    internet: '',
    repositorie: 'https://github.com/Vincenzofdg/Study_-_Full_Stack/tree/master/M.03_01%20-%20Docker:%20Utilizando%20Containers/04%20-%20Projeto:%20Docker%20To%20Do%20List%20(01.12.21)',
    downloadLink: '',
    type: ['Docker'],
    gif: false
  },
  {
    id: 13,
    name: 'All For One',
    image: 'MySQL',
    internet: '',
    repositorie: 'https://github.com/Vincenzofdg/Study_-_Full_Stack/tree/master/M.03_02%20-%20Introdu%C3%A7%C3%A3o%20%C3%A0%20SQL/05%20-%20Projeto:%20All%20For%20One%20(08.12.21)',
    downloadLink: '',
    type: ['JavaScript', 'MySQL'],
    gif: false
  },
  {
    id: 14,
    name: 'One For All',
    image: 'MySQL',
    internet: '',
    repositorie: 'https://github.com/Vincenzofdg/Study_-_Full_Stack/tree/master/M.03_03%20-%20Fun%C3%A7%C3%B5es%20SQL%2C%20JOINs%20e%20Normaliza%C3%A7%C3%A3o/04%20-%20Projeto:%20One%20for%20All%20(04.01.2022)',
    downloadLink: '',
    type: ['JavaScript', 'MySQL'],
    gif: false
  },
  {
    id: 15,
    name: 'Talker Manager',
    image: 'Express',
    internet: '',
    repositorie: 'https://github.com/Vincenzofdg/Study_-_Full_Stack/tree/master/M.03_04%20-%20Introdu%C3%A7%C3%A3o%20ao%20desenvolvimento%20Web%20com%20Node.js/05%20-%20Projeto:%20Talker%20Manager%20(15.02.22)',
    downloadLink: '',
    type: ['JavaScript', 'Express', 'MySQL'],
    gif: false
  },
  {
    id: 16,
    name: 'Trybe (2021-2022)',
    image: 'Trybe',
    internet: '',
    repositorie: 'https://github.com/Vincenzofdg/Study_-_Full_Stack',
    downloadLink: '',
    type: ['Study'],
    gif: false
  },
  {
    id: 17,
    name: 'Java Wipro (2022)',
    image: 'Wipro',
    internet: '',
    repositorie: 'https://github.com/Vincenzofdg/Study_-_Java',
    downloadLink: '',
    type: ['Study'],
    gif: false
  },
  {
    id: 18,
    name: 'Software Enginnering',
    image: 'Anhanguera',
    internet: '',
    repositorie: 'https://github.com/Vincenzofdg/Study_-_Software_Enginnering',
    downloadLink: '',
    type: ['Study'],
    gif: false
  },
  {
    id: 19,
    name: 'TrybeSmith',
    image: 'TypeScript',
    internet: '',
    repositorie: 'https://github.com/Vincenzofdg/Study_-_Full_Stack/tree/master/M.03_08%20-%20TypeScript/04%20-%20Projeto:%20TrybeSmith%20(28.03.21)',
    downloadLink: '',
    type: ['TypeScript', 'Express'],
    gif: false
  },
  {
    id: 20,
    name: "Blog's API ",
    image: 'Sequelize',
    internet: '',
    repositorie: "https://github.com/Vincenzofdg/Study_-_Full_Stack/tree/master/M.03_06%20-%20ORM%20e%20Autentica%C3%A7%C3%A3o/04%20-%20Projeto:%20Blog's%20API%20(10.03.22)",
    downloadLink: '',
    type: ['JavaScript', 'Sequelize', 'Express'],
    gif: false
  },
  {
    id: 21,
    name: "Trybers and Dragon ",
    image: 'TypeScript',
    internet: '',
    repositorie: "https://github.com/Vincenzofdg/Study_-_Full_Stack/tree/master/M.03_06%20-%20ORM%20e%20Autentica%C3%A7%C3%A3o/04%20-%20Projeto:%20Blog's%20API%20(10.03.22)",
    downloadLink: '',
    type: ['TypeScript'],
    gif: false
  },
]

export default data;
