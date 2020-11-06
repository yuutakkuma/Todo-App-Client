import styled from 'styled-components'

import BaseInput from '../../../common/base/BaseInput'
import ErrorMessage from '../../../common/ErrorMessage'

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

export const Input = styled(BaseInput)<{ marginBottom?: number }>`
  width: 100%;
  height: 50px;
  margin-bottom: ${({ marginBottom = 0 }) => `${marginBottom}px`};
  font-size: 20px;

  @media screen and (max-width: 500px) {
    height: 35px;
    font-size: 15px;
  }
`

export const DeleteErrorMessage = styled(ErrorMessage)`
  height: 50px;
  font-size: 15px;
  line-height: 50px;
  margin: unset;

  @media screen and (max-width: 500px) {
    height: 35px;
    font-size: 13px;
    line-height: 35px;
  }
`
