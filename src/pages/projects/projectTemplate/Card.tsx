import { FC, useState } from 'react'
import Face from './Face'
import { BackFace, Container } from './cardStyle'

const Card: FC = () => {
  const [flipCard, setFlipCard] = useState(false)

  const flip = () => {
    if (flipCard) return 'rotateY(180deg)'

    return 'rotateY(0deg)'
  }

  return (
    <Container flip={flip()}>
      <Face setFlipCard={setFlipCard} />
      <BackFace>
        <h1>Informações detalhadas</h1>
      </BackFace>
    </Container>
  )
}

export default Card
