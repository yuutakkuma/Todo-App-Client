import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { CharacterCount } from '../../components/CharacterCount';

const values = {
  twentyCharactersLess: 'クッキー',
  twentyOneCharactersMore: 'このニックネームは２１文字以上なので警告がでます。'
};

describe('CharacterCount', () => {
  test('20文字以下', () => {
    const lessComponent = render(
      <MockedProvider>
        <CharacterCount value={values.twentyCharactersLess} />
      </MockedProvider>
    );

    // lessComponent.debug();
    lessComponent.getByText('4/20');
  });

  test('21文字以上', () => {
    const moreComponent = render(
      <MockedProvider>
        <CharacterCount value={values.twentyOneCharactersMore} />
      </MockedProvider>
    );

    // moreComponent.debug();
    moreComponent.getByText('ニックネームは20文字以下です。25/20');
  });
});
