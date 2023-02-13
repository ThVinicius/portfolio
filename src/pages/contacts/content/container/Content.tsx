import { FC } from 'react'
import Contacts from '../contacts/Contacts'
import { Container } from './contentStyle'

const Content: FC = () => {
  return (
    <Container>
      <Contacts />
    </Container>
  )
}

export default Content
