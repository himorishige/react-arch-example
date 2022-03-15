import { UseMutationResult, UseQueryResult } from 'react-query';

import {
  TUseQueryOptions,
  useMutateWrapper,
  useQueryWrapper,
} from 'src/lib/react-query/queryWrapper';

import { postsRepository } from 'src/repositories/postsRepository';

import type { CreatePostDto, GetPostParams, Post } from 'src/types';

interface UsePosts {
  usePostsQuery: ({
    params,
    deps,
    options,
  }: TUseQueryOptions<GetPostParams>) => UseQueryResult<Post[]>;
  usePostsMutate: () => UseMutationResult<
    void,
    unknown,
    CreatePostDto,
    unknown
  >;
}

export const usePosts = (): UsePosts => {
  const usePostsQuery = ({
    params,
    deps,
    options,
  }: TUseQueryOptions<GetPostParams>): UseQueryResult<Post[]> => {
    return useQueryWrapper<Post[]>({
      queryKey: 'posts',
      deps,
      options,
      fetcher: () => postsRepository.getPosts(params),
    });
  };

  const usePostsMutate = (): UseMutationResult<
    void,
    unknown,
    CreatePostDto,
    unknown
  > => {
    return useMutateWrapper<CreatePostDto>({
      fetcher: (params) => postsRepository.createPost(params),
    });
  };

  return { usePostsMutate, usePostsQuery };
};
