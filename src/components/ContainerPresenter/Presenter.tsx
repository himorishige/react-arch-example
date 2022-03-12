import { Post } from 'src/hooks/useReactQuery';

import { Avatar, Size } from 'src/components/Avatar';

type Props = {
  posts?: Post[];
  size: Size;
  src: string;
};

export const Presenter: React.VFC<Props> = (props) => {
  const { posts, size, src } = props;

  if (!posts) return <div>loading...</div>;

  return (
    <div>
      <div className="mb-2">
        <Avatar size={size} src={src} />
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id.toString()}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
