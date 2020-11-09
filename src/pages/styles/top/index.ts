import styled from 'styled-components'

import BaseButton from '../../../components/common/base/BaseButton'

export const Main = styled.main<{ height: number }>`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  display: flex;
  flex-direction: row;
  background-color: transparent;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

export const Box = styled.div<{ mediaFlex?: number }>`
  width: 50%;
  height: 100%;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: unset;
    flex-grow: ${({ mediaFlex = 1 }) => mediaFlex};
  }
`

export const Flex = styled.div<{ mediaJustifyContent: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    justify-content: ${({ mediaJustifyContent }) => mediaJustifyContent};
  }
`

export const Heading = styled.h1`
  color: rgba(253, 253, 253, 1);
  font-size: 80px;
  letter-spacing: 10px;

  @media screen and (max-width: 1024px) {
    font-size: 70px;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 60px;
  }

  @media screen and (max-width: 500px) {
    font-size: 50px;
    letter-spacing: 5px;
  }
`

export const Button = styled(BaseButton)<{ marginBottom?: number }>`
  width: 50%;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: ${({ marginBottom = 0 }) => `${marginBottom}px`};

  @media screen and (max-width: 1024px) {
    width: 60%;
    margin: ${({ marginBottom = 0 }) => `0 auto ${marginBottom}px auto`};
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`
