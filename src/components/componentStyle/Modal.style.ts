import styled from 'styled-components'

export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalBox = styled.div`
  width: 30%;
  height: 30%;
  border: 5px;
  border-style: solid;
  border-radius: 10px;
  border-color: #fffdf9;
  background-color: #bfe8f0;
`

export const ModalInner = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
`

export const ModalText = styled.p`
  margin: 0;
  padding: 50px;
  text-align: center;
`

export const ModalBtn = styled.button`
  position: absolute;
  width: 20%;
  margin: 0;
  background-color: #fffdf9;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`
