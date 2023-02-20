import { IFormAction, IFormState, initialState } from './initialFormState'

export const formReducer = (state: IFormState, action: IFormAction) => {
  switch (action.type) {
    case 'reset':
      return initialState

    case 'change':
      return { ...state, [action.field!]: action.value }
    default:
      throw new Error()
  }
}
