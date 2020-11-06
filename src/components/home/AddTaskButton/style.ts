import styled from 'styled-components'
import quillPan from './images/quill_pan.png'

export const Button = styled.button`
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 1);
  border-width: 3px;
  border-color: rgba(50, 190, 230, 1);
  border-radius: 120px;
  border-style: solid;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
  outline: none;
  cursor: pointer;
  background-image: url(${quillPan});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    background-color: rgba(245, 245, 245, 1);
  }

  &:active {
    box-shadow: none;
    transform: translate(0.3px, 0.3px);
  }

  @media screen and (max-width: 1000px) {
    width: 55px;
    height: 55px;
  }
`
