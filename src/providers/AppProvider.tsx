import { Router } from '@tanstack/react-location';
import { ReactLocationDevtools } from '@tanstack/react-location-devtools';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { location, routes } from 'src/routes/Routes';

import { queryClient } from 'src/lib/react-query/queryClient';

import { Spinner } from 'src/components/Spinner';

const ErrorFallback: React.VFC = () => {
  return (
    <div
      className="flex flex-col justify-center items-center w-screen h-screen text-red-500"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <button
        className="mt-4"
        onClick={(): void => window.location.assign(window.location.origin)}
      >
        Refresh
      </button>
    </div>
  );
};

type Props = {
  children: React.ReactNode;
};

export const AppProvider: React.VFC<Props> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <Router routes={routes} location={location}>
            {children}
            <ReactLocationDevtools position="bottom-right" />
          </Router>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
