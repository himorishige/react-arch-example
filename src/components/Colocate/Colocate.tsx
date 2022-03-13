import { useReactQuery } from 'src/hooks/useReactQuery';

import { Avatar } from 'src/components/Avatar';

import { Spinner } from '../Spinner';

export const Colocate: React.VFC = () => {
  const { usePostsQuery } = useReactQuery();

  const { data: posts, isLoading } = usePostsQuery({
    deps: ['colocate'],
    params: { _limit: 5 },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <Spinner size="xl" />
      </div>
    );

  return (
    <div>
      <div className="mb-2">
        <Avatar
          size="large"
          src="https://avatars.dicebear.com/v2/male/e828b4072fdb3dc6312b67977f0b247a.svg"
        />
      </div>
      <ul>
        {posts &&
          posts.map((post) => <li key={post.id.toString()}>{post.title}</li>)}
      </ul>
    </div>
  );
};
