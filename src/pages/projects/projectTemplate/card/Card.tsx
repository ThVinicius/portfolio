import { FC, useState } from 'react'
import Face from '../face/Face'
import BackFace from '../backFace/BackFace'
import { ILinkRepo, ILinkDeploy } from '../../../../types/links'
import { Container } from './cardStyle'

interface IProps {
  name: string
  description: string
  type: 'FullStack' | 'BackEnd' | 'FrontEnd'
  badges: string[]
  linksRepo: ILinkRepo[]
  linksDeploy: ILinkDeploy[]
}

const Card: FC<IProps> = ({
  name,
  description,
  type,
  badges,
  linksRepo,
  linksDeploy
}) => {
  const [flipCard, setFlipCard] = useState(false)

  const flip = () => {
    if (flipCard) return 'rotateY(180deg)'

    return 'rotateY(0deg)'
  }

  return (
    <Container flip={flip()}>
      <Face {...{ setFlipCard, name, description, type }} />
      <BackFace
        {...{
          setFlipCard,
          name,
          description,
          type,
          badges,
          linksRepo,
          linksDeploy
        }}
      />
    </Container>
  )
}

export default Card
