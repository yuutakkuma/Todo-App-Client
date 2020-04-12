type ActionType = {
  type: 'nickNameType' | 'emailType' | 'passwordType';
  value: string;
};
type StateInput = { nickName: string; email: string; password: string };

// 初期状態
export const initialState: StateInput = {
  nickName: '',
  email: '',
  password: ''
};

//　新規登録に必要な値の状態管理
export const registerReducer = (
  state: StateInput,
  action: ActionType
): StateInput => {
  switch (action.type) {
    case 'nickNameType':
      return { ...state, nickName: action.value };
    case 'emailType':
      return { ...state, email: action.value };
    case 'passwordType':
      return { ...state, password: action.value };
    default:
      return state;
  }
};
