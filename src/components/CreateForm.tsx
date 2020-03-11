import React, { useState } from 'react';
import { useCreateTodoMutation } from '../generated/graphql';

export const CreateForm: React.FC = () => {
  const [item, setItem] = useState({ title: '' });
  const [createTodo] = useCreateTodoMutation();

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
