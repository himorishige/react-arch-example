import { AxiosResponse } from 'axios';
import { useCallback } from 'react';
import {
  QueryKey,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';

import { QueryKeysTypes } from './constants';

// QueryClientWrapper
export function useQueryClientWrapper(): {
  invalidateQueries: (k: QueryKeysTypes, deps?: QueryKey) => void;
} {
  const queryClient = useQueryClient();
  const invalidateQueries = useCallback(
    (key, deps) => {
      const k = Array.isArray(deps) ? [key, ...deps] : [key];
      queryClient.invalidateQueries(k);
    },
    [queryClient],
  );
  return { invalidateQueries };
}

// useQueryWrapper
type Props<T> = {
  queryKey?: QueryKeysTypes;
  deps?: QueryKey;
  options?: Omit<UseQueryOptions, 'queryKey' | 'queryFn'>;
  fetcher: () => Promise<T>;
};

export const useQueryWrapper = <T>({
  queryKey,
  deps = [],
  options,
  fetcher,
}: Props<T>): UseQueryResult<T> => {
  const k = Array.isArray(deps) ? [queryKey, ...deps] : [queryKey];
  const result = useQuery(
    k,
    async () => {
      const res = await fetcher();
      return res;
    },
    options,
  ) as UseQueryResult<T>;

  return result;
};

export type TUseQueryOptions<T> = Partial<{
  params: T;
  deps: QueryKey;
  options: UseQueryOptions;
}>;

// UseMutateWrapper
type MutateProps<T> = {
  fetcher: (variables: T) => Promise<void>;
};

export const useMutateWrapper = <T>({
  fetcher,
}: MutateProps<T>): UseMutationResult<void, unknown, T, unknown> => {
  const result = useMutation(async (variables: T) => {
    await fetcher(variables);
  });

  return result;
};

export type TUseMutationOptions<T> = Partial<{
  params: T;
  options: UseMutationOptions;
}>;
