import React from 'react';
import './styled.scss';

type TinputProps = {
  type: string;
  color?: 'black' | 'green' | 'blue';
  size?: 'small' | 'middle' | 'large' | 'auto';
  fontSize?: 'small' | 'middle' | 'large';
  placeHolder?: string;
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const input = ({
  type = 'text',
  color = 'black',
  size = 'auto',
  fontSize = 'small',
  placeHolder,
  inputValue,
  onChange,
}: TinputProps) => {
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

export default input;
