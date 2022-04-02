import { Avatar } from 'src/components/Avatar';

import { usePosts } from 'src/hooks/usePosts';

export const Posts: React.VFC = () => {
  const { usePostsQuery } = usePosts();

  const { data: posts } = usePostsQuery({
    deps: ['suspense'],
    params: { _limit: 3 },
    options: {
      suspense: true,
    },
  });

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
