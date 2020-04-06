import React from 'react';

import { useHistory } from 'react-router-dom';
import './componentStyle/explanation.css';

interface Props {
  value: string;
  buttonName: string;
  history: string;
}

export const Explanation: React.FC<Props> = props => {
  const history = useHistory();
  return (
    <div className="explanation-container">
      <p className="explanation-text">{props.value}</p>
      <div className="back-btn-inner">
        <button
          className="back-btn"
          onClick={() => history.push(props.history)}
        >
          {props.buttonName}
        </button>
      </div>
    </div>
  );
};
