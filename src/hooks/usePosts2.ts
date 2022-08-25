import { postsRepository } from '../repositories/postsRepository';
import { useApi } from './useApi';

import type { GetPostParams } from 'src/types';

export const usePosts2 = () => {
  const useFetchPosts = (params: GetPostParams) =>
    useApi(
      ['posts', params],
      async (params) => postsRepository.getPosts(params),
      {
        suspense: true,
      },
    );
  return { useFetchPosts };
};
