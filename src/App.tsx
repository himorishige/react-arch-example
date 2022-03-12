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
        <Link to="colocate" className="underline">
          Colocate
        </Link>
      </div>
      <hr />
      <Outlet />
    </AppProvider>
  );
};
