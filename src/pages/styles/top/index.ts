import styled from 'styled-components'

import BaseButton from '../../../components/common/base/BaseButton'

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: transparent;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

export const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 40%;
  }
`

export const Heading = styled.h1`
  color: rgba(253, 253, 253, 1);
  font-size: 80px;
  letter-spacing: 10px;

  @media screen and (max-width: 1000px) {
    font-size: 70px;
  }
`

export const Button = styled(BaseButton)<{ marginBottom?: number }>`
  width: 50%;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: ${({ marginBottom = 0 }) => `${marginBottom}px`};

  @media screen and (max-width: 1000px) {
    width: 60%;
  }
`
