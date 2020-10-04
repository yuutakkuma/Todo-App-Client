import styled from 'styled-components'

export const ExplanationContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 5px;
  display: flex;
`

export const ExplanationText = styled.p`
  text-align: center;
`

export const BackBtnInner = styled.div`
  width: 15%;
  margin: 0 0 0 auto;
`

export const BackBtn = styled.button`
  width: 100%;
  margin: 15px auto;
  background-color: #fffdf9;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`
