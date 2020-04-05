import React from 'react';

interface Props {
  value: string;
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
      {[count]}/25
    </p>
  );
};
