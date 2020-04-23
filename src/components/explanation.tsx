import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  ExplanationContainer,
  ExplanationText,
  BackBtnInner,
  BackBtn,
} from './componentStyle/Explanation.style';

interface Props {
  value: string;
  buttonName: string;
  history: string;
}

export const Explanation: React.FC<Props> = (props) => {
  const history = useHistory();
  return (
    <ExplanationContainer>
      <ExplanationText>{props.value}</ExplanationText>
      <BackBtnInner>
        <BackBtn onClick={() => history.push(props.history)}>
          {props.buttonName}
        </BackBtn>
      </BackBtnInner>
    </ExplanationContainer>
  );
};
