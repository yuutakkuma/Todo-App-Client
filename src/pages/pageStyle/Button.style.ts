import styled from 'styled-components';

interface Btn {
  MarginToHighAndLow?: number;
  MarginToLeftAndRight?: number;
}

export const Button = styled.button`
  width: 100%;
  margin: ${(props: Btn) =>
    `${props.MarginToHighAndLow ? `${props.MarginToHighAndLow}px` : 0} ${
      props.MarginToLeftAndRight ? `${props.MarginToLeftAndRight}px` : 'auto'
    }`};
  padding: 10px;
  background-color: #fffdf9;
  font-size: 15px;
  border-radius: 5px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
