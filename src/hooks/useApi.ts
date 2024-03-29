import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuthGuardContext } from 'src/providers/AuthGuard';

import type {
  UseQueryOptions,
  UseMutationOptions,
} from '@tanstack/react-query';

export const useApi = <
  TQueryKey extends [string, Record<string, unknown>?],
  TQueryFnData,
  TError,
  TData = TQueryFnData,
>(
  queryKey: TQueryKey,
  fetcher: (params: TQueryKey[1], token: string) => Promise<TQueryFnData>,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'queryKey' | 'queryFn'
  >,
) => {
  const { accessToken } = useAuthGuardContext();

  return useQuery({
    queryKey,
    queryFn: async () => fetcher(queryKey[1], accessToken ?? ''),
    ...options,
  });
};

export const useOptimisticMutation = <TVariables, TData, TContext>(
  queryKey: [string, Record<string, unknown>?],
  fetcher: (params: TVariables, token: string) => Promise<TData | void>,
  updater?: ((oldData: TContext, newData: TVariables) => TContext) | undefined,
  options?: Omit<
    UseMutationOptions<TData | void, unknown, TVariables, TContext>,
    'onMutate' | 'onError' | 'onSettled'
  >,
) => {
  const { accessToken } = useAuthGuardContext();

  const queryClient = useQueryClient();

  return useMutation(
    async (params) => {
      return await fetcher(params, accessToken ?? '');
    },
    {
      onMutate: async (data) => {
        await queryClient.cancelQueries(queryKey);

        const previousData = queryClient.getQueryData<TContext>(queryKey);

        if (previousData != undefined && updater) {
          queryClient.setQueryData<TContext>(queryKey, () => {
            return updater(previousData, data);
          });
          // updaterなしの場合を検討
          // queryClient.setQueryData(queryKey, data);
        }

        return previousData;
      },
      onError: (err, _, context) => {
        queryClient.setQueryData(queryKey, context);
        console.warn(err);
      },
      onSettled: () => {
        queryClient.invalidateQueries(queryKey);
      },
      ...options,
    },
  );
};

export const useGenericMutation = <TVariables, TData, TContext>(
  fetcher: (params: TVariables, token: string) => Promise<TData | void>,
  options?: UseMutationOptions<TData | void, unknown, TVariables, TContext>,
) => {
  const { accessToken } = useAuthGuardContext();

  return useMutation(
    async (params: TVariables) => {
      return await fetcher(params, accessToken ?? '');
    },
    { ...options },
  );
};

export const usePrefetch = <
  TQueryKey extends [string, Record<string, unknown>?],
  TQueryFnData,
  TError = unknown,
  TData = TQueryFnData,
>(
  queryKey: TQueryKey,
  fetcher: (params: TQueryKey[1], token: string) => Promise<TQueryFnData>,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'queryKey' | 'queryFn'
  >,
) => {
  const { accessToken } = useAuthGuardContext();

  const queryClient = useQueryClient();

  return () => {
    if (!queryKey[0]) {
      return;
    }

    queryClient.prefetchQuery({
      queryKey,
      queryFn: async () => fetcher(queryKey[1], accessToken ?? ''),
      ...options,
    });
  };
};
