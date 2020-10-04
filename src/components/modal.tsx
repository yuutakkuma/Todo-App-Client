import React from 'react'

import {
  ModalContainer,
  ModalBox,
  ModalInner,
  ModalText,
  ModalBtn
} from './componentStyle/Modal.style'

interface Props {
  text: string | undefined
  removeChild: Function
}

export const Modal: React.FC<Props> = props => {
  return (
    <ModalContainer>
      <ModalBox>
        <ModalInner>
          <ModalText>{props.text}</ModalText>
        </ModalInner>
        <ModalInner>
          <ModalBtn
            onClick={() => {
              props.removeChild()
            }}
          >
            OK！
          </ModalBtn>
        </ModalInner>
      </ModalBox>
    </ModalContainer>
  )
}
