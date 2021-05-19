import React from 'react';
import './styled.scss';
import { EColor, ESize } from '@type/css';

type TButtonProps = {
  children: React.ReactNode;
  color?: EColor;
  size?: ESize;
  onClick: () => void;
};

const Button: React.FC<TButtonProps> = ({
  children,
  color = EColor.black,
  size = ESize.auto,
  onClick,
}: TButtonProps) => {
  return (
    <button className={`Button ${color} ${size}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
