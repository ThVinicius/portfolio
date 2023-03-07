import { badge } from './badge'
import geekbook from '../../../assets/images/geekbook.gif'
import shortly from '../../../assets/images/shortly.gif'
import repoprovas from '../../../assets/images/repoprovas.gif'
import sharenergy from '../../../assets/images/desafio-sharenergy.gif'
import beuni from '../../../assets/images/beuni.gif'
import trackit from '../../../assets/images/trackit.gif'
import drivenPass from '../../../assets/images/driven-pass.gif'
import api from '../../../assets/images/api.jpeg'

export const projects = [
  {
    name: 'GeekBook',
    type: 'FullStack',
    description: 'Um gerenciador de obras geeks',
    image: geekbook,
    badges: [
      badge.react,
      badge.node,
      badge.express,
      badge.typescript,
      badge.postgres,
      badge.prisma,
      badge.jest
    ],
    linksRepo: [
      {
        ['FrontEnd Repo']: 'https://github.com/ThVinicius/geek-book-front-end'
      },
      { ['BackEnd Repo']: 'https://github.com/ThVinicius/geek-book-back-end' }
    ],
    linksDeploy: [{ ['Deploy']: 'http://geek-book.vercel.app/' }]
  },
  {
    name: 'Shortly',
    type: 'FullStack',
    description: 'Um encurtador de links',
    image: shortly,
    badges: [
      badge.javascript,
      badge.react,
      badge.node,
      badge.express,
      badge.typescript,
      badge.postgres
    ],
    linksRepo: [
      {
        ['FrontEnd Repo']: 'https://github.com/ThVinicius/shortly-front-end'
      },
      { ['BackEnd Repo']: 'https://github.com/ThVinicius/shortly-back-end' }
    ],
    linksDeploy: [{ ['Deploy']: 'https://shortly.fly.dev/' }]
  },
  {
    name: 'RepoProvas',
    type: 'FullStack',
    description: 'Um sistema de compartilhamento de provas entre estudantes',
    image: repoprovas,
    badges: [
      badge.react,
      badge.node,
      badge.express,
      badge.typescript,
      badge.postgres,
      badge.prisma,
      badge.jest
    ],
    linksRepo: [
      {
        ['FrontEnd Repo']: 'https://github.com/ThVinicius/repoProvas_frontEnd'
      },
      { ['BackEnd Repo']: 'https://github.com/ThVinicius/repoProvas_backEnd' }
    ],
    linksDeploy: [
      { ['Deploy']: 'http://repo-provas-front-end-lake.vercel.app/' }
    ]
  },
  {
    name: 'Tweteroo',
    type: 'BackEnd',
    description:
      'Uma rest api simples onde se simula um chat. feito com Spring Boot',
    image: api,
    badges: [badge.java, badge.spring],
    linksRepo: [
      { ['BackEnd Repo']: 'https://github.com/ThVinicius/tweteroo-spring' }
    ],
    linksDeploy: [{ ['Deploy']: 'https://tweteroo-spring.onrender.com/' }]
  },
  {
    name: 'Desafio técnico Sharenergy',
    type: 'FullStack',
    description:
      'Desafio técnico feito feito durante o processo seletivo da Sharenergy',
    image: sharenergy,
    badges: [
      badge.react,
      badge.node,
      badge.express,
      badge.typescript,
      badge.postgres,
      badge.prisma,
      badge.docker,
      badge.jest,
      badge.cypress
    ],
    linksRepo: [
      {
        ['Repo GitHub']:
          'https://github.com/ThVinicius/desafio-sharenergy-2023-01/tree/vinicius-pacheco-dos-santos'
      }
    ]
  },
  {
    name: 'Desafio BeUni',
    type: 'FullStack',
    description:
      'Desafio técnico feito feito durante o processo seletivo da BeUni',
    image: beuni,
    badges: [
      badge.react,
      badge.node,
      badge.express,
      badge.typescript,
      badge.postgres,
      badge.prisma,
      badge.docker,
      badge.jest
    ],
    linksRepo: [
      {
        ['FrontEnd Repo']:
          'https://github.com/ThVinicius/desafio-beuni-front-end'
      },
      {
        ['BackEnd Repo']: 'https://github.com/ThVinicius/desafio-beuni-back-end'
      }
    ],
    linksDeploy: [
      { ['Deploy FrontEnd']: 'https://desafio-beuni.vercel.app/' },
      {
        ['Deploy BackEnd']:
          'https://desafio-beuni-back-end-production.up.railway.app/'
      }
    ]
  },
  {
    name: 'Trackit',
    type: 'FrontEnd',
    description: 'Uma aplicação de acompanhamento de hábitos.',
    image: trackit,
    badges: [badge.react],
    linksRepo: [
      {
        ['FrontEnd Repo']: 'https://github.com/ThVinicius/TrackIt'
      }
    ],
    linksDeploy: [
      { ['Deploy FrontEnd']: 'https://track-it-thvinicius.vercel.app/' }
    ]
  },
  {
    name: 'Driven Pass',
    type: 'FullStack',
    description: 'Driven Pass é um gerenciador de senhas',
    image: drivenPass,
    badges: [
      badge.react,
      badge.node,
      badge.express,
      badge.typescript,
      badge.postgres,
      badge.prisma
    ],
    linksRepo: [
      {
        ['FrontEnd Repo']: 'https://github.com/ThVinicius/driven-pass-front-end'
      },
      {
        ['BackEnd Repo']: 'https://github.com/ThVinicius/driven-pass-back-end'
      }
    ],
    linksDeploy: [{ ['Deploy FrontEnd']: 'http://driven-pass-rho.vercel.app/' }]
  }
]
