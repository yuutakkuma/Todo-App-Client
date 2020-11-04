import styled from 'styled-components'

import BaseButton from '../../base/BaseButton'

export const StyledModalContainer = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border-width: 3px;
  border-color: rgba(244, 244, 242, 0.8);
  border-style: solid;
  background-color: rgba(45, 97, 135, 1);
`

export const StyledModalBox = styled.div<{ flex: number }>`
  display: flex;
  flex-grow: ${({ flex }) => flex};
  align-items: center;
  justify-content: center;
`

export const Heading = styled.h3`
  color: rgba(253, 253, 253, 1);
  font-size: 30px;
  letter-spacing: 10px;
  text-align: center;
`

export const Content = styled.p`
  color: rgba(253, 253, 253, 1);
  font-size: 25px;
  letter-spacing: 10px;
`

export const Button = styled(BaseButton)`
  width: 100%;
  height: 100%;
  background-color: transparent;
  font-size: 30px;
  border-style: none;
  box-shadow: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`
