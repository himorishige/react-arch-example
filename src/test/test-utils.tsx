import { QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import React from 'react';

import { generateQueryClient } from 'src/lib/react-query/queryClient';

import type { QueryClient } from '@tanstack/react-query';
import type { RenderResult } from '@testing-library/react';
import type { ReactElement } from 'react';

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

type Props = {
  children: React.ReactNode;
};
// from https://tkdodo.eu/blog/testing-react-query#for-custom-hooks
export const createQueryClientWrapper = (): React.FC<Props> => {
  const queryClient = generateTestQueryClient();
  const QueryClientWrapper: React.FC<Props> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  return QueryClientWrapper;
};
