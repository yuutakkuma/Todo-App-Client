export const SET_TOKEN = 'SET_TOKEN'

interface SetToken {
  type: typeof SET_TOKEN
  payload: {
    token: string
  }
}

export type ActionType = SetToken
