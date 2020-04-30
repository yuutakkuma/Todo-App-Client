import React from 'react';
import { MockedProvider } from '@apollo/react-testing';

import { CreateTodo } from '../components/CreateTodo';

export default {
  component: CreateTodo,
  title: 'CreateTodo',
};

export const CreateForm = () => {
  return (
    <MockedProvider>
      <CreateTodo />
    </MockedProvider>
  );
};
