import React from 'react';
import './styled.scss';

type TContentContainer = {
  contents: string;
};

const ContentContainer = ({ contents }: TContentContainer) => {
  return (
    <div className="content-container">
      <p>{contents}</p>
    </div>
  );
};

export default React.memo(ContentContainer);
