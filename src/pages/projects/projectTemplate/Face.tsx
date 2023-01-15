import { Dispatch, FC, SetStateAction } from 'react'
import geekbook from '../../../assets/images/geekbook.jpg'
import flipIcon from '../../../assets/images/flip-icon.png'
import { Badge, Container, Details, Info, Title } from './faceStyle'

interface IProps {
  setFlipCard: Dispatch<SetStateAction<boolean>>
}

const Face: FC<IProps> = ({ setFlipCard }) => {
  return (
    <Container>
      <img src={geekbook} alt="projeto" />
      <Info>
        <Title>
          <h1>GeekBook</h1>
          <Badge>FullStack</Badge>
        </Title>
        <h6>Um gerenciador de obras geeks</h6>
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
