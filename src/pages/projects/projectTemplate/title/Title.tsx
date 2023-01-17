import { FC } from 'react'
import { Badge, Container } from './titleStyle'

const Title: FC = () => {
  return (
    <Container>
      <span>
        <h1>GeekBook</h1>
        <Badge>FullStack</Badge>
      </span>
      <h6>Um gerenciador de obras geeks</h6>
    </Container>
  )
}

export default Title
