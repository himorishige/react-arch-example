import { Post } from 'src/hooks/useReactQuery';

import { Avatar, Size } from 'src/components/Avatar';

import { Spinner } from '../Spinner';

type Props = {
  posts?: Post[];
  size: Size;
  src: string;
};

export const Presenter: React.VFC<Props> = (props) => {
  const { posts, size, src } = props;

  if (!posts)
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <Spinner size="xl" />
      </div>
    );

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
