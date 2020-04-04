import React from 'react';
import './componentStyle/HelloUser.css';

import { MeQuery } from '../generated/graphql';
import { ApolloError } from 'apollo-boost';
import { Loading } from './Loading';

interface Props {
  fetchData: MeQuery | undefined;
  isMeDataLoading: boolean;
  error: ApolloError | undefined;
}

export const HelloUser: React.FC<Props> = props => {
  if (props.isMeDataLoading) return <Loading />;

  if (
    typeof props.fetchData === 'undefined' ||
    !props.fetchData.me ||
    props.error
  ) {
    return <div>ニックネームを受信出来ませんでした。</div>;
  }

  return (
    <div className="nickname">
      <h2>こんにちは{props.fetchData.me.userName}さん</h2>
    </div>
  );
};
