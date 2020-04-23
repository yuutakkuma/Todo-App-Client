import React from 'react';

import { LoadingCircle, LoadingSvg } from './componentStyle/Loading.style';

export const Loading: React.FC = () => {
  return (
    <div>
      <LoadingSvg>
        <LoadingCircle cx="10" cy="10" r="10" />
      </LoadingSvg>
    </div>
  );
};
