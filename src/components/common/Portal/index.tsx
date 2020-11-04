import React, { FC } from 'react'
import ReactDOM from 'react-dom'

import Modal from './Modal'
import { Props } from './type'

const Portal: FC<Props> = ({ title, content, onPress }) => {
  const modalRoot = document.getElementById('modal-root')
  const container = document.createElement('div')
  if (!modalRoot) {
    throw new Error('エレメントを取得出来ませんでした。')
  }

  container.style.width = '100%'
  container.style.height = '100vh'
  container.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
  container.style.display = 'flex'
  container.style.alignItems = 'center'
  container.style.justifyContent = 'center'
  container.style.position = 'fixed'
  container.style.top = '0'

  modalRoot.appendChild(container)

  const removeHendle = () => {
    modalRoot.removeChild(container)
    onPress()
  }

  return (
    <>
      {ReactDOM.createPortal(
        <Modal title={title} content={content} onClick={removeHendle} />,
        container
      )}
    </>
  )
}

export default Portal
