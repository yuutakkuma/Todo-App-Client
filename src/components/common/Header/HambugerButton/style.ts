import styled from 'styled-components'
import hambuger from './images/hambuger.png'

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
  background-image: url(${hambuger});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    transform: translate(0.3px, 0.3px);
  }
`
