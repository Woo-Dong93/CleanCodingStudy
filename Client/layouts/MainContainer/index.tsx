import React from 'react';
import './styled.scss';

const MainContainer: React.FC = ({ children }) => {
  return <div className="main-container">{children}</div>;
};

export default MainContainer;
