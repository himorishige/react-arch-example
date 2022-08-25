import { useState } from 'react';

import { Button } from 'src/components/Button';

export const ColocateState1: React.FC = () => {
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
        Colocate State 1
      </h2>
      <div>
        <p className="mb-2 font-bold">count: {count}</p>
        <div className="flex gap-2">
          <Button variant="primary" countHandler={addCount}>
            + 1
          </Button>
          <Button variant="secondary" countHandler={resetCount}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};
