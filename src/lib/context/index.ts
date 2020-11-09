import { createContext, Dispatch } from 'react'

import { ActionType } from './reducer/action-type'

interface State {
  height: number
  token: string | null
  dispatch: Dispatch<ActionType>
  SetTokenAction: (token: string) => ActionType
}

export const Context = createContext({} as State)
