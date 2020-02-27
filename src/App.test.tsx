import React from 'react';
import { render } from '@testing-library/react';
import { TodoApp } from './components/TodoApp';

test('renders learn react link', () => {
  const { debug } = render(<TodoApp />);
  debug();
});
