import {
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';

import { api } from 'src/lib/api';
import {
  useMutateWrapper,
  useQueryWrapper,
} from 'src/lib/react-query/queryWrapper';

export type TUseQueryOptions<T> = Partial<{
  params: T;
  deps: QueryKey;
  options: UseQueryOptions;
}>;

export type TUseMutationOptions<T> = Partial<{
  params: T;
  options: UseMutationOptions;
}>;

type User = {
  id: string;
  name: string;
};

type Params = {
  limit?: number;
};

export const useUsersQuery = ({
  params,
  deps,
  options,
}: TUseQueryOptions<Params>): UseQueryResult<User[]> => {
  return useQueryWrapper<User[]>({
    queryKey: 'users',
    deps,
    options,
    fetcher: () => api.get('users', { params }),
  });
};

export const useUserMutate = (): UseMutationResult<
  void,
  unknown,
  Params,
  unknown
> => {
  return useMutateWrapper<Params>({
    fetcher: (params) => api.post('users', { params }),
  });
};
