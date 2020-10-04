type ActionType = {
  type: 'nickNameType' | 'emailType' | 'passwordType' | 'createTodo'
  value: string
}
type StateInput = {
  nickName: string
  email: string
  password: string
  task: string
}

// 初期状態
export const initialState: StateInput = {
  nickName: '',
  email: '',
  password: '',
  task: ''
}

//　フォームを送信するのに必要な値の状態管理
export const formReducer = (
  state: StateInput,
  action: ActionType
): StateInput => {
  switch (action.type) {
    case 'nickNameType':
      return { ...state, nickName: action.value }
    case 'emailType':
      return { ...state, email: action.value }
    case 'passwordType':
      return { ...state, password: action.value }
    case 'createTodo':
      return { ...state, task: action.value }
    default:
      return state
  }
}
