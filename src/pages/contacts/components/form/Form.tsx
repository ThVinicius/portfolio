import { FC, FormEvent, useRef } from 'react'
import { sendEmail } from '../../../../service/sendEmail'
import { Box, BtnSend, Container, Input, TextArea, Title } from './formStyle'

const Form: FC = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const submit = (event: FormEvent) => {
    event.preventDefault()

    sendEmail(formRef.current!)
  }

  return (
    <Container ref={formRef} onSubmit={submit}>
      <Title>Mande uma mensagem</Title>
      <Box>
        <Input type="text" name="fromName" placeholder="Nome" required />
        <Input type="email" name="fromEmail" placeholder="Email" required />
      </Box>
      <Input
        type="text"
        name="subject"
        placeholder="Título da mensagem"
        required
      />
      <TextArea name="message" placeholder="Mensagem" required />
      <BtnSend type="submit">Enviar Mensagem</BtnSend>
    </Container>
  )
}

export default Form
