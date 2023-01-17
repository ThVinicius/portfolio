import { FC, useState } from 'react'
import Face from '../face/Face'
import BackFace from '../backFace/BackFace'
import { Container } from './cardStyle'

const Card: FC = () => {
  const [flipCard, setFlipCard] = useState(false)

  const flip = () => {
    if (flipCard) return 'rotateY(180deg)'

    return 'rotateY(0deg)'
  }

  return (
    <Container flip={flip()}>
      <Face setFlipCard={setFlipCard} />
      <BackFace setFlipCard={setFlipCard} />
    </Container>
  )
}

export default Card
