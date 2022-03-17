import { renderHook } from '@testing-library/react-hooks';
import { postsMockData } from 'src/test/server/handlers/posts';
import { createQueryClientWrapper } from 'src/test/test-utils';
import { Post } from 'src/types';
import { vi } from 'vitest';

import { postsRepository } from 'src/repositories/postsRepository';

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

test('getPosts', async () => {
  const spy = vi.spyOn(postsRepository, 'getPosts');
  spy.mockImplementation(
    async (): Promise<Post[]> => postsMockData.slice(0, 3),
  );

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

  // wait for the posts data(mock)
  await waitFor(() => result.current.data?.length === 3);

  spy.mockRestore();
});
