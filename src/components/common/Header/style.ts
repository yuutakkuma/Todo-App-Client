import styled from 'styled-components'

import BaseButton from '../base/BaseButton'

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 1);
  border-bottom-style: solid;
  display: flex;
  flex-direction: row;
`

export const StyledHeaderBox = styled.div<{ justifyContent: string }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
`

export const StyledHeaderButton = styled(BaseButton)<{
  marginHorizontal?: string
}>`
  width: 10%;
  height: 50px;
  min-width: 150px;
  margin-left: ${({ marginHorizontal = '0px' }) => marginHorizontal};
  margin-right: ${({ marginHorizontal = '0px' }) => marginHorizontal};
  background-color: transparent;
  font-size: 15px;
  border-style: none;
  box-shadow: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

export const StyledHeaderHeading = styled.h1`
  color: rgba(253, 253, 253, 1);
  font-size: 40px;
  letter-spacing: 10px;
  margin-left: 20px;
`
