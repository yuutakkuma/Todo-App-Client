import React from 'react';
import { render } from '@testing-library/react';
import { TodoApp } from './TodoApp';

test('renders learn react link', () => {
  const { debug } = render(<TodoApp />);
  debug();
});
