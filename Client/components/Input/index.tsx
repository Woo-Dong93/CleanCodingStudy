import React from 'react';
import './styled.scss';
import { EColor, EFontSize, ESize } from '@type/css';

type TInputProps = {
  type: string;
  color?: EColor;
  size?: ESize;
  fontSize?: EFontSize;
  placeHolder?: string;
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  type = 'text',
  color = EColor.black,
  size = ESize.auto,
  fontSize = EFontSize.small,
  placeHolder,
  inputValue,
  onChange,
}: TInputProps) => {
  return (
    <input
      className={`Input ${color} ${size} font-${fontSize}`}
      type={type}
      placeholder={placeHolder}
      value={inputValue}
      onChange={onChange}
    />
  );
};

export default Input;
