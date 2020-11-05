import styled from 'styled-components'

import ErrorMessage from '../../common/ErrorMessage'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Counter = styled.p<{ color: string }>`
  color: ${({ color }) => color};
  font-weight: 600;
  margin: 0 10px 0 0;
`

export const CounterErrorMessage = styled(ErrorMessage)`
  margin: 0;
`
