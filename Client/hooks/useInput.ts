import React, { useCallback, useState } from 'react';

const useInput = <T>(initailData: T) => {
  const [value, setValue] = useState(initailData);

  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as unknown as T);
  }, []);

  return [value, handler, setValue];
};

export default useInput;
