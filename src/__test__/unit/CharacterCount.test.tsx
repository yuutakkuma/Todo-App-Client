import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { CharacterCount } from '../../components/CharacterCount';

const values = {
  twentyCharactersLess: 'クッキーを作る',
  twentyOneCharactersMore: 'このニックネームは２１文字以上なので警告がでます。'
};

describe('CharacterCount', () => {
  test('20文字以下', () => {
    const lessComponent = render(
      <MockedProvider>
        <CharacterCount
          value={values.twentyCharactersLess}
          error={''}
          reload={false}
        />
      </MockedProvider>
    );

    // lessComponent.debug();
    lessComponent.getByText('7/25');
  });

  // test('21文字以上', () => {
  //   const moreComponent = render(
  //     <MockedProvider>
  //       <CharacterCount value={values.twentyOneCharactersMore} />
  //     </MockedProvider>
  //   );

  //   // moreComponent.debug();
  //   moreComponent.getByText('ニックネームは20文字以下です。25/20');
  // });
});
