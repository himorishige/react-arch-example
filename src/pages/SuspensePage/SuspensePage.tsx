import { Suspense } from 'react';

import { Posts } from 'src/components/Posts';
import { Spinner } from 'src/components/Spinner';

export const SuspensePage: React.VFC = () => {
  return (
    <div className="p-2">
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-screen h-screen">
            <Spinner size="xl" />
          </div>
        }
      >
        <Posts />
      </Suspense>
    </div>
  );
};
