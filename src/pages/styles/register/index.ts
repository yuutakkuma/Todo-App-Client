import styled from 'styled-components'

import StyledRegsiterForm from '../../../components/auth/register/Form'
import BaseButton from '../../../components/common/base/BaseButton'

export const StyledRegisterMain = styled.main`
  width: 100%;
  height: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

export const StyledRegisterBox = styled.div<{
  flex: number
  alignItems?: string
}>`
  width: 50%;
  display: flex;
  align-items: ${({ alignItems = 'start' }) => alignItems};
  justify-content: flex-start;
  flex-grow: ${({ flex }) => flex};
`

export const StyledRegisterHeading = styled.h1`
  color: rgba(253, 253, 253, 1);
  font-size: 30px;
  letter-spacing: 10px;
`

export const RegisterForm = styled(StyledRegsiterForm)`
  width: 100%;
`

export const BackButton = styled(BaseButton)`
  width: 20%;
  height: 30px;
  font-size: 15px;
`
