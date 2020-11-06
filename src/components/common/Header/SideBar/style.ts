import styled from 'styled-components'

export const Container = styled.div<{ isOpen?: boolean }>`
  width: 100%;
  height: 100vh;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: display 0.6s;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
`

export const Bar = styled.div<{ isOpen?: boolean }>`
  width: 300px;
  height: 100%;
  padding-top: 20px;
  visibility: visible;
  transform: translateX(${({ isOpen }) => (isOpen ? '0%' : '-100%')});
  transition: transform 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right-style: solid;
  border-right-width: 1px;
  border-right-color: rgba(253, 253, 253, 1);
  background-color: rgba(45, 97, 135, 1);
`
