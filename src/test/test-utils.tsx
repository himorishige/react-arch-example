import { render, RenderResult } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { QueryClient, QueryClientProvider, setLogger } from 'react-query';

import { generateQueryClient } from 'src/lib/react-query/queryClient';

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {
    // swallow errors without printing out
  },
});

const generateTestQueryClient = (): QueryClient => {
  const client = generateQueryClient();
  const options = client.getDefaultOptions();
  options.queries = { ...options.queries, retry: false };
  return client;
};

export function renderWithQueryClient(
  ui: ReactElement,
  client?: QueryClient,
): RenderResult {
  const queryClient = client ?? generateTestQueryClient();

  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
  );
}

// from https://tkdodo.eu/blog/testing-react-query#for-custom-hooks
export const createQueryClientWrapper = (): React.FC => {
  const queryClient = generateTestQueryClient();
  const QueryClientWrapper: React.FC = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  return QueryClientWrapper;
};
