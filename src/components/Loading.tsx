import React from 'react';
import './componentStyle/Loading.css';

export const Loading: React.FC = () => {
  return (
    <div>
      <svg>
        <circle cx="10" cy="10" r="10" />
      </svg>
    </div>
  );
};
