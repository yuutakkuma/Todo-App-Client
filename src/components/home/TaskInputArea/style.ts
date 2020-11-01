import styled from 'styled-components'

import BaseInput from '../../common/base/BaseInput'

export const StyledTaskInputArea = styled(BaseInput)`
  width: 100%;
  border-style: none;
  font-size: 20px;
  background-color: transparent;
  color: rgba(244, 244, 242, 1);

  &::placeholder {
    color: rgba(244, 244, 242, 0.5);
  }
`
