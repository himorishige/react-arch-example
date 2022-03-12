import { Outlet, Router } from '@tanstack/react-location';
import { ReactLocationDevtools } from '@tanstack/react-location-devtools';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { location, routes } from 'src/routes/Routes';

import { queryClient } from 'src/lib/react-query/queryClient';

export const App: React.VFC = () => {
  return (
    <Router routes={routes} location={location}>
      <QueryClientProvider client={queryClient}>
        <Outlet />
        <ReactQueryDevtools />
        <ReactLocationDevtools position="bottom-right" />
      </QueryClientProvider>
    </Router>
  );
};
