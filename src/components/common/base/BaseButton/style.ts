import styled from 'styled-components'

export const Button = styled.button`
  color: rgba(253, 253, 253, 1);
  background-color: rgba(50, 190, 230, 1);
  border-color: rgba(244, 244, 242, 0.8);
  border-style: solid;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    box-shadow: none;
    transform: translate(0.3px, 0.3px);
  }
`
