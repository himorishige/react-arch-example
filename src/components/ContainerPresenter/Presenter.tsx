import { Avatar, Size } from 'src/components/Avatar';

import { Spinner } from '../Spinner';

import type { Post } from 'src/types';

type Props = {
  posts?: Post[];
  isLoading: boolean;
  size: Size;
  src: string;
};

export const Presenter: React.VFC<Props> = (props) => {
  const { posts, isLoading, size, src } = props;

  if (isLoading)
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
        {posts &&
          posts.map((post) => <li key={post.id.toString()}>{post.title}</li>)}
      </ul>
    </div>
  );
};
