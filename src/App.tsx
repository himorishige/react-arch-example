import { Link, Outlet } from '@tanstack/react-location';

import { AppProvider } from './providers/AppProvider';

export const App: React.VFC = () => {
  return (
    <AppProvider>
      <div className="p-2">
        <Link to="/" className="mr-2 underline">
          Home
        </Link>
        <Link to="container-presenter" className="mr-2 underline">
          Container-Presenter
        </Link>
        <Link to="colocate" className="mr-2 underline">
          Colocate
        </Link>
        <Link to="suspense" className="mr-2 underline">
          Suspense
        </Link>
        <Link to="colocate-state" className="underline">
          ColocateState
        </Link>
      </div>
      <hr />
      <Outlet />
    </AppProvider>
  );
};
