import { Dispatch, FC, SetStateAction } from 'react'
import flipIcon from '../../../../assets/images/flip-icon.png'
import { Container, Details, Info } from './faceStyle'
import Title from '../title/Title'

interface IProps {
  setFlipCard: Dispatch<SetStateAction<boolean>>
  name: string
  description: string
  image: string
  type: 'FullStack' | 'BackEnd' | 'FrontEnd'
}

const Face: FC<IProps> = ({ setFlipCard, name, description, image, type }) => {
  return (
    <Container>
      <img src={image} alt="projeto" />
      <Info>
        <Title {...{ name, description, type }} />
        <Details>
          <button onClick={() => setFlipCard(true)}>
            Mais detalhes
            <img src={flipIcon} alt="icon" />
          </button>
        </Details>
      </Info>
    </Container>
  )
}

export default Face
