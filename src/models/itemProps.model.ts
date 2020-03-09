import { Todo } from './todo.model';

export interface todoItemProps extends Todo {
  id: string | undefined | number;
  onDelete: (id: number) => void;
}
