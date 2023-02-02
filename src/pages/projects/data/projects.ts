import { badge } from './badge'
import geekbook from '../../../assets/images/geekbook.gif'
import shortly from '../../../assets/images/shortly.gif'
import repoprovas from '../../../assets/images/repoprovas.gif'
import api from '../../../assets/images/api.jpeg'

export const projects = [
  Object.freeze({
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
  }),
  Object.freeze({
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
  }),
  Object.freeze({
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
  }),
  Object.freeze({
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
  })
]
