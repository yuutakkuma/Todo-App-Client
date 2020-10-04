import React, { useContext } from 'react'
import ReactDOM from 'react-dom'

import { ModalContext } from '../createContext/ModalContext'
import { Modal } from './modal'

interface Props {
  modalText: string | undefined
}

export const Portal: React.FC<Props> = props => {
  const modalCtx = useContext(ModalContext)

  const modalRoot = document.getElementById('modal-root')
  const el = document.createElement('div')
  if (!modalRoot) {
    throw new Error('エレメントを取得出来ませんでした。')
  }
  // クラス名追加
  el.className = 'modal'
  // モーダルルートにdiv要素を追加
  modalRoot.appendChild(el)

  //　エレメントを削除し、モーダルを閉じる
  const removeHendle = () => {
    modalRoot.removeChild(el)
    modalCtx.state = false
  }

  return (
    <div>
      {ReactDOM.createPortal(
        <Modal text={props.modalText} removeChild={removeHendle} />,
        el
      )}
    </div>
  )
}
