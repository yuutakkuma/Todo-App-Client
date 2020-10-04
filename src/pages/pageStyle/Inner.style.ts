import styled from 'styled-components'

interface Inner {
  innerWidth: number
}

export const Inner = styled.div`
  width: ${({ innerWidth }: Inner) => `${innerWidth}%`};
  margin: 0 auto;
`
