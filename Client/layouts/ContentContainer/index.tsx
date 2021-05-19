import React from 'react';
import './styled.scss';

type TContentContainer = {
  contents: string;
};

const ContentContainer = ({ contents }: TContentContainer) => {
  return <div className="content-container">{contents}</div>;
};

export default React.memo(ContentContainer);
