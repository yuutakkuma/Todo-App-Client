import styled from 'styled-components'

import BaseButton from '../base/BaseButton'
import HambugerButton from './HambugerButton'

export const Container = styled.header`
  width: 100%;
  height: 80px;
  position: relative;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 1);
  border-bottom-style: solid;
  display: flex;
  flex-direction: row;
`

export const Box = styled.div<{
  justifyContent: string
  mediaDisplay?: string
}>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};

  @media screen and (max-width: 750px) {
    display: ${({ mediaDisplay = 'flex' }) => mediaDisplay};
    justify-content: center;
  }
`

export const Button = styled(BaseButton)<{
  marginHorizontal?: string
  marginVertical?: string
  justifyContent?: string
}>`
  width: 30%;
  height: 50px;
  justify-content: ${({ justifyContent = 'center' }) => justifyContent};
  margin: ${({ marginVertical = '0px', marginHorizontal = '0px' }) =>
    marginVertical + ' ' + marginHorizontal};
  background-color: transparent;
  font-size: 15px;
  border-style: none;
  box-shadow: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 1000px) {
    width: 40%;
  }

  @media screen and (max-width: 750px) {
    width: 80%;
  }
`

export const Heading = styled.h1`
  color: rgba(253, 253, 253, 1);
  font-size: 40px;
  letter-spacing: 10px;
  margin-left: 20px;

  @media screen and (max-width: 500px) {
    font-size: 30px;
    letter-spacing: 5px;
  }
`

export const Hambuger = styled(HambugerButton)`
  display: none;

  @media screen and (max-width: 750px) {
    display: inline-flex;
    width: 80px;
    height: 50px;
    position: absolute;
    top: 15px;
    left: 10px;
  }

  @media screen and (max-width: 500px) {
    width: 50px;
    height: 35px;
    top: 25px;
  }
`
