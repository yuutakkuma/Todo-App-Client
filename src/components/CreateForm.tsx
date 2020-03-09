import React, { useState } from 'react';
import { useCreateTodoMutation } from '../generated/graphql';
import { TodoApp } from './TodoApp';

type CreateProps = {
  onAdd: (title: string) => void;
  onTest: () => void;
};

export const CreateForm: React.FC<CreateProps> = props => {
  const [item, setItem] = useState({ title: '' });

  const [createTodo] = useCreateTodoMutation();

  const addItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    // 値を保存
    if (item) {
      props.onAdd(item.title);
    }
    // 値をリセット
    // setItem('');

    event.preventDefault();
  };

  // 値を更新するメソッド
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(event.target);

    setItem(prevItem => {
      return {
        ...prevItem,
        [name]: value
      };
    });
  };

  return (
    <div>
      <form
        onSubmit={async event => {
          event.preventDefault();
          await createTodo({
            variables: {
              title: item.title
            }
          });
          setItem({ title: '' });
        }}
      >
        <input
          name="title"
          placeholder="やること"
          onChange={handleChange}
          value={item.title}
        />
        <button type="submit">＋</button>
      </form>
    </div>
  );
};
