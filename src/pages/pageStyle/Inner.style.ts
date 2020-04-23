import styled from 'styled-components';

interface Inner {
  innerWidth: number;
}

export const Inner = styled.div`
  width: ${(props: Inner) => `${props.innerWidth}%`};
  margin: 0 auto;
`;
