import React from 'react';
import { MockedProvider } from '@apollo/react-testing';

import { Modal } from '../components/modal';

export default {
  components: Modal,
  title: 'Modal',
};

export const ShowModal = () => {
  return (
    <MockedProvider>
      <div className="modal">
        <Modal text={'テスト'} removeChild={() => {}} />
      </div>
    </MockedProvider>
  );
};
