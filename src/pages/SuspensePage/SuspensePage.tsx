import { Suspense } from 'react';

import { Posts } from 'src/components/Posts';
import { Spinner } from 'src/components/Spinner';

export const SuspensePage: React.FC = () => {
  return (
    <div className="p-2">
      <Suspense
        fallback={
          <div className="flex h-screen w-screen items-center justify-center">
            <Spinner size="xl" />
          </div>
        }
      >
        <Posts />
      </Suspense>
    </div>
  );
};
