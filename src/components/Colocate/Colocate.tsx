import { Avatar } from 'src/components/Avatar';
import { Spinner } from 'src/components/Spinner';

import { usePosts } from 'src/hooks/usePosts';

export const Colocate: React.FC = () => {
  const { usePostsQuery } = usePosts();

  const { data: posts, isLoading } = usePostsQuery({
    _limit: 5,
  });

  if (isLoading)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
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
