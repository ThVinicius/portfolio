import { Dispatch, useState } from 'react'
import { toast } from 'react-toastify'

import emailjs from '@emailjs/browser'

import { toastProps } from 'utils/toastProps'

import { IFormAction } from '../form/initialFormState'

export function useSendEmail(dispatch: Dispatch<IFormAction>) {
  const [loading, setLoading] = useState(false)

  const sendEmail = (payload: HTMLFormElement) => {
    if (loading) return
    setLoading(true)

    const toastId = toast.loading('Enviando mensagem...')

    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID

    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

    emailjs
      .sendForm(serviceId, templateId, payload, publicKey)
      .then(() => {
        dispatch({ type: 'reset' })

        toast.update(
          toastId,
          toastProps('success', 'Mensagem enviada com sucesso! 👌')
        )
      })
      .catch(err => {
        console.log(err)

        toast.update(
          toastId,
          toastProps('error', `Erro ao enviar mensagem. Tente mais tarde 🤯`)
        )
      })
      .finally(() => setLoading(false))
  }

  return { sendEmail, loading }
}
