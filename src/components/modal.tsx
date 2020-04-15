import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import './componentStyle/Modal.css';
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
        <div className="modal-container">
          <div className="modal-box">
            <div className="modal-inner">
              <p className="modal-text">{modalText}</p>
            </div>
            <div className="modal-inner">
              <button
                className="modal-btn"
                onClick={() => {
                  //　エレメントを削除し、モーダルを閉じる
                  modalRoot.removeChild(el);
                  modalCtx.state = false;
                }}
              >
                OK！
              </button>
            </div>
          </div>
        </div>,
        el
      )}
    </div>
  );
};
