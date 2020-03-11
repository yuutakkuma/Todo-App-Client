import React, { useState } from 'react';
import { List } from './List';

export default {
  title: 'ToDoList'
};

export const TodoList = () => {
  const [sample, setSample] = useState([
    {
      id: 1,
      title: 'sample'
    },
    {
      id: 2,
      title: 'sample2'
    },
    {
      id: 3,
      title: 'sample3'
    },
    {
      id: 4,
      title: 'sample4'
    },
    {
      id: 5,
      title: 'sample5'
    }
  ]);

  const sampleDeleteHandler = (id: string | undefined) => {
    setSample(prevSample => {
      return prevSample.filter((_, index) => {
        const x = index.toString();

        return x !== id;
      });
    });
  };

  return (
    <div>
      {sample.map((prevSmple, index) => {
        const x = index.toString();
        return (
          <List
            key={x}
            id={x}
            title={prevSmple.title}
            onDelete={sampleDeleteHandler}
          />
        );
      })}
    </div>
  );
};
