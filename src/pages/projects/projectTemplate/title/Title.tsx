import { FC } from 'react'
import { Badge, Container } from './titleStyle'

interface IProps {
  name: string
  description: string
  type: 'FullStack' | 'BackEnd' | 'FrontEnd'
}

const Title: FC<IProps> = ({ name, description, type }) => {
  return (
    <Container>
      <span>
        <h1>{name}</h1>
        <Badge>{type}</Badge>
      </span>
      <h6>{description}</h6>
    </Container>
  )
}

export default Title
