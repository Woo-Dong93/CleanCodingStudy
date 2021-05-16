import React from 'react';
import './styled.scss';

type TinputProps = {
  children: React.ReactNode;
  color?: 'black' | 'green' | 'blue';
  size?: 'small' | 'middle' | 'large' | 'auto';
  handler: () => void;
};

const Button: React.FC<TinputProps> = ({ children, color = 'black', size = 'auto', handler }: TinputProps) => {
  return (
    <button className={`Button ${color} ${size}`} onClick={handler}>
      {children}
    </button>
  );
};

export default Button;
