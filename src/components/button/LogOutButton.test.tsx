import React from 'react';
import { gql } from 'apollo-boost';
import { act, render, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { LogOutButton } from './LogOutButton';

const LOGOUT_MUTATION = gql`
  mutation LogOut {
    logOut
  }
`;
const ME_QUERY = gql`
  query Me {
    me {
      id
      userName
      email
      loginStatus
    }
  }
`;
const mocks = [
  {
    request: {
      query: LOGOUT_MUTATION,
      variables: {}
    },
    result: {
      data: {
        logOut: true
      }
    }
  },
  {
    request: {
      query: ME_QUERY,
      variables: {
        id: '1',
        userName: 'テストマン',
        email: 'testman@testman.com',
        loginStatus: true
      }
    },
    result: {
      data: {
        me: {
          id: '1',
          userName: 'テストマン',
          email: 'testman@testman.com',
          loginStatus: true
        }
      }
    }
  }
];

test('レンダリング', async () => {
  act(() => {
    render(
      <MockedProvider>
        <LogOutButton />
      </MockedProvider>
    );
  });
});

test('クリック', async () => {
  const component = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <LogOutButton />
    </MockedProvider>
  );
  //　クリックできる
  const logOutButton = component.getByTestId('logout-btn-test');
  const click = fireEvent.click(logOutButton);
  expect(click).toBe(true);
});
