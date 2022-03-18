import { render, RenderResult } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { generateQueryClient } from 'src/lib/react-query/queryClient';

const customLogger = {
  log: console.log,
  warn: console.warn,
  error: (): void => {
    // swallow errors without printing out
  },
};

const generateTestQueryClient = (): QueryClient => {
  const client = generateQueryClient();
  const options = client.getDefaultOptions();
  const logger = client.getLogger();
  options.queries = { ...options.queries, retry: false };
  logger.log = customLogger.log;
  logger.warn = customLogger.warn;
  logger.error = customLogger.error;
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
