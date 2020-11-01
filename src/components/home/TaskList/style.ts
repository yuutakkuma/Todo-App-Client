import styled from 'styled-components'

export const StyledTaskList = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-color: rgba(244, 244, 242, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(190, 190, 190, 1);
  box-sizing: border-box;
`

export const StyledTaskListBox = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  display: flex;
  align-items: center;
  justify-content: center;
`
