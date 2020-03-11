import React from 'react';

interface Props {
  id: string | undefined;
  title: string | undefined;
  onDelete: (id: string | undefined) => void;
}

export const List: React.FC<Props> = props => {
  // DELETEボタンをクリックすることで発火するメソッド
  const handleClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="item-list">
      <p className="item-name">{props.title}</p>
      <button className="delete-btn" onClick={handleClick}>
        DELETE
      </button>
    </div>
  );
};
