import { FC } from 'react'
import { Box, BtnSend, Container, Input, TextArea, Title } from './formStyle'

const Form: FC = () => {
  return (
    <Container>
      <Title>Mande uma mensagem</Title>
      <Box>
        <Input type="text" placeholder="Nome" required />
        <Input type="text" placeholder="Email" required />
      </Box>
      <Input type="text" placeholder="Título da mensagem" required />
      <TextArea placeholder="Mensagem" required />
      <BtnSend>Enviar Mensagem</BtnSend>
    </Container>
  )
}

export default Form
