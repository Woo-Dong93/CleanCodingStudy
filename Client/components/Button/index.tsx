import React from 'react';
import './styled.scss';
import { EColor, ESize } from '../../typings/css';

type TButtonProps = {
  children: React.ReactNode;
  color?: EColor;
  size?: ESize;
  handler: () => void;
};

const Button: React.FC<TButtonProps> = ({
  children,
  color = EColor.black,
  size = ESize.auto,
  handler,
}: TButtonProps) => {
  return (
    <button className={`Button ${color} ${size}`} onClick={handler}>
      {children}
    </button>
  );
};

export default Button;
