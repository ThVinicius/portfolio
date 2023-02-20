import { ChangeEvent, FC, FormEvent, useReducer, useRef } from 'react'
import { sendEmail } from '../../../../service/sendEmail'
import { formReducer } from './formReducer'
import { Box, BtnSend, Container, Input, TextArea, Title } from './formStyle'
import { initialState } from './initialFormState'

const Form: FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [formState, dispatch] = useReducer(formReducer, initialState)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    dispatch({ type: 'change', field: name, value })
  }

  const submit = (event: FormEvent) => {
    event.preventDefault()

    sendEmail(formRef.current!, dispatch)
  }

  return (
    <Container ref={formRef} onSubmit={submit}>
      <Title>Mande uma mensagem</Title>
      <Box>
        <Input
          type="text"
          name="fromName"
          placeholder="Nome"
          required
          value={formState.fromName}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="fromEmail"
          placeholder="Email"
          required
          value={formState.fromEmail}
          onChange={handleChange}
        />
      </Box>
      <Input
        type="text"
        name="subject"
        placeholder="Título da mensagem"
        required
        value={formState.subject}
        onChange={handleChange}
      />
      <TextArea
        name="message"
        placeholder="Mensagem"
        required
        value={formState.message}
        onChange={handleChange}
      />
      <BtnSend type="submit">Enviar Mensagem</BtnSend>
    </Container>
  )
}

export default Form
