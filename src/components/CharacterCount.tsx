import React from 'react';

import {
  Character,
  CharacterError,
} from './componentStyle/CharacterCount.style';

interface Props {
  value: string;
  error: string;
  reload: boolean;
}

export const CharacterCount: React.FC<Props> = (props) => {
  let style = {
    color: 'blue',
  };
  const count = props.value.trim().length;
  if (count > 25) {
    style.color = 'red';
  }

  return (
    <Character style={style}>
      {props.reload ? (
        <CharacterError>{props.error}</CharacterError>
      ) : (
        undefined
      )}
      {count}/25
    </Character>
  );
};
