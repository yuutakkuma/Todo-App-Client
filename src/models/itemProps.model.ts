import { Todo } from './todo.model';

export interface todoItemProps extends Todo {
  id: number;
  onDelete: (id: number) => void;
}
