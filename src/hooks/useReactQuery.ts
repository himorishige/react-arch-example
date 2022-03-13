import { UseMutationResult, UseQueryResult } from 'react-query';

import { api } from 'src/lib/api';
import {
  TUseQueryOptions,
  useMutateWrapper,
  useQueryWrapper,
} from 'src/lib/react-query/queryWrapper';

import type { CreatePostDto, GetPostParams, Post } from 'src/types';

interface UseReactQuery {
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

export const useReactQuery = (): UseReactQuery => {
  const usePostsQuery = ({
    params,
    deps,
    options,
  }: TUseQueryOptions<GetPostParams>): UseQueryResult<Post[]> => {
    return useQueryWrapper<Post[]>({
      queryKey: 'posts',
      deps,
      options,
      fetcher: () => api.get('posts', { params }),
    });
  };

  const usePostsMutate = (): UseMutationResult<
    void,
    unknown,
    CreatePostDto,
    unknown
  > => {
    return useMutateWrapper<CreatePostDto>({
      fetcher: (params) => api.post('posts', { params }),
    });
  };

  return { usePostsMutate, usePostsQuery };
};
