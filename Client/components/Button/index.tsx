import React from 'react';
import './styled.scss';

type TbuttonProps = {
  children: React.ReactNode;
  color?: 'black' | 'green' | 'blue';
  size?: 'small' | 'middle' | 'large' | 'auto';
  handler: () => void;
};

const Button: React.FC<TbuttonProps> = ({ children, color = 'black', size = 'auto', handler }: TbuttonProps) => {
  return (
    <button className={`Button ${color} ${size}`} onClick={handler}>
      {children}
    </button>
  );
};

export default Button;
