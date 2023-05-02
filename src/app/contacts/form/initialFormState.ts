export interface IFormState {
  fromName: string
  fromEmail: string
  subject: string
  message: string
}

export interface IFormAction {
  type: 'reset' | 'change'
  field?: string
  value?: string
}

export const initialState = {
  fromName: '',
  fromEmail: '',
  subject: '',
  message: ''
}
