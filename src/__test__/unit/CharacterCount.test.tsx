import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import { CharacterCount } from '../../components/CharacterCount';

const values = {
  twentyCharactersLess: 'クッキーを作る',
  twentyOneCharactersMore:
    'このタスクは２５文字以上入力されているので警告がでます。'
};

describe('CharacterCount', () => {
  test('20文字以下', () => {
    const lessComponent = render(
      <MockedProvider>
        <CharacterCount
          value={values.twentyCharactersLess}
          error={''}
          reload={true}
        />
      </MockedProvider>
    );

    lessComponent.getByText('7/25');
    // lessComponent.debug();
  });

  test('25文字以上', () => {
    const moreComponent = render(
      <MockedProvider>
        <CharacterCount
          value={values.twentyOneCharactersMore}
          error={'1文字以上、25文字以下です。'}
          reload={false}
        />
      </MockedProvider>
    );

    moreComponent.findByText('1文字以上、25文字以下です。28/25');
    // moreComponent.debug();
  });
});
