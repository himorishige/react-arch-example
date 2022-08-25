import { useState } from 'react';

import { ChildComponent } from './ChildComponent';

export const ColocateState2: React.FC = () => {
  const [count, setCount] = useState(0);

  const addCount = (): void => {
    setCount((prev) => prev + 1);
  };

  const resetCount = (): void => {
    setCount(0);
  };

  return (
    <div className="p-2">
      <h2 className="mb-2 text-base font-semibold uppercase tracking-wide text-blue-600">
        Colocate State 2
      </h2>
      <ChildComponent
        count={count}
        addCount={addCount}
        resetCount={resetCount}
      />
    </div>
  );
};
