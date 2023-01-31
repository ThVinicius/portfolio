import { badge } from './badge'

export const projects = [
  {
    name: 'GeekBook',
    type: 'FullStack',
    description: 'Um gerenciador de obras geeks',
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
  }
]
