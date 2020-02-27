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

  const sampleDeleteHandler = (id: number) => {
    setSample(prevSample => {
      return prevSample.filter((_, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      {sample.map((prevSmple, index) => {
        return (
          <List
            key={index}
            id={index}
            title={prevSmple.title}
            onDelete={sampleDeleteHandler}
          />
        );
      })}
    </div>
  );
};
