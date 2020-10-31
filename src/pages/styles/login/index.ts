import styled from 'styled-components'

import StyledLoginForm from '../../../components/auth/login/Form'
import BaseButton from '../../../components/common/base/BaseButton'

export const StyledLoginMain = styled.main`
  width: 100%;
  height: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

export const StyledLoginBox = styled.div<{
  flex: number
  alignItems?: string
}>`
  width: 50%;
  display: flex;
  align-items: ${({ alignItems = 'start' }) => alignItems};
  justify-content: flex-start;
  flex-grow: ${({ flex }) => flex};
`

export const StyledLoginHeading = styled.h1`
  color: rgba(253, 253, 253, 1);
  font-size: 30px;
  letter-spacing: 10px;
`

export const LoginForm = styled(StyledLoginForm)`
  width: 100%;
`

export const BackButton = styled(BaseButton)`
  width: 20%;
  height: 30px;
  font-size: 15px;
`
