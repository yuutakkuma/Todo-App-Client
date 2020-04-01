import React from 'react';
import { TodoDeleteButton } from './TodoDeleteButton';

interface Props {
  id: string;
  title: string;
}

export const List: React.FC<Props> = props => {
  return (
    <div className="item-list">
      <p className="item-name">{props.title}</p>
      <TodoDeleteButton todoId={props.id} />
    </div>
  );
};
