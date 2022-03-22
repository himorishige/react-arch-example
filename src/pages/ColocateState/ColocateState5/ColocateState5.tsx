import { createContext, useState } from 'react';

import { ChildComponent } from './ChildComponent';

export const CounterContext = createContext({
  count: 0,
  addCount: () => {
    //
  },
  resetCount: () => {
    //
  },
});

export const ColocateState5: React.VFC = () => {
  const [count, setCount] = useState(0);

  const addCount = (): void => {
    setCount((prev) => prev + 1);
  };

  const resetCount = (): void => {
    setCount(0);
  };

  return (
    <div className="p-2">
      <h2 className="mb-2 text-base font-semibold tracking-wide text-blue-600 uppercase">
        Colocate State 5
      </h2>
      <CounterContext.Provider value={{ count, addCount, resetCount }}>
        <ChildComponent />
      </CounterContext.Provider>
    </div>
  );
};
