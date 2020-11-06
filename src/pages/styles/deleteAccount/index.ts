import styled from 'styled-components'

import StyledDeleteForm from '../../../components/auth/delete/Form'
import BaseButton from '../../../components/common/base/BaseButton'

export const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

export const Box = styled.div<{
  flex: number
  alignItems?: string
}>`
  width: 50%;
  display: flex;
  align-items: ${({ alignItems = 'start' }) => alignItems};
  justify-content: flex-start;
  flex-grow: ${({ flex }) => flex};

  @media screen and (max-width: 1000px) {
    width: 60%;
  }
`

export const Heading = styled.h1`
  color: rgba(253, 253, 253, 1);
  font-size: 30px;
  letter-spacing: 10px;
  padding-left: 15px;
`

export const Form = styled(StyledDeleteForm)`
  width: 100%;
`

export const BackButton = styled(BaseButton)`
  width: 20%;
  height: 30px;
  font-size: 15px;

  @media screen and (max-width: 1000px) {
    width: 30%;
  }
`
