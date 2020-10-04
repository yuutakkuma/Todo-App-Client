import styled from 'styled-components'

export const TodoForm = styled.form`
  width: 50%;
  margin: 10px auto 30px auto;
  padding: 10px;
  background-color: #fffdf9;
  border-radius: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  display: flex;
`

export const TodoInput = styled.input`
  width: 100%;
  padding: 5px;
  border: none;
  outline: none;
  font-size: 20px;
  color: #2d334a;
`

export const TodoBtn = styled.button`
  width: 50px;
  height: 50px;
  margin: 0 0 0 auto;
  border-radius: 50%;
  font-size: 30px;
  color: #fffdf9;
  background-color: #8ac6d1;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`
