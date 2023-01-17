import { Dispatch, FC, SetStateAction } from 'react'
import geekbook from '../../../../assets/images/geekbook.gif'
import flipIcon from '../../../../assets/images/flip-icon.png'
import { Container, Details, Info } from './faceStyle'
import Title from '../title/Title'

interface IProps {
  setFlipCard: Dispatch<SetStateAction<boolean>>
}

const Face: FC<IProps> = ({ setFlipCard }) => {
  return (
    <Container>
      <img src={geekbook} alt="projeto" />
      <Info>
        <Title />
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
