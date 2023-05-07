// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})
// =================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600 $ в месяц',
  adress: 'мiсто Харкiв, вулиця Тракторобудiвникiв 158',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: ' Resume | Summary',
    },

    header,

    main: {
      summary: {
        // title: 'Summary',
        text: ` Open-minded for new technologies, with 1 years of experience in development.
        Whenever I start to
       work on a new project I learn the domain and try to understand the idea of the project. Good team
       player, every colleague is a friend to me.`,
      },
      experience: {
        // title: 'Other experience',
        text: ` Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
        tournament position, goals etc), analyzing by simple mathematics models and preparing probability
        for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: ' Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 8,
        },
        {
          name: 'VS Code',
          point: 10,
          isTop: true,
        },
        {
          name: 'GIT',
          point: 7,
        },
        {
          name: 'Terminal',
          point: 10,
          isTop: true,
        },
        {
          name: 'NPM',
          point: 9,
        },
        {
          name: 'React JS',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Basketball',
          isMain: false,
        },
        {
          name: 'Hokkey',
          isMain: true,
        },
        {
          name: 'Futball',
          isMain: true,
        },
      ],
    },
    footer,
  })
})

// =================================================================================

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: ' Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'ХАИ',
          isEnd: true,
        },
        {
          name: 'ХНУРЭ',
          isEnd: true,
        },
        {
          name: 'ХПИ',
          isEnd: false,
        },
        {
          name: 'КПИ',
          isEnd: true,
        },
        {
          name: 'КСЭ',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'Esential SSL',
          id: 2222,
        },
        {
          name: 'Instant SSL',
          id: 3333,
        },
        {
          name: ' Wildcard',
          id: 4444,
        },
        {
          name: 'Extended Validation',
          id: 5555,
        },
      ],
    },

    footer,
  })
})

// ===================================================================

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: ' Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https..//it-brains.com.ua/',
          },
          duration: {
            from: '10.10.22',
            to: null,
          },
          projektAmount: 3,
          projekts: [
            {
              name: 'Resume',
              url: 'https..//resume.com.ua/',
              about:
                'Stay organized, focused, and in charge',
              awardAmoGnt: 7,
              stackAmoGnt: 5,
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'Tackle anything from small projects to large initiatives.',
                },
                {
                  name: 'You may or may not be a project manager.',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})

// Підключаємо роутер до бек-енду

module.exports = router
