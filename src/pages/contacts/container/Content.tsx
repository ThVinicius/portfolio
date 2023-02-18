import { FC } from 'react'
import Contacts from '../components/contacts/Contacts'
import Form from '../components/form/Form'
import { Container } from './contentStyle'

const Content: FC = () => {
  return (
    <Container>
      <Form />
      <Contacts />
    </Container>
  )
}

export default Content
