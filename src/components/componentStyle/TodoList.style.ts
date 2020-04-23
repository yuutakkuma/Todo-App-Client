import styled from 'styled-components';

export const TodoListWrapper = styled.div`
  width: 100%;
  margin: 10px auto;
`;

export const TodoListContainer = styled.div`
  width: 50%;
  margin: 10px auto;
  padding: 10px;
  background-color: #fffdf9;
  border-radius: 10px;
  box-shadow: 0 1px 5px #ccc;
  display: flex;
`;

export const TodoName = styled.p`
  width: 80%;
  font-size: 20px;
  color: #2d334a;
`;

export const Message = styled.div`
  margin: 0 auto;
  padding: 10px;
  font-size: 30px;
  color: #8ac6d1;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

export const TodoDeleteBtn = styled.button`
  width: 50px;
  margin: 0 0 0 auto;
  border-radius: 10%;
  font-size: 10px;
  color: #fffdf9;
  background-color: #ffa259;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border: none;
  outline: none;
`;
