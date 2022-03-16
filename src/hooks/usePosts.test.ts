import { renderHook } from '@testing-library/react-hooks';
import { createQueryClientWrapper } from 'src/test/test-utils';

import { usePosts } from './usePosts';

test('posts', async () => {
  const { result, waitFor } = renderHook(
    () =>
      usePosts().usePostsQuery({
        params: {
          _limit: 5,
        },
      }),
    {
      wrapper: createQueryClientWrapper(),
    },
  );

  // wait for the posts data
  await waitFor(() => result.current.data?.length === 5);
});
