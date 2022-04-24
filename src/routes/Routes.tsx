import { ReactLocation } from '@tanstack/react-location';
import { ColocatePage } from 'src/pages/ColocatePage';
import { ColocateState1 } from 'src/pages/ColocateState/ColocateState1';
import { ColocateState2 } from 'src/pages/ColocateState/ColocateState2';
import { ParentComponent } from 'src/pages/ColocateState/ColocateState3';
import { ColocateState4 } from 'src/pages/ColocateState/ColocateState4';
import { ColocateState5 } from 'src/pages/ColocateState/ColocateState5';
import { ColocateStateIndex } from 'src/pages/ColocateState/ColocateStateIndex';
import { ContainerPresenterPage } from 'src/pages/ContainerPresenterPage';
import { Home } from 'src/pages/Home';

import type { Route } from '@tanstack/react-location';

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
  {
    path: 'suspense',
    // element: <SuspensePage />,
    element: () =>
      import('src/pages/SuspensePage/SuspensePage').then((mod) => (
        <mod.SuspensePage />
      )),
    // loader: () =>
    //   queryClient.prefetchQuery(['posts', 'suspense'], () =>
    //     postsRepository.getPosts({ _limit: 4 }),
    //   ),
  },
  {
    path: 'colocate-state',
    children: [
      {
        path: '/',
        element: <ColocateStateIndex />,
      },
      {
        path: 'state1',
        element: <ColocateState1 />,
      },
      {
        path: 'state2',
        element: <ColocateState2 />,
      },
      {
        path: 'state3',
        element: <ParentComponent />,
      },
      {
        path: 'state4',
        element: <ColocateState4 />,
      },
      {
        path: 'state5',
        element: <ColocateState5 />,
      },
    ],
  },
];
