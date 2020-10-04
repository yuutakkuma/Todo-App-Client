import React, { FC } from 'react'
import styled from 'styled-components'

export interface Props {
  title: string
  type?: 'button' | 'submit' | 'reset'
}

const FormButton = styled.button`
  width: 100%;
  margin: 10px 0;
  padding: 10px 5px;
  background-color: #fffdf9;
  border-color: rgba(0, 0, 0, 0.3);
  font-size: 15px;
  border-radius: 5px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(3, 209, 255, 0.2);
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`

export const FormButtonBase: FC<Props> = ({ title, type }) => (
  <FormButton type={type}>{title}</FormButton>
)
