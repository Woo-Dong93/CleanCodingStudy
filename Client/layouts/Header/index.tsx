import React from 'react';
import { Link } from 'react-router-dom';
import './styled.scss';

type THeader = {
  title: string;
};

const Header = ({ title }: THeader) => {
  return (
    <div className="header">
      <Link to="/blog">{title}</Link>
    </div>
  );
};

export default Header;
