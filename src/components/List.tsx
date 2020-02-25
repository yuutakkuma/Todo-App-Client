import React from 'react';
import { todoItemProps } from '../models/itemProps.model';

export const List: React.FC<todoItemProps> = props => {
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
