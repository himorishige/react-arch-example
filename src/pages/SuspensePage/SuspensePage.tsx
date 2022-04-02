import { Suspense } from 'react';

import { Avatar } from 'src/components/Avatar';
import { Spinner } from 'src/components/Spinner';

import { usePosts } from 'src/hooks/usePosts';

export const SuspensePage: React.VFC = () => {
  const { usePostsQuery } = usePosts();

  const { data: posts } = usePostsQuery({
    deps: ['colocate'],
    params: { _limit: 5 },
  });

  return (
    <div className="p-2">
      <div>
        <div className="mb-2">
          <Avatar
            size="large"
            src="https://avatars.dicebear.com/v2/male/e828b4072fdb3dc6312b67977f0b247a.svg"
          />
        </div>
        <Suspense
          fallback={
            <div className="flex justify-center items-center w-screen h-screen">
              <Spinner size="xl" />
            </div>
          }
        >
          <ul>
            {posts &&
              posts.map((post) => (
                <li key={post.id.toString()}>{post.title}</li>
              ))}
          </ul>
        </Suspense>
      </div>
    </div>
  );
};
