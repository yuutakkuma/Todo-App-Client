import styled from 'styled-components';

export const LoginInput = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 10px 0 10px 5px;
  outline: none;
  border-style: solid;
  border-color: rgb(216, 216, 216);
  border-radius: 5px;
  font-size: 20px;
  box-sizing: border-box;
`;

export const LoginError = styled.p`
  margin: 0;
  padding: 0;
  color: red;
`;

export const LoginBtn = styled.button`
  width: 100%;
  margin: 10px 0;
  padding: 10px 5px;
  background-color: #fffdf9;
  font-size: 15px;
  border-radius: 5px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
