import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-color: rgba(244, 244, 242, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;
`

export const Box = styled.div<{
  width: string
  tabletWidth?: string
  mobileWidth?: string
  mediaWidth?: string
  marginBottom?: string
}>`
  width: ${({ width }) => width};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ marginBottom = '0px' }) => marginBottom};

  @media screen and (max-width: 1000px) {
    width: ${({ tabletWidth }) => tabletWidth};
  }

  @media screen and (max-width: 500px) {
    width: ${({ mobileWidth }) => mobileWidth};
  }
`

export const Absolute = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
