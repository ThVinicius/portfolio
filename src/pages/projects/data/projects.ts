import { badge } from './badge'

export const projects = [
  Object.freeze({
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
  })
]
