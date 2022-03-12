import { ReactLocation, Route } from '@tanstack/react-location';
import { ColocatePage } from 'src/pages/ColocatePage';
import { ContainerPresenterPage } from 'src/pages/ContainerPresenterPage';
import { Home } from 'src/pages/Home';

export const location = new ReactLocation();
export const routes: Route[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'container-presenter',
    element: <ContainerPresenterPage />,
  },
  {
    path: 'colocate',
    element: <ColocatePage />,
  },
];
