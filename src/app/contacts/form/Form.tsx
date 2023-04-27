'use client'

import { ChangeEvent, FC, FormEvent, useReducer, useRef } from 'react'

import { useSendEmail } from 'hooks/useSendEmail'

import { ButtonLoading } from 'components/buttonLoading/ButtonLoading'

import { formReducer } from './formReducer'
import S from './formStyle.module.scss'
import { initialState } from './initialFormState'

export const Form: FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [formState, dispatch] = useReducer(formReducer, initialState)
  const { sendEmail, loading } = useSendEmail(dispatch)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    dispatch({ type: 'change', field: name, value })
  }

  const submit = (event: FormEvent) => {
    event.preventDefault()

    sendEmail(formRef.current as HTMLFormElement)
  }

  return (
    <form className={S.container} ref={formRef} onSubmit={submit}>
      <h1 className={S.title}>Mande uma mensagem</h1>
      <div className={S.box}>
        <input
          className={S.input}
          type="text"
          name="fromName"
          placeholder="Nome"
          disabled={loading}
          required
          value={formState.fromName}
          onChange={handleChange}
        />
        <input
          className={S.input}
          type="email"
          name="fromEmail"
          placeholder="Email"
          disabled={loading}
          required
          value={formState.fromEmail}
          onChange={handleChange}
        />
      </div>
      <input
        className={S.input}
        type="text"
        name="subject"
        placeholder="Título da mensagem"
        disabled={loading}
        required
        value={formState.subject}
        onChange={handleChange}
      />
      <textarea
        className={S['text-area']}
        name="message"
        placeholder="Mensagem"
        disabled={loading}
        required
        value={formState.message}
        onChange={handleChange}
      />
      <ButtonLoading
        name="Enviar Mensagem"
        className={S.button}
        loading={loading}
      />
    </form>
  )
}
