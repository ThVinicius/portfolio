import { Dispatch, FC, SetStateAction } from 'react'
import flipIcon from '../../../../assets/images/flip-icon.png'
import githubIcon from '../../../../assets/images/github.svg'
import rocketIcon from '../../../../assets/images/rocket.svg'
import Title from '../title/Title'
import {
  Build,
  Container,
  Content,
  DeployBadge,
  GithubBadge,
  Return
} from './backFaceStyle'

interface IProps {
  setFlipCard: Dispatch<SetStateAction<boolean>>
}

const badges = {
  react:
    'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
  postgres:
    'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white',
  prisma:
    'https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white',
  typescript:
    'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
  node: 'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white',
  express:
    'https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white',
  jest: 'https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white'
}

const BackFace: FC<IProps> = ({ setFlipCard }) => {
  return (
    <Container>
      <Content>
        <Return>
          <button onClick={() => setFlipCard(false)}>
            <img src={flipIcon} alt="icon" />
            Voltar
          </button>
        </Return>
        <Title />
        <Build>
          <h2>Construído com</h2>
          <span>
            <img src={badges.react} alt="react" />
            <img src={badges.node} alt="node" />
            <img src={badges.express} alt="express" />
            <img src={badges.typescript} alt="typescript" />
            <img src={badges.postgres} alt="postgres" />
            <img src={badges.prisma} alt="prisma" />
            <img src={badges.jest} alt="jest" />
          </span>
        </Build>
        <Build>
          <h2>Links</h2>
          <span>
            <GithubBadge
              href="https://github.com/ThVinicius/geek-book-front-end"
              target="_blank"
            >
              <p>FrontEnd Repo</p>
              <img src={githubIcon} alt="github link" />
            </GithubBadge>
            <GithubBadge
              href="https://github.com/ThVinicius/geek-book-back-end"
              target="_blank"
            >
              <p>BackEnd Repo</p>
              <img src={githubIcon} alt="github link" />
            </GithubBadge>
            <DeployBadge href="http://geek-book.vercel.app/" target="_blank">
              <p>Deploy</p>
              <img src={rocketIcon} alt="link deploy" />
            </DeployBadge>
          </span>
        </Build>
      </Content>
    </Container>
  )
}

export default BackFace
