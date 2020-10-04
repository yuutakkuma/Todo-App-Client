import React from 'react'
import styled from 'styled-components'

import { Loading } from '../Loading'

interface Props {
  isDeleteAccountLoading: boolean
}

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #fffdf9;
  font-size: 15px;
  border-radius: 5px;
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    background-color: rgba(3, 209, 255, 0.2);
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`

export const DeleteAccountButton: React.FC<Props> = props => {
  if (props.isDeleteAccountLoading) return <Loading />

  return <Button type='submit'>アカウントを削除する</Button>
}
