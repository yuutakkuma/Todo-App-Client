import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const Box = styled.div<{ position?: string }>`
  width: 100%;
  position: ${({ position = 'static' }) => position};
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(45, 97, 135, 1);
`

export const Inner = styled.div`
  width: 60%;
  margin-top: 20px;

  @media screen and (max-width: 1200px) {
    width: 80%;
  }
`

export const Main = styled.main`
  width: 60%;
  position: relative;
  top: 200px;
  padding: 30px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  @media screen and (max-width: 1200px) {
    width: 80%;
  }
`
