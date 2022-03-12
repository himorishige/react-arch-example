import { Router } from '@tanstack/react-location';
import { ReactLocationDevtools } from '@tanstack/react-location-devtools';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { location, routes } from 'src/routes/Routes';

import { queryClient } from 'src/lib/react-query/queryClient';

type Props = {
  children: React.ReactNode;
};

export const AppProvider: React.VFC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router routes={routes} location={location}>
        {children}
        <ReactLocationDevtools position="bottom-right" />
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
