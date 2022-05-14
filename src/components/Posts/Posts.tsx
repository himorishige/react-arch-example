import { useState } from 'react';
import { useQueryClient } from 'react-query';

import { Avatar } from 'src/components/Avatar';

import { usePosts2 } from '../../hooks/usePosts2';

export const Posts: React.VFC = () => {
  const { useFetchPosts } = usePosts2();
  const [limit, setLimit] = useState(3);

  const queryClient = useQueryClient();

  const { data: posts } = useFetchPosts(limit);

  const handler = () => {
    setLimit(5);
    console.log(limit);
    queryClient.invalidateQueries({ queryKey: ['posts'] });
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
        <button type="button" onClick={handler}>
          Click
        </button>
      </div>
      <ul>
        {posts &&
          posts.map((post) => <li key={post.id.toString()}>{post.title}</li>)}
      </ul>
    </div>
  );
};
