import { useState } from 'react';

import { ColocateState3 } from './ColocateState3';
import { SiblingComponent } from './SiblingComponent';

export const ParentComponent: React.VFC = () => {
  const [count, setCount] = useState(0);

  const addCount = (): void => {
    setCount((prev) => prev + 1);
  };

  const resetCount = (): void => {
    setCount(0);
  };

  return (
    <>
      <ColocateState3
        count={count}
        addCount={addCount}
        resetCount={resetCount}
      />
      <SiblingComponent
        count={count}
        addCount={addCount}
        resetCount={resetCount}
      />
    </>
  );
};
