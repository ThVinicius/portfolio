import emailjs from '@emailjs/browser'

export function sendEmail(payload: HTMLFormElement) {
  const publicKey = import.meta.env.VITE_PUBLIC_KEY

  const serviceId = import.meta.env.VITE_SERVICE_ID
  const templateId = import.meta.env.VITE_TEMPLATE_ID

  emailjs
    .sendForm(serviceId, templateId, payload, publicKey)
    .then(result => console.log(result.text))
    .catch(err => console.log(err))
}
