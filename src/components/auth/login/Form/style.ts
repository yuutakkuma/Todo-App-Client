import styled from 'styled-components'

import BaseInput from '../../../common/base/BaseInput'

export const StyledLoginForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const StyledLoginInput = styled(BaseInput)<{ marginBottom?: number }>`
  width: 100%;
  height: 50px;
  margin-bottom: ${({ marginBottom = 0 }) => `${marginBottom}px`};
`
