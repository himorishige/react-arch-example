import { useNavigate } from '@tanstack/react-location';
import { REACT_APP_VITE_SOME_KEY } from 'src/config';

import { queryClient } from 'src/lib/react-query/queryClient';

import { postsRepository } from 'src/repositories/postsRepository';

import { Avatar } from 'src/components/Avatar';
import { Spinner } from 'src/components/Spinner';

import { usePosts } from 'src/hooks/usePosts';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { usePostsMutate, usePostsQuery } = usePosts();
  const { isLoading } = usePostsQuery({
    _limit: 5,
  });

  const { mutate } = usePostsMutate();

  if (isLoading)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Spinner size="xl" />
      </div>
    );

  const handler = (): void => {
    mutate(
      {
        title: 'foo',
        body: 'bar',
        userId: 1,
      },
      {
        onSuccess: () => console.log('success'),
      },
    );
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600">
            Welcome to {REACT_APP_VITE_SOME_KEY}
          </h2>
          <p className="my-3 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            reactjs-vite-tailwindcss-boilerplate
          </p>
          <button onClick={handler}>button</button>
          <p className="mt-5">
            <Avatar
              size="large"
              src="https://avatars.dicebear.com/v2/male/e828b4072fdb3dc6312b67977f0b247a.svg"
            />
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={(): void => {
          queryClient.getQueryData(['posts', 'suspense']) ??
            queryClient.prefetchQuery(['posts', 'suspense'], () =>
              postsRepository.getPosts({ _limit: 4 }),
            );
          navigate({ to: './suspense', replace: true });
        }}
      >
        Render as you fetch
      </button>
    </div>
  );
};
