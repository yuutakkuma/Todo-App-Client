import { SET_TOKEN, ActionType } from './action-type'

interface State {
  token: string | null
}

export const initialState: State = {
  token: localStorage.getItem('token')
}

export const reducer = (state = initialState, action: ActionType): State => {
  switch (action.type) {
    case SET_TOKEN:
      const { token } = action.payload
      localStorage.setItem('token', token)
      return { ...state, token }

    default:
      return state
  }
}
