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

export type ParamsDTO = {
  title: string;
  body: string;
  userId: number;
};

interface UseReactQuery {
  usePostsQuery: ({
    params,
    deps,
    options,
  }: TUseQueryOptions<Params>) => UseQueryResult<Post[]>;
  usePostsMutate: () => UseMutationResult<void, unknown, ParamsDTO, unknown>;
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
    ParamsDTO,
    unknown
  > => {
    return useMutateWrapper<ParamsDTO>({
      fetcher: (params) => api.post('posts', { params }),
    });
  };

  return { usePostsMutate, usePostsQuery };
};
