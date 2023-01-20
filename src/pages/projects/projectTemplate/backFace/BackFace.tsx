import { Dispatch, FC, SetStateAction } from 'react'
import flipIcon from '../../../../assets/images/flip-icon.png'
import { ILinkRepo, ILinkDeploy } from '../../../../types/links'
import Title from '../title/Title'
import { Build, Container, Content, Return } from './backFaceStyle'
import LinkDeploy from './LinkDeploy'
import LinkRepo from './LinkRepo'

interface IProps {
  setFlipCard: Dispatch<SetStateAction<boolean>>
  name: string
  description: string
  type: 'FullStack' | 'BackEnd' | 'FrontEnd'
  badges: string[]
  linksRepo: ILinkRepo[]
  linksDeploy: ILinkDeploy[]
}

const BackFace: FC<IProps> = ({
  setFlipCard,
  name,
  description,
  type,
  badges,
  linksRepo,
  linksDeploy
}) => {
  return (
    <Container>
      <Content>
        <Return>
          <button onClick={() => setFlipCard(false)}>
            <img src={flipIcon} alt="icon" />
            Voltar
          </button>
        </Return>
        <Title {...{ name, description, type }} />
        <Build>
          <h2>Construído com</h2>
          <span>
            {badges.map((badge, index) => (
              <img src={badge} alt="badge icon" key={index} />
            ))}
          </span>
        </Build>
        <Build>
          <h2>Links</h2>
          <span>
            {linksRepo.map((link, index) => (
              <LinkRepo link={link} key={index} />
            ))}
            {linksDeploy.map((link, index) => (
              <LinkDeploy link={link} key={index} />
            ))}
          </span>
        </Build>
      </Content>
    </Container>
  )
}

export default BackFace
