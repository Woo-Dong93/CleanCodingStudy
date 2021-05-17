import React, { useCallback, useState, Dispatch, SetStateAction } from 'react';

type ReturnTypes<T> = [T, (e: React.ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>];

const useInput = <T>(initailData: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initailData);

  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as unknown as T);
  }, []);

  return [value, handler, setValue];
};

export default useInput;
