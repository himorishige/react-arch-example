import { Link, Outlet, Router } from '@tanstack/react-location';
import { ReactLocationDevtools } from '@tanstack/react-location-devtools';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { location, routes } from 'src/routes/Routes';

import { queryClient } from 'src/lib/react-query/queryClient';

export const App: React.VFC = () => {
  return (
    <Router routes={routes} location={location}>
      <QueryClientProvider client={queryClient}>
        <div className="p-2">
          <Link to="/" className="mr-2 underline">
            Home
          </Link>
          <Link to="container-presenter" className="mr-2 underline">
            Container-Presenter
          </Link>
          <Link to="colocate" className="underline">
            Colocate
          </Link>
        </div>
        <hr />
        <Outlet />
        <ReactQueryDevtools />
        <ReactLocationDevtools position="bottom-right" />
      </QueryClientProvider>
    </Router>
  );
};
