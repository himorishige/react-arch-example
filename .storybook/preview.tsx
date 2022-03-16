import 'tailwindcss/tailwind.css';
import { Parameters } from '@storybook/addons';
import { QueryClient, QueryClientProvider, setLogger } from 'react-query';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import type { DecoratorFn } from '@storybook/react';

// Disable `react-query` error logging
setLogger({
  error: () => {},
  log: (...params) => console.log(...params),
  warn: (...params) => console.warn(...params),
});

// Start Mock Service Worker
initialize({ onUnhandledRequest: 'bypass' });

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const generateTestQueryClient = (): QueryClient => {
  const client = generateTestQueryClient();
  const options = client.getDefaultOptions();
  options.queries = { ...options.queries, retry: false };
  return client;
};

export const decorators: DecoratorFn[] = [
  mswDecorator as DecoratorFn,
  (story) => {
    const queryClient = generateTestQueryClient();

    return (
      <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
    );
  },
];
