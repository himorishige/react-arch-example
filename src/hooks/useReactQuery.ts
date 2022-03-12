import { UseMutationResult, UseQueryResult } from 'react-query';

import { api } from 'src/lib/api';
import {
  TUseQueryOptions,
  useMutateWrapper,
  useQueryWrapper,
} from 'src/lib/react-query/queryWrapper';

export type Post = {
  id: number;
  title: string;
  body: string;
};

export type Params = {
  _limit?: number;
};

interface UseReactQuery {
  usePostsQuery: ({
    params,
    deps,
    options,
  }: TUseQueryOptions<Params>) => UseQueryResult<Post[]>;
  usePostsMutate: () => UseMutationResult<void, unknown, Params, unknown>;
}

export const useReactQuery = (): UseReactQuery => {
  const usePostsQuery = ({
    params,
    deps,
    options,
  }: TUseQueryOptions<Params>): UseQueryResult<Post[]> => {
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
    Params,
    unknown
  > => {
    return useMutateWrapper<Params>({
      fetcher: (params) => api.post('users', { params }),
    });
  };

  return { usePostsMutate, usePostsQuery };
};
