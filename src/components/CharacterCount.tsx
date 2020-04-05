import React from 'react';

interface Props {
  value: string;
}
let warning: string | undefined;

export const CharacterCount: React.FC<Props> = props => {
  let style = {
    color: 'blue',
    margin: '0'
  };
  const count = props.value.trim().length;
  if (count > 20) {
    warning = 'ニックネームは20文字以下です。';
    style.color = 'red';
  } else {
    warning = undefined;
  }

  return <p style={style}>{[warning, count]}/20</p>;
};
