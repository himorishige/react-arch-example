import { postsRepository } from '../repositories/postsRepository';
import { useApi } from './useApi';

export const usePosts2 = () => {
  const useFetchPosts = (_limit?: number) =>
    useApi(
      ['posts', { _limit }],
      async (params) => postsRepository.getPosts(params),
      {
        suspense: true,
      },
    );
  return { useFetchPosts };
};
