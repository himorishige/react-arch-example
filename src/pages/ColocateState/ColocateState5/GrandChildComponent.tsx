import { useContext } from 'react';

import { Button } from 'src/components/Button';

import { CounterContext } from './ColocateState5';

export const GrandChildComponent: React.VFC = () => {
  const { count, addCount, resetCount } = useContext(CounterContext);

  return (
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
  );
};
