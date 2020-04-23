import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import {
  ModalContainer,
  ModalBox,
  ModalInner,
  ModalText,
  ModalBtn,
} from './componentStyle/Modal.style';

import { ModalContext } from '../createContext/ModalContext';

interface Props {
  modalText: string | undefined;
}

export const Modal: React.FC<Props> = ({ modalText }) => {
  const modalCtx = useContext(ModalContext);

  const modalRoot = document.getElementById('modal-root');
  const el = document.createElement('div');
  if (!modalRoot) {
    throw new Error('エレメントを取得出来ませんでした。');
  }
  // クラス名追加
  el.className = 'modal';
  // モーダルルートにdiv要素を追加
  modalRoot.appendChild(el);

  return (
    <div>
      {ReactDOM.createPortal(
        <ModalContainer>
          <ModalBox>
            <ModalInner>
              <ModalText>{modalText}</ModalText>
            </ModalInner>
            <ModalInner>
              <ModalBtn
                onClick={() => {
                  //　エレメントを削除し、モーダルを閉じる
                  modalRoot.removeChild(el);
                  modalCtx.state = false;
                }}
              >
                OK！
              </ModalBtn>
            </ModalInner>
          </ModalBox>
        </ModalContainer>,
        el
      )}
    </div>
  );
};
