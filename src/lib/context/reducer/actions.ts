import { SET_TOKEN, ActionType } from './action-type'

export const SetTokenAction = (token: string): ActionType => ({
  type: SET_TOKEN,
  payload: {
    token
  }
})
