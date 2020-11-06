import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    transform: translate(0.3px, 0.3px);
  }
`

export const Border = styled.div`
  width: 80%;
  height: 5%;
  background-color: rgba(253, 253, 253, 1);
`
