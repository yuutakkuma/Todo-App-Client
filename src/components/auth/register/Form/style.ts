import styled from 'styled-components'

import BaseInput from '../../../common/base/BaseInput'

export const StyledRegisterForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const StyledRegisterInput = styled(BaseInput)<{ marginBottom?: number }>`
  width: 100%;
  height: 50px;
  margin-bottom: ${({ marginBottom = 0 }) => `${marginBottom}px`};
`
