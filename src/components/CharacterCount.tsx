import React from 'react';

interface Props {
  value: string;
  error: string;
  reload: boolean;
}

export const CharacterCount: React.FC<Props> = props => {
  let style = {
    color: 'blue'
  };
  const count = props.value.trim().length;
  if (count > 25) {
    style.color = 'red';
  }

  return (
    <p className="character" style={style}>
      {props.reload ? <span className="error">{props.error}</span> : undefined}
      {count}/25
    </p>
  );
};
