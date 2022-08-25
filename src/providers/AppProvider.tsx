import { Router } from '@tanstack/react-location';
import { ReactLocationDevtools } from '@tanstack/react-location-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { location, routes } from 'src/routes/Routes';

import { queryClient } from 'src/lib/react-query/queryClient';

import { Spinner } from 'src/components/Spinner';

import { AuthGuard } from './AuthGuard';

const ErrorFallback: React.FC = () => {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center text-red-500"
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
        <div className="flex h-screen w-screen items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AuthGuard>
          <QueryClientProvider client={queryClient}>
            <Router routes={routes} location={location}>
              {children}
              <ReactLocationDevtools position="bottom-right" />
            </Router>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </AuthGuard>
      </ErrorBoundary>
    </Suspense>
  );
};
