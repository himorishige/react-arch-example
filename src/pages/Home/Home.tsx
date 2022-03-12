import { useReactQuery } from 'src/hooks/useReactQuery';

import { Avatar } from 'src/components/Avatar';

export const Home: React.VFC = () => {
  const { usePostsMutate, usePostsQuery } = useReactQuery();
  const { data, isLoading, error } = usePostsQuery({
    deps: '1',
    params: {
      _limit: 5,
    },
  });

  const { mutate } = usePostsMutate();

  if (!data) return null;
  console.log(error);

  const handler = () => {
    mutate(
      { _limit: 5 },
      {
        onSuccess: () => console.log('success'),
      },
    );
  };

  return (
    <div className="bg-white">
      <div className="py-16 px-4 mx-auto max-w-screen-xl sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
            Welcome to
            {process.env.REACT_APP_VITE_SOME_KEY}
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
    </div>
  );
};
