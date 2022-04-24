import { renderHook, waitFor } from '@testing-library/react';
import { postsMockData } from 'src/test/server/handlers/posts';
import { createQueryClientWrapper } from 'src/test/test-utils';
import { vi } from 'vitest';

import { postsRepository } from 'src/repositories/postsRepository';

import { usePosts } from './usePosts';

import type { Post } from 'src/types';

test('posts', async () => {
  const { result } = renderHook(
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

  const { result } = renderHook(
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
