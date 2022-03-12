import { useReactQuery } from 'src/hooks/useReactQuery';

import { Presenter } from './Presenter';

export const Container: React.VFC = () => {
  const { usePostsQuery } = useReactQuery();

  const { data: posts } = usePostsQuery({ params: { _limit: 5 } });

  return (
    <Presenter
      posts={posts}
      size="large"
      src="https://avatars.dicebear.com/v2/male/e828b4072fdb3dc6312b67977f0b247a.svg"
    />
  );
};
