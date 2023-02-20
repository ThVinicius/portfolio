import { IFormAction } from './../pages/contacts/components/form/initialFormState'
import emailjs from '@emailjs/browser'
import { Dispatch } from 'react'

function sendEmail(payload: HTMLFormElement, dispatch: Dispatch<IFormAction>) {
  const publicKey = import.meta.env.VITE_PUBLIC_KEY

  const serviceId = import.meta.env.VITE_SERVICE_ID
  const templateId = import.meta.env.VITE_TEMPLATE_ID

  emailjs
    .sendForm(serviceId, templateId, payload, publicKey)
    .then(() => dispatch({ type: 'reset' }))
    .catch(err => console.log(err))
}

export { sendEmail }
