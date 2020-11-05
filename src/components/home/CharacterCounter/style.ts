import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Counter = styled.p<{ color: string }>`
  color: ${({ color }) => color};
  margin-right: 10px;
  font-weight: 600;
`
