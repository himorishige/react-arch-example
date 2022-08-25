import type { Size } from 'src/components/Avatar';
import { Avatar } from 'src/components/Avatar';
import { Spinner } from 'src/components/Spinner';

import { usePosts } from 'src/hooks/usePosts';

import type { Post } from 'src/types';

type Props = {
  posts?: Post[];
  isLoading: boolean;
  size: Size;
  src: string;
};

export const Presenter: React.FC<Props> = (props) => {
  const { posts, isLoading, size, src } = props;

  if (isLoading)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Spinner size="xl" />
      </div>
    );

  return (
    <div>
      <div className="mb-2">
        <Avatar size={size} src={src} />
      </div>
      <ul>
        {posts &&
          posts.map((post) => <li key={post.id.toString()}>{post.title}</li>)}
      </ul>
    </div>
  );
};

export const Container: React.FC = () => {
  const { usePostsQuery } = usePosts();

  const { data: posts, isLoading } = usePostsQuery({
    _limit: 5,
  });

  return (
    <Presenter
      posts={posts}
      isLoading={isLoading}
      size="large"
      src="https://avatars.dicebear.com/v2/male/e828b4072fdb3dc6312b67977f0b247a.svg"
    />
  );
};
