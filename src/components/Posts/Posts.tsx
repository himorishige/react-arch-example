import { useQueryClient } from '@tanstack/react-query';
import { useState, useTransition } from 'react';

import { Avatar } from 'src/components/Avatar';

import { usePosts2 } from '../../hooks/usePosts2';

export const Posts: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const { useFetchPosts } = usePosts2();
  const [limit, setLimit] = useState(3);

  const queryClient = useQueryClient();

  const { data: posts } = useFetchPosts({ _limit: limit });

  const handler = () => {
    startTransition(() => {
      const random = Math.floor(Math.random() * 10);
      setLimit(random);
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    });
  };

  return (
    <div>
      <div className="mb-2">
        <Avatar
          size="large"
          src="https://avatars.dicebear.com/v2/male/e828b4072fdb3dc6312b67977f0b247a.svg"
        />
      </div>
      <div>
        <button
          type="button"
          className="border border-gray-400 p-2"
          onClick={handler}
        >
          {isPending === true ? 'loading...' : 'StartTransition'}
        </button>
      </div>
      <ul>
        {posts &&
          posts.map((post) => <li key={post.id.toString()}>{post.title}</li>)}
      </ul>
    </div>
  );
};
